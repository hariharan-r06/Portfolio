"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, FolderOpen, Mail } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-up, .fade-in")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 bg-background"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4 fade-in-up">
              <p className="text-base md:text-lg text-primary font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="gradient-text">Hariharan R</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed fade-in-up">
              Passionate about building scalable, secure, and user-friendly applications.
              Specializing in MERN stack, Java, and DevOps.
            </p>

            {/* HR-Focused CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 fade-in-up">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl neon-glow btn-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>

              <Button
                size="lg"
                asChild
                variant="outline"
                className="group bg-transparent hover:bg-card text-foreground border-primary hover:border-primary/80 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-200 hover-glow"
              >
                <a
                  href="https://qkinmnpr8gzqyfly.public.blob.vercel-storage.com/Hariharan%20R%20-%20Resume%20.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume"
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="group bg-transparent hover:bg-card text-foreground border-border hover:border-primary/50 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-200"
                aria-label="View projects"
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
                <img
                  src="/passport1.png"
                  alt="Hariharan R - Full Stack Developer"
                  className="w-full h-full object-cover relative z-10"
                  loading="eager"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
