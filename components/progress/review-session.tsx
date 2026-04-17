"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, RotateCcw } from "lucide-react"
import type { Question } from "@/lib/types"
import type { QuizProgressSession } from "@/lib/progress"

interface ReviewQuestion extends Question {
  userAnswer: number
}

interface ReviewSessionProps {
  questions: Question[]
  session: QuizProgressSession
}

export default function ReviewSession({ questions, session }: ReviewSessionProps) {
  const reviewQuestions = useMemo<ReviewQuestion[]>(() => {
    return session.missedQuestions
      .map((missed) => {
        const question = questions.find((item) => item.id === missed.id)
        if (!question) return null
        return { ...question, userAnswer: missed.userAnswer }
      })
      .filter((item): item is ReviewQuestion => item !== null)
  }, [questions, session.missedQuestions])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = reviewQuestions[currentQuestionIndex]

  if (!currentQuestion || reviewQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-center">No Missed Questions Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              This session doesn&apos;t have reviewable missed questions.
            </p>
            <Button onClick={() => (window.location.href = "/progress")}>Back to Progress</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-4">
              <span>Review Session, {session.province}</span>
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                {currentQuestionIndex + 1} of {reviewQuestions.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Review Instructions</p>
                    <ul className="space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
                      <li>• Read the explanation carefully</li>
                      <li>• Compare your answer to the correct answer</li>
                      <li>• Retry the test later to reinforce weak spots</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{currentQuestion.question}</h3>

                <div className="grid gap-3">
                  {currentQuestion.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        index === currentQuestion.userAnswer
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : index === currentQuestion.correctAnswer
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                        {index === currentQuestion.userAnswer && (
                          <span className="text-red-600 font-medium whitespace-nowrap">Your Answer</span>
                        )}
                        {index === currentQuestion.correctAnswer && (
                          <span className="text-green-600 font-medium whitespace-nowrap">Correct</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {currentQuestion.explanation && (
                  <div className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                    <p className="text-gray-700 dark:text-gray-300">{currentQuestion.explanation}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionIndex((value) => Math.max(value - 1, 0))}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionIndex((value) => Math.min(value + 1, reviewQuestions.length - 1))}
                  disabled={currentQuestionIndex === reviewQuestions.length - 1}
                >
                  Next
                </Button>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => (window.location.href = `/province/${session.province.toLowerCase().replace(/\s+/g, "-")}`)}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Test
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
