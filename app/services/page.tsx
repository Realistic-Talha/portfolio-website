"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications built with Flutter, delivering native performance and beautiful UIs.",
      features: [
        "Custom Flutter Applications",
        "Native Integration",
        "App Store Deployment",
        "Performance Optimization",
        "Offline Capabilities",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern web applications using React and Next.js, focused on performance and user experience.",
      features: [
        "Responsive Websites",
        "Progressive Web Apps",
        "SEO Optimization",
        "Interactive UIs",
        "API Integration",
      ],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Expert guidance on software architecture, technology stack, and best practices.",
      features: [
        "Architecture Review",
        "Code Audit",
        "Performance Analysis",
        "Security Assessment",
        "Technical Documentation",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Mentoring",
      description: "One-on-one mentoring sessions to help developers level up their skills and career.",
      features: ["Career Guidance", "Code Reviews", "Best Practices", "Project Planning", "Technical Interviews"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive development solutions to help businesses create exceptional digital experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-8 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg group hover:border-[#00FF00]/40 transition-colors"
          >
            <div className="text-[#00FF00] mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-[#00FF00] text-black rounded-md hover:bg-[#00FF00]/90 transition-colors"
        >
          Get in Touch
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}

