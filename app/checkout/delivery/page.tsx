"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function Delivery() {
  const [deliveryOption, setDeliveryOption] = useState("standard")

  const handleOptionChange = (option: string) => {
    setDeliveryOption(option)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link href="/checkout/shipping" className="flex items-center">
          <ArrowLeft className="h-6 w-6 mr-4" />
          <span className="text-xl font-bold">Green Z</span>
        </Link>
      </header>

      {/* Progress Bar */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center">
            <span className="text-blue-500 font-medium">Shipping</span>
            <div className="mx-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex items-center">
            <span className="text-blue-500 font-medium">Delivery</span>
            <div className="mx-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <span className="text-gray-400">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <h1 className="text-xl font-medium mb-8">Delivery Options</h1>

        <div className="space-y-4 mb-8">
          {/* Standard Delivery Option */}
          <div
            className={`border rounded-md p-4 cursor-pointer ${
              deliveryOption === "standard" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => handleOptionChange("standard")}
          >
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="standard"
                  name="deliveryOption"
                  type="radio"
                  checked={deliveryOption === "standard"}
                  onChange={() => handleOptionChange("standard")}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 flex-1">
                <label htmlFor="standard" className="text-sm font-medium text-gray-700">
                  Standard 2-3 Business Days
                </label>
              </div>
              <div className="text-green-500 font-medium">FREE</div>
            </div>
          </div>

          {/* Same Day Delivery Option */}
          <div
            className={`border rounded-md p-4 cursor-pointer ${
              deliveryOption === "sameDay" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => handleOptionChange("sameDay")}
          >
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="sameDay"
                  name="deliveryOption"
                  type="radio"
                  checked={deliveryOption === "sameDay"}
                  onChange={() => handleOptionChange("sameDay")}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 flex-1">
                <label htmlFor="sameDay" className="text-sm font-medium text-gray-700">
                  Same day delivery
                </label>
              </div>
              <div className="text-gray-700 font-medium">30 L.E</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/checkout/shipping"
            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </Link>
          <Link
            href="/checkout/payment"
            className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Continue
          </Link>
        </div>
      </main>
    </div>
  )
}
