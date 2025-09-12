import { Navbar } from "@/components/navbar"
import { SocialBar } from "@/components/social-bar"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <SocialBar />
      <main className="relative z-10">
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  )
}


