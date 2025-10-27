import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DriveTest CA - Canadian Driving Test Preparation",
  description:
    "Prepare for your Canadian driving test with province-specific practice tests for Alberta, Saskatchewan, and all Canadian provinces. Free online driving test prep with randomized questions and instant feedback.",
  keywords:
    "Canadian driving test, driving exam, Alberta driving test, Saskatchewan driving test, SGI, driving practice, driving knowledge test",
  authors: [{ name: "DriveTest CA" }],
  openGraph: {
    title: "DriveTest CA - Canadian Driving Test Preparation",
    description:
      "Prepare for your Canadian driving test with comprehensive practice tests for all provinces. Pass your driving exam with confidence.",
    type: "website",
    locale: "en_CA",
    siteName: "DriveTest CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveTest CA - Canadian Driving Test Preparation",
    description: "Prepare for your Canadian driving test with comprehensive practice tests for all provinces.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
