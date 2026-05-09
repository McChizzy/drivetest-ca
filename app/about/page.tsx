import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const coverageStats = [
    { icon: CheckCircle, label: "Regions Listed", value: "13" },
    { icon: BookOpen, label: "Handbook-Backed Sets", value: "3" },
    { icon: Award, label: "Handbook-Aligned Sets", value: "1" },
    { icon: Users, label: "Practice Modes", value: "3" },
  ]

  const trustNotes = [
    {
      title: "Handbook-backed where available",
      description: "Ontario, Alberta, and Saskatchewan currently use handbook-backed practice sets.",
    },
    {
      title: "BC is still a practice build",
      description: "British Columbia follows handbook topics, but it should still be paired with the official ICBC guide.",
    },
    {
      title: "General coverage is labeled clearly",
      description: "Other provinces and territories are currently presented as general practice sets, not official-equivalent exams.",
    },
    {
      title: "Feedback helps tighten accuracy",
      description: "If a sign, rule, or explanation looks off, report it so the question bank can be corrected.",
    },
  ]

  const features = [
    {
      title: "Coverage-Labeled Content",
      description: "Each province is labeled as handbook-backed, handbook-aligned, or general practice so expectations stay clear.",
      icon: BookOpen,
    },
    {
      title: "Randomized Questions",
      description: "Each test session presents questions in random order for varied practice experience.",
      icon: Users,
    },
    {
      title: "Instant Feedback",
      description: "Get immediate explanations for each answer to reinforce learning.",
      icon: CheckCircle,
    },
    {
      title: "Built for Progressive Coverage",
      description: "The strongest province-specific coverage is called out clearly while other regions remain positioned as practice sets.",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About DriveTest CA</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A Canadian driving-test practice app focused on clear coverage labeling, fast repetition, and safer study prep.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coverageStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose DriveTest CA?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've designed our platform with one goal in mind: helping you pass your driving test on the first try.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We believe that everyone deserves access to high-quality driving test preparation. Our platform combines
                handbook-based study content with a modern practice flow to create a more transparent and effective learning
                experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Whether you're a new driver preparing for your first test or an experienced driver moving to a new
                province, we're here to help you succeed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Coverage labels clarify how trustworthy each set is</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Comprehensive question bank with explanations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Mobile-friendly design for study anywhere</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Students+Learning"
                alt="Students learning to drive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Notes Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Coverage and Trust Notes</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The product now aims to be explicit about what is handbook-backed versus what is still general practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustNotes.map((note, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{note.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{note.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Pass Your Driving Test?</h2>
          <p className="text-xl mb-8">Start practicing today and use the official handbook alongside the app for final prep.</p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Practice Test
          </a>
        </div>
      </div>
    </div>
  )
}
