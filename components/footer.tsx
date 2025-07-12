import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 dark:bg-green-950 text-green-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">GreenMart</span>
            </div>
            <p className="text-green-200 mb-4">
              Your trusted partner for sustainable and quality products. Shop with confidence and make a positive
              impact.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-green-300 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-green-300 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-green-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-green-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-green-200 hover:text-green-300 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-green-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-green-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=electronics"
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=clothing"
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-green-200 hover:text-green-300 transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sports"
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-green-200">support@greenmart.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-green-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-green-200">123 Green Street, Eco City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 GreenMart. All rights reserved. |
            <Link href="/privacy" className="hover:text-green-300 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-green-300 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
