"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { clearQuizProgress, loadQuizProgress, type QuizProgressSession } from "@/lib/progress"

export default function ProgressTracker() {
  const [progressData, setProgressData] = useState<QuizProgressSession[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadProgress = () => {
      try {
        setProgressData(loadQuizProgress())
      } catch (e) {
        console.error("Failed to load progress data:", e)
      } finally {
        setLoading(false)
      }
    }
    
    loadProgress()
  }, [])

  const clearProgress = () => {
    clearQuizProgress()
    setProgressData([])
  }

  const viewMissedQuestions = (sessionId: string) => {
    router.push(`/review?session=${sessionId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (progressData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-center">No Progress Data Yet</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Take a practice test to start tracking your progress.
            </p>
            <Button onClick={() => router.push("/")}>
              Start a Test
            </Button>
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
            <CardTitle className="flex items-center justify-between">
              <span>Your Progress</span>
              <Button variant="outline" onClick={clearProgress}>
                Clear All Progress
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {progressData.map((session, index) => {
                const percentage = Math.round((session.score / session.total) * 100)
                const passed = percentage >= 80
                
                return (
                  <div key={`${session.province}-${session.date}`} className="border-b pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {session.province} Test - {new Date(session.date).toLocaleDateString()}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {session.score}/{session.total} questions correct ({percentage}%)
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {passed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <span className={passed ? "text-green-600" : "text-red-600"}>
                          {passed ? "Passed" : "Needs Review"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{percentage}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{Math.floor(session.timeUsed / 60)}:{(session.timeUsed % 60).toString().padStart(2, "0")} min</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{session.missedQuestions.length} missed questions</span>
                      </div>
                      {session.missedQuestions.length > 0 && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => viewMissedQuestions(session.id)}
                          className="text-sm"
                        >
                          Review Missed
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}