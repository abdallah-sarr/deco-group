'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { LeafOutline, PeopleOutline, BarChartOutline } from '@/lib/icons'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-deco-charcoal/70 mb-12 max-w-2xl mx-auto">
              Valoriser matières & talents locaux pour créer un impact durable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              variants={itemVariants}
              className="card-hover bg-deco-cream p-8 rounded-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-deco-gold/10">
                  <LeafOutline color="#6B8E23" height="40px" width="40px" />
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-2">
                <Counter end={150} suffix=" tonnes" />
              </h3>
              <p className="text-deco-charcoal/70">Matériaux collectés</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-hover bg-deco-cream p-8 rounded-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-deco-gold/10">
                  <PeopleOutline color="#6B8E23" height="40px" width="40px" />
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-2">
                <Counter end={45} suffix=" artisans" />
              </h3>
              <p className="text-deco-charcoal/70">Artisans formés</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-hover bg-deco-cream p-8 rounded-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-deco-gold/10">
                  <BarChartOutline color="#6B8E23" height="40px" width="40px" />
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-2">
                <Counter end={3200} suffix=" pièces" />
              </h3>
              <p className="text-deco-charcoal/70">Pièces vendues</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

