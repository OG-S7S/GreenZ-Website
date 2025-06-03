"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Filter, MapPin, Star, Calendar } from "lucide-react"

// Define doctor type
type Doctor = {
  id: number
  name: string
  specialty: string
  rating: number
  experience: string
  location: string
  image: string
  availability: string
  bio: string
}

// Define specialty type for filtering
type Specialty = {
  id: number
  name: string
}

export default function GreenZDoctors() {
  // Sample doctors data
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Nutritionist",
      rating: 4.9,
      experience: "10+ years",
      location: "Downtown Clinic",
      image:
        "/images/doc.jpg",
      availability: "Mon, Wed, Fri",
      bio: "Dr. Johnson specializes in nutrition planning for weight loss and overall health improvement. She has helped hundreds of patients achieve their health goals through personalized diet plans.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      rating: 4.8,
      experience: "15+ years",
      location: "Heart Health Center",
      image:
        "/images/doc1.jpg",
      availability: "Tue, Thu, Sat",
      bio: "Dr. Chen is a board-certified cardiologist with expertise in preventive cardiology and heart-healthy lifestyle modifications. He focuses on non-invasive treatments and dietary approaches.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Endocrinologist",
      rating: 4.7,
      experience: "8+ years",
      location: "Metabolic Health Clinic",
      image:
        "/images/doc2.jpg",
      availability: "Mon, Tue, Thu",
      bio: "Dr. Rodriguez specializes in diabetes management and hormonal disorders. She takes a holistic approach to treatment, incorporating diet, exercise, and lifestyle changes.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Sports Medicine",
      rating: 4.9,
      experience: "12+ years",
      location: "Athletic Performance Center",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg-T5ytRBbQjenMLtTcRlqalTF0QG9K36.jpeg",
      availability: "Wed, Fri, Sat",
      bio: "Dr. Wilson works with athletes and fitness enthusiasts to optimize performance and prevent injuries. He specializes in nutrition for athletic performance and recovery.",
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      specialty: "Dietitian",
      rating: 4.6,
      experience: "7+ years",
      location: "Wellness Nutrition Center",
      image:
        "/images/doc3.jpg",
      availability: "Mon, Wed, Fri",
      bio: "Dr. Patel creates customized nutrition plans for weight management, food allergies, and chronic disease prevention. She emphasizes sustainable eating habits and cultural food preferences.",
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialty: "Bariatric Specialist",
      rating: 4.8,
      experience: "14+ years",
      location: "Weight Management Clinic",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/online-marketing-hIgeoQjS_iE-unsplash.jpg-syQIHdYcCYi7XRBCRUL2CpqmtgvBwh.jpeg",
      availability: "Tue, Thu, Sat",
      bio: "Dr. Thompson specializes in medical weight loss programs and post-bariatric surgery nutrition. He helps patients achieve sustainable weight loss through comprehensive lifestyle changes.",
    },
    {
      id: 7,
      name: "Dr. Lisa Chang",
      specialty: "Nutritionist",
      rating: 4.7,
      experience: "9+ years",
      location: "Integrative Health Center",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg-dIIRpeRjhVr1rhFLVTYBFhZ5yqj4kL.jpeg",
      availability: "Mon, Wed, Sat",
      bio: "Dr. Chang combines traditional nutrition science with functional medicine approaches. She specializes in gut health, food sensitivities, and anti-inflammatory diets.",
    },
    {
      id: 8,
      name: "Dr. David Martinez",
      specialty: "Endocrinologist",
      rating: 4.9,
      experience: "11+ years",
      location: "Hormone Health Institute",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg-WkK8BLj3SvSHB8tLinsu1sPrgepBQH.jpeg",
      availability: "Tue, Thu, Fri",
      bio: "Dr. Martinez is an expert in thyroid disorders, diabetes, and metabolic syndrome. He emphasizes the role of nutrition in managing hormonal imbalances and metabolic health.",
    },
  ]

  // Specialties for filtering
  const specialties: Specialty[] = [
    { id: 1, name: "All Specialties" },
    { id: 2, name: "Nutritionist" },
    { id: 3, name: "Cardiologist" },
    { id: 4, name: "Endocrinologist" },
    { id: 5, name: "Sports Medicine" },
    { id: 6, name: "Dietitian" },
    { id: 7, name: "Bariatric Specialist" },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  // Filter doctors based on search term and specialty
  useEffect(() => {
    let results = doctors

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by specialty
    if (selectedSpecialty !== "All Specialties") {
      results = results.filter((doctor) => doctor.specialty === selectedSpecialty)
    }

    setFilteredDoctors(results)
  }, [searchTerm, selectedSpecialty])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Find the Right Doctor for Your Health Journey</h1>
            <p className="text-xl mb-8">
              Connect with specialized healthcare professionals who can guide your nutrition and wellness path
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by name, specialty, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 pr-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-emerald-600"
              >
                <Filter />
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="bg-white rounded-lg shadow-lg p-4 mt-4 max-w-2xl mx-auto text-left">
                <h3 className="text-gray-800 font-medium mb-3">Filter by Specialty</h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.id}
                      onClick={() => setSelectedSpecialty(specialty.name)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedSpecialty === specialty.name
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {specialty.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Doctors Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredDoctors.length} {filteredDoctors.length === 1 ? "Doctor" : "Doctors"} Available
            </h2>
            <div className="flex gap-2">
              <select
                className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white"
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                value={selectedSpecialty}
              >
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSpecialty("All Specialties")
                }}
                className="mt-4 text-emerald-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                        <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(doctor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Available: {doctor.availability}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <span className="text-sm text-gray-600">{doctor.experience} experience</span>
                      <button className="text-emerald-600 text-sm font-medium hover:underline">View Profile</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src={selectedDoctor.image || "/placeholder.svg"}
                      alt={selectedDoctor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedDoctor.name}</h2>
                    <p className="text-emerald-600 font-medium">{selectedDoctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(selectedDoctor.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">{selectedDoctor.rating}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedDoctor(null)} className="text-gray-500 hover:text-gray-700">
                  &times;
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-gray-700">{selectedDoctor.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">{selectedDoctor.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-600">{selectedDoctor.experience}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Availability</h4>
                  <p className="text-gray-600">{selectedDoctor.availability}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Consultation Fee</h4>
                  <p className="text-gray-600">250 L.E</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Book Appointment
                </button>
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => alert('appointment cancelled')}
                  type="button"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Green Z Doctors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Green Z Doctors</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Specialists</h3>
              <p className="text-gray-600">
                All our doctors are verified specialists with proven expertise in their fields.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Convenient Scheduling</h3>
              <p className="text-gray-600">
                Book appointments at your convenience, with options for virtual consultations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Receive customized health plans tailored to your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Dr. Johnson's nutrition plan completely transformed my relationship with food. I've lost 20 pounds and
                have so much more energy!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Sarah T.</p>
                  <p className="text-sm text-gray-500">Weight Loss Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Dr. Chen helped me lower my blood pressure through diet changes alone. His approach is both scientific
                and practical."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Michael R.</p>
                  <p className="text-sm text-gray-500">Heart Health Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As an athlete, Dr. Wilson's sports nutrition advice has been invaluable. My recovery times are shorter
                and my performance has improved."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Jessica L.</p>
                  <p className="text-sm text-gray-500">Athlete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
