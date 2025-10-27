export interface Province {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  image?: string
}

export interface QuizState {
  currentQuestion: number
  answers: number[]
  score: number
  isCompleted: boolean
  timeRemaining: number
  isStarted: boolean
}
