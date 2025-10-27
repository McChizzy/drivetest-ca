import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ExternalLink, FileText, Video, Users } from "lucide-react"

export default function ResourcesPage() {
  const handbooks = [
    {
      province: "Alberta",
      title: "Alberta Driver's Handbook",
      description: "Official handbook covering all Alberta driving laws and regulations",
      url: "#",
      size: "2.3 MB",
    },
    {
      province: "Saskatchewan",
      title: "SGI Driver's Handbook",
      description: "Comprehensive guide to Saskatchewan driving rules and road safety",
      url: "#",
      size: "1.8 MB",
    },
    {
      province: "Ontario",
      title: "Ontario Driver's Handbook",
      description: "Complete guide to driving in Ontario with updated regulations",
      url: "#",
      size: "2.1 MB",
    },
    {
      province: "British Columbia",
      title: "BC Driver's Handbook",
      description: "Official BC driving manual with mountain and coastal driving tips",
      url: "#",
      size: "2.5 MB",
    },
  ]

  const studyGuides = [
    {
      title: "Road Signs Reference Guide",
      description: "Complete visual guide to Canadian road signs and their meanings",
      icon: FileText,
      type: "PDF Guide",
    },
    {
      title: "Winter Driving Tips",
      description: "Essential safety tips for driving in Canadian winter conditions",
      icon: FileText,
      type: "Article",
    },
    {
      title: "Parallel Parking Tutorial",
      description: "Step-by-step guide to mastering parallel parking",
      icon: Video,
      type: "Video",
    },
    {
      title: "Highway Driving Basics",
      description: "Learn the fundamentals of safe highway driving",
      icon: FileText,
      type: "Guide",
    },
  ]

  const externalLinks = [
    {
      title: "Transport Canada",
      description: "Official Canadian transportation authority",
      url: "https://tc.canada.ca",
      icon: ExternalLink,
    },
    {
      title: "Alberta Transportation",
      description: "Alberta's official transportation department",
      url: "https://www.alberta.ca/transportation",
      icon: ExternalLink,
    },
    {
      title: "Saskatchewan SGI",
      description: "Saskatchewan Government Insurance driving resources",
      url: "https://sgi.sk.ca",
      icon: ExternalLink,
    },
    {
      title: "Driving Schools Directory",
      description: "Find certified driving schools across Canada",
      url: "#",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Driving Resources</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Everything you need to prepare for your Canadian driving test, from official handbooks to study guides.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Official Handbooks */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Official Provincial Handbooks</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Download the latest official driving handbooks for each province
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {handbooks.map((handbook, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    {handbook.province}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{handbook.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{handbook.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{handbook.size}</span>
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Guides */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Study Guides & Tutorials</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Additional resources to help you master driving skills and knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <guide.icon className="h-8 w-8 text-blue-600" />
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {guide.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{guide.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* External Links */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Useful Links</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Official government resources and additional learning materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <link.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" className="w-full flex items-center gap-1 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Study Tips for Success</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Read the Handbook</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Start with your province's official handbook to understand the rules and regulations.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Practice Regularly</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Take practice tests frequently to reinforce your knowledge and identify weak areas.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Video className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learn from Mistakes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Review explanations for incorrect answers to understand the reasoning behind each rule.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
