"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, User } from "lucide-react"

export default function Header() {
  const [isHealthDropdownOpen, setIsHealthDropdownOpen] = useState(false)
  const [isMealDropdownOpen, setIsMealDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GZ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-emerald-800 hover:text-emerald-600 font-medium">
              Home
            </Link>
            <Link href="/workout" className="text-emerald-800 hover:text-emerald-600 font-medium">
              Workout
            </Link>

            {/* Health Programs Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-emerald-800 hover:text-emerald-600 font-medium"
                onClick={() => {
                  setIsHealthDropdownOpen(!isHealthDropdownOpen)
                  if (isMealDropdownOpen) setIsMealDropdownOpen(false)
                }}
              >
                Health Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isHealthDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/healthy-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                    onClick={() => setIsHealthDropdownOpen(false)}
                  >
                    Healthy Program
                  </Link>
                  <Link
                    href="/green-z-doctors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                    onClick={() => setIsHealthDropdownOpen(false)}
                  >
                    Green Z Doctors
                  </Link>
                </div>
              )}
            </div>

            {/* Meal Plans Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-emerald-800 hover:text-emerald-600 font-medium"
                onClick={() => {
                  setIsMealDropdownOpen(!isMealDropdownOpen)
                  if (isHealthDropdownOpen) setIsHealthDropdownOpen(false)
                }}
              >
                Meal Plans <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMealDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/full-menu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                    onClick={() => setIsMealDropdownOpen(false)}
                  >
                    Full Menu
                  </Link>
                  <Link
                    href="/create-your-meal"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                    onClick={() => setIsMealDropdownOpen(false)}
                  >
                    Create Your Meal
                  </Link>
                </div>
              )}
            </div>

            {/* Profile Link */}
            <Link href="/profile" className="text-emerald-800 hover:text-emerald-600 font-medium flex items-center">
              <User className="mr-1 h-4 w-4" /> Profile
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-emerald-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <div className="flex-1"></div>
                <button className="text-gray-600 focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <Link
                href="/"
                className="text-emerald-800 hover:text-emerald-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/workout"
                className="text-emerald-800 hover:text-emerald-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Workout
              </Link>

              {/* Mobile Health Programs */}
              <div>
                <button
                  className="flex items-center text-emerald-800 hover:text-emerald-600 font-medium w-full text-left"
                  onClick={() => setIsHealthDropdownOpen(!isHealthDropdownOpen)}
                >
                  Health Programs{" "}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isHealthDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isHealthDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/healthy-program"
                      className="block text-sm text-gray-700 hover:text-emerald-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Healthy Program
                    </Link>
                    <Link
                      href="/green-z-doctors"
                      className="block text-sm text-gray-700 hover:text-emerald-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Green Z Doctors
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Meal Plans */}
              <div>
                <button
                  className="flex items-center text-emerald-800 hover:text-emerald-600 font-medium w-full text-left"
                  onClick={() => setIsMealDropdownOpen(!isMealDropdownOpen)}
                >
                  Meal Plans{" "}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isMealDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMealDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/full-menu"
                      className="block text-sm text-gray-700 hover:text-emerald-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Full Menu
                    </Link>
                    <Link
                      href="/create-your-meal"
                      className="block text-sm text-gray-700 hover:text-emerald-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Create Your Meal
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Profile Link */}
              <Link
                href="/profile"
                className="text-emerald-800 hover:text-emerald-600 font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="mr-1 h-4 w-4" /> Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
