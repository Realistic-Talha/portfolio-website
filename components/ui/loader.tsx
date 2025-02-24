"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { StylishLogo } from "./stylish-logo"

export function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 1
        })
      }, 20)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-80 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex justify-center scale-150 mb-8">
            <StylishLogo />
          </div>
          
          <div className="w-full h-[2px] bg-green-500/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-mono text-sm"
          >
            {progress === 100 ? (
              "Ready..."
            ) : (
              `Loading assets... ${progress}%`
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

