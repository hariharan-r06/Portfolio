import { Navbar } from "@/components/navbar"
import { SocialBar } from "@/components/social-bar"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <SocialBar />
      <main className="relative z-10">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}


