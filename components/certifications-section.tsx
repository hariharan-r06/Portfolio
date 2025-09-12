"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useDirectionalInView } from "@/hooks/use-scroll-direction"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"

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
  const ref = useRef(null)
  const isInView = useDirectionalInView(ref, "-100px")

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-border/50 hover:border-primary/20 teal-glow">
                <CardContent className="p-6">
                  {/* Certificate Image */}
                  <div className="mb-4 flex justify-center">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-32 h-24 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-4">
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{cert.subtitle}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                      <div className="flex items-center justify-between">
                        

                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="hover:bg-primary hover:text-white bg-transparent"
                        >
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    </div>
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
