
import { ProductCard } from "@/components/product-card"

// Mock product data matching the design
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Electronics",
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
    category: "Electronics",
    description: "Track your fitness goals with this advanced smartwatch",
    badge: "featured" as const,
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899,
    originalPrice: 1199,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    category: "Electronics",
    description: "Professional grade camera lens for stunning photography",
    badge: "featured" as const,
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 449,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 67,
    category: "Furniture",
    description: "Comfortable ergonomic chair for long working hours",
    badge: "featured" as const,
  },
]

const newArrivals = [
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 89,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 43,
    category: "Electronics",
    description: "High-precision wireless gaming mouse with RGB lighting",
    badge: "new" as const,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 78,
    category: "Electronics",
    description: "Portable Bluetooth speaker with amazing sound quality",
    badge: "new" as const,
  },
  {
    id: 7,
    name: "Smartphone Stand",
    price: 25,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 92,
    category: "Accessories",
    description: "Adjustable smartphone stand for hands-free viewing",
    badge: "new" as const,
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 79,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 134,
    category: "Electronics",
    description: "Multi-port USB-C hub with fast data transfer",
    badge: "new" as const,
  },
]

const popularProducts = [
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 159,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 267,
    category: "Electronics",
    description: "Premium mechanical keyboard with tactile switches",
  },
  {
    id: 10,
    name: "4K Monitor",
    price: 349,
    originalPrice: 449,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 189,
    category: "Electronics",
    description: "Ultra-sharp 4K monitor for professional work",
  },
  {
    id: 11,
    name: "Laptop Backpack",
    price: 69,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 156,
    category: "Accessories",
    description: "Durable laptop backpack with multiple compartments",
  },
  {
    id: 12,
    name: "Wireless Charger",
    price: 39,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 98,
    category: "Electronics",
    description: "Fast wireless charger compatible with all devices",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
     

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover our handpicked selection of premium products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">New Arrivals</h2>
            <p className="text-gray-600 dark:text-gray-400">Fresh additions to our collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Products</h2>
            <p className="text-gray-600 dark:text-gray-400">Customer favorites and trending items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
