import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                <span className="font-bold text-white">GZ</span>
              </div>
              <span className="text-xl font-bold">Green Z</span>
            </div>
            <p className="text-gray-400 mb-4">
              A new approach to health & life. We provide nutritious meals, expert health guidance, and personalized
              workout plans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/full-menu" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/workout" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Workout
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/healthy-program" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Healthy Program
                </Link>
              </li>
              <li>
                <Link href="/green-z-doctors" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Health Consultations
                </Link>
              </li>
              <li>
                <Link href="/create-your-meal" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Custom Meal Plans
                </Link>
              </li>
              <li>
                <Link href="/workout" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Fitness Training
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Green Health Street, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">+20 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">support@greenz.com</span>
              </li>
              <li className="mt-4">
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Hours:</span> Sunday-Thursday: 8 am to 8 pm
                </p>
                <p className="text-gray-400">Friday-Saturday: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Green Z. All rights reserved. A new approach to health & life.
          </p>
        </div>
      </div>
    </footer>
  )
}
