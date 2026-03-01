"use client"

import { useEffect, useRef } from "react"
import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FaJava,
  FaJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaShareAlt,
  FaGithub,
  FaAws,
  FaDocker,
  FaGlobe,
  FaTools,
  FaCode,
} from "react-icons/fa"
import {
  SiC,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiFirebase,
  SiJenkins,
  SiMongodb as SiMongodbAlt,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Languages",
    icon: FaCode,
    skills: ["Java", "JavaScript", "C", "Python", "SQL"],
  },
  {
    title: "Web & Frameworks",
    icon: FaGlobe,
    skills: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS", "Spring Boot", "Node.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["MySQL", "MongoDB", "MongoDB Atlas"],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    skills: ["Git/GitHub", "AWS", "Docker", "Kubernetes", "Firebase", "Jenkins"],
  },
]

export function SkillsSection() {
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

  const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Java: FaJava,
    JavaScript: FaJs,
    C: SiC,
    Python: FaPython,
    SQL: FaDatabase,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    "React.js": FaReact,
    Bootstrap: FaBootstrap,
    "Tailwind CSS": SiTailwindcss,
    "Spring Boot": SiSpringboot,
    "Node.js": FaNodeJs,
    "REST APIs": FaShareAlt,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    "MongoDB Atlas": SiMongodbAlt,
    "Git/GitHub": FaGithub,
    AWS: FaAws,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    Firebase: SiFirebase,
    Jenkins: SiJenkins,
  }

  return (
    <section id="skills" className="section-spacing bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 neon-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="h-full card-modern card-hover group fade-in-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const IconForSkill = skillIconMap[skill] ?? FaCode
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg text-sm font-medium text-foreground transition-all duration-200 group/item"
                        >
                          <IconForSkill className="w-4 h-4 text-primary" />
                          <span>{skill}</span>
                        </span>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
