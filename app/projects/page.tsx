"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "EcoTracker",
    description:
      "A comprehensive Flutter application for tracking and reducing carbon footprint with real-time analytics and personalized recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "DevConnect",
    description:
      "A social platform for developers to collaborate on projects, share knowledge, and find mentorship opportunities.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web App",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "HealthMate",
    description:
      "Healthcare appointment booking and management system with real-time notifications and telemedicine features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile App",
    technologies: ["Flutter", "Node.js", "WebRTC"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          A showcase of my recent work in mobile and web development. Each project represents unique challenges and
          innovative solutions.
        </p>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <div className="text-[#00FF00] text-sm mb-4">{project.category}</div>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-sm bg-[#00FF00]/10 text-[#00FF00] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-[#00FF00]/20 text-[#00FF00] rounded-md hover:bg-[#00FF00]/10 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#00FF00] text-black rounded-md hover:bg-[#00FF00]/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Interested in working together?</h3>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-[#00FF00] text-black rounded-md hover:bg-[#00FF00]/90 transition-colors"
        >
          Start a Conversation
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}

