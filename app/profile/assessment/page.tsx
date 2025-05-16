"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function HealthAssessment() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic measurements
    height: "",
    weight: "",
    age: "",
    gender: "",

    // Body measurements
    waist: "",
    hip: "",
    chest: "",

    // Health information
    restingHeartRate: "",
    bloodPressure: {
      systolic: "",
      diastolic: "",
    },

    // Lifestyle
    activityLevel: "",
    sleepHours: "",
    stressLevel: "",

    // Goals and preferences
    fitnessGoals: [] as string[],
    dietaryPreferences: [] as string[],

    // Medical
    medicalConditions: [] as string[],
    allergies: [] as string[],
  })

  const totalSteps = 5

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => {
        const parentObj = (prev[parent as keyof typeof prev] ?? {}) as Record<string, any>;
        return {
          ...prev,
          [parent]: {
            ...parentObj,
            [child]: value,
          },
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const { value, checked } = e.target

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        [category]: [...(prev[category as keyof typeof prev] as string[]), value],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [category]: (prev[category as keyof typeof prev] as string[]).filter((item) => item !== value),
      }))
    }
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const calculateBMI = () => {
    if (formData.height && formData.weight) {
      const heightInMeters = Number(formData.height) / 100
      const weightInKg = Number(formData.weight)
      return (weightInKg / (heightInMeters * heightInMeters)).toFixed(1)
    }
    return "N/A"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Assessment data:", formData)

    // Use Next.js router for navigation
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/profile" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-xl font-bold">Green Z</span>
            </Link>
            <h1 className="text-xl font-bold">Health Assessment</h1>
            <div className="w-12"></div> {/* Empty div for flex spacing */}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step > index + 1
                      ? "bg-emerald-600 text-white"
                      : step === index + 1
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`h-1 w-12 sm:w-16 md:w-24 ${step > index + 1 ? "bg-emerald-600" : "bg-gray-200"}`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Basic Information</h2>
                  <p className="text-gray-600 mb-6">
                    Let's start with some basic measurements to help us understand your body composition.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="e.g., 175"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="e.g., 70"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="e.g., 30"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  {formData.height && formData.weight && (
                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-gray-700 mb-2">Your BMI (Body Mass Index):</p>
                      <p className="text-2xl font-bold text-emerald-700">{calculateBMI()}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        BMI is a measure of body fat based on height and weight.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Body Measurements */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Body Measurements</h2>
                  <p className="text-gray-600 mb-6">
                    These additional measurements help us create a more personalized fitness plan.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="waist" className="block text-sm font-medium text-gray-700 mb-1">
                        Waist Circumference (cm)
                      </label>
                      <input
                        type="number"
                        id="waist"
                        name="waist"
                        value={formData.waist}
                        onChange={handleInputChange}
                        placeholder="e.g., 80"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Measure around your natural waistline, just above your belly button.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="hip" className="block text-sm font-medium text-gray-700 mb-1">
                        Hip Circumference (cm)
                      </label>
                      <input
                        type="number"
                        id="hip"
                        name="hip"
                        value={formData.hip}
                        onChange={handleInputChange}
                        placeholder="e.g., 100"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Measure around the widest part of your hips.</p>
                    </div>

                    <div>
                      <label htmlFor="chest" className="block text-sm font-medium text-gray-700 mb-1">
                        Chest Circumference (cm)
                      </label>
                      <input
                        type="number"
                        id="chest"
                        name="chest"
                        value={formData.chest}
                        onChange={handleInputChange}
                        placeholder="e.g., 90"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Measure around the fullest part of your chest.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      These measurements help us track your progress over time and tailor your workout plan to target
                      specific areas.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Health Information */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Health Information</h2>
                  <p className="text-gray-600 mb-6">
                    Understanding your current health status helps us create a safe and effective program.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="restingHeartRate" className="block text-sm font-medium text-gray-700 mb-1">
                        Resting Heart Rate (bpm)
                      </label>
                      <input
                        type="number"
                        id="restingHeartRate"
                        name="restingHeartRate"
                        value={formData.restingHeartRate}
                        onChange={handleInputChange}
                        placeholder="e.g., 70"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Count your pulse for 60 seconds while at rest.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure (mmHg)</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            type="number"
                            id="systolic"
                            name="bloodPressure.systolic"
                            value={formData.bloodPressure.systolic}
                            onChange={handleInputChange}
                            placeholder="Systolic (e.g., 120)"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            id="diastolic"
                            name="bloodPressure.diastolic"
                            value={formData.bloodPressure.diastolic}
                            onChange={handleInputChange}
                            placeholder="Diastolic (e.g., 80)"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Enter as systolic/diastolic (e.g., 120/80).</p>
                    </div>

                    <div>
                      <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Activity Level
                      </label>
                      <select
                        id="activityLevel"
                        name="activityLevel"
                        value={formData.activityLevel}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="">Select activity level</option>
                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="light">Lightly active (light exercise 1-3 days/week)</option>
                        <option value="moderate">Moderately active (moderate exercise 3-5 days/week)</option>
                        <option value="active">Active (hard exercise 6-7 days/week)</option>
                        <option value="very-active">Very active (very hard exercise & physical job)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700 mb-1">
                        Average Sleep Hours (per night)
                      </label>
                      <select
                        id="sleepHours"
                        name="sleepHours"
                        value={formData.sleepHours}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="">Select average sleep hours</option>
                        <option value="less-than-5">Less than 5 hours</option>
                        <option value="5-6">5-6 hours</option>
                        <option value="6-7">6-7 hours</option>
                        <option value="7-8">7-8 hours</option>
                        <option value="8-9">8-9 hours</option>
                        <option value="more-than-9">More than 9 hours</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="stressLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Stress Level
                      </label>
                      <select
                        id="stressLevel"
                        name="stressLevel"
                        value={formData.stressLevel}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="">Select stress level</option>
                        <option value="low">Low (rarely feel stressed)</option>
                        <option value="moderate">Moderate (occasionally feel stressed)</option>
                        <option value="high">High (frequently feel stressed)</option>
                        <option value="very-high">Very High (constantly feel stressed)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Goals and Preferences */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Goals and Preferences</h2>
                  <p className="text-gray-600 mb-6">
                    Tell us about your fitness goals and dietary preferences so we can customize your plan.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Fitness Goals (select all that apply)
                      </label>
                      <div className="space-y-2">
                        {[
                          "Weight loss",
                          "Muscle gain",
                          "Improve endurance",
                          "Increase strength",
                          "Improve flexibility",
                          "Better overall health",
                          "Reduce stress",
                          "Improve sleep",
                        ].map((goal) => (
                          <div key={goal} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                              value={goal}
                              checked={formData.fitnessGoals.includes(goal)}
                              onChange={(e) => handleCheckboxChange(e, "fitnessGoals")}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {goal}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Dietary Preferences (select all that apply)
                      </label>
                      <div className="space-y-2">
                        {[
                          "No restrictions",
                          "Vegetarian",
                          "Vegan",
                          "Gluten-free",
                          "Dairy-free",
                          "Low carb",
                          "High protein",
                          "Keto",
                          "Paleo",
                          "Mediterranean",
                        ].map((diet) => (
                          <div key={diet} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`diet-${diet.toLowerCase().replace(/\s+/g, "-")}`}
                              value={diet}
                              checked={formData.dietaryPreferences.includes(diet)}
                              onChange={(e) => handleCheckboxChange(e, "dietaryPreferences")}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`diet-${diet.toLowerCase().replace(/\s+/g, "-")}`}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {diet}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Medical Information */}
              {step === 5 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Medical Information</h2>
                  <p className="text-gray-600 mb-6">
                    Please share any medical conditions or allergies that might affect your fitness program.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Medical Conditions (select all that apply)
                      </label>
                      <div className="space-y-2">
                        {[
                          "None",
                          "High blood pressure",
                          "Heart disease",
                          "Diabetes",
                          "Asthma",
                          "Arthritis",
                          "Back pain",
                          "Joint pain",
                          "Pregnancy",
                          "Other",
                        ].map((condition) => (
                          <div key={condition} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`condition-${condition.toLowerCase().replace(/\s+/g, "-")}`}
                              value={condition}
                              checked={formData.medicalConditions.includes(condition)}
                              onChange={(e) => handleCheckboxChange(e, "medicalConditions")}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`condition-${condition.toLowerCase().replace(/\s+/g, "-")}`}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {condition}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Allergies (select all that apply)
                      </label>
                      <div className="space-y-2">
                        {["None", "Nuts", "Dairy", "Eggs", "Gluten", "Soy", "Shellfish", "Other"].map((allergy) => (
                          <div key={allergy} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`allergy-${allergy.toLowerCase().replace(/\s+/g, "-")}`}
                              value={allergy}
                              checked={formData.allergies.includes(allergy)}
                              onChange={(e) => handleCheckboxChange(e, "allergies")}
                              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`allergy-${allergy.toLowerCase().replace(/\s+/g, "-")}`}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {allergy}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> This information is kept confidential and is only used to create a
                        safe and effective fitness program for you. If you have any serious medical conditions, please
                        consult with your doctor before starting any new fitness program.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </button>
                ) : (
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Cancel
                  </Link>
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-4 py-2 bg-emerald-600 rounded-md text-white hover:bg-emerald-700"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-emerald-600 rounded-md text-white hover:bg-emerald-700"
                  >
                    Complete Assessment
                    <Check className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}