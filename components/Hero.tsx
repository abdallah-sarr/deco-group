'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronBackOutline, ChevronForwardOutline } from '@/lib/icons'

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  cta1: { text: string; href: string }
  cta2: { text: string; href: string }
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
    title: 'Nous transformons vos déchets en design',
    subtitle: 'Mobilier, mode et œuvres d\'art nées de l\'upcycling',
    cta1: { text: 'Découvrir la collection', href: '#produits' },
    cta2: { text: 'Organiser une collecte', href: '/contact?type=collecte' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    title: 'Mode responsable, made in Sénégal',
    subtitle: 'Chaque pièce raconte une histoire unique',
    cta1: { text: 'Voir la boutique', href: '/boutique' },
    cta2: { text: 'Devenir vendeur / partenaire', href: '/partenaires' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&q=80',
    title: 'Matières valorisées pour l\'industrie',
    subtitle: 'Approvisionnement durable pour plasturgie & sidérurgie',
    cta1: { text: 'Offres B2B', href: '/b2b' },
    cta2: { text: 'Demandez un devis', href: '/contact?type=devis' },
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {slide.title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={slide.cta1.href} className="btn-primary">
                {slide.cta1.text}
              </Link>
              <Link href={slide.cta2.href} className="btn-ghost text-white border-white hover:bg-white/20">
                {slide.cta2.text}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Slide précédent"
      >
        <ChevronBackOutline color="#ffffff" height="24px" width="24px" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Slide suivant"
      >
        <ChevronForwardOutline color="#ffffff" height="24px" width="24px" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-deco-gold'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

