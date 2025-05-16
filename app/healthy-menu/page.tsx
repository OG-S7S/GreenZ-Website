import Image from "next/image"
import Link from "next/link"

export default function HealthyMenu() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="relative h-[400px] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
            alt="Healthy Food"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 text-white bg-black bg-opacity-40">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
              Explore <br /> Green Z <br /> Healthy <br /> Menu
            </h1>
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg"
                alt="Healthy Food"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h2 className="text-2xl font-bold uppercase mb-4">Explore Green Z Healthy Menu</h2>
                <p className="text-gray-700">
                  Welcome to our menu featuring Green Z nutritious meals made with wholesome vegetables to offer
                  nutrition and delicious options that make eating well simply enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* Main Dishes */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26-sLQpTQSzR9elL7cFWhiYHv0iRyb5nD.jpeg"
                  alt="Hawaiian Chicken"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Hawaiian Chicken</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">250</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 35g, Calories 350cal/serving, Carbs 40g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.25%20%284%29-CLobySOs262iCZl2ZCLMJojTpDv67j.jpeg"
                  alt="Chicken Fajita Kebabs"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Chicken Fajita Kebabs</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">280</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 38g, Calories 320cal/serving, Carbs 15g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg"
                  alt="Sesame Chicken"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Sesame Chicken</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">220</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 32g, Calories 350cal/serving, Carbs 35g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26-sLQpTQSzR9elL7cFWhiYHv0iRyb5nD.jpeg"
                  alt="Garlic Butter Steak and Potatoes Skillet"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Garlic Butter Steak and Potatoes Skillet</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">350</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 42g, Calories 450cal/serving, Carbs 30g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg"
                  alt="Chainese Shrimp and Broccoli"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Chainese Shrimp and Broccoli</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">300</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 28g, Calories 280cal/serving, Carbs 18g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26-sLQpTQSzR9elL7cFWhiYHv0iRyb5nD.jpeg"
                  alt="Garlic Butter-Roasted Salmon with Potatoes & Asparagus"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Garlic Butter-Roasted Salmon with Potatoes & Asparagus</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">380</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 35g, Calories 410cal/serving, Carbs 22g</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Salad Menu */}
          <div className="py-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
              <div className="md:w-1/2">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h2 className="text-2xl font-bold uppercase mb-4">Salads Menu</h2>
                  <p className="text-gray-700">
                    Explore Green Z healthy Menu salads menu offers a variety of fresh, wholesome, and flavorful salads
                    made with premium ingredients to boost your body and delight your taste buds.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg"
                  alt="Fresh Salad"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg"
                  alt="Avocado Lime Spinach Salad"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Avocado Lime Spinach Salad</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">160</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 5g, Calories 180cal/serving, Carbs 12g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%282%29-cRNsGh3QzfIWjVrVzICPGwbSakNKdG.jpeg"
                  alt="Spinach and Avocado Salad"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Spinach and Avocado Salad</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">155</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 4g, Calories 165cal/serving, Carbs 10g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%282%29-cRNsGh3QzfIWjVrVzICPGwbSakNKdG.jpeg"
                  alt="Greek Salad"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Greek Salad</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">165</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 6g, Calories 190cal/serving, Carbs 14g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg"
                  alt="Strawberry Spinach Salad"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Strawberry Spinach Salad</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">170</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 4g, Calories 175cal/serving, Carbs 18g</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Dessert Menu */}
          <div className="py-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg"
                  alt="Healthy Desserts"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h2 className="text-2xl font-bold uppercase mb-4">Dessert Menu</h2>
                  <p className="text-gray-700">
                    Our desserts menu features delightful treats made with wholesome ingredients, offering the perfect
                    balance of flavor and nutrition.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg"
                  alt="Chocolate Banana Brownies"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Chocolate Banana Brownies</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">90</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 3g, Calories 150cal/serving, Carbs 24g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg"
                  alt="Healthy Banana Oat Waffles"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Healthy Banana Oat Waffles</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">160</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 6g, Calories 180cal/serving, Carbs 32g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg"
                  alt="Frozen Banana Dessert"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Frozen Banana Dessert</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">40</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 1g, Calories 90cal/serving, Carbs 22g</p>
                </div>
              </Link>

              <Link
                href="/full-menu"
                className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%283%29-cFemlApuyWbEIlJ1kvkaEyTXbtPlJm.jpeg"
                  alt="Oatmeal Pancakes"
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-[100px] w-[100px]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Oatmeal Pancakes</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-lg font-bold">130</span>
                      <span className="text-xs text-gray-500">LE</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Protein 5g, Calories 150cal/serving, Carbs 25g</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Organic Menu */}
          <div className="py-8 bg-gray-50 rounded-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <div className="relative mb-4">
                  <span className="absolute -top-4 right-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded">
                    ORGANIC
                  </span>
                  <h2 className="text-2xl font-bold uppercase mb-4">Organic Menu</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Made with consciously sourced, organic ingredients and plants. In Green Z we'll teach you how to cater
                  delicious organic food for special events!
                </p>
                <Link
                  href="/full-menu"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Explore full menu
                </Link>
              </div>
              <div className="md:w-1/3 grid grid-cols-2 gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg"
                  alt="Organic Food 1"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-[120px] w-[120px]"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%284%29-9QzFbRk3YycJpzoHuj5Edr0VyYvieI.jpeg"
                  alt="Organic Food 2"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-[120px] w-[120px]"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%282%29-cRNsGh3QzfIWjVrVzICPGwbSakNKdG.jpeg"
                  alt="Organic Food 3"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-[120px] w-[120px]"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26-sLQpTQSzR9elL7cFWhiYHv0iRyb5nD.jpeg"
                  alt="Organic Food 4"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-[120px] w-[120px]"
                />
              </div>
            </div>
          </div>

          {/* Promotion Banner */}
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-22%20at%2020.32.26%20%281%29-yyVWfs4Vo4ASPlE7IM5PGwuub9rOjn.jpeg"
              alt="Special Offer"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-8">
              <h2 className="text-4xl font-bold mb-4">50% OFF YOUR FIRST VISIT</h2>
              <p className="text-lg mb-6 max-w-2xl">
                Thank you for visiting our website Green Z dedicated to promoting health and wellness. Our mission of
                fostering a healthy lifestyle inspires us to continue providing valuable information.
              </p>
              <Link
                href="/about-us"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-emerald-800 transition-colors px-6 py-2"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
