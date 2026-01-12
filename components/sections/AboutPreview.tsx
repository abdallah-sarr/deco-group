'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-deco-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">
                  M. DIONG Mamadou Lamine
                </h3>
                <p className="text-white/90">Fondateur & Directeur</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-deco-charcoal/70 mb-8">
              Entrepreneur social et culturel, M. Diong transforme compétences en impact. 
              DECO GROUP récupère, crée, forme.
            </p>
            <p className="text-deco-charcoal/70 mb-8">
              Fondé par M. DIONG Mamadou Lamine, DECO GROUP réinvente l'économie circulaire 
              au Sénégal : créations, emplois et partenariats industriels.
            </p>

            {/* Timeline */}
            <div className="space-y-6 mb-8">
              {[
                { year: '2018', event: 'Création de DECO GROUP' },
                { year: '2019', event: 'Premier atelier de formation' },
                { year: '2021', event: 'Partenariats B2B établis' },
                { year: '2023', event: 'Expansion de la boutique en ligne' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 text-deco-gold font-heading font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="h-0.5 w-8 bg-deco-gold mb-2" />
                    <p className="text-deco-charcoal">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/a-propos"
              className="btn-secondary inline-block"
            >
              Voir CV / Histoire complète
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

