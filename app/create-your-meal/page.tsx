import Image from "next/image"
import Link from "next/link"

export default function CreateYourMeal() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">CREATE YOUR MEAL</h1>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Green Z, we believe in the power of personalized meals that fuel your body, mind, and soul. Whether
                you're looking for a fiber-vegan bowl, a keto-friendly plate, or a hearty gluten-free option, you have
                full control over your diet.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our meal planner tool—Create Your Meal tool makes it easy to design a dish that aligns with your tastes,
                preferences, and nutritional goals.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We use only the freshest, most nutritious ingredients, and we invite you to choose what goes into your
                meal to get started.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg"
                  alt="Fresh ingredients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Options Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8">INCLUDED</h2>
            <div className="border-b pb-6">
              <div className="flex justify-between mb-6">
                <button className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">FATS</button>
                <button className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">CARBS</button>
                <button className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">PROTEINS</button>
                <button className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">SEMPER</button>
              </div>
            </div>
            <div className="py-6">
              <ul className="space-y-5">
                <li className="text-gray-700">Vegan Greek Salad</li>
                <li className="text-gray-700">Garlic Butter-Roasted Salmon with Potatoes & Asparagus</li>
                <li className="text-gray-700">Garlic Butter Steak and Potatoes Skillet</li>
                <li className="text-gray-700">Sesame chicken</li>
                <li className="text-gray-700">Hawaiian Chicken</li>
              </ul>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/green-z-doctors"
                className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors font-medium"
              >
                ASK A NUTRITIONIST
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Green Z Meals Showcase */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">DETAILED GREEN Z'S MEALS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Meal 1 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg"
                  alt="Chinese shrimp and broccoli"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Chinese shrimp and broccoli</h3>
              <p className="text-gray-600 mb-2">Protein 28g, Calories 280cal, Carbs 18g</p>
              <p className="text-gray-600 mb-6">Fat 11g</p>
              <a
                href="https://www.allrecipes.com/recipe/223382/chicken-and-broccoli-stir-fry/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>

            {/* Meal 2 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
                  alt="Sesame chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Sesame chicken</h3>
              <p className="text-gray-600 mb-2">Protein 32g, Calories 350cal, Carbs 35g</p>
              <p className="text-gray-600 mb-6">Fat 14g</p>
              <a
                href="https://www.foodnetwork.com/recipes/food-network-kitchen/sesame-chicken-recipe-2121273"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>

            {/* Meal 3 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
                  alt="Garlic Butter Steak and Potatoes Skillet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Garlic Butter Steak and Potatoes Skillet</h3>
              <p className="text-gray-600 mb-2">Protein 42g, Calories 450cal, Carbs 30g</p>
              <p className="text-gray-600 mb-6">Fat 21g</p>
              <a
                href="https://www.eatwell101.com/garlic-butter-steak-and-potatoes-recipe"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>
          </div>

          {/* Feature Descriptions */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 bg-gray-50 p-10 rounded-xl">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Create Your Meal with Green Z</h3>
              <p className="text-gray-700 leading-relaxed">
                A variety of options lets you build meals that suit your individual taste and nutritional needs. At
                Green Z offers a variety of fresh, green ingredients to elevate the nutritional value of your meals.
                Whether you're following a strict food plan or simply want to add more healthy options to your diet,
                Green Z makes customization easy.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Customization at Its Best</h3>
              <p className="text-gray-700 leading-relaxed">
                Green Z has a range of vegetables, proteins, grains, and healthy fats to create your perfect Green Z
                meal. Green Z meals are designed to help you boost your diet while focusing on energy and improving
                overall health. Your satisfaction is our top priority, which is why we make sure each meal aligns with
                your nutrition goals.
              </p>
            </div>
          </div>

          {/* Recipe Resources */}
          <div className="mb-20 p-10 bg-gray-50 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8">Recipe Resources</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Looking to create your own healthy meals at home? Check out these trusted recipe websites for inspiration:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="https://www.eatingwell.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-3">EatingWell</h4>
                <p className="text-gray-600 leading-relaxed">
                  Healthy, delicious recipes and meal plans with nutritional information.
                </p>
              </a>
              <a
                href="https://www.skinnytaste.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-3">Skinnytaste</h4>
                <p className="text-gray-600 leading-relaxed">
                  Delicious, healthy, low-point recipes with detailed nutritional information.
                </p>
              </a>
              <a
                href="https://minimalistbaker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-3">Minimalist Baker</h4>
                <p className="text-gray-600 leading-relaxed">Simple plant-based recipes requiring 10 ingredients or less.</p>
              </a>
            </div>
          </div>

          {/* Additional Meal Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Meal 4 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg-KWXrI2KOzshUMwZms9TsaD1o4Oq532.jpeg"
                  alt="Vegan Greek Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">VEGAN GREEK SALAD</h3>
              <p className="text-gray-600 mb-2">Protein 5g, Calories 160cal, Carbs 14g</p>
              <p className="text-gray-600 mb-6">Fat 9g</p>
              <a
                href="https://minimalistbaker.com/greek-salad-with-tofu-feta/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>

            {/* Meal 5 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
                  alt="Hawaiian Chicken Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Hawaiian Chicken Salad</h3>
              <p className="text-gray-600 mb-2">Protein 28g, Calories 280cal, Carbs 20g</p>
              <p className="text-gray-600 mb-6">Fat 10g</p>
              <a
                href="https://www.tasteofhome.com/recipes/hawaiian-chicken-salad/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>

            {/* Meal 6 */}
            <div className="flex flex-col">
              <div className="mb-6 relative h-[280px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chad-montano-M0lUxgLnlfk-unsplash.jpg-oxrl3L1WAOFzJLOperSgb1tRF75hov.jpeg"
                  alt="Garlic Butter-Roasted Salmon with Potatoes & Asparagus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Garlic Butter-Roasted Salmon with Potatoes & Asparagus</h3>
              <p className="text-gray-600 mb-2">Protein 35g, Calories 410cal, Carbs 22g</p>
              <p className="text-gray-600 mb-6">Fat 18g</p>
              <a
                href="https://www.eatingwell.com/recipe/275763/garlic-butter-roasted-salmon-with-potatoes-asparagus/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full text-sm hover:bg-emerald-50 transition-colors"
              >
                VIEW RECIPE
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
