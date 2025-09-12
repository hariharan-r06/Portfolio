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

export function SocialBar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          className="p-3 bg-card border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.a>
      ))}

      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ delay: 1 }}
        className="w-px bg-border mx-auto"
      />
    </motion.div>
  )
}
