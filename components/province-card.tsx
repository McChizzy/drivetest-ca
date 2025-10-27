"use client"

import Image from "next/image"
import type { Province } from "@/lib/types"
import { ChevronRight, MapPin } from "lucide-react"

interface ProvinceCardProps {
  province: Province
  isHovered: boolean
  onClick: (province: Province) => void
  onHover: (provinceId: string | null) => void
}

export default function ProvinceCard({ province, isHovered, onClick, onHover }: ProvinceCardProps) {
  return (
    <div
      onClick={() => onClick(province)}
      onMouseEnter={() => onHover(province.id)}
      onMouseLeave={() => onHover(null)}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* Province Image */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src={province.image || "/placeholder.svg"}
            alt={province.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-blue-600/95 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
            }`}
          >
            <div className="text-white text-center transform transition-transform duration-300 ${isHovered ? 'scale-100' : 'scale-90'}">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ChevronRight className="h-8 w-8" />
              </div>
              <p className="font-semibold">Start Test</p>
              <p className="text-sm text-blue-100">Click to begin</p>
            </div>
          </div>

          {/* Province Badge */}
          <div className="absolute top-3 left-3">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
              <MapPin className="h-3 w-3 text-blue-600" />
              <span className="text-xs font-medium text-gray-900 dark:text-white">
                {province.name.length > 12 ? province.name.substring(0, 12) + "..." : province.name}
              </span>
            </div>
          </div>
        </div>

        {/* Province Info */}
        <div className="p-5">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-1">{province.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{province.description}</p>

          {/* Action Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Ready</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 transform transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
