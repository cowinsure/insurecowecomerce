"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/contexts/app-context"
import { t } from "@/lib/i18n"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  description: string
  badge?: "featured" | "new"
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, addToCart } = useApp()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault()
    // Redirect to login for buy now
    window.location.href = "/login?redirect=/checkout"
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div
              className={`absolute top-2 left-2 px-2 py-1 rounded-md text-sm font-semibold text-white ${
                product.badge === "featured" ? "bg-gray-800" : "bg-green-600"
              }`}
            >
              {t(product.badge, language)}
            </div>
          )}

          {/* Discount */}
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{discount}%
            </div>
          )}

          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400"}`}
            />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-green-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-colors"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t("add_to_cart", language)}
            </Button>
            <Button
              onClick={handleBuyNow}
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
              size="sm"
            >
              {t("buy_now", language)}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
