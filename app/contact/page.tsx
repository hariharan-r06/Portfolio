import { Navbar } from "@/components/navbar"
import { SocialBar } from "@/components/social-bar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <SocialBar />
      <main className="relative z-10">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}


