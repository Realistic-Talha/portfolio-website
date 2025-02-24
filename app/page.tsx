"use client"

import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal, ChevronRight, Circle, Github, Linkedin, Mail, ArrowRight, Code, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Tech {
  name: string
  icon: string
  level: number
  years: string
}

interface TechStack {
  [category: string]: Tech[]
}

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live: string
}

export default function Home() {
  // Terminal State
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [terminalText, setTerminalText] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [commandIndex, setCommandIndex] = useState(-1)
  const [particles, setParticles] = useState<Array<{ x: number[], y: number[] }>>([])

  const asciiArt = `
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝ 
╚═════╝ ╚══════╝  ╚═══╝  
`

  const welcomeMessage = [
    "Welcome to my terminal! Type 'help' to see available commands.",
    "System: Portfolio OS v1.0.0",
    "Last login: " + new Date().toLocaleString(),
    asciiArt
  ]

  const commands = {
    help: `Available commands:
    about       - Learn more about me
    projects    - View my projects
    skills      - View my technical skills
    contact     - Get my contact information
    github      - Visit my GitHub profile
    linkedin    - Visit my LinkedIn profile
    clear       - Clear the terminal
    exit        - Close the terminal
    banner      - Show the welcome banner`,
    about: "I'm a Full Stack Developer passionate about creating exceptional digital experiences.",
    projects: "Opening projects section...",
    skills: "Opening skills section...",
    contact: "Email: your.email@example.com\nLinkedIn: linkedin.com/in/yourusername",
    github: "Opening GitHub profile...",
    linkedin: "Opening LinkedIn profile...",
    clear: "Clearing terminal...",
    banner: asciiArt,
  }

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Tech stack with proper typing
  const techStack: TechStack = {
    "Frontend": [
      { name: "React", icon: "⚛️", level: 95, years: "4+ years" },
      { name: "Next.js", icon: "▲", level: 90, years: "3+ years" },
      { name: "TypeScript", icon: "🔷", level: 85, years: "3+ years" },
      { name: "Tailwind CSS", icon: "🎨", level: 90, years: "2+ years" },
      { name: "Framer Motion", icon: "🎬", level: 80, years: "2+ years" }
    ],
    "Backend": [
      { name: "Node.js", icon: "💚", level: 85, years: "4+ years" },
      { name: "Express", icon: "🚂", level: 85, years: "3+ years" },
      { name: "MongoDB", icon: "🍃", level: 80, years: "3+ years" },
      { name: "PostgreSQL", icon: "🐘", level: 75, years: "2+ years" },
      { name: "GraphQL", icon: "📊", level: 70, years: "2+ years" }
    ],
    "Mobile": [
      { name: "React Native", icon: "📱", level: 85, years: "3+ years" },
      { name: "Flutter", icon: "💠", level: 80, years: "2+ years" },
      { name: "Firebase", icon: "🔥", level: 85, years: "3+ years" },
      { name: "Redux", icon: "⚡", level: 90, years: "3+ years" }
    ],
    "DevOps & Tools": [
      { name: "Docker", icon: "🐋", level: 75, years: "2+ years" },
      { name: "AWS", icon: "☁️", level: 70, years: "2+ years" },
      { name: "Git", icon: "🔄", level: 95, years: "5+ years" },
      { name: "Vercel", icon: "▲", level: 85, years: "2+ years" },
      { name: "GitHub Actions", icon: "⚙️", level: 80, years: "2+ years" }
    ]
  }

  // Featured projects with proper typing
  const featuredProjects: Project[] = [
    {
      title: "AI Analytics Dashboard",
      description: "Real-time analytics platform with AI-powered insights",
      tech: ["React", "Python", "TensorFlow"],
      image: "/projects/analytics.png",
      github: "https://github.com/yourusername/ai-analytics",
      live: "https://ai-analytics-demo.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard",
      tech: ["Next.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.png",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com"
    }
  ]

  // Effects
  useEffect(() => {
    setCommandHistory(welcomeMessage)
  }, [])

  useEffect(() => {
    const newParticles = Array(50).fill(0).map(() => ({
      x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
      y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight]
    }))
    setParticles(newParticles)
  }, [])

  // Terminal command handler
  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    setCommandHistory(prev => [...prev, `\n$ ${command}`])
    
    if (command in commands) {
      const response = commands[command as keyof typeof commands]
      setCommandHistory(prev => [...prev, response])
      
      if (command === "clear") {
        setTimeout(() => setCommandHistory([]), 500)
      } else if (command === "github") {
        window.open("https://github.com/yourusername", "_blank")
      } else if (command === "linkedin") {
        window.open("https://linkedin.com/in/yourusername", "_blank")
      }
    } else if (command === "sudo") {
      setCommandHistory(prev => [...prev, "Nice try! 😉"])
    } else if (command === "exit") {
      setTerminalOpen(false)
    } else {
      setCommandHistory(prev => [...prev, `Command not found: ${command}`])
    }
  }

  // Terminal key handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && terminalText) {
      handleCommand(terminalText)
      setTerminalText("")
      setCommandIndex(-1)
    }
    if (e.key === "Escape") {
      setTerminalOpen(false)
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        setCommandIndex(prev => {
          const newIndex = prev + 1
          if (newIndex < commandHistory.length) {
            const cmd = commandHistory[commandHistory.length - 1 - newIndex]
            if (cmd.startsWith("$ ")) {
              setTerminalText(cmd.slice(2))
              return newIndex
            }
          }
          return prev
        })
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setCommandIndex(prev => {
        const newIndex = prev - 1
        if (newIndex >= 0) {
          const cmd = commandHistory[commandHistory.length - 1 - newIndex]
          if (cmd.startsWith("$ ")) {
            setTerminalText(cmd.slice(2))
            return newIndex
          }
        } else {
          setTerminalText("")
        }
        return -1
      })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30"
            animate={{ x: particle.x, y: particle.y }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          style={{ scale: scrollScale, opacity: scrollOpacity }}
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-green-400">Code.</span> <br />
                <span className="text-white">Create.</span> <br />
                <span className="text-green-400">Innovate.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl">
                Full-stack developer specializing in building exceptional digital experiences 
                with modern technologies and clean code practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#projects"
                  className="px-8 py-3 bg-green-500 text-black rounded-full 
                           hover:bg-green-400 transition-all transform hover:scale-105"
                >
                  View Projects
                </Link>
                <button
                  onClick={() => setTerminalOpen(true)}
                  className="px-8 py-3 border border-green-500 rounded-full
                           hover:bg-green-500/10 transition-all transform hover:scale-105
                           flex items-center gap-2 text-green-400"
                >
                  <Terminal className="w-4 h-4" />
                  Open Terminal
                </button>
              </div>
            </motion.div>

            {/* Interactive Terminal Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-lg overflow-hidden border border-green-500/20 
                            bg-black/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-transparent" />
                <div className="p-8 relative font-mono">
                  <div className="space-y-4">
                    <p className="text-green-400">$ whoami</p>
                    <p className="text-gray-400 pl-4">→ Full Stack Developer</p>
                    <p className="text-green-400">$ skills</p>
                    <div className="pl-4 space-y-2">
                      {Object.values(techStack)[0].slice(0, 4).map((tech: Tech) => (
                        <motion.div
                          key={tech.name}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          className="h-2 bg-green-500/20 overflow-hidden rounded-full"
                        >
                          <motion.div
                            className="h-full bg-green-500"
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                My Tech <span className="text-green-400">Stack</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern applications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-6">{category}</h3>
                  <div className="space-y-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-black/50 border border-green-500/20 
                                 hover:border-green-500/50 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{tech.icon}</span>
                            <div>
                              <p className="text-gray-300 group-hover:text-green-400 
                                          transition-colors font-medium">{tech.name}</p>
                              <p className="text-xs text-gray-500">{tech.years}</p>
                            </div>
                          </div>
                          <span className="text-sm text-green-400">{tech.level}%</span>
                        </div>
                        <div className="h-2 bg-green-500/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-green-500 to-green-400"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Featured <span className="text-green-400">Projects</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex gap-2">
                        {project.tech.map(tag => (
                          <Badge key={tag} variant="outline" className="bg-black/50 border-green-500/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  View All Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Let's Build Something <span className="text-green-400">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-green-500 text-black rounded-full
                         hover:bg-green-400 transition-all transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <button
                onClick={() => {
                  setTerminalOpen(true)
                  handleCommand('contact')
                }}
                className="px-8 py-3 border border-green-500 rounded-full
                         hover:bg-green-500/10 transition-all transform hover:scale-105
                         text-green-400"
              >
                Quick Contact
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Terminal Modal */}
      <AnimatePresence>
        {terminalOpen && (
          <>
            {/* Backdrop for mobile - clicking anywhere closes the terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTerminalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />
            
            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-4 md:inset-x-1/4 md:inset-y-20 bg-black/95 border border-green-500/20
                       rounded-lg backdrop-blur-xl z-[9999] shadow-2xl shadow-green-500/20
                       flex flex-col overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/20
                          bg-black/90 shrink-0">
                <div className="flex items-center space-x-2">
                  <Circle className="w-3 h-3 text-red-500" fill="currentColor" />
                  <Circle className="w-3 h-3 text-yellow-500" fill="currentColor" />
                  <Circle className="w-3 h-3 text-green-500" fill="currentColor" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 hidden md:inline">Press ESC to close</span>
                  <button
                    onClick={() => setTerminalOpen(false)}
                    className="text-gray-400 hover:text-white p-1 rounded-lg
                             hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Scrollable Terminal Content */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto terminal-content">
                  {commandHistory.map((cmd, i) => (
                    <div key={i} className="text-gray-300 whitespace-pre-wrap mb-1">{cmd}</div>
                  ))}
                </div>
                
                {/* Fixed Input Area */}
                <div className="border-t border-green-500/20 bg-black/90 p-4 sticky bottom-0">
                  <div className="flex items-center text-green-400">
                    <ChevronRight className="w-4 h-4 mr-1 shrink-0" />
                    <input
                      type="text"
                      value={terminalText}
                      onChange={(e) => setTerminalText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="bg-transparent outline-none w-full font-mono"
                      autoFocus
                      spellCheck={false}
                      placeholder="Type a command..."
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

