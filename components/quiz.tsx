"use client"

import { useState, useEffect } from "react"
import type { Question, QuizState } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"
import Image from "next/image"

interface QuizProps {
  questions: Question[]
  provinceName: string
  timeLimit: number
  onComplete: (score: number, timeUsed: number) => void
}

export default function Quiz({ questions, provinceName, timeLimit, onComplete }: QuizProps) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    isCompleted: false,
    timeRemaining: timeLimit * 60,
    isStarted: true,
  })

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    if (quizState.isStarted && !quizState.isCompleted && quizState.timeRemaining > 0) {
      const timer = setInterval(() => {
        setQuizState((prev) => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }))
      }, 1000)

      return () => clearInterval(timer)
    } else if (quizState.timeRemaining === 0 && !quizState.isCompleted) {
      const timeUsed = timeLimit * 60 - quizState.timeRemaining
      setQuizState((prev) => ({ ...prev, isCompleted: true }))
      onComplete(quizState.score, timeUsed)
    }
  }, [quizState.isStarted, quizState.isCompleted, quizState.timeRemaining, timeLimit, quizState.score, onComplete])

  const currentQuestion = questions[quizState.currentQuestion]
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (!hasCheckedAnswer) {
      setSelectedAnswer(answerIndex)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return

    setHasCheckedAnswer(true)
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer
    const newAnswers = [...quizState.answers, selectedAnswer]
    const newScore = isAnswerCorrect ? quizState.score + 1 : quizState.score

    if (quizState.currentQuestion === questions.length - 1) {
      const timeUsed = timeLimit * 60 - quizState.timeRemaining
      setQuizState({
        ...quizState,
        answers: newAnswers,
        score: newScore,
        isCompleted: true,
      })
      onComplete(newScore, timeUsed)
    } else {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers,
        score: newScore,
      })
      setSelectedAnswer(null)
      setHasCheckedAnswer(false)
      setShowExplanation(false)
    }
  }

  if (quizState.isCompleted) {
    const percentage = Math.round((quizState.score / questions.length) * 100)
    const passed = percentage >= 80
    const timeUsed = timeLimit * 60 - quizState.timeRemaining

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              {passed ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <XCircle className="h-8 w-8 text-red-500" />
              )}
              {passed ? "Congratulations! You Passed!" : "Test Complete"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                {quizState.score}/{questions.length}
              </div>
              <p className="text-2xl font-semibold">{percentage}%</p>
              <p className="text-lg text-gray-600 dark:text-gray-400">Time used: {formatTime(timeUsed)}</p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {passed
                  ? "You've demonstrated good knowledge of driving rules!"
                  : "You need 80% to pass. Review the handbook and try again."}
              </p>
            </div>

            <div className="space-y-2">
              <Button onClick={() => window.location.reload()} className="mr-4">
                Try Again
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Fixed Header with Timer and Progress */}
      <div className="w-full max-w-4xl mx-auto mb-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {quizState.currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4" />
              <span
                className={`${quizState.timeRemaining < 300 ? "text-red-600" : "text-gray-600 dark:text-gray-400"}`}
              >
                {formatTime(quizState.timeRemaining)}
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            Score: {quizState.score}/{quizState.currentQuestion + (hasCheckedAnswer ? 1 : 0)}
          </div>
        </div>
      </div>

      {/* Main Question Card - Centered and Sized to Fit Screen */}
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-4xl shadow-lg">
          {currentQuestion.image && (
            <div className="relative h-80 w-full bg-gray-100 dark:bg-gray-800">
              <Image
                src={currentQuestion.image || "/placeholder.svg"}
                alt="Road sign or driving scenario"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          )}

          <CardHeader className="pb-4">
            <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Answer Options */}
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 "

                if (!hasCheckedAnswer) {
                  buttonClass +=
                    selectedAnswer === index
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
                } else {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass +=
                      "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                  } else if (selectedAnswer === index && index !== currentQuestion.correctAnswer) {
                    buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                  } else {
                    buttonClass += "border-gray-200 dark:border-gray-700 opacity-60"
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={hasCheckedAnswer}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="font-bold mr-3 text-lg">{String.fromCharCode(65 + index)}.</span>
                        <span className="text-base">{option}</span>
                      </div>
                      {hasCheckedAnswer && (
                        <div className="ml-2">
                          {index === currentQuestion.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showExplanation && currentQuestion.explanation && (
              <div
                className={`p-4 rounded-lg border-l-4 ${
                  isCorrect
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500"
                }`}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className={`h-5 w-5 mt-0.5 ${isCorrect ? "text-green-600" : "text-red-600"}`} />
                  <div>
                    <p className="font-semibold mb-1">{isCorrect ? "Correct!" : "Incorrect"}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {hasCheckedAnswer && <span>{isCorrect ? "✓ Correct answer" : "✗ Incorrect answer"}</span>}
              </div>

              <div className="space-x-3">
                {!hasCheckedAnswer ? (
                  <Button onClick={handleCheckAnswer} disabled={selectedAnswer === null} className="px-6">
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="px-6">
                    {quizState.currentQuestion === questions.length - 1 ? "Finish Test" : "Next Question"}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
