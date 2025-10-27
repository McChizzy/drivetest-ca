"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { provinces, getQuestionsByProvince } from "@/lib/data"
import type { Province, Question } from "@/lib/types"
import Quiz from "@/components/quiz"
import TestStart from "@/components/test-start"
import AlbertaTestInfo from "@/components/alberta-test-info"
import SaskatchewanTestInfo from "@/components/saskatchewan-test-info"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProvinceTestPage() {
  const params = useParams()
  const slug = params.slug as string

  const [province, setProvince] = useState<Province | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const foundProvince = provinces.find((p) => p.slug === slug)
    if (foundProvince) {
      setProvince(foundProvince)
      setQuestions(getQuestionsByProvince(slug))
    }
    setIsLoading(false)
  }, [slug])

  const handleStartTest = () => {
    setHasStarted(true)
  }

  const handleQuizComplete = (score: number, timeUsed: number) => {
    console.log(`Quiz completed with score: ${score}, time used: ${timeUsed} seconds`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!province) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Province not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const timeLimit = province.slug === "alberta" || province.slug === "saskatchewan" ? 30 : 20

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${province.image})`,
      }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {province.name} Driving Knowledge Test
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{province.description}</p>

            {/* Province-specific info */}
            {!hasStarted && (
              <>
                {province.slug === "alberta" && <AlbertaTestInfo />}
                {province.slug === "saskatchewan" && <SaskatchewanTestInfo />}
              </>
            )}
          </div>
        </div>

        {/* Test Content */}
        {!hasStarted ? (
          <TestStart
            provinceName={province.name}
            questionCount={questions.length}
            timeLimit={timeLimit}
            onStart={handleStartTest}
          />
        ) : (
          <Quiz
            questions={questions}
            provinceName={province.name}
            timeLimit={timeLimit}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  )
}
