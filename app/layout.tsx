import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hariharan R - Full Stack Developer",
  description:
    "Portfolio of Hariharan R, a passionate Full Stack Developer specializing in MERN stack, DevSecOps, and cloud-native applications.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Java Developer",
    "DevOps",
    "React.js",
    "Node.js",
    "MongoDB",
    "Spring Boot",
    "Portfolio",
  ],
  authors: [{ name: "Hariharan R" }],
  creator: "Hariharan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hariharan R - Full Stack Developer",
    description:
      "Portfolio of Hariharan R, a passionate Full Stack Developer specializing in MERN stack, DevSecOps, and cloud-native applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
          <Toaster />
        </Suspense>
      </body>
    </html>
  )
}
