import type { Question } from "@/lib/types"

export const QUIZ_PROGRESS_STORAGE_KEY = "drivingTestProgress"

export interface MissedQuestionRecord {
  id: number
  userAnswer: number
}

export interface QuizProgressSession {
  id: string
  province: string
  date: string
  score: number
  total: number
  missedQuestions: MissedQuestionRecord[]
  timeUsed: number
}

export const loadQuizProgress = (): QuizProgressSession[] => {
  if (typeof window === "undefined") return []

  try {
    const saved = window.localStorage.getItem(QUIZ_PROGRESS_STORAGE_KEY)
    if (!saved) return []

    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const saveQuizProgressSession = (session: QuizProgressSession) => {
  if (typeof window === "undefined") return

  const existing = loadQuizProgress().filter((item) => item.id !== session.id)
  window.localStorage.setItem(QUIZ_PROGRESS_STORAGE_KEY, JSON.stringify([session, ...existing]))
}

export const clearQuizProgress = () => {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(QUIZ_PROGRESS_STORAGE_KEY)
}

export const buildMissedQuestionRecords = (questions: Question[], answers: number[]): MissedQuestionRecord[] => {
  return answers
    .map((answer, index) => ({ answer, question: questions[index] }))
    .filter(({ answer, question }) => answer !== question.correctAnswer)
    .map(({ answer, question }) => ({ id: question.id, userAnswer: answer }))
}

export const buildQuizProgressSession = ({
  province,
  score,
  total,
  timeUsed,
  missedQuestions,
}: {
  province: string
  score: number
  total: number
  timeUsed: number
  missedQuestions: MissedQuestionRecord[]
}): QuizProgressSession => ({
  id: `${province}-${Date.now()}`,
  province,
  date: new Date().toISOString(),
  score,
  total,
  missedQuestions,
  timeUsed,
})

export const getQuizSessionById = (sessionId: string): QuizProgressSession | null => {
  return loadQuizProgress().find((session) => session.id === sessionId) ?? null
}
