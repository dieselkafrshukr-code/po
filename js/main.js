// 🚀 DIESEL SHOP - INVINCIBLE ENGINE
let cart = [];
let selectedProductForSize = null;
let selectedColor = null;
let activeCategory = "men";
let remoteProducts = []; // To store products from Firebase

// Firebase Config (Must match admin.js)
const firebaseConfig = {
    apiKey: "AIzaSyBFRqe3lhvzG0FoN0uAJlAP-VEz9bKLjUc",
    authDomain: "mre23-4644a.firebaseapp.com",
    projectId: "mre23-4644a",
    storageBucket: "mre23-4644a.firebasestorage.app",
    messagingSenderId: "179268769077",
    appId: "1:179268769077:web:d9fb8cd25ad284ae0de87c"
};

// Initialize Firebase if config is provided
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
}

// DOM Elements
let menContainer, cartBtn, closeCart, cartSidebar, cartOverlay, loader, navbar, sizeModal, closeModal, modalProductName, modalProductPrice, mobileMenuBtn, navLinks, themeToggle, subFiltersContainer;

const initAll = () => {
    if (window.initialized) return;
    window.initialized = true;

    initElements();
    initTheme();
    setupEventListeners();
    renderAll();

    // Auto-hide loader (Slowed down for more premium feel)
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 800);
        }, 2500);
    }
};

document.addEventListener('DOMContentLoaded', initAll);

// Backup: If script loads after DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAll();
}

function initElements() {
    menContainer = document.getElementById('men-products');
    cartBtn = document.getElementById('cart-btn');
    closeCart = document.getElementById('close-cart');
    cartSidebar = document.getElementById('cart-sidebar');
    cartOverlay = document.getElementById('cart-overlay');
    loader = document.getElementById('loader');
    navbar = document.querySelector('.navbar');
    sizeModal = document.getElementById('size-modal');
    closeModal = document.getElementById('close-modal');
    modalProductName = document.getElementById('modal-product-name');
    modalProductPrice = document.getElementById('modal-product-price');
    mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    navLinks = document.querySelector('.nav-links');
    themeToggle = document.getElementById('theme-toggle');
    subFiltersContainer = document.getElementById('sub-filters-container');
}

const parentSubMap = {
    all: [],
    clothes: [
        { id: 'hoodies', label: 'هوديز' },
        { id: 'jackets', label: 'جواكت' },
        { id: 'pullover', label: 'بلوفر' },
        { id: 'shirts', label: 'قمصان' },
        { id: 'coats', label: 'بالطو' },
        { id: 'tshirts', label: 'تيشيرت' },
        { id: 'polo', label: 'بولو' }
    ],
    pants: [
        { id: 'jeans', label: 'جينز' },
        { id: 'sweatpants', label: 'سويت بانتس' }
    ],
    shoes: []
};

