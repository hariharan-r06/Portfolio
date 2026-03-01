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

export function SocialBar() {
  return (
    <>
      {/* Desktop - Fixed Left Side */}
      <aside
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
        aria-label="Social media links"
      >
        <nav className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 card-modern border-border hover:border-primary/60 rounded-xl hover:scale-110 transition-all duration-200 group hover-glow"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </a>
          ))}
        </nav>

        {/* Vertical divider */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </aside>

      {/* Mobile - Bottom Bar (shown on small screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border">
        <nav className="flex justify-around items-center py-3 px-4" aria-label="Social media links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
