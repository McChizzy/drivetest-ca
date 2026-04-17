"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import ReviewSession from "@/components/progress/review-session"
import { getQuestionsByProvince } from "@/lib/questions"
import { getQuizSessionById } from "@/lib/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReviewPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session")

  const session = useMemo(() => {
    if (!sessionId) return null
    return getQuizSessionById(sessionId)
  }, [sessionId])

  if (!sessionId || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-center">Review Session Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              We couldn&apos;t find the saved quiz session for review.
            </p>
            <Button onClick={() => (window.location.href = "/progress")}>Back to Progress</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const questions = getQuestionsByProvince(session.province.toLowerCase().replace(/\s+/g, "-"))

  return (
    <div className="min-h-screen bg-background">
      <ReviewSession questions={questions} session={session} />
    </div>
  )
}
