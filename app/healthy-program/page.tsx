import Image from "next/image"
import Link from "next/link"

export default function HealthyProgramPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* Main Navigation Buttons - NEW SECTION */}
      <section className="mb-16 bg-emerald-600 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Explore Our Health Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link
            href="/plans"
            className="bg-white hover:bg-gray-100 text-emerald-700 font-bold py-6 px-8 rounded-lg transition-colors text-center text-lg shadow-md flex flex-col items-center justify-center"
          >
            <span className="block mb-3">📋</span>
            <span>View Plans</span>
          </Link>
          <Link
            href="/workout"
            className="bg-white hover:bg-gray-100 text-emerald-700 font-bold py-6 px-8 rounded-lg transition-colors text-center text-lg shadow-md flex flex-col items-center justify-center"
          >
            <span className="block mb-3">💪</span>
            <span>Workout Programs</span>
          </Link>
          <Link
            href="/profile/assessment"
            className="bg-white hover:bg-gray-100 text-emerald-700 font-bold py-6 px-8 rounded-lg transition-colors text-center text-lg shadow-md flex flex-col items-center justify-center"
          >
            <span className="block mb-3">📊</span>
            <span>Health Assessment</span>
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <h1 className="text-4xl font-bold text-center mb-12">Your Personalized Healthy Program</h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-8 leading-relaxed">
              Welcome to your journey towards a healthier you! Our personalized healthy program is designed to help you
              achieve your wellness goals through tailored advice, resources, and support.
            </p>
            <p className="text-lg leading-relaxed">
              We believe that everyone's path to health is unique. That's why we take a holistic approach, considering
              your individual needs, preferences, and lifestyle.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/nutrition.jpg"
                alt="Health Research"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation Bar */}
      <section className="sticky top-20 z-10 mb-20">
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-emerald-500">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/plans"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-3"
            >
              <span>📋</span> Plans & Pricing
            </Link>
            <Link
              href="/workout"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-3"
            >
              <span>💪</span> Workout Programs
            </Link>
            <Link
              href="/profile/assessment"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-3"
            >
              <span>📊</span> Health Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Start with a Personal Assessment</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-shvetsa-3902882.jpg-RxSYujwanhdQuq9OTX2dmcFzajH3A6.jpeg"
                alt="Beach Workout"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-8 leading-relaxed">
              Our personal assessment is the first step in creating your personalized healthy program. It helps us
              understand your current health status, lifestyle habits, and goals.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Based on your assessment results, we'll provide you with tailored recommendations for nutrition, exercise,
              stress management, and more.
            </p>
            <Link
              href="/profile/assessment"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-medium"
            >
              Take Your Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nutrition & Meal Planning</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-8 leading-relaxed">
              Our expert nutritionists create personalized meal plans that align with your health goals while considering
              your dietary preferences and restrictions.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Each meal is carefully crafted to provide optimal nutrition while being delicious and satisfying. We believe
              healthy eating should be enjoyable and sustainable.
            </p>
            <Link
              href="/create-your-meal"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-medium"
            >
              Explore Meal Plans
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
                alt="Healthy Meal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Blog Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Health & Wellness Blog</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Stay informed with the latest health tips, research findings, and wellness advice from our experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-[220px] w-full">
              <Image
                src="/images/doc1.jpg"
                alt="Morning Exercise Benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-emerald-600 font-medium mb-2">FITNESS</p>
              <h3 className="text-xl font-bold mb-3">Morning Exercise: The Key to a Productive Day</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Discover how starting your day with just 20 minutes of exercise can boost your energy, improve focus, and enhance your mood throughout the day.
              </p>
              <Link href="/blog/morning-exercise" className="text-emerald-600 font-medium hover:text-emerald-800">
                Read more →
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-[220px] w-full">
              <Image
                src="/images/granola-cups.png"
                alt="Nutrition Myths"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-emerald-600 font-medium mb-2">NUTRITION</p>
              <h3 className="text-xl font-bold mb-3">5 Common Nutrition Myths Debunked</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our nutrition experts separate fact from fiction and debunk the most persistent myths about dieting, superfoods, and healthy eating habits.
              </p>
              <Link href="/blog/nutrition-myths" className="text-emerald-600 font-medium hover:text-emerald-800">
                Read more →
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-[220px] w-full">
              <Image
                src="/images/steak.jpg"
                alt="Sleep Quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-emerald-600 font-medium mb-2">WELLNESS</p>
              <h3 className="text-xl font-bold mb-3">The Science of Sleep: Improving Rest Quality</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Learn the latest scientific findings on sleep hygiene and practical tips to enhance your sleep quality for better health and well-being.
              </p>
              <Link href="/blog/sleep-science" className="text-emerald-600 font-medium hover:text-emerald-800">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="mb-20 bg-emerald-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Health Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tip 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💧</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Stay Hydrated</h3>
              <p className="text-gray-700">
                Drinking adequate water is crucial for metabolism, digestion, and overall health. Aim for 8 glasses daily, and increase during exercise or hot weather. Keep a water bottle handy to remind yourself to drink regularly.
              </p>
            </div>
          </div>
          
          {/* Tip 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🥦</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Eat Colorful Foods</h3>
              <p className="text-gray-700">
                Include a variety of colorful fruits and vegetables in your diet to ensure you're getting a wide range of nutrients. Different colors indicate different antioxidants and phytonutrients that support your health.
              </p>
            </div>
          </div>
          
          {/* Tip 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Practice Mindfulness</h3>
              <p className="text-gray-700">
                Taking just 10 minutes daily for mindfulness meditation can reduce stress, improve focus, and enhance emotional well-being. Start with guided sessions and gradually build your practice.
              </p>
            </div>
          </div>
          
          {/* Tip 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🛌</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Prioritize Sleep</h3>
              <p className="text-gray-700">
                Quality sleep is essential for recovery, hormone regulation, and cognitive function. Aim for 7-9 hours per night, maintain a consistent sleep schedule, and create a relaxing bedtime routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options Section */}
      <section className="mb-20 bg-gray-50 p-12 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-12">Our Program Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Workout Programs</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our expert-designed workout programs cater to all fitness levels. From beginner to advanced, we have
              routines that will help you build strength, improve endurance, and enhance flexibility.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Personalized workout plans</li>
              <li>Video demonstrations</li>
              <li>Progress tracking</li>
              <li>Expert guidance</li>
            </ul>
            <Link
              href="/workout"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-full text-center"
            >
              Explore Workouts
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Health Consultations</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Connect with our team of qualified health professionals who can provide personalized guidance on
              nutrition, fitness, and overall wellness.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Expert nutritionists</li>
              <li>Certified fitness trainers</li>
              <li>Medical professionals</li>
              <li>Personalized advice</li>
            </ul>
            <Link
              href="/green-z-doctors"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-full text-center"
            >
              Meet Our Doctors
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Subscription Plans</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Choose from our range of subscription plans to get the most out of your Green Z experience. Each plan
              offers different levels of support, resources, and personalization.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Basic, Popular, and Advanced options</li>
              <li>Nutritionist consultations</li>
              <li>Meal planning assistance</li>
              <li>Regular health assessments</li>
            </ul>
            <Link
              href="/plans"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-full text-center"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-emerald-50 p-12 rounded-xl text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Take the first step towards a healthier you today! Choose from our comprehensive services designed to support
          your wellness journey.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/plans"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            View Our Plans
          </Link>
          <Link
            href="/workout"
            className="bg-white hover:bg-gray-100 text-emerald-600 border-2 border-emerald-600 font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            Browse Workouts
          </Link>
          <Link
            href="/profile/assessment"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            Start Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}
