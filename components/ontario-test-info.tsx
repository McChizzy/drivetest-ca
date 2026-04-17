import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, CarFront, ImageIcon } from "lucide-react"

export default function OntarioTestInfo() {
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
          <p>• Built from Ontario handbook rules and sign topics</p>
          <p>• Covers defensive driving, signs, and school-bus rules</p>
          <p>• Focused on practical G1-style knowledge practice</p>
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
            <CarFront className="h-5 w-5 text-orange-600" />
            Ontario Focus
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• G1 learners must know stop, yield, rail, and school-bus rules</p>
          <p>• Defensive driving basics like visibility, space, and communication matter</p>
          <p>• Sign recognition and right-of-way mistakes are common weak spots</p>
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
          <p>• Sign-based questions help with quick recognition</p>
          <p>• Designed for repetition so weak areas show up fast</p>
          <p>• Best used alongside the Ontario driver handbook</p>
        </CardContent>
      </Card>
    </div>
  )
}
