import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

function createProduct() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-200">
              Create New Product
            </h2>
            <p className="mt-2 text-green-600 dark:text-green-400"></p>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <Select
                  value=""
                  //   onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {categories.map((category) => (
                     <SelectItem key="" value="">
                      Empty
                    </SelectItem> 
                    ))}  */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="product-name"
                  className="text-green-800 dark:text-green-200"
                >
                  Product Name
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="product-name"
                    name="product-name"
                    className="pl-5 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Product Name"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="price"
                  className="text-green-800 dark:text-green-200"
                >
                  Price
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="price"
                    name="price"
                    className="pl-5 pr-10 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="discount-price"
                  className="text-green-800 dark:text-green-200"
                >
                  Discount Price
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="discount-price"
                    name="discount-price"
                    className="pl-5 pr-10 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Discount Price"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="stock"
                  className="text-green-800 dark:text-green-200"
                >
                  Stock
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="stock"
                    name="stock"
                    className="pl-5 pr-10 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Stock"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="text-green-800 dark:text-green-200"
                >
                  Description
                </Label>
                <div className="relative mt-1">
                  <Textarea
                    id="description"
                    name="description"
                    className="pl-5 pr-10 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Product's Description"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="features"
                  className="text-green-800 dark:text-green-200"
                >
                  Key Features
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="features"
                    name="features"
                    className="pl-5 pr-10 border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                    placeholder="Write Feature"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Create Product
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createProduct;
