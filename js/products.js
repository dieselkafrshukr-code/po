const products = [
    // --- NEW MEN ARRIVALS ---
    { id: 1, name: "هودي سوستة شتوي - برتقالي", price: 200, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie1.png", badge: "SALE", sizes: ["M", "L", "XL", "XXL"], colors: ["برتقالي", "أسود", "كحلي", "رمادي"] },
    { id: 2, name: "هودي سوستة تشكيلة ألوان", price: 500, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie2.png", badge: "SALE", sizes: ["L", "XL"], colors: ["نبيتي", "رمادي", "أسود"] },
    { id: 3, name: "هودي سوستة أسود - مطبوع", price: 50, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie3.png", badge: "SALE", sizes: ["XL", "XXL"], colors: ["أسود"] },
    { id: 4, name: "هودي سوستة رمادي - ستايل", price: 50, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie4.png", badge: "SALE", sizes: ["M", "L", "XL"], colors: ["رمادي"] },
    { id: 5, name: "هودي ستوسي رمادي - قطن", price: 500, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie5.png", badge: "SALE", sizes: ["S", "M", "L"], colors: ["رمادي"] },
    { id: 6, name: "هودي ستوسي خلفي - ألوان", price: 520, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie6.png", badge: "SALE", sizes: ["L", "XL", "XXL"], colors: ["أخضر زيتي", "بني", "نبيتي", "أسود"] },
    { id: 7, name: "هودي ستوسي تشكيلة شتوية", price: 520, category: "men", subCategory: "hoodies", image: "images/hoodies/hoodie7.png", badge: "SALE", sizes: ["M", "XL"], colors: ["أخضر", "بني", "نبيتي", "أسود"] },
    { id: 8, name: "بنطلون جينز رمادي - مقطع", price: 520, category: "men", subCategory: "jeans", image: "images/jeans/jeans1.png", badge: "SALE", sizes: ["36", "38", "40"], colors: ["رمادي"] },
    { id: 9, name: "جاكيت زارا منقوش - شيك", price: 520, category: "men", subCategory: "jackets", image: "images/jackets/jacket1.png", badge: "SALE", sizes: ["S", "M", "L", "XL"], colors: ["رصاصي منقوش"] },
    { id: 10, name: "سنيكرز جوردن - أبيض في رمادي", price: 520, category: "men", subCategory: "shoes", image: "images/shoes/shoe1.png", badge: "SALE", sizes: ["41", "42", "43", "44", "45"], colors: ["أبيض رمادي"] },
    { id: 11, name: "بنطلون سويت بانتس قطن مريح", price: 350, category: "men", subCategory: "sweatpants", image: "images/jeans/jeans1.png", badge: "NEW", sizes: ["36", "38", "40"], colors: ["أسود", "رمادي", "كحلي"] },

    // --- MEN SHOES ---
    { id: 21, name: "شوز كاجوال أبيض", price: 50, category: "men", subCategory: "shoes", image: "images/shoes/shoe1.png", badge: "NEW", sizes: ["41", "42", "43", "44", "45"], colors: ["أبيض"] },
    { id: 22, name: "شوز رياضي أسود", price: 50, category: "men", subCategory: "shoes", image: "images/shoes/shoe1.png", badge: "SALE", sizes: ["40", "41", "42"], colors: ["أسود", "رمادي", "كحلي"] },

    // --- PLACEHOLDER PRODUCTS ---

    // Hoodies (5)
    { id: 101, name: "هودي جديد - تشكيلة 1", price: 450, category: "men", subCategory: "hoodies", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Hoodie+1", badge: "NEW", sizes: ["M", "L", "XL"], colors: ["أسود", "أبيض"] },
    { id: 102, name: "هودي جديد - تشكيلة 2", price: 450, category: "men", subCategory: "hoodies", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Hoodie+2", badge: "NEW", sizes: ["M", "L", "XL"], colors: ["رمادي", "كحلي"] },
    { id: 103, name: "هودي جديد - تشكيلة 3", price: 480, category: "men", subCategory: "hoodies", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Hoodie+3", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["أخضر", "أسود"] },
    { id: 104, name: "هودي جديد - تشكيلة 4", price: 420, category: "men", subCategory: "hoodies", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Hoodie+4", badge: "NEW", sizes: ["M", "L"], colors: ["أحمر", "أبيض"] },
    { id: 105, name: "هودي جديد - تشكيلة 5", price: 500, category: "men", subCategory: "hoodies", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Hoodie+5", badge: "NEW", sizes: ["XL", "XXL"], colors: ["بيج", "بني"] },

    // Jackets (5)
    { id: 201, name: "جاكيت جلد - موديل 1", price: 850, category: "men", subCategory: "jackets", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jacket+1", badge: "HOT", sizes: ["L", "XL", "XXL"], colors: ["أسود", "بني"] },
    { id: 202, name: "جاكيت ووتر بروف - موديل 2", price: 750, category: "men", subCategory: "jackets", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jacket+2", badge: "NEW", sizes: ["M", "L", "XL"], colors: ["زيتي", "كحلي"] },
    { id: 203, name: "بليزر كاجوال - موديل 3", price: 950, category: "men", subCategory: "jackets", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jacket+3", badge: "ELEGANT", sizes: ["L", "XL"], colors: ["رمادي", "أسود"] },
    { id: 204, name: "جاكيت جينز - موديل 4", price: 600, category: "men", subCategory: "jackets", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jacket+4", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["أزرق فاتح", "أزرق غامق"] },
    { id: 205, name: "جاكيت بامب - موديل 5", price: 900, category: "men", subCategory: "jackets", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jacket+5", badge: "WINTER", sizes: ["XL", "XXL"], colors: ["أسود", "أحمر"] },

    // Jeans (5)
    { id: 301, name: "بنطلون جينز ليكرا - 1", price: 380, category: "men", subCategory: "jeans", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jeans+1", badge: "SALE", sizes: ["36", "38", "40"], colors: ["أزرق", "أسود"] },
    { id: 302, name: "بنطلون جينز باجي - 2", price: 420, category: "men", subCategory: "jeans", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jeans+2", badge: "NEW", sizes: ["36", "38", "40"], colors: ["رمادي", "تلي"] },
    { id: 303, name: "بنطلون جينز كلاسيك - 3", price: 400, category: "men", subCategory: "jeans", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jeans+3", badge: "BEST", sizes: ["36", "38", "40"], colors: ["كحلي", "أزرق"] },
    { id: 304, name: "بنطلون جينز سليم فيت - 4", price: 390, category: "men", subCategory: "jeans", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jeans+4", badge: "NEW", sizes: ["36", "38", "40"], colors: ["أسود", "رمادي"] },
    { id: 305, name: "بنطلون جينز ريلاكسد - 5", price: 450, category: "men", subCategory: "jeans", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Jeans+5", badge: "TREND", sizes: ["36", "38", "40"], colors: ["أبيض", "أزرق فاتح"] },

    // Sweatpants (5)
    { id: 401, name: "سويت بانتس قطن - 1", price: 280, category: "men", subCategory: "sweatpants", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Sweatpants+1", badge: "NEW", sizes: ["36", "38", "40"], colors: ["رمادي", "أسود"] },
    { id: 402, name: "سويت بانتس سليم - 2", price: 300, category: "men", subCategory: "sweatpants", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Sweatpants+2", badge: "COMFY", sizes: ["36", "38", "40"], colors: ["كحلي", "زيتي"] },
    { id: 403, name: "سويت بانتس ثقيل - 3", price: 350, category: "men", subCategory: "sweatpants", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Sweatpants+3", badge: "WINTER", sizes: ["36", "38", "40"], colors: ["أسود", "نبيتي"] },
    { id: 404, name: "سويت بانتس رياضي - 4", price: 320, category: "men", subCategory: "sweatpants", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Sweatpants+4", badge: "ACTIVE", sizes: ["36", "38", "40"], colors: ["رمادي فاتح", "كحلي"] },
    { id: 405, name: "سويت بانتس أوفر سايز - 5", price: 400, category: "men", subCategory: "sweatpants", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Sweatpants+5", badge: "NEW", sizes: ["36", "38", "40"], colors: ["أسود", "بيج"] },

    // Shoes (5)
    { id: 501, name: "كوتشي رياضي - موديل 1", price: 550, category: "men", subCategory: "shoes", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shoes+1", badge: "NEW", sizes: ["41", "42", "43"], colors: ["أبيض", "أسود"] },
    { id: 502, name: "كوتشي كاجوال - موديل 2", price: 480, category: "men", subCategory: "shoes", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shoes+2", badge: "SALE", sizes: ["40", "41", "44"], colors: ["رمادي", "كحلي"] },
    { id: 503, name: "شوز كلاسيك - موديل 3", price: 700, category: "men", subCategory: "shoes", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shoes+3", badge: "LUXURY", sizes: ["41", "42", "43", "45"], colors: ["أسود", "هفان"] },
    { id: 504, name: "سنيكرز عصري - موديل 4", price: 620, category: "men", subCategory: "shoes", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shoes+4", badge: "TREND", sizes: ["42", "43", "44"], colors: ["أبيض", "أحمر"] },
    { id: 505, name: "بوت شمواه - موديل 5", price: 800, category: "men", subCategory: "shoes", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shoes+5", badge: "WINTER", sizes: ["41", "42", "43", "44"], colors: ["جملي", "بني"] },

    // Pullovers (5)
    { id: 601, name: "بلوفر جديد - صوف 1", price: 250, category: "men", subCategory: "pullover", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Pullover+1", badge: "WINTER", sizes: ["L", "XL", "XXL"], colors: ["كحلي", "أخضر"] },
    { id: 602, name: "بلوفر جديد - صوف 2", price: 250, category: "men", subCategory: "pullover", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Pullover+2", badge: "WINTER", sizes: ["L", "XL", "XXL"], colors: ["رمادي", "أسود"] },
    { id: 603, name: "بلوفر جديد - صوف 3", price: 250, category: "men", subCategory: "pullover", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Pullover+3", badge: "WINTER", sizes: ["L", "XL", "XXL"], colors: ["بني", "بيج"] },
    { id: 604, name: "بلوفر جديد - صوف 4", price: 250, category: "men", subCategory: "pullover", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Pullover+4", badge: "WINTER", sizes: ["L", "XL", "XXL"], colors: ["نبيتي", "كحلي"] },
    { id: 605, name: "بلوفر جديد - صوف 5", price: 250, category: "men", subCategory: "pullover", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Pullover+5", badge: "WINTER", sizes: ["L", "XL", "XXL"], colors: ["أبيض", "رمادي"] },

    // Shirts (5)
    { id: 701, name: "قميص صيفي - نقشة 1", price: 150, category: "men", subCategory: "shirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shirt+1", badge: "HOT", sizes: ["M", "L", "XL"], colors: ["أبيض", "أزرق"] },
    { id: 702, name: "قميص صيفي - نقشة 2", price: 150, category: "men", subCategory: "shirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shirt+2", badge: "HOT", sizes: ["M", "L", "XL"], colors: ["أسود", "رمادي"] },
    { id: 703, name: "قميص صيفي - نقشة 3", price: 150, category: "men", subCategory: "shirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shirt+3", badge: "HOT", sizes: ["M", "L", "XL"], colors: ["أخضر", "أصفر"] },
    { id: 704, name: "قميص صيفي - نقشة 4", price: 150, category: "men", subCategory: "shirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shirt+4", badge: "HOT", sizes: ["M", "L", "XL"], colors: ["أزرق فاتح", "أبيض"] },
    { id: 705, name: "قميص صيفي - نقشة 5", price: 150, category: "men", subCategory: "shirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Shirt+5", badge: "HOT", sizes: ["M", "L", "XL"], colors: ["كحلي", "أحمر"] },

    // Coats (5)
    { id: 801, name: "بالطو طويل - موديل 1", price: 650, category: "men", subCategory: "coats", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Coat+1", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["أسود", "بني"] },
    { id: 802, name: "بالطو طويل - موديل 2", price: 650, category: "men", subCategory: "coats", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Coat+2", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["رمادي", "كحلي"] },
    { id: 803, name: "بالطو طويل - موديل 3", price: 650, category: "men", subCategory: "coats", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Coat+3", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["بيج", "أسود"] },
    { id: 804, name: "بالطو طويل - موديل 4", price: 650, category: "men", subCategory: "coats", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Coat+4", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["زيتي", "بني"] },
    { id: 805, name: "بالطو طويل - موديل 5", price: 650, category: "men", subCategory: "coats", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Coat+5", badge: "NEW", sizes: ["L", "XL", "XXL"], colors: ["نبيتي", "أسود"] },

    // T-shirts (5)
    { id: 901, name: "تيشيرت ساده - موديل 1", price: 80, category: "men", subCategory: "tshirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=T-shirt+1", badge: "BEST", sizes: ["M", "L", "XL", "XXL"], colors: ["أبيض", "أسود"] },
    { id: 902, name: "تيشيرت ساده - موديل 2", price: 80, category: "men", subCategory: "tshirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=T-shirt+2", badge: "BEST", sizes: ["M", "L", "XL", "XXL"], colors: ["رمادي", "كحلي"] },
    { id: 903, name: "تيشيرت ساده - موديل 3", price: 80, category: "men", subCategory: "tshirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=T-shirt+3", badge: "BEST", sizes: ["M", "L", "XL", "XXL"], colors: ["أحمر", "أصفر"] },
    { id: 904, name: "تيشيرت ساده - موديل 4", price: 80, category: "men", subCategory: "tshirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=T-shirt+4", badge: "BEST", sizes: ["M", "L", "XL", "XXL"], colors: ["أخضر", "أزرق"] },
    { id: 905, name: "تيشيرت ساده - موديل 5", price: 80, category: "men", subCategory: "tshirts", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=T-shirt+5", badge: "BEST", sizes: ["M", "L", "XL", "XXL"], colors: ["برتقالي", "أسود"] },

    // Polos (5)
    { id: 1001, name: "بولو شيك - موديل 1", price: 120, category: "men", subCategory: "polo", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Polo+1", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["كحلي", "أبيض"] },
    { id: 1002, name: "بولو شيك - موديل 2", price: 120, category: "men", subCategory: "polo", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Polo+2", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["أسود", "رمادي"] },
    { id: 1003, name: "بولو شيك - موديل 3", price: 120, category: "men", subCategory: "polo", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Polo+3", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["نبيتي", "كحلي"] },
    { id: 1004, name: "بولو شيك - موديل 4", price: 120, category: "men", subCategory: "polo", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Polo+4", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["بيج", "أبيض"] },
    { id: 1005, name: "بولو شيك - موديل 5", price: 120, category: "men", subCategory: "polo", image: "https://placehold.co/600x800/1a1a1a/ffffff?text=Polo+5", badge: "TREND", sizes: ["M", "L", "XL"], colors: ["زيتي", "أسود"] },
];


