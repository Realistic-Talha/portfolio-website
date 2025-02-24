"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="relative min-h-screen bg-black/90 text-white">
      <header className="bg-black/50 backdrop-blur-md border-b border-[#00FF00]/20 p-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-[#00FF00] hover:text-[#00FF00]/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 mb-6">
              Have a project in mind? Let's talk about it. I'm always open to new opportunities and interesting
              projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#00FF00] w-5 h-5" />
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="text-[#00FF00] w-5 h-5" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF00] transition-colors"
                >
                  github.com/johndoe
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="text-[#00FF00] w-5 h-5" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF00] transition-colors"
                >
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-[#00FF00]/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-[#00FF00]/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-[#00FF00]/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 transition-all"
                  placeholder="Project discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-[#00FF00]/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 transition-all"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#00FF00] text-black rounded-md font-medium hover:bg-[#00FF00]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

