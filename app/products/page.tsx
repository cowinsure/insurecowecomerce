"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApp } from "@/contexts/app-context";
import { t } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";

// Mock products data (expanded)
const allProducts = [
  // Featured Products
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 2.99,
    originalPrice: 3.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "electronics",
    description: "High-quality wireless headphones with noise cancellation",
    badge: "featured" as const,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    category: "electronics",
    description: "Track your fitness goals with this advanced smartwatch",
    badge: "featured" as const,
  },
  // Add more products to reach 20+ for pagination demo
  {
    id: 13,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 67,
    category: "clothing",
    description: "Comfortable organic cotton t-shirt",
  },
  {
    id: 14,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 78,
    category: "sports_outdoors",
    description: "Premium yoga mat for your practice",
  },
  {
    id: 15,
    name: "Coffee Maker Deluxe",
    price: 149.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 92,
    category: "home_garden_cat",
    description: "Deluxe coffee maker for perfect brew",
  },
  {
    id: 16,
    name: "Running Shoes",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 134,
    category: "sports_outdoors",
    description: "Comfortable running shoes for athletes",
  },
  {
    id: 17,
    name: "Desk Lamp LED",
    price: 39.99,
    originalPrice: 54.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 189,
    category: "home_garden_cat",
    description: "Modern LED desk lamp with adjustable brightness",
  },
  {
    id: 18,
    name: "Backpack Travel",
    price: 69.99,
    originalPrice: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 156,
    category: "sports_outdoors",
    description: "Durable travel backpack for adventures",
  },
  // Add more products for pagination
  ...Array.from({ length: 12 }, (_, i) => ({
    id: 19 + i,
    name: `Product ${19 + i}`,
    price: Math.floor(Math.random() * 200) + 20,
    originalPrice:
      Math.random() > 0.5 ? Math.floor(Math.random() * 100) + 250 : null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 200) + 10,
    category: ["electronics", "clothing", "home_garden_cat", "sports_outdoors"][
      Math.floor(Math.random() * 4)
    ],
    description: `Description for product ${19 + i}`,
  })),
];

const PRODUCTS_PER_PAGE = 16;

export default function ProductsPage() {
  const { language } = useApp();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name_a_z");

  // Get category from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Filter and sort products
  useEffect(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    switch (sortBy) {
      case "price_low_high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name_a_z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_z_a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "electronics", label: t("electronics", language) },
    { value: "clothing", label: t("clothing", language) },
    { value: "home_garden_cat", label: t("home_garden_cat", language) },
    { value: "sports_outdoors", label: t("sports_outdoors", language) },
    { value: "books", label: t("books", language) },
    { value: "beauty_health", label: t("beauty_health", language) },
    { value: "toys_games", label: t("toys_games", language) },
    { value: "automotive", label: t("automotive", language) },
  ];

  const sortOptions = [
    { value: "name_a_z", label: t("name_a_z", language) },
    { value: "name_z_a", label: t("name_z_a", language) },
    { value: "price_low_high", label: t("price_low_high", language) },
    { value: "price_high_low", label: t("price_high_low", language) },
    { value: "rating", label: t("rating", language) },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                {t("filter_by", language)}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("sort_by", language)}
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSortBy("name_a_z");
                  }}
                  className="w-full"
                >
                  {t("clear_filters", language)}
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {t("showing_results", language, {
                  start: startIndex + 1,
                  end: Math.min(endIndex, filteredProducts.length),
                  total: filteredProducts.length,
                })}
              </p>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {t("no_products", language)}
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t("previous", language)}</span>
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 ${
                          currentPage === page
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : ""
                        }`}
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2"
                >
                  <span>{t("next", language)}</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
