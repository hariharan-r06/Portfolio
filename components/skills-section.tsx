"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import type React from "react"
import { useDirectionalInView } from "@/hooks/use-scroll-direction"
import { Card, CardContent } from "@/components/ui/card"
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
  const ref = useRef(null)
  const isInView = useDirectionalInView(ref, "-100px")

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
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.55, delay: categoryIndex * 0.12 }}
              >
                <Card className="h-full hover:scale-105 transition-all duration-300 group border-2 border-border hover-glow bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-background" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const IconForSkill = skillIconMap[skill] ?? FaCode
                        return (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{
                              duration: 0.45,
                              delay: categoryIndex * 0.12 + skillIndex * 0.06,
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary/50 text-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(3,252,211,0.5)] transition-all duration-300 cursor-default backdrop-blur-sm"
                          >
                            <IconForSkill className="w-4 h-4 text-primary" />
                            {skill}
                          </motion.span>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
