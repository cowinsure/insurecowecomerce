export const translations = {
  en: {
    // Navigation
    home: "Home",
    home_garden: "Home & Garden",
    search: "Search",
    all_products: "All Products",
    contact_us: "Contact Us",
    about_us: "About Us",
    login: "Login",
    cart: "Cart",

    // Product sections
    featured_products: "Featured Products",
    featured_subtitle: "Discover our handpicked selection of premium products",
    new_arrivals: "New Arrivals",
    new_arrivals_subtitle: "Fresh additions to our collection",
    popular_products: "Popular Products",
    popular_subtitle: "Customer favorites and trending items",

    // Product actions
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    featured: "Featured",
    new: "New",

    // Categories
    electronics: "Electronics",
    clothing: "Clothing",
    home_garden_cat: "Home & Garden",
    sports_outdoors: "Sports & Outdoors",
    books: "Books",
    beauty_health: "Beauty & Health",
    toys_games: "Toys & Games",
    automotive: "Automotive",

    // Products page
    filter_by: "Filter by",
    sort_by: "Sort by",
    price_low_high: "Price: Low to High",
    price_high_low: "Price: High to Low",
    name_a_z: "Name: A to Z",
    name_z_a: "Name: Z to A",
    rating: "Rating",
    clear_filters: "Clear Filters",
    showing_results: "Showing {start}-{end} of {total} results",
    previous: "Previous",
    next: "Next",

    // Common
    loading: "Loading...",
    no_products: "No products found",
  },
  bn: {
    // Navigation
    home: "হোম",
    home_garden: "হোম ও গার্ডেন",
    search: "খুঁজুন",
    all_products: "সব পণ্য",
    contact_us: "যোগাযোগ",
    about_us: "আমাদের সম্পর্কে",
    login: "লগইন",
    cart: "কার্ট",

    // Product sections
    featured_products: "বিশেষ পণ্য",
    featured_subtitle: "আমাদের নির্বাচিত প্রিমিয়াম পণ্যসমূহ আবিষ্কার করুন",
    new_arrivals: "নতুন আগমন",
    new_arrivals_subtitle: "আমাদের সংগ্রহে নতুন সংযোজন",
    popular_products: "জনপ্রিয় পণ্য",
    popular_subtitle: "গ্রাহকদের পছন্দের এবং ট্রেন্ডিং পণ্য",

    // Product actions
    add_to_cart: "কার্টে যোগ করুন",
    buy_now: "এখনই কিনুন",
    featured: "বিশেষ",
    new: "নতুন",

    // Categories
    electronics: "ইলেকট্রনিক্স",
    clothing: "পোশাক",
    home_garden_cat: "হোম ও গার্ডেন",
    sports_outdoors: "খেলাধুলা ও আউটডোর",
    books: "বই",
    beauty_health: "সৌন্দর্য ও স্বাস্থ্য",
    toys_games: "খেলনা ও গেমস",
    automotive: "অটোমোটিভ",

    // Products page
    filter_by: "ফিল্টার করুন",
    sort_by: "সাজান",
    price_low_high: "দাম: কম থেকে বেশি",
    price_high_low: "দাম: বেশি থেকে কম",
    name_a_z: "নাম: A থেকে Z",
    name_z_a: "নাম: Z থেকে A",
    rating: "রেটিং",
    clear_filters: "ফিল্টার সাফ করুন",
    showing_results: "{total} এর মধ্যে {start}-{end} ফলাফল দেখানো হচ্ছে",
    previous: "পূর্ববর্তী",
    next: "পরবর্তী",

    // Common
    loading: "লোড হচ্ছে...",
    no_products: "কোন পণ্য পাওয়া যায়নি",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

export function t(key: TranslationKey, lang: Language, params?: Record<string, string | number>): string {
  let text = translations[lang][key] || translations.en[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value))
    })
  }

  return text
}
