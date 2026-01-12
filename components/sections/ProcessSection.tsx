'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { 
  TrashOutline, 
  ConstructOutline, 
  SwapHorizontalOutline 
} from '@/lib/icons'

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: TrashOutline,
      title: 'Collecte',
      description: 'Récupération de matériaux (plastique, bois, métal, tissus) auprès de particuliers et entreprises.',
      color: 'from-deco-olive to-deco-gold',
    },
    {
      icon: ConstructOutline,
      title: 'Atelier Créatif',
      description: 'Transformation artistique par nos artisans formés. Design unique et qualité premium.',
      color: 'from-deco-gold to-deco-terracotta',
    },
    {
      icon: SwapHorizontalOutline,
      title: 'Valorisation & Vente',
      description: 'Distribution via notre boutique et partenaires B2B. Matières premières pour l\'industrie.',
      color: 'from-deco-terracotta to-deco-olive',
    },
  ]

  return (
    <section ref={ref} id="processus" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
            Nos Ateliers & Processus
          </h2>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            De la collecte à la création, découvrez comment nous transformons les déchets en design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card-hover bg-deco-cream p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-deco-gold/20 to-deco-terracotta/20">
                      <Icon color="#D4AF37" height="48px" width="48px" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-deco-charcoal/70 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/processus" className="btn-secondary">
            En savoir plus sur notre processus
          </Link>
          <div className="mt-6">
            <Link href="/contact?type=collecte" className="btn-primary">
              Demandez une collecte
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

