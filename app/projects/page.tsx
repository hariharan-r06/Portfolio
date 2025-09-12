import { Navbar } from "@/components/navbar"
import { SocialBar } from "@/components/social-bar"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <SocialBar />
      <main className="relative z-10">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}


