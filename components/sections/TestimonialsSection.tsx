'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronBackOutline, ChevronForwardOutline } from '@/lib/icons'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aminata Diallo',
    role: 'Client',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    quote: 'Le sac que j\'ai acheté est magnifique et unique. Je suis fière de porter une pièce qui a une histoire et qui respecte l\'environnement.',
  },
  {
    id: 2,
    name: 'Ibrahima Sarr',
    role: 'Partenaire B2B',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    quote: 'DECO GROUP nous fournit des matières premières de qualité. Leur approche durable s\'aligne parfaitement avec nos valeurs d\'entreprise.',
  },
  {
    id: 3,
    name: 'Fatou Ndiaye',
    role: 'Artisan formée',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    quote: 'La formation que j\'ai reçue m\'a permis de développer mes compétences et de créer des pièces uniques. Merci DECO GROUP !',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-deco-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
            Témoignages & Stories
          </h2>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Découvrez ce que nos clients, partenaires et artisans disent de DECO GROUP.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-deco-charcoal/80 mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-heading font-bold text-deco-charcoal">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-deco-charcoal/60 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white hover:bg-deco-gold/10 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronBackOutline color="#2C2C2C" height="24px" width="24px" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-deco-gold'
                      : 'w-2 bg-deco-charcoal/30 hover:bg-deco-charcoal/50'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white hover:bg-deco-gold/10 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronForwardOutline color="#2C2C2C" height="24px" width="24px" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

