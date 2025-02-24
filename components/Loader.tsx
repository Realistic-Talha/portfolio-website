"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code2 } from "lucide-react"

export const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress))
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-xl">
      <div className="relative w-64 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Code2 className="w-16 h-16 text-[#00FF00] mx-auto" />
        </motion.div>
        <div className="w-full bg-[#00FF00]/20 rounded-full h-1 mb-4">
          <motion.div
            className="bg-[#00FF00] h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#00FF00] text-sm font-mono"
        >
          Loading Portfolio...
        </motion.div>
      </div>
    </div>
  )
}

