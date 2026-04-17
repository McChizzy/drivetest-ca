import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, History, Lightbulb } from "lucide-react"

interface GenericProvinceTestInfoProps {
  provinceName: string
}

export default function GenericProvinceTestInfo({ provinceName }: GenericProvinceTestInfoProps) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Practice Focus
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Practice common road-rule and road-sign questions</p>
          <p>• Use this as a quick prep tool before reviewing the official handbook</p>
          <p>• Best for spotting weak areas before test day</p>
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
          <p>• 10 to 15 multiple choice questions depending on province coverage</p>
          <p>• Check each answer instantly</p>
          <p>• Immediate explanations help reinforce learning</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-orange-600" />
            Repeat Practice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Retake tests quickly to build recognition and speed</p>
          <p>• Progress is saved locally for later review</p>
          <p>• Missed questions can be revisited after each session</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600" />
            Best Use
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Pair {provinceName} practice with the official handbook</p>
          <p>• Focus on signs, speed limits, right-of-way, and school-zone rules</p>
          <p>• Treat this as a drill tool, not a replacement for the handbook</p>
        </CardContent>
      </Card>
    </div>
  )
}
