"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "CharityConnect – Charity Community Platform",
    description:
      "A MERN-based platform connecting donors with NGOs. Features include NGO verification, JWT-secured login, and smooth user experience with real-time donation tracking and impact analytics.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/hariharan-r06/CharityCommunityWeb",
    liveUrl: "#",
    date: "Feb 2025",
    status: "Completed",
    image: "/project/Screenshot 2025-05-16 194949.png",
  },
  {
    title: "AI-Powered DevSecOps Forensics",
    description:
      "A Kubernetes-based CI/CD forensic monitoring system with real-time anomaly detection, automated incident response, and evidence preservation. Uses Jenkins, Prometheus, ELK, Grafana, Docker, and ML models.",
    techStack: ["Kubernetes", "Jenkins", "Docker", "Prometheus", "ELK Stack", "Grafana", "Python", "ML"],
    githubUrl: "https://github.com/hariharan-r06/ai-devsecops-forensics",
    liveUrl: "#",
    date: "Ongoing – 2025",
    status: "In Progress",
    image: "/project/Screenshot 2025-09-12 100226.png",
  },
  {
    title: "DevTrack Backend",
    description:
      "Backend service for DevTrack, a project and task management system. Provides secure REST APIs for authentication, user management, and task operations using Spring Boot and MySQL with JWT authentication.",
    techStack: ["Java 17+", "Spring Boot", "MySQL", "JWT", "Maven"],
    githubUrl: "https://github.com/hariharan-r06/devtrack-system",
    liveUrl: "#",
    date: "Jan 2025",
    status: "Completed",
    image: "/project/Screenshot 2025-09-12 100644.png",
  },
  {
    title: "Sieger's Image Processing System (IPS)",
    description:
      "An industry consultancy project for automated defect detection in yarn cones. Uses high-resolution cameras with UV/daylight lighting and real-time image analysis software. My contribution: frontend development and system integration.",
    techStack: ["React.js", "JavaScript", "REST APIs", "Image Processing Tools"],
    githubUrl: "https://github.com/hariharan-r06/yarn_detection",
    liveUrl: "#",
    date: "Ongoing – 2025",
    status: "In Progress",
    image: "/project/Screenshot 2025-09-12 100409.png",
  },
]

export function ProjectsSection() {
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
    <section id="projects" className="section-spacing bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 neon-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="h-full group card-modern card-hover overflow-hidden flex flex-col fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors duration-200 flex-1">
                    {project.title}
                  </CardTitle>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.date}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-4">
                <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 rounded-md text-xs font-medium text-foreground transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 bg-transparent hover:bg-card border-border hover:border-primary/50 transition-all duration-200"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>

                  {project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 btn-glow"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
