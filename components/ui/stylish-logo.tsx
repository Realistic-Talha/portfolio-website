"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function StylishLogo() {
  return (
    <Link href="/" className="group relative inline-block">
      <motion.div
        className="text-xl font-light tracking-wider flex items-center gap-1"
        whileHover={{ scale: 1.02 }}
      >
        <motion.span 
          className="text-green-400 font-bold"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {"</>"}
        </motion.span>
        <motion.span 
          className="text-white font-mono bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
          whileHover={{ color: "#00ff00" }}
        >
          TALHA
        </motion.span>
        <motion.span 
          className="text-green-400"
          animate={{ 
            opacity: [1, 0, 1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          .
        </motion.span>
        <motion.span 
          className="text-gray-400 font-mono"
          whileHover={{ color: "#00ff00" }}
        >
          DEV
        </motion.span>
      </motion.div>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[2px]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-green-400 to-transparent" />
      </motion.div>
    </Link>
  )
}
