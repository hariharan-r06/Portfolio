"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "MongoDB",
    subtitle: "Completed MongoDB Basics for Students Training with 12 skill badges",
    description: "Comprehensive training covering MongoDB fundamentals, data modeling, and database operations.",
    image: "/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2 (1).jpg",
    link: "https://qkinmnpr8gzqyfly.public.blob.vercel-storage.com/mongodb.pdf",
  },
  {
    title: "Celonis",
    subtitle: "Process Mining and Execution Management",
    description: "Advanced certification in process mining, data analysis, and business process optimization.",
    image: "/ZnXCDZbWFbowexa7_Celoniscover-1-.jpg",
    link: "https://qkinmnpr8gzqyfly.public.blob.vercel-storage.com/Celonis.pdf",
  },
  {
    title: "Coding Platform Certificate",
    subtitle: "Programming and Problem Solving",
    description: "Recognition for excellence in competitive programming and algorithmic problem solving.",
    image: "/best-coding-platforms-engineers-must-know-startuptalky--3-.jpg",
    link: "https://qkinmnpr8gzqyfly.public.blob.vercel-storage.com/Certificate.pdf",
  },
  {
    title: "Infosys Springboard",
    subtitle: "Digital Skills and Technology Training",
    description: "Comprehensive training program covering modern software development practices and technologies.",
    image: "/maxresdefault.jpg",
    link: "https://qkinmnpr8gzqyfly.public.blob.vercel-storage.com/Infosys%20springboard.pdf",
  },
]

export function CertificationsSection() {
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
      const elements = ref.current.querySelectorAll(".fade-in-up")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="section-spacing bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
              Certifications & Achievements
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 neon-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements demonstrating continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="h-full group card-modern card-hover flex flex-col fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                {/* Certificate Image */}
                <div className="mb-4 flex justify-center">
                  <div className="relative w-40 h-28 rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-200 shadow-lg shadow-primary/10">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium mt-1">{cert.subtitle}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-4">
                <p className="text-muted-foreground leading-relaxed flex-1">{cert.description}</p>

                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="w-full bg-transparent hover:bg-card border-border hover:border-primary/50 transition-all duration-200"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
