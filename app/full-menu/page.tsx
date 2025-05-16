"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Filter, Plus, ShoppingCart } from "lucide-react"

// Define food item type
type FoodItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber?: number
  }
}

// Define cart item type
type CartItem = FoodItem & {
  quantity: number
}

export default function FullMenu() {
  // Sample food data
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Hawaiian Chicken",
      description: "Grilled chicken with pineapple, bell peppers, and our signature teriyaki sauce",
      price: 250,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg",
      category: "Main Dishes",
      nutrition: {
        calories: 350,
        protein: 35,
        carbs: 40,
        fat: 8,
        fiber: 4,
      },
    },
    {
      id: 2,
      name: "Sesame Chicken",
      description: "Tender chicken pieces with sesame seeds in a sweet and savory sauce",
      price: 220,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.25%20%284%29-CLobySOs262iCZl2ZCLMJojTpDv67j.jpeg",
      category: "Main Dishes",
      nutrition: {
        calories: 380,
        protein: 32,
        carbs: 35,
        fat: 14,
      },
    },
    {
      id: 3,
      name: "Garlic Butter Steak",
      description: "Grass-fed beef steak with garlic butter, served with roasted potatoes",
      price: 350,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.25%20%284%29-CLobySOs262iCZl2ZCLMJojTpDv67j.jpeg",
      category: "Main Dishes",
      nutrition: {
        calories: 450,
        protein: 42,
        carbs: 30,
        fat: 21,
        fiber: 3,
      },
    },
    {
      id: 4,
      name: "Chinese Shrimp & Broccoli",
      description: "Stir-fried shrimp and broccoli in a light garlic sauce",
      price: 300,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg",
      category: "Main Dishes",
      nutrition: {
        calories: 280,
        protein: 28,
        carbs: 18,
        fat: 11,
        fiber: 6,
      },
    },
    {
      id: 5,
      name: "Salmon with Asparagus",
      description: "Garlic butter-roasted salmon with potatoes and fresh asparagus",
      price: 380,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26-sLQpTQSzR9elL7cFWhiYHv0iRyb5nD.jpeg",
      category: "Main Dishes",
      nutrition: {
        calories: 410,
        protein: 35,
        carbs: 22,
        fat: 18,
        fiber: 5,
      },
    },
    {
      id: 6,
      name: "Greek Salad",
      description: "Fresh cucumber, tomato, onion, olives and feta cheese with olive oil dressing",
      price: 165,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%282%29-cRNsGh3QzfIWjVrVzICPGwbSakNKdG.jpeg",
      category: "Salads",
      nutrition: {
        calories: 190,
        protein: 6,
        carbs: 14,
        fat: 12,
        fiber: 4,
      },
    },
    {
      id: 7,
      name: "Spinach and Avocado Salad",
      description: "Fresh spinach, avocado, cherry tomatoes with balsamic vinaigrette",
      price: 185,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg",
      category: "Salads",
      nutrition: {
        calories: 165,
        protein: 4,
        carbs: 10,
        fat: 12,
        fiber: 7,
      },
    },
    {
      id: 8,
      name: "Avocado Lime Spinach Salad",
      description: "Spinach, avocado, red onion, and lime juice with olive oil dressing",
      price: 160,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg",
      category: "Salads",
      nutrition: {
        calories: 180,
        protein: 5,
        carbs: 12,
        fat: 14,
        fiber: 8,
      },
    },
    {
      id: 9,
      name: "Strawberry Spinach Salad",
      description: "Fresh spinach, strawberries, almonds with a light honey dressing",
      price: 170,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%282%29-cRNsGh3QzfIWjVrVzICPGwbSakNKdG.jpeg",
      category: "Salads",
      nutrition: {
        calories: 175,
        protein: 4,
        carbs: 18,
        fat: 9,
        fiber: 5,
      },
    },
    {
      id: 10,
      name: "Chocolate Banana Brownies",
      description: "Healthy brownies made with dark chocolate and ripe bananas",
      price: 90,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg",
      category: "Desserts",
      nutrition: {
        calories: 150,
        protein: 3,
        carbs: 24,
        fat: 6,
        fiber: 3,
      },
    },
    {
      id: 11,
      name: "Banana Oat Waffles",
      description: "Whole grain waffles made with oats and bananas",
      price: 160,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg",
      category: "Desserts",
      nutrition: {
        calories: 180,
        protein: 6,
        carbs: 32,
        fat: 4,
        fiber: 4,
      },
    },
    {
      id: 12,
      name: "Frozen Banana Dessert",
      description: "Frozen banana slices dipped in dark chocolate",
      price: 40,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg",
      category: "Desserts",
      nutrition: {
        calories: 90,
        protein: 1,
        carbs: 22,
        fat: 2,
        fiber: 3,
      },
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400])

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(foodItems.map((item) => item.category)))]

  // Filter food items based on selected category, search term, and price range
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
    return matchesCategory && matchesSearch && matchesPrice
  })

  // Add item to cart
  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("greenZCart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("greenZCart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/healthy-menu" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-lg font-bold">Green Z</span>
            </Link>

            <h1 className="text-xl font-bold">Full Menu</h1>

            <button className="relative p-2" onClick={() => setIsCartOpen(!isCartOpen)} aria-label="Shopping cart">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500">
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 my-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex border-b pb-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {item.quantity} x {item.price} L.E
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => {
                              setCart((prevCart) =>
                                prevCart
                                  .map((cartItem) =>
                                    cartItem.id === item.id
                                      ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
                                      : cartItem,
                                  )
                                  .filter((cartItem) => cartItem.quantity > 0),
                              )
                            }}
                            className="text-gray-500 p-1"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => {
                              setCart((prevCart) =>
                                prevCart.map((cartItem) =>
                                  cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
                                ),
                              )
                            }}
                            className="text-gray-500 p-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.price * item.quantity} L.E</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span className="font-bold">{cartTotal} L.E</span>
              </div>
              <Link
                href="/checkout"
                className={`block w-full py-3 text-center rounded-md ${
                  cart.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
                onClick={(e) => {
                  if (cart.length === 0) e.preventDefault()
                }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="p-2 border border-gray-300 rounded-md bg-white flex items-center"
            >
              <Filter className="h-5 w-5 mr-1" />
              <span className="text-sm">Filter</span>
            </button>
          </div>

          {filterOpen && (
            <div className="mt-4 p-4 bg-white rounded-md shadow-md">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="400"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <span className="text-sm">{priceRange[0]} L.E</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="range"
                  min="0"
                  max="400"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm">{priceRange[1]} L.E</span>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="mt-4 flex overflow-x-auto pb-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-192px)]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="font-bold text-emerald-600">{item.price} L.E</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 mb-3">{item.description}</p>

                  {/* Nutrition Information */}
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <h4 className="text-sm font-medium mb-2">Nutrition Information</h4>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="text-center">
                        <span className="block font-bold text-emerald-700">{item.nutrition.calories}</span>
                        <span className="text-gray-500">Calories</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-emerald-700">{item.nutrition.protein}g</span>
                        <span className="text-gray-500">Protein</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-emerald-700">{item.nutrition.carbs}g</span>
                        <span className="text-gray-500">Carbs</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-emerald-700">{item.nutrition.fat}g</span>
                        <span className="text-gray-500">Fat</span>
                      </div>
                    </div>
                    {item.nutrition.fiber && (
                      <div className="text-xs text-center mt-2">
                        <span className="text-gray-500">Fiber: </span>
                        <span className="font-medium">{item.nutrition.fiber}g</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center mt-auto"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                  setPriceRange([0, 400])
                }}
                className="mt-4 text-emerald-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Cart Button (Mobile) */}
      <div className="md:hidden fixed bottom-4 right-4 z-10">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-emerald-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
