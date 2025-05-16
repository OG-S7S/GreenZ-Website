"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function Shipping() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    flatHouseNo: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    landmark: "",
    sameForBilling: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle shipping form submission
    console.log("Shipping details:", formData)
    // Navigate to delivery page
    window.location.href = "/checkout/delivery"
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link href="/checkout" className="flex items-center">
          <ArrowLeft className="h-6 w-6 mr-4" />
          <span className="text-xl font-bold">Green Z</span>
        </Link>
      </header>

      {/* Progress Bar */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center">
            <span className="text-blue-500 font-medium">Shipping</span>
            <div className="mx-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <div className="flex items-center">
            <span className="text-gray-400">Delivery</span>
            <div className="mx-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-2"></div>
          <span className="text-gray-400">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <form onSubmit={handleSubmit}>
          {/* Contact Details */}
          <div className="mb-6">
            <h2 className="text-gray-700 font-medium mb-4">Contact Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="flex">
              <div className="w-16 p-2 border border-r-0 border-gray-300 rounded-l bg-gray-50 flex items-center justify-center">
                <span className="text-gray-600">+02</span>
                <svg className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 p-2 border border-gray-300 rounded-r focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Shipping Details */}
          <div className="mb-6">
            <h2 className="text-gray-700 font-medium mb-4">Shipping Details</h2>

            <div className="mb-4">
              <input
                type="text"
                name="flatHouseNo"
                value={formData.flatHouseNo}
                onChange={handleChange}
                placeholder="Flat/House no."
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Famous Landmark"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="sameForBilling"
                name="sameForBilling"
                checked={formData.sameForBilling}
                onChange={handleChange}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="sameForBilling" className="ml-2 text-sm text-gray-700">
                My shipping and Billing address are the same
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-emerald-400 text-white py-3 rounded hover:bg-emerald-500 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
