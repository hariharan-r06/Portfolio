"use client"

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
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-modern border-border hover:border-primary/40 rounded-xl hover:scale-105 transition-all duration-200 group hover-glow"
                aria-label={`Visit ${link.name} profile`}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hariharan R. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
