import { Navbar } from "@/components/navbar"
import { SocialBar } from "@/components/social-bar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <SocialBar />
      <main className="relative z-10">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}


