"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Facebook, Instagram, Menu, Search, ShoppingCart } from "lucide-react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", { email, password })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <button className="p-2">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex-1"></div>
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
          <h1 className="text-2xl font-bold text-center mb-8">LOGIN</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Username / Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
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
              className="w-full bg-emerald-700 text-white py-3 rounded hover:bg-emerald-800 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-emerald-700 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <span className="text-gray-600">Don't have an account?</span>{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>

          <div className="mt-12 border-t pt-8"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="text-center text-sm text-gray-500">
          © 2024 Green Z. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
