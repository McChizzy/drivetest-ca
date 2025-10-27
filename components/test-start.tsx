"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Target, AlertCircle } from "lucide-react"

interface TestStartProps {
  provinceName: string
  questionCount: number
  timeLimit: number
  onStart: () => void
}

export default function TestStart({ provinceName, questionCount, timeLimit, onStart }: TestStartProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Ready to Start Your Test?</CardTitle>
          <p className="text-gray-600 dark:text-gray-400">{provinceName} Driving Knowledge Test</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">{questionCount} Questions</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Multiple Choice</div>
            </div>

            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold">{timeLimit} Minutes</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Time Limit</div>
            </div>

            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold">80% to Pass</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Passing Score</div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Test Instructions:</p>
                <ul className="space-y-1 text-yellow-700 dark:text-yellow-300">
                  <li>• Read each question carefully</li>
                  <li>• Select your answer, then click "Check Answer"</li>
                  <li>• Review the explanation before moving to the next question</li>
                  <li>• The timer will start when you click "Start Test"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={onStart} size="lg" className="px-8 py-3 text-lg">
              Start Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
