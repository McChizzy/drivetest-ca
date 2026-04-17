import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, AlertTriangle, ImageIcon } from "lucide-react"

export default function SaskatchewanTestInfo() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Test Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Based on the official SGI Driver's Handbook</p>
          <p>• Covers Saskatchewan traffic laws and road signs</p>
          <p>• Includes SGI-style sign meaning and speed-law questions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Test Format
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• 15 multiple choice questions</p>
          <p>• Select an answer, then check it instantly</p>
          <p>• Immediate feedback with explanations</p>
          <p>• 80% required to pass (12/15 correct)</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Saskatchewan Specifics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• 80 km/h basic speed limit when no sign is posted</p>
          <p>• 60 km/h when passing stopped emergency or tow vehicles</p>
          <p>• School-zone caution rules and warning-sign recognition</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-600" />
            Visual Practice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Includes sign-based questions with visual cues</p>
          <p>• Designed to help with quick symbol recognition</p>
          <p>• Better aligned with how handbook signs are learned</p>
        </CardContent>
      </Card>
    </div>
  )
}
