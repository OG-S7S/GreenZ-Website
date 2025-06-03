import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Workout() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">TAILORED, LIMITLESS RESULTS</h1>
          <p className="text-lg text-gray-700 mb-2 max-w-2xl mx-auto text-center">
            "Step-by-step workout plans for a healthy lifestyle"
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-center">
            At Green Z, we teach functional movements and workouts with an emphasis on technique, progression, and
            efficiency
          </p>
          <Link
            href="/plans"
            className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Click Here
          </Link>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4">
        <hr className="my-8 border-gray-200" />
      </div>

      {/* Workout Categories */}
      <section className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Body Shaping */}
            <div className="flex flex-col items-center">
              <div className="mb-4 w-full h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/fitness.jpg"
                  alt="Body Shaping"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Body Shaping</h3>
              <p className="text-sm text-gray-600 text-center">
                Fitness workouts are comprised of constantly varying functional movements
              </p>
            </div>

            {/* Home Workouts */}
            <div className="flex flex-col items-center">
              <div className="mb-4 w-full h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/ballerena.jpg"
                  alt="Home Workouts"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Home Workouts</h3>
              <p className="text-sm text-gray-600 text-center">Photos show you how to work out from home.</p>
            </div>

            {/* Personal Training */}
            <div className="flex flex-col items-center">
              <div className="mb-4 w-full h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/basketball.jpg"
                  alt="Personal Training"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Personal Training</h3>
              <p className="text-sm text-gray-600 text-center">Making the decision to join a gym</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WORKOUTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Cardio */}
            <div className="flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg h-64 w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alexander-red-d3bYmnZ0ank-unsplash.jpg-X1X1ipqzQ5KrfPRdAaSP8D1bMCPEPg.jpeg"
                  alt="Cardio"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1">WORKOUT</div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Cardio</h3>
              <p className="text-sm text-gray-600 text-center">Level • 20 mins • 300 cal</p>
            </div>

            {/* Weight lifting */}
            <div className="flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg h-64 w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-victorfreitas-2261485.jpg-SKZ3CbT9KRe1N6hHqDCPFv50U2MeA9.jpeg"
                  alt="Weight lifting"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1">WORKOUT</div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Weight Lifting</h3>
              <p className="text-sm text-gray-600 text-center">Level • 45 mins • 350 cal</p>
            </div>

            {/* HIIT */}
            <div className="flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg h-64 w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-victorfreitas-703016.jpg-hKn72rnvfcuZRq0HQfB5l60Ad7g97R.jpeg"
                  alt="HIIT"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1">WORKOUT</div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">HIIT</h3>
              <p className="text-sm text-gray-600 text-center">Level • 30 mins • 250 cal</p>
            </div>
          </div>

          {/* Workouts From Home */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">WORKOUTS FROM HOME</h2>
            <p className="text-lg text-gray-700 mb-8">"Step-by-step workout plans for a healthy lifestyle"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 10-minute Full-body */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg h-82 w-full">
                <Image
                  src="/images/Horse.jpg"
                  alt="10-minute Full-body"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">10-minute Full-body</h3>
            </div>

            {/* Abs */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg h-82 w-full">
                <Image
                  src="/images/OneLeg.jpg"
                  alt="Abs"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Abs</h3>
            </div>

            {/* Yoga Routine */}
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-lg h-82 w-full">
                <Image
                  src="/images/climb.jpg"
                  alt="Yoga Routine"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Yoga Routine</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
