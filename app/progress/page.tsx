import ProgressTracker from "@/components/progress/progress-tracker"
import { provinces } from "@/lib/data"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProgressTracker />
    </div>
  )
}