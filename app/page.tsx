import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-emerald-100 pb-8">
        <div className="container mx-auto px-4">
          <div className="relative pt-8 pb-12">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">Green Z</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-emerald-900 uppercase">
                A NEW APPROACH TO HEALTH & LIFE
              </h2>
              <Link
                href="/signup"
                className="mt-6 inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg w-full h-60 flex items-center justify-center bg-white">
                <Image
                  src="/images/pexels-xmtnguyen-699953.jpg"
                  alt="Healthy Menu"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Healthy menu</h3>
              <p className="text-sm text-gray-600 text-center">
                prepared meal · create your meal choose your base flexible delivery
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg w-full h-60 flex items-center justify-center bg-white">
                <Image
                  src="/images/delivery.jpg"
                  alt="Fast Delivery"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Fast delivery</h3>
              <p className="text-sm text-gray-600 text-center">same day delivery · fresh ingredients · delivered to your door</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg w-full h-60 flex items-center justify-center bg-white">
                <Image
                  src="/images/pexels-allan-mas-5383558.jpg"
                  alt="Nutrition Plan"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Nutrition plan</h3>
              <p className="text-sm text-gray-600 text-center">personalized nutrition plan · based on your needs · expert advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Explore Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our selection of nutritious, delicious meals prepared with fresh ingredients to fuel your healthy
              lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/images/pexels-julieaagaard-2097090.jpg"
                  alt="Hawaiian Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Hawaiian Chicken</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Grilled chicken with pineapple, bell peppers, and our signature teriyaki sauce
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-600">250 L.E</span>
                  <Link href="/full-menu" className="text-sm text-emerald-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/images/pexels-ella-olsson-572949-1640773.jpg"
                  alt="Greek Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Greek Salad</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fresh cucumber, tomato, onion, olives and feta cheese with olive oil dressing
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-600">165 L.E</span>
                  <Link href="/full-menu" className="text-sm text-emerald-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/images/Steak.jpg"
                  alt="Garlic Butter Steak"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Garlic Butter Steak</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Grass-fed beef steak with garlic butter, served with roasted potatoes
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-600">350 L.E</span>
                  <Link href="/full-menu" className="text-sm text-emerald-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/full-menu"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Health Experts Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Health Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with our team of qualified health professionals who can guide you on your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg-WkK8BLj3SvSHB8tLinsu1sPrgepBQH.jpeg"
                  alt="Dr. Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Dr. Michael Chen</h3>
                <p className="text-emerald-600 text-sm mb-3">Cardiologist</p>
                <p className="text-gray-600 text-sm">
                  Specializes in heart-healthy nutrition and lifestyle modifications for cardiovascular health.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg-dIIRpeRjhVr1rhFLVTYBFhZ5yqj4kL.jpeg"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Dr. Sarah Johnson</h3>
                <p className="text-emerald-600 text-sm mb-3">Nutritionist</p>
                <p className="text-gray-600 text-sm">
                  Creates personalized nutrition plans to help you achieve your health and weight goals.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg-T5ytRBbQjenMLtTcRlqalTF0QG9K36.jpeg"
                  alt="Dr. James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Dr. James Wilson</h3>
                <p className="text-emerald-600 text-sm mb-3">Sports Medicine</p>
                <p className="text-gray-600 text-sm">
                  Helps athletes and fitness enthusiasts optimize performance through nutrition and training.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/green-z-doctors"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Find a Doctor
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people who have transformed their health and lifestyle with Green Z.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Green Z's meal plans have completely transformed my eating habits. I've lost 15 pounds and have so much
                more energy throughout the day!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Emily R.</p>
                  <p className="text-sm text-gray-500">Customer for 6 months</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The consultation with Dr. Johnson was eye-opening. Her personalized nutrition plan helped me manage my
                diabetes better than ever before."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Michael T.</p>
                  <p className="text-sm text-gray-500">Customer for 1 year</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The workout plans combined with Green Z's meals have been a game-changer for my fitness journey. I've
                never felt stronger or healthier!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Sarah K.</p>
                  <p className="text-sm text-gray-500">Customer for 8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
