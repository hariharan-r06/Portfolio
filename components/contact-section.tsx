"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Mail, Phone, Github, Linkedin, Code, Award } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "harihari91408@gmail.com",
    href: "mailto:harihari91408@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9786929369",
    href: "tel:+919786929369",
  },
]

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

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:harihari91408@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    setFormData({ name: "", email: "", message: "" })
    
    toast({
      title: "Email Client Opened",
      description: "Your email client will open with the message pre-filled. Please send the email to complete the contact process.",
      duration: 5000,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-spacing bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 neon-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 card-modern card-hover group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors duration-200 shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base text-foreground hover:text-primary transition-colors duration-200 break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 card-modern border-border hover:border-primary/40 rounded-xl hover:scale-105 transition-all duration-200 group"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
            <Card className="card-modern card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Send Me a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                      aria-required="true"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold transition-all duration-200 btn-glow neon-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
