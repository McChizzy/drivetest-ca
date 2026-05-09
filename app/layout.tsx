import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-driving-test-app-phi.vercel.app"),
  title: "DriveTest CA - Canadian Driving Test Preparation",
  description:
    "Prepare for your Canadian driving test with handbook-backed and general practice sets across Canadian provinces and territories. Free online driving test prep with randomized questions and instant feedback.",
  keywords:
    "Canadian driving test, driving exam, Alberta driving test, Saskatchewan driving test, SGI, driving practice, driving knowledge test",
  authors: [{ name: "DriveTest CA" }],
  openGraph: {
    title: "DriveTest CA - Canadian Driving Test Preparation",
    description:
      "Prepare for your Canadian driving test with handbook-backed and general practice sets across Canadian provinces and territories.",
    type: "website",
    locale: "en_CA",
    siteName: "DriveTest CA",
    images: [{ url: "/apple-icon.png", width: 180, height: 180, alt: "DriveTest CA icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveTest CA - Canadian Driving Test Preparation",
    description: "Prepare for your Canadian driving test with handbook-backed and general practice sets across Canadian provinces and territories.",
    images: ["/apple-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  generator: "v0.app",
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
