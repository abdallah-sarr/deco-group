'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HandLeftOutline } from '@/lib/icons'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Link
        href="/contact?type=collecte"
        className="btn-primary flex items-center space-x-2 shadow-2xl animate-pulse-slow"
      >
        <HandLeftOutline color="#ffffff" height="20px" width="20px" />
        <span className="hidden sm:inline">Demander une collecte</span>
        <span className="sm:hidden">Collecte</span>
      </Link>
    </motion.div>
  )
}

