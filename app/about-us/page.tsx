import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-emerald-700 mb-8">About Us</h1>
              <p className="text-gray-700 mb-6">
                Welcome to Green Z, we believe that a healthy lifestyle should be simple, enjoyable, and sustainable.
                That's why we bring together nutritious ready meals, smart workout plans, and expert wellness tips all
                in one place. Whether you're just starting your fitness journey or looking to stay on track, we're here
                to fuel your goals with wholesome food and easy-to-follow fitness support. Eat well. Move better. Live
                fully.
              </p>
              <div className="mb-6">
                <p className="text-xl text-emerald-600 uppercase font-bold mb-4">#LETSGETFITTOGETHER</p>
                <Link
                  href="/healthy-menu"
                  className="inline-block bg-emerald-500 text-white py-3 px-8 rounded-md hover:bg-emerald-600 transition-colors"
                >
                  EXPLORE
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-gray-600">500+ reviews</span>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[350px] w-full">
                <Image
                  src="/placeholder.svg?height=350&width=500"
                  alt="Green Z Team"
                  width={500}
                  height={350}
                  className="rounded-lg object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Green Z Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <blockquote className="text-2xl font-medium italic text-gray-700 mb-2">
              "REST IF YOU MUST, BUT DON'T YOU GIVE UP."
            </blockquote>
            <cite className="text-emerald-600 font-bold">GREEN Z</cite>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-emerald-800 mb-12">OUR ACCOMPLISHMENTS</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">
                  At Green Z, we take pride in the impact we've made on the lives of our users. From helping individuals
                  reach their fitness goals to providing personalized nutrition and workout plans, our accomplishments
                  reflect our commitment to promoting healthier lifestyles.
                </p>
                <p className="text-gray-700 mb-6">
                  We've successfully helped hundreds of clients lose weight, build muscle, and maintain sustainable
                  habits that last. Our platform continues to grow, with new features and resources added regularly to
                  enhance the user experience. As we continue to innovate, our mission remains clear: to make fitness
                  and accessible, and effective for everyone
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Green Z Accomplishments"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-emerald-800 mb-12">OUR TEAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-[250px] relative">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Team Member 1"
                    width={350}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-emerald-600 font-medium mb-3">Nutrition Expert</p>
                  <p className="text-gray-700">
                    With over 15 years of experience in nutritional science, Dr. Johnson creates our balanced meal plans
                    and provides nutrition consultations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-[250px] relative">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Team Member 2"
                    width={350}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mark Thompson</h3>
                  <p className="text-emerald-600 font-medium mb-3">Fitness Director</p>
                  <p className="text-gray-700">
                    A certified personal trainer and former athlete, Mark designs our workout programs to be effective,
                    engaging, and suitable for all fitness levels.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-[250px] relative">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Team Member 3"
                    width={350}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Chef Alex Rodriguez</h3>
                  <p className="text-emerald-600 font-medium mb-3">Head Chef</p>
                  <p className="text-gray-700">
                    A culinary expert specializing in healthy cuisine, Chef Alex creates delicious recipes that make
                    healthy eating enjoyable and sustainable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-center text-emerald-800 mb-8">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
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
                <h3 className="text-lg font-bold mb-2">Quality</h3>
                <p className="text-gray-700">
                  We're committed to providing the highest quality in everything we do, from our nutritious meals to our
                  expert-designed workout plans.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Personalization</h3>
                <p className="text-gray-700">
                  We believe that everyone's wellness journey is unique, which is why we offer personalized solutions
                  tailored to individual needs and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
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
                <h3 className="text-lg font-bold mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We focus on creating sustainable habits and lifestyles that our clients can maintain long-term,
                  avoiding quick fixes and fad diets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
