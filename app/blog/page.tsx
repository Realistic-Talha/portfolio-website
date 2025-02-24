"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Building Scalable Flutter Applications with Clean Architecture",
    excerpt: "Learn how to implement clean architecture in Flutter for better maintainability and scalability.",
    date: "March 15, 2024",
    category: "Flutter",
    image: "/placeholder.svg?height=300&width=600",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Next.js 14: The Future of React Development",
    excerpt: "Exploring the new features and improvements in Next.js 14 and how they enhance development workflow.",
    date: "March 10, 2024",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=600",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "State Management Patterns in Modern Applications",
    excerpt: "A comprehensive guide to different state management approaches in Flutter and React applications.",
    date: "March 5, 2024",
    category: "Development",
    image: "/placeholder.svg?height=300&width=600",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Thoughts, tutorials and insights about Flutter, web development, and software engineering best practices.
        </p>
      </motion.div>

      <div className="grid gap-12">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <Link href={`/blog/${post.id}`} className="relative group">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={300}
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="text-[#00FF00]">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold mb-4 hover:text-[#00FF00] transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-400 mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors inline-flex items-center"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 p-8 bg-black/50 backdrop-blur-md border border-[#00FF00]/20 rounded-lg text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
        <p className="text-gray-400 mb-6">Get the latest articles and insights directly in your inbox.</p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 bg-black/50 border border-[#00FF00]/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF00]/50 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#00FF00] text-black rounded-md hover:bg-[#00FF00]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  )
}

