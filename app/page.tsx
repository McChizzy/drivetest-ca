"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { provinces } from "@/lib/data"
import type { Province } from "@/lib/types"
import Image from "next/image"
import { ChevronRight, MapPin, Clock, Target } from "lucide-react"

export default function Home() {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null)
  const router = useRouter()

  const handleProvinceClick = (province: Province) => {
    router.push(`/province/${province.slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Test Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Driving Knowledge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Prepare for your Canadian driving exam with confidence.
              <br />
              <span className="text-lg">Choose your province to begin your personalized test.</span>
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>13 Provinces & Territories</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Timed Practice Tests</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Target className="h-5 w-5 text-purple-600" />
                <span>Official Handbook Based</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Province Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Select Your Province</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Click on your province or territory to start your driving test
          </p>
        </div>

        {/* Province Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {provinces.map((province) => (
            <div
              key={province.id}
              onClick={() => handleProvinceClick(province)}
              onMouseEnter={() => setHoveredProvince(province.id)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Province Image */}
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={province.image || "/placeholder.svg"}
                    alt={province.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-blue-600/90 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProvince === province.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-white text-center">
                      <ChevronRight className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Start Test</p>
                    </div>
                  </div>
                </div>

                {/* Province Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base mb-1 line-clamp-2">
                    {province.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {province.description}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Ready to start</span>
                    <ChevronRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Provinces */}
        <div className="mt-16 space-y-8">
          {/* Alberta Featured */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured: Alberta Driving Test</h3>
                    <p className="text-lg mb-6 text-blue-100">
                      Comprehensive test based on the official Alberta Driver's Handbook. Features 15 detailed questions
                      with explanations and stunning Rocky Mountain imagery.
                    </p>
                    <button
                      onClick={() => handleProvinceClick(provinces.find((p) => p.slug === "alberta")!)}
                      className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
                    >
                      Start Alberta Test
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden">
                    <Image src="/alberta-banff-lake-louise.jpg" alt="Alberta Landscape" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>

          {/* Saskatchewan Featured */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured: Saskatchewan Driving Test</h3>
                    <p className="text-lg mb-6 text-green-100">
                      Based on the official SGI Driver's Handbook. Features 15 questions covering prairie driving
                      conditions and Saskatchewan-specific traffic laws.
                    </p>
                    <button
                      onClick={() => handleProvinceClick(provinces.find((p) => p.slug === "saskatchewan")!)}
                      className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center gap-2"
                    >
                      Start Saskatchewan Test
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden">
                    <Image
                      src="/saskatchewan-prairie-sunset.jpg"
                      alt="Saskatchewan Landscape"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Not sure which test to take? Start with your home province.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              ✓ Official handbook questions
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              ✓ Instant feedback
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              ✓ Timed practice
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
