"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  Calendar,
  ChevronRight,
  Edit2,
  Heart,
  History,
  LogOut,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react"

// Define user profile type
type UserProfile = {
  name: string
  email: string
  phone: string
  profileImage: string
  memberSince: string
  healthMetrics?: {
    height: number // in cm
    weight: number // in kg
    bmi: number
    bodyFat?: number // in percentage
    muscleMass?: number // in kg
    restingHeartRate?: number // in bpm
    goals: string[]
    dietaryPreferences: string[]
    fitnessLevel: string
    lastUpdated: string
  }
  subscriptionPlan?: string
  upcomingWorkouts?: Array<{
    id: number
    name: string
    date: string
    time: string
  }>
  recentMeals?: Array<{
    id: number
    name: string
    date: string
  }>
}

export default function ProfilePage() {
  // Sample user data - in a real app, this would come from an API or database
  const [user, setUser] = useState<UserProfile>({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+20 123 456 7890",
    profileImage: "/placeholder.svg?height=200&width=200",
    memberSince: "January 2023",
    healthMetrics: {
      height: 168,
      weight: 65,
      bmi: 23.0,
      bodyFat: 24,
      muscleMass: 45,
      restingHeartRate: 68,
      goals: ["Weight loss", "Muscle tone", "Improved energy"],
      dietaryPreferences: ["Low carb", "High protein"],
      fitnessLevel: "Intermediate",
      lastUpdated: "2023-10-15",
    },
    subscriptionPlan: "Advanced Plan",
    upcomingWorkouts: [
      { id: 1, name: "HIIT Training", date: "2023-11-05", time: "09:00 AM" },
      { id: 2, name: "Yoga Session", date: "2023-11-07", time: "06:30 PM" },
    ],
    recentMeals: [
      { id: 1, name: "Hawaiian Chicken", date: "2023-11-01" },
      { id: 2, name: "Greek Salad", date: "2023-11-02" },
      { id: 3, name: "Garlic Butter Steak", date: "2023-11-03" },
    ],
  })

  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Green Z</span>
            </Link>
            <h1 className="text-xl font-bold">My Profile</h1>
            <div className="w-12"></div> {/* Empty div for flex spacing */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={user.profileImage || "/images/Profile.jpg"}
                      alt={user.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <button
                    className="absolute bottom-0 right-0 bg-emerald-600 text-white p-1.5 rounded-full"
                    aria-label="Edit profile picture"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{user.email}</p>
                <p className="text-xs text-gray-400">Member since {user.memberSince}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <nav>
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "overview"
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab("health")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "health"
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  <span>Health Assessment</span>
                </button>
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "activity"
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Activity className="h-5 w-5 mr-3" />
                  <span>Activity</span>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "orders"
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeTab === "settings"
                      ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <button className="flex items-center text-red-500 w-full">
                <LogOut className="h-5 w-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-2/3 lg:w-3/4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Personal Information</h3>
                    <button className="text-emerald-600 flex items-center text-sm">
                      <Edit2 className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Full Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Subscription</p>
                      <p className="font-medium">{user.subscriptionPlan}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Health Summary</h3>
                    <Link href="/profile/assessment" className="text-emerald-600 flex items-center text-sm">
                      Update Assessment
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  {user.healthMetrics ? (
                    <div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Height</p>
                          <p className="text-xl font-bold text-emerald-700">
                            {user.healthMetrics.height} <span className="text-sm font-normal">cm</span>
                          </p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Weight</p>
                          <p className="text-xl font-bold text-emerald-700">
                            {user.healthMetrics.weight} <span className="text-sm font-normal">kg</span>
                          </p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">BMI</p>
                          <p className="text-xl font-bold text-emerald-700">{user.healthMetrics.bmi.toFixed(1)}</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Body Fat</p>
                          <p className="text-xl font-bold text-emerald-700">{user.healthMetrics.bodyFat}%</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Fitness Level</p>
                        <p className="font-medium">{user.healthMetrics.fitnessLevel}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Goals</p>
                        <div className="flex flex-wrap gap-2">
                          {user.healthMetrics.goals.map((goal, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Dietary Preferences</p>
                        <div className="flex flex-wrap gap-2">
                          {user.healthMetrics.dietaryPreferences.map((pref, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {pref}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-4">Last updated: {user.healthMetrics.lastUpdated}</p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">You haven't completed your health assessment yet.</p>
                      <Link
                        href="/profile/assessment"
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                      >
                        Complete Assessment
                      </Link>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">Upcoming Workouts</h3>
                      <Link href="#" className="text-emerald-600 text-sm">
                        View All
                      </Link>
                    </div>
                    {user.upcomingWorkouts && user.upcomingWorkouts.length > 0 ? (
                      <div className="space-y-4">
                        {user.upcomingWorkouts.map((workout) => (
                          <div key={workout.id} className="flex items-center">
                            <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                              <Calendar className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="font-medium">{workout.name}</p>
                              <p className="text-sm text-gray-500">
                                {workout.date} • {workout.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No upcoming workouts scheduled.</p>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">Recent Meals</h3>
                      <Link href="#" className="text-emerald-600 text-sm">
                        View All
                      </Link>
                    </div>
                    {user.recentMeals && user.recentMeals.length > 0 ? (
                      <div className="space-y-4">
                        {user.recentMeals.map((meal) => (
                          <div key={meal.id} className="flex items-center">
                            <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                              <ShoppingBag className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="font-medium">{meal.name}</p>
                              <p className="text-sm text-gray-500">{meal.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No recent meal orders.</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Health Assessment Tab */}
            {activeTab === "health" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Health Assessment</h3>
                  <Link
                    href="/profile/assessment"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm"
                  >
                    Take New Assessment
                  </Link>
                </div>

                {user.healthMetrics ? (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Height</p>
                        <p className="text-xl font-bold text-emerald-700">
                          {user.healthMetrics.height} <span className="text-sm font-normal">cm</span>
                        </p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Weight</p>
                        <p className="text-xl font-bold text-emerald-700">
                          {user.healthMetrics.weight} <span className="text-sm font-normal">kg</span>
                        </p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">BMI</p>
                        <p className="text-xl font-bold text-emerald-700">{user.healthMetrics.bmi.toFixed(1)}</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Body Fat</p>
                        <p className="text-xl font-bold text-emerald-700">{user.healthMetrics.bodyFat}%</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Muscle Mass</p>
                        <p className="text-xl font-bold text-emerald-700">
                          {user.healthMetrics.muscleMass} <span className="text-sm font-normal">kg</span>
                        </p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Resting Heart Rate</p>
                        <p className="text-xl font-bold text-emerald-700">
                          {user.healthMetrics.restingHeartRate} <span className="text-sm font-normal">bpm</span>
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">BMI Classification</h4>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                          style={{ width: `${Math.min(100, (user.healthMetrics.bmi / 40) * 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Underweight</span>
                        <span>Normal</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium mb-3">Fitness Level</h4>
                        <p className="text-gray-700">{user.healthMetrics.fitnessLevel}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Health Goals</h4>
                        <div className="flex flex-wrap gap-2">
                          {user.healthMetrics.goals.map((goal, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Dietary Preferences</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.healthMetrics.dietaryPreferences.map((pref, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {pref}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-xs text-gray-400">
                        Last assessment completed on {user.healthMetrics.lastUpdated}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">You haven't completed your health assessment yet.</p>
                    <Link
                      href="/profile/assessment"
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      Complete Assessment
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === "activity" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-6">Activity History</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center">
                      <History className="h-5 w-5 mr-2 text-emerald-600" />
                      Recent Workouts
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">HIIT Training</p>
                          <p className="text-sm text-gray-500">October 30, 2023</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          Completed
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Strength Training</p>
                          <p className="text-sm text-gray-500">October 28, 2023</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          Completed
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Yoga Session</p>
                          <p className="text-sm text-gray-500">October 25, 2023</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center">
                      <ShoppingBag className="h-5 w-5 mr-2 text-emerald-600" />
                      Recent Meals
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Hawaiian Chicken</p>
                          <p className="text-sm text-gray-500">November 1, 2023</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Ordered</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Greek Salad</p>
                          <p className="text-sm text-gray-500">November 2, 2023</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Ordered</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Garlic Butter Steak</p>
                          <p className="text-sm text-gray-500">November 3, 2023</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Ordered</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-emerald-600" />
                      Health Assessments
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Full Health Assessment</p>
                          <p className="text-sm text-gray-500">October 15, 2023</p>
                        </div>
                        <Link href="#" className="text-emerald-600 text-sm">
                          View Results
                        </Link>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Initial Assessment</p>
                          <p className="text-sm text-gray-500">January 10, 2023</p>
                        </div>
                        <Link href="#" className="text-emerald-600 text-sm">
                          View Results
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-6">Order History</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #GZ-10234</p>
                          <p className="text-sm text-gray-500">November 3, 2023</p>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Delivered</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md mr-4"></div>
                        <div>
                          <p className="font-medium">Garlic Butter Steak</p>
                          <p className="text-sm text-gray-500">Qty: 1 • 350 L.E</p>
                        </div>
                      </div>
                      <div className="flex justify-between border-t pt-4">
                        <p className="text-gray-500">Total</p>
                        <p className="font-bold">350 L.E</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #GZ-10233</p>
                          <p className="text-sm text-gray-500">November 2, 2023</p>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Delivered</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md mr-4"></div>
                        <div>
                          <p className="font-medium">Greek Salad</p>
                          <p className="text-sm text-gray-500">Qty: 1 • 165 L.E</p>
                        </div>
                      </div>
                      <div className="flex justify-between border-t pt-4">
                        <p className="text-gray-500">Total</p>
                        <p className="font-bold">165 L.E</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-6">Account Settings</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4">Personal Information</h4>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            defaultValue="Sarah"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            defaultValue="Johnson"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          defaultValue="sarah.johnson@example.com"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          defaultValue="+20 123 456 7890"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Password</h4>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm text-gray-600 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="newPassword" className="block text-sm text-gray-600 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm text-gray-600 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Notification Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates about your orders and account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-500">Receive text messages about your orders</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Communications</p>
                          <p className="text-sm text-gray-500">Receive promotions and special offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>
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
