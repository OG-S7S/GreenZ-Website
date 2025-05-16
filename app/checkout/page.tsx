"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"

// Define food item type
type FoodItem = {
  id: number
  name: string
  price: number
  image: string
  category: string
  calories: number
  protein: number
}

// Define cart item type
type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

export default function Checkout() {
  // Sample cart items
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Hawaiian chicken",
      price: 250,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg",
      category: "Main Dishes",
    },
    {
      id: 2,
      name: "Spinach and avocado salad",
      price: 185,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg",
      category: "Salads",
    },
  ])

  // Sample food items for recommendations
  const foodItems: FoodItem[] = [
    {
      id: 3,
      name: "Garlic Butter Steak",
      price: 350,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg",
      category: "Main Dishes",
      calories: 450,
      protein: 42,
    },
    {
      id: 4,
      name: "Greek Salad",
      price: 165,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg",
      category: "Salads",
      calories: 190,
      protein: 6,
    },
    {
      id: 5,
      name: "Sesame Chicken",
      price: 220,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg",
      category: "Main Dishes",
      calories: 380,
      protein: 32,
    },
    {
      id: 6,
      name: "Chocolate Banana Brownies",
      price: 90,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg",
      category: "Desserts",
      calories: 150,
      protein: 3,
    },
  ]

  const [discountCode, setDiscountCode] = useState("")
  const [appliedDiscount, setAppliedDiscount] = useState(43.5)
  const [recommendations, setRecommendations] = useState<FoodItem[]>([])

  // Generate recommendations based on cart items
  useEffect(() => {
    if (items.length === 0) {
      setRecommendations([])
      return
    }

    // Get categories in cart
    const cartCategories = items.map((item) => item.category)

    // Filter out items already in cart
    const cartItemIds = items.map((item) => item.id)
    const availableItems = foodItems.filter((item) => !cartItemIds.includes(item.id))

    // Prioritize items from same categories
    const sameCategory = availableItems.filter((item) => cartCategories.includes(item.category))

    // If we have items from same category, use those, otherwise use other items
    let recommendedItems = sameCategory.length > 0 ? sameCategory : availableItems

    // Limit to 3 recommendations
    recommendedItems = recommendedItems.slice(0, 3)

    setRecommendations(recommendedItems)
  }, [items])

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)))
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const applyDiscount = () => {
    if (discountCode === "GZ10") {
      // Apply 10% discount
      const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      setAppliedDiscount(Math.round(subtotal * 0.1 * 10) / 10)
    } else {
      setAppliedDiscount(0)
    }
  }

  const addToCart = (item: FoodItem) => {
    const newItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      category: item.category,
    }

    setItems([...items, newItem])
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal - appliedDiscount

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="h-6 w-6 mr-4" />
          <span className="text-xl font-bold">Green Z</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Section */}
          <div className="lg:w-2/3">
            <h1 className="text-xl font-medium mb-6">Order Summary</h1>

            {items.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/full-menu" className="text-emerald-600 font-medium hover:underline">
                  Browse our menu
                </Link>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center p-4 border rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md mr-4 object-cover h-[80px] w-[80px]"
                    />
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 border border-gray-300 rounded-md"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 border border-gray-300 rounded-md"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.price} L.E</p>
                      <button onClick={() => removeItem(item.id)} className="text-gray-500 mt-2">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recommended Products */}
            {recommendations.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-4">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                      <div className="h-40 relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-gray-700">{item.price} L.E</p>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700"
                          >
                            Add
                          </button>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span>{item.calories} cal</span> • <span>{item.protein}g protein</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              {/* Discount Code */}
              <div className="mb-6">
                <p className="text-gray-700 mb-2">Gift Card / Discount</p>
                <div className="flex">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="GZ10"
                    className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    onClick={applyDiscount}
                    className="bg-white text-emerald-600 border border-l-0 border-gray-300 px-4 py-2 rounded-r"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Details */}
              <div className="border-t pt-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{subtotal} L.E</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium">{appliedDiscount} L.E</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="text-green-500 font-medium">FREE</span>
                </div>
                <div className="flex justify-between py-2 border-t mt-2">
                  <span className="text-gray-600">Total due</span>
                  <span className="text-emerald-600 font-medium text-lg">{total} L.E</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={items.length > 0 ? "/checkout/shipping" : "#"}
                  className={`block w-full text-center py-3 rounded-md ${
                    items.length > 0
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  } transition-colors`}
                  onClick={(e) => {
                    if (items.length === 0) e.preventDefault()
                  }}
                >
                  Proceed to Shipping
                </Link>
              </div>
            </div>

            {/* Nutrition Information */}
            {items.length > 0 && (
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Nutrition Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Green Z is committed to helping you make informed dietary choices. Here's a summary of your order's
                  nutritional content:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Calories:</span>
                    <span className="font-medium">530 cal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protein:</span>
                    <span className="font-medium">39g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbs:</span>
                    <span className="font-medium">50g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fat:</span>
                    <span className="font-medium">20g</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
