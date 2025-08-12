"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Mock product data - in real app, this would come from API
const getProduct = (id: string) => ({
  id: Number.parseInt(id),
  name: "Premium Wireless Headphones",
  price: 2.29,
  originalPrice: 4.99,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  rating: 4.8,
  reviews: 124,
  category: "Electronics",
  description:
    "Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding. Perfect for music lovers and professionals alike.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium comfort padding",
    "Bluetooth 5.0 connectivity",
    "Quick charge - 5 min for 2 hours playback",
    "Foldable design for portability",
  ],
  inStock: true,
  stockCount: 15,
  reviews_data: [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      comment: "Amazing sound quality! The noise cancellation works perfectly.",
      date: "2024-01-15",
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      comment:
        "Great headphones, very comfortable for long listening sessions.",
      date: "2024-01-10",
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      comment: "Best purchase I've made this year. Highly recommended!",
      date: "2024-01-05",
    },
  ],
});

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = getProduct(id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = "/login?redirect=/product/" + id;
      return;
    }
    console.log("Added to cart:", { product: product.name, quantity });
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = "/login?redirect=/checkout";
      return;
    }
    // Proceed to checkout
    console.log("Buy now:", { product: product.name, quantity });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please login to submit a review");
      return;
    }
    console.log("New review:", newReview);
    setNewReview({ rating: 5, comment: "" });
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-white dark:bg-green-900/50 border border-green-100 dark:border-green-800">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-green-500"
                      : "border-green-200 dark:border-green-700"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-green-600 dark:text-green-400 font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 mt-2">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-green-300 dark:text-green-600"
                      }`}
                    />
                  ))}
                  <span className="text-green-700 dark:text-green-300 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-800 dark:text-green-200">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-green-600 dark:text-green-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    -{discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label className="text-green-800 dark:text-green-200">
                  Quantity:
                </Label>
                <div className="flex items-center border border-green-200 dark:border-green-700 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-green-600 dark:text-green-400"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 text-green-800 dark:text-green-200 font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-green-600 dark:text-green-400"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {product.inStock && (
                  <span className="text-green-600 dark:text-green-400 text-sm">
                    {product.stockCount} in stock
                  </span>
                )}
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <Button
                  onClick={handleBuyNow}
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                  size="lg"
                >
                  Buy Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-green-900/50 rounded-xl p-6 border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-green-700 dark:text-green-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <Truck className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <RotateCcw className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white dark:bg-green-900/50 rounded-xl border border-green-100 dark:border-green-800">
          <div className="border-b border-green-200 dark:border-green-700">
            <div className="flex space-x-8 px-6">
              {["description", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "border-green-500 text-green-600 dark:text-green-400"
                      : "border-transparent text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                  Product Description
                </h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Specifications
                    </h4>
                    <ul className="space-y-1 text-green-700 dark:text-green-300">
                      <li>• Bluetooth Version: 5.0</li>
                      <li>• Battery Life: 30 hours</li>
                      <li>• Charging Time: 2 hours</li>
                      <li>• Weight: 250g</li>
                      <li>• Frequency Response: 20Hz - 20kHz</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      What's in the Box
                    </h4>
                    <ul className="space-y-1 text-green-700 dark:text-green-300">
                      <li>• Wireless Headphones</li>
                      <li>• USB-C Charging Cable</li>
                      <li>• 3.5mm Audio Cable</li>
                      <li>• Carrying Case</li>
                      <li>• User Manual</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-green-700 dark:text-green-300">
                      {product.rating} out of 5 ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Review Form */}
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                    Write a Review
                  </h4>
                  {!isLoggedIn ? (
                    <p className="text-green-600 dark:text-green-400">
                      Please{" "}
                      <a
                        href="/login"
                        className="underline hover:text-green-500"
                      >
                        login
                      </a>{" "}
                      to write a review.
                    </p>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <Label className="text-green-800 dark:text-green-200">
                          Rating
                        </Label>
                        <div className="flex space-x-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() =>
                                setNewReview({ ...newReview, rating: star })
                              }
                              className="focus:outline-none"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= newReview.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-green-300 dark:text-green-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="comment"
                          className="text-green-800 dark:text-green-200"
                        >
                          Your Review
                        </Label>
                        <Textarea
                          id="comment"
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                          placeholder="Share your experience with this product..."
                          className="mt-1 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                          rows={4}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Submit Review
                      </Button>
                    </form>
                  )}
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {product.reviews_data.map((review) => (
                    <div
                      key={review.id}
                      className="border border-green-200 dark:border-green-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-green-800 dark:text-green-200">
                            {review.user}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-green-300 dark:text-green-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-green-600 dark:text-green-400">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-green-700 dark:text-green-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
