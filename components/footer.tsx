"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code, Award } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/hariharan-r06",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hariharan-r06",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/hariharan-r06/",
    icon: Code,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/hari_2305032",
    icon: Award,
  },
]

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                /* Added teal glow hover effect to social links */
                className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(3,252,211,0.3)] transition-all duration-300 border border-border"
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground">© 2025 Hariharan R | All Rights Reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