function setupEventListeners() {
    // Nav & Section Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.onclick = (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#men-section' || href === '#home') {
                closeMobileMenu();
            }
        };
    });

    // Hierarchical Filter Tabs
    document.querySelectorAll('.main-filter-btn').forEach(btn => {
        btn.onclick = (e) => {
            const parent = btn.dataset.parent;
            document.querySelectorAll('.main-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            renderSubFilters(parent);
            filterAndRender('men', parent, 'all');
        };
    });

    // UI Toggles
    if (cartBtn) cartBtn.onclick = (e) => { e.preventDefault(); openCartSidebar(); };
    if (closeCart) closeCart.onclick = closeCartSidebar;
    if (cartOverlay) cartOverlay.onclick = closeCartSidebar;

    if (mobileMenuBtn) {
        mobileMenuBtn.onclick = (e) => {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        };
    }

    if (themeToggle) {
        themeToggle.onclick = (e) => {
            e.preventDefault();
            toggleTheme();
        };
    }

    const adminBtn = document.getElementById('admin-login-btn');
    if (adminBtn) {
        adminBtn.onclick = (e) => {
            e.preventDefault();
            const pass = prompt("الرجاء إدخال كلمة مرور المدير:");
            if (pass === "admin123") { // يمكنك تغيير كلمة المرور هنا
                window.location.href = "admin.html";
            } else if (pass !== null) {
                alert("كلمة المرور غير صحيحة! ❌");
            }
        };
    }

    if (closeModal) closeModal.onclick = () => sizeModal.classList.remove('active');

    // DYNAMIC SIZE SELECTION (FIXED)
    const sizeOptionsContainer = document.querySelector('.size-options');
    if (sizeOptionsContainer) {
        sizeOptionsContainer.onclick = (e) => {
            const btn = e.target.closest('.size-btn');
            if (btn && selectedProductForSize) {
                confirmAddToCart(selectedProductForSize, btn.innerText);
                sizeModal.classList.remove('active');
                showToast("تمت الإضافة للسلة بنجاح ✅");
            }
        };
    }

    // DYNAMIC COLOR SELECTION
    const colorOptionsContainer = document.getElementById('modal-color-options');
    if (colorOptionsContainer) {
        colorOptionsContainer.onclick = (e) => {
            const btn = e.target.closest('.color-btn');
            if (btn) {
                colorOptionsContainer.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedColor = btn.innerText;
            }
        };
    }

    // Checkout Button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            let msg = "📦 طلب جديد من EL DIESEL:\n\n";
            cart.forEach(i => msg += `• ${i.name} [مقاس: ${i.size}] [لون: ${i.color}] x${i.quantity} = ${i.price * i.quantity} ج.م\n`);
            const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
            msg += `\n💰 إجمالي الحساب: ${total} جنيه`;
            window.open(`https://wa.me/201007904438?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.style = "position:fixed; top:20px; left:50%; transform:translateX(-50%); background:var(--primary); color:#fff; padding:12px 30px; border-radius:50px; z-index:9999; font-weight:bold; box-shadow:0 10px 30px rgba(0,0,0,0.5); animation: fadeInUp 0.3s ease;";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

// Global scope functions
window.openSizeModal = (id) => {
    const p = remoteProducts.find(prod => prod.id === id);
    if (!p) return;
    selectedProductForSize = p;
    selectedColor = (p.colors && p.colors.length > 0) ? p.colors[0] : null; // Default to first color

    modalProductName.innerText = p.name;
    modalProductPrice.innerText = `${p.price} جنيه`;

    // Render Colors
    const colorContainer = document.getElementById('modal-color-options');
    if (colorContainer) {
        colorContainer.innerHTML = (p.colors || ["أساسي"]).map((c, index) =>
            `<button class="color-btn ${index === 0 ? 'selected' : ''}">${c}</button>`
        ).join('');
    }

    // Render Sizes
    const sizeContainer = document.querySelector('.size-options');
    sizeContainer.innerHTML = (p.sizes || []).map(s => `<button class="size-btn">${s}</button>`).join('');

    sizeModal.classList.add('active');
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.cartId !== id);
    updateCartUI();
};

function confirmAddToCart(p, size) {
    const color = selectedColor || (p.colors ? p.colors[0] : "أساسي");
    const cartId = `${p.id}-${size}-${color}`;
    const existing = cart.find(i => i.cartId === cartId);
    if (existing) existing.quantity++;
    else cart.push({ ...p, cartId, size, color, quantity: 1 });
    updateCartUI();
    openCartSidebar();
}

function updateCartUI() {
    const counts = document.querySelectorAll('.cart-count');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');
    const totalQty = cart.reduce((s, i) => s + i.quantity, 0);

    counts.forEach(c => c.innerText = totalQty);

    if (cart.length === 0) {
        list.innerHTML = '<p class="empty-msg">السلة فارغة حالياً</p>';
        totalEl.innerText = '0 جنيه';
    } else {
        list.innerHTML = cart.map(i => `
            <div class="cart-item" style="display:flex; gap:15px; margin-bottom:15px; background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.03);">
                <img src="${i.image}" style="width:65px; height:65px; object-fit:cover; border-radius:10px;">
                <div style="flex:1; color:#fff;">
                    <h4 style="font-size:0.9rem; margin-bottom:4px;">${i.name}</h4>
                    <div style="font-size:0.75rem; color:#aaa;">المقاس: <span style="color:#d4af37">${i.size}</span> | اللون: <span style="color:#d4af37">${i.color}</span></div>
                    <div style="font-size:0.75rem; color:#aaa;">العدد: ${i.quantity}</div>
                    <div style="color:#d4af37; font-weight:800; margin-top:4px;">${i.price * i.quantity} جنيه</div>
                </div>
                <button onclick="removeFromCart('${i.cartId}')" style="background:none; border:none; color:#ff4444; cursor:pointer; font-size:1.1rem; padding:5px;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
        const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
        totalEl.innerText = `${total} جنيه`;
    }
}

