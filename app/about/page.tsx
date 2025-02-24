"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export default function AboutPage() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Flutter Developer",
      company: "Tech Innovators Inc.",
      description:
        "Leading mobile app development team, implementing clean architecture and state management patterns.",
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description:
        "Built responsive web applications using React and Next.js, focusing on performance and accessibility.",
    },
    {
      year: "2019 - 2021",
      role: "Mobile Developer",
      company: "App Studio",
      description: "Developed cross-platform mobile applications using Flutter and Firebase.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-400 text-lg mb-6">
            I'm a passionate developer specializing in Flutter and modern web technologies. With over 5 years of
            experience, I've helped businesses create exceptional digital experiences that users love.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#00FF00] text-black rounded-md hover:bg-[#00FF00]/90 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-[#00FF00]/20 text-[#00FF00] rounded-md hover:bg-[#00FF00]/10 transition-colors inline-flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="John Doe"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF00]/20 to-transparent rounded-lg" />
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#00FF00]/20"
            >
              <div className="absolute left-0 top-2 w-2 h-2 bg-[#00FF00] rounded-full transform -translate-x-1/2" />
              <div className="text-[#00FF00] text-sm mb-2">{exp.year}</div>
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <div className="text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg">
            <h3 className="text-[#00FF00] font-semibold mb-4">Mobile Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Flutter & Dart</li>
              <li>Firebase</li>
              <li>REST APIs</li>
              <li>State Management</li>
              <li>Native Integration</li>
            </ul>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg">
            <h3 className="text-[#00FF00] font-semibold mb-4">Frontend Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg">
            <h3 className="text-[#00FF00] font-semibold mb-4">Backend & DevOps</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg">
            <h3 className="text-[#00FF00] font-semibold mb-4">Tools & Design</h3>
            <ul className="space-y-2 text-gray-400">
              <li>VS Code</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Postman</li>
              <li>Firebase Console</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

