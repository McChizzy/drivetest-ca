import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, AlertTriangle } from "lucide-react"

export default function SaskatchewanTestInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
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
          <p>• Includes prairie driving conditions</p>
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
          <p>• Select answer, then click "Check Answer"</p>
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
          <p>• 110 km/h highway speed limits</p>
          <p>• $580 distracted driving fine</p>
          <p>• Move Over law for emergency vehicles</p>
        </CardContent>
      </Card>
    </div>
  )
}
