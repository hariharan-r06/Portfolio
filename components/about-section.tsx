"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useDirectionalInView } from "@/hooks/use-scroll-direction"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useDirectionalInView(ref, "-100px")

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/developer-laptop.png"
                  alt="Hariharan R working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {
                  "I'm a 3rd year IT student at Sri Ramakrishna Engineering College, passionate about Full Stack Development and building scalable, secure, and user-friendly applications."
                }
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

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
