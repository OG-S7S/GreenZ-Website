"use client"

import { useState } from "react"
import Image from "next/image"

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [paymentStep, setPaymentStep] = useState(false)
  const [email, setEmail] = useState("")

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
  }

  const handlePaymentStep = () => {
    setPaymentStep(true)
  }

  const handleBack = () => {
    setPaymentStep(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-emerald-50/90 to-white/90">
      {/* Subscription Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {!paymentStep ? (
            <>
              <div className="text-center mb-12 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Subscribe in Green Z</h1>
                <div className="flex justify-center mb-8">
                  <Image
                    src="/images/Subscription.jpg"
                    alt="Subscription"
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="max-w-md mx-auto mb-8">
                  <p className="text-gray-700 mb-4">
                    Get weekly updates about our products and services on your emails
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example123@gmail.com"
                      className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white/90"
                    />
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-r uppercase text-sm font-medium hover:bg-emerald-700">
                      Subscribe
                    </button>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-8">Pick a plan that's right for you</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Basic Plan */}
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all hover:shadow-xl flex flex-col h-full ${
                    selectedPlan === "basic" ? "border-2 border-emerald-500 ring-2 ring-emerald-200" : ""
                  }`}
                  onClick={() => handlePlanSelect("basic")}
                >
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase text-gray-500 mb-2">Basic</p>
                    <h3 className="text-3xl font-bold mb-1">2200 L.E</h3>
                    <p className="text-sm text-gray-600">Per member, per Month</p>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Follow up for 4 days on all inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        A customized training program for exercising in the gym or at home is explained in videos and
                        photos, changing every 45 days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        Changing the diet plan to suit your goal every 15 days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Access basic resources, join discussions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">customized meals but with some limits</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">3 sessions/month +some classes</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={handlePaymentStep}
                      className="w-full bg-emerald-600 text-white py-2 rounded text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>

                {/* Popular Plan */}
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all hover:shadow-xl flex flex-col h-full ${
                    selectedPlan === "popular" ? "border-2 border-emerald-500 ring-2 ring-emerald-200" : ""
                  }`}
                  onClick={() => handlePlanSelect("popular")}
                >
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase text-gray-500 mb-2">Popular</p>
                    <h3 className="text-3xl font-bold mb-1">3200 L.E</h3>
                    <p className="text-sm text-gray-600">Per member, per Month</p>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Daily follow-up on all inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        A customized training program for exercising in the gym or at home is explained in videos and
                        photos, changing monthly
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        Changing the diet plan to suit your goal every 10 days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Access community challenges and rewards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">customized meals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">8 sessions/month +some classes</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={handlePaymentStep}
                      className="w-full bg-emerald-600 text-white py-2 rounded text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>

                {/* Advanced Plan */}
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all hover:shadow-xl flex flex-col h-full ${
                    selectedPlan === "advanced" ? "border-2 border-emerald-500 ring-2 ring-emerald-200" : ""
                  }`}
                  onClick={() => handlePlanSelect("advanced")}
                >
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase text-gray-500 mb-2">Advanced</p>
                    <h3 className="text-3xl font-bold mb-1">4200 L.E</h3>
                    <p className="text-sm text-gray-600">Per member, per Month</p>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Daily follow-up on all inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        A weekly change in the diet plan to suit your goal
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">
                        Changing the diet plan to suit your goal every 10 days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Access community challenges and rewards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">customized meals and snacks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">12 sessions/month +some classes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Question from customer service 6 times a month</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={handlePaymentStep}
                      className="w-full bg-emerald-600 text-white py-2 rounded text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-8">Payment Methods</h2>
                <div className="max-w-md mx-auto mb-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                        defaultChecked
                      />
                      <label htmlFor="creditCard" className="ml-2 text-sm text-gray-700">
                        Credit/Debit Cards
                      </label>
                      <div className="ml-auto flex space-x-2">
                        <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                        <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Pay with your Credit / Debit Card</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm text-gray-700 mb-1">
                        Card number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          placeholder="1234 5678 9012 3456"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <Image src="/placeholder.svg?height=20&width=30" alt="Card" width={30} height={20} />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm text-gray-700 mb-1">
                          MM / YY
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="expiry"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="MM / YY"
                          />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm text-gray-700 mb-1">
                          CVV
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cvv"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="123"
                          />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={handleBack}
                      className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">Pay Now</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
