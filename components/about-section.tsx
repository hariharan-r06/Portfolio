"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Code, Lightbulb } from "lucide-react"

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)

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

    if (ref.current) {
      const elements = ref.current.querySelectorAll(".fade-in-up, .fade-in")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "3rd year IT student at Sri Ramakrishna Engineering College",
    },
    {
      icon: Code,
      title: "Focus",
      description: "Full Stack Development, Cloud-native applications, and DevSecOps",
    },
    {
      icon: Lightbulb,
      title: "Approach",
      description: "Continuous learning and applying cutting-edge technologies",
    },
  ]

  return (
    <section id="about" className="section-spacing bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 neon-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer dedicated to creating impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start fade-in">
            <div className="relative group">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-border card-hover">
                <img
                  src="/developer-laptop.png"
                  alt="Hariharan R - Developer at work"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                I'm a 3rd year IT student at{" "}
                <span className="text-primary font-medium">Sri Ramakrishna Engineering College</span>,
                passionate about Full Stack Development and building scalable, secure, and user-friendly
                applications.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently focusing on problem-solving, cloud-native applications, and DevSecOps with AI-powered
                monitoring systems. I thrive on learning new technologies and applying them in real-world projects.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in technology is driven by curiosity and a desire to create meaningful solutions that make a
                difference. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={highlight.title}
                    className="p-4 rounded-xl card-modern card-hover group fade-in-up"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">{highlight.title}</h3>
                      <p className="text-xs text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
