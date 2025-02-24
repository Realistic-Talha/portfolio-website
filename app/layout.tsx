"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Loader } from "@/components/ui/loader"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]')
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateCursorPosition)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", updateCursorPosition)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [updateCursorPosition])

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
        {isLoading && <Loader />}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        </div>
        <div
          className={`cursor-spotlight ${isHovering ? "hovering" : ""}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <div className="inner-circle"></div>
        </div>
        <div
          className={`relative z-10 min-h-screen flex flex-col ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        >
          <Navigation />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
