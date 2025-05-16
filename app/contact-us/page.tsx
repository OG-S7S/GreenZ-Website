"use client"

import type React from "react"

import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-emerald-800 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              We'd love to hear from you. Our team is here to help. Let your customers get in touch with you by filling
              out the email form below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Enter your question or message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition-colors flex items-center"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600 text-center">1-888-888</p>
                <p className="text-gray-600 text-center text-sm">Sunday-Thursday: 8 am to 8 pm</p>
                <p className="text-gray-600 text-center text-sm">Friday-Saturday: Closed</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600 text-center">support@greenz.com</p>
                <p className="text-gray-600 text-center text-sm">We'll respond as soon as possible</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-gray-600 text-center">123 Green Health Street</p>
                <p className="text-gray-600 text-center text-sm">Wellness City, WC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us</h2>
          <div className="bg-gray-300 h-[400px] rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
