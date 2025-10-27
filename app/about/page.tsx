import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, BookOpen, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Calgary, AB",
      rating: 5,
      text: "This app helped me pass my Alberta driving test on the first try! The questions were very similar to the actual test, and the explanations really helped me understand the rules.",
      avatar: "/placeholder.svg?height=60&width=60&text=SC",
    },
    {
      name: "Michael Thompson",
      location: "Regina, SK",
      rating: 5,
      text: "As someone who moved from Ontario to Saskatchewan, this app was perfect for learning the province-specific rules. The Saskatchewan test questions were spot-on!",
      avatar: "/placeholder.svg?height=60&width=60&text=MT",
    },
    {
      name: "Emma Rodriguez",
      location: "Toronto, ON",
      rating: 5,
      text: "The randomized questions kept me on my toes, and the road sign questions were especially helpful. Great preparation tool for new drivers!",
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
    },
    {
      name: "David Kim",
      location: "Vancouver, BC",
      rating: 5,
      text: "Clean interface, comprehensive questions, and immediate feedback. This is exactly what I needed to prepare for my driving test. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60&text=DK",
    },
  ]

  const stats = [
    { icon: Users, label: "Students Helped", value: "50,000+" },
    { icon: BookOpen, label: "Practice Questions", value: "1,000+" },
    { icon: Award, label: "Pass Rate", value: "94%" },
    { icon: CheckCircle, label: "Provinces Covered", value: "13" },
  ]

  const features = [
    {
      title: "Official Handbook Based",
      description: "All questions are based on official provincial driving handbooks and regulations.",
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
      title: "Province-Specific",
      description: "Tailored content for each province's unique driving laws and conditions.",
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
              Canada's most comprehensive online driving test preparation platform, helping thousands of students pass
              their driving exams with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                official provincial handbooks with modern technology to create an engaging, effective learning
                experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Whether you're a new driver preparing for your first test or an experienced driver moving to a new
                province, we're here to help you succeed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Updated with latest provincial regulations</span>
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

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Join thousands of successful drivers who used DriveTest CA to pass their exams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.text}</p>
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
          <p className="text-xl mb-8">Join thousands of successful drivers and start practicing today.</p>
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
