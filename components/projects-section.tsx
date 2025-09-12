"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useDirectionalInView } from "@/hooks/use-scroll-direction"
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
  const ref = useRef(null)
  const isInView = useDirectionalInView(ref, "-100px")

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full transition-all duration-500 group border-2 border-border/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.03] bg-card/50 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg p-0">
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardHeader className="px-6 pt-6 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                      {project.title}
                    </CardTitle>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30 group-hover:bg-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{project.date}</p>
                </CardHeader>

                <CardContent className="px-6 pb-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105 group-hover:shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(3,252,211,0.4)] hover:scale-105 transition-all duration-300 group/button rounded-lg"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/button:text-primary transition-all duration-300 group-hover/button:scale-110" />
                        Code
                      </a>
                    </Button>

                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/80 hover:shadow-[0_0_25px_rgba(3,252,211,0.5)] hover:scale-105 transition-all duration-300 rounded-lg"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
