"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Check, CreditCard, Lock } from "lucide-react"

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method)
  }

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission
    console.log("Payment method:", paymentMethod)
    console.log("Card details:", cardDetails)
    // Redirect to confirmation page
    alert("Payment successful! Order has been placed.")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link href="/checkout/delivery" className="flex items-center">
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
          <span className="text-blue-500 font-medium">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <h1 className="text-xl font-medium mb-8">Payment Methods</h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-8">
            {/* Cash on Delivery Option */}
            <div
              className={`border rounded-md p-4 cursor-pointer ${
                paymentMethod === "cash" ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("cash")}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={() => handlePaymentMethodChange("cash")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="cash" className="text-sm font-medium text-gray-700">
                    Pay with cash on delivery
                  </label>
                </div>
              </div>
            </div>

            {/* Credit/Debit Card Option */}
            <div
              className={`border rounded-md p-4 cursor-pointer ${
                paymentMethod === "card" ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("card")}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="card"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => handlePaymentMethodChange("card")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor="card" className="text-sm font-medium text-gray-700">
                    Credit/Debit Cards
                  </label>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-blue-100 rounded"></div>
                  <div className="w-8 h-5 bg-orange-100 rounded"></div>
                  <div className="w-8 h-5 bg-purple-100 rounded"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 ml-8 mt-1">Pay with your Credit / Debit Card</p>

              {paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardDetailsChange}
                      placeholder="Card number"
                      className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      required
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleCardDetailsChange}
                        placeholder="MM / YY"
                        className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        placeholder="CVV"
                        className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <Link
              href="/checkout/delivery"
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Pay 391.5 L.E
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
