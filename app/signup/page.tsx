"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Facebook, Instagram, Menu, Search, ShoppingCart } from "lucide-react"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup attempt with:", formData)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <button className="p-2">
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/" className="flex-1 text-center text-xl font-bold">
          Green Z
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Search className="h-6 w-6" />
          </button>
          <button className="p-2">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-8">Create Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 text-white py-3 rounded hover:bg-emerald-500 transition-colors"
            >
              sign up
            </button>
          </form>

          <div className="mt-12 border-t pt-8"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 flex justify-center space-x-4">
        <Link href="#" className="text-gray-600 hover:text-emerald-700">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-emerald-700">
          <Instagram className="h-5 w-5" />
        </Link>
      </footer>
    </div>
  )
}
