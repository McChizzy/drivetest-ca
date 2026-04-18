import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, CarFront, ImageIcon } from "lucide-react"

export default function BritishColumbiaTestInfo() {
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
          <p>• Built from ICBC Learn to Drive Smart topics</p>
          <p>• Covers signs, rules of the road, and sharing-the-road basics</p>
          <p>• Designed as BC learner-style knowledge practice</p>
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
          <p>• Quick mode uses 10 randomized questions</p>
          <p>• Full practice uses the full BC question set</p>
          <p>• Instant explanations reinforce handbook wording</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CarFront className="h-5 w-5 text-orange-600" />
            BC Focus
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Sign recognition and rules-of-the-road questions matter most</p>
          <p>• School-zone, pedestrian, and road-sharing rules are common weak spots</p>
          <p>• Use missed-question review to tighten weak areas fast</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-600" />
            Source Quality
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Based on official ICBC handbook structure</p>
          <p>• Question categories follow signs, road rules, and safety themes</p>
          <p>• Best used together with the Learn to Drive Smart guide</p>
        </CardContent>
      </Card>
    </div>
  )
}