function renderAll() {
    if (!menContainer) return;
    menContainer.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#fff;">جاري تحميل المنتجات...</div>';

    let allProds = [];

    // 1. Get Local Storage Products
    const localProds = JSON.parse(localStorage.getItem('diesel_products') || '[]');

    // 2. Get Firebase Products (If configured)
    if (typeof db !== 'undefined') {
        db.collection('products').orderBy('createdAt', 'desc').get().then(snapshot => {
            let fireProds = [];
            snapshot.forEach(doc => fireProds.push({ id: doc.id, ...doc.data() }));

            combineAndRender(fireProds, localProds);
        }).catch(err => {
            combineAndRender([], localProds);
        });
    } else {
        combineAndRender([], localProds);
    }
}

function combineAndRender(fireProds, localProds) {
    // Combine all
    remoteProducts = [...fireProds, ...localProds];

    // If both empty, use the static products.js (Initial state)
    if (remoteProducts.length === 0) {
        remoteProducts = products;
    }

    // Filter out duplicates (if any) based on name
    const seen = new Set();
    remoteProducts = remoteProducts.filter(p => {
        const duplicate = seen.has(p.name);
        seen.add(p.name);
        return !duplicate;
    });

    filterAndRender('men', 'all', 'all');
}

function renderSubFilters(parent) {
    if (!subFiltersContainer) return;

    const subs = parentSubMap[parent] || [];
    if (subs.length === 0) {
        subFiltersContainer.classList.remove('active');
        subFiltersContainer.innerHTML = "";
        return;
    }

    subFiltersContainer.innerHTML = subs.map(s => `
        <button class="sub-btn" onclick="applySubFilter('${parent}', '${s.id}', this)">${s.label}</button>
    `).join('');

    subFiltersContainer.classList.add('active');
}

window.applySubFilter = (parent, subId, btn) => {
    subFiltersContainer.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterAndRender('men', parent, subId);
};

function filterAndRender(section, parent, sub) {
    if (!menContainer) return;

    let filtered = remoteProducts;

    if (parent !== 'all') {
        if (parent === 'clothes') {
            const clothesSubs = parentSubMap.clothes.map(s => s.id);
            filtered = filtered.filter(p => clothesSubs.includes(p.subCategory) || p.subCategory === 'clothes');
        } else if (parent === 'pants') {
            const pantsSubs = parentSubMap.pants.map(s => s.id);
            filtered = filtered.filter(p => pantsSubs.includes(p.subCategory) || p.subCategory === 'pants');
        } else {
            filtered = filtered.filter(p => p.subCategory === parent);
        }
    }

    if (sub !== 'all') {
        filtered = filtered.filter(p => p.subCategory === sub);
    }

    if (filtered.length === 0) {
        menContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#666;">لا توجد نتائج مطابقة</div>`;
        return;
    }

    menContainer.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img">
                ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                <img src="${p.image}" loading="lazy" alt="${p.name}">
                <div class="product-actions" onclick="openSizeModal('${p.id}')">
                    <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category-tag">Diesel Men</span>
                <h3>${p.name}</h3>
                <div class="price">${p.price}</div>
            </div>
        </div>
    `).join('');
}

function openCartSidebar() { cartSidebar.classList.add('open'); cartOverlay.classList.add('show'); }
function closeCartSidebar() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('show'); }
function closeMobileMenu() { if (mobileMenuBtn) { mobileMenuBtn.classList.remove('active'); navLinks.classList.remove('active'); } }



window.onscroll = () => {
    if (navbar) window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
};

// Theme Toggle Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark as requested
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}
