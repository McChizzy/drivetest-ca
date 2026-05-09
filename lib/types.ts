export interface Province {
  id: string
  name: string
  slug: string
  image: string
  description: string
  coverageLevel?: "handbook-backed" | "handbook-aligned" | "general-practice"
}

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  image?: string
  categories?: string[]
}

export interface QuizState {
  currentQuestion: number
  answers: number[]
  score: number
  isCompleted: boolean
  timeRemaining: number
  isStarted: boolean
}
