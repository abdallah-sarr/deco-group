'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { BusinessOutline, DownloadOutline } from '@/lib/icons'

export default function B2BSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
              Partenaires B2B
            </h2>
            <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
              Matières valorisées pour l'industrie : approvisionnement durable pour plasturgie & sidérurgie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-deco-gold/10 mr-4">
                  <BusinessOutline color="#D4AF37" height="40px" width="40px" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-deco-charcoal">
                  Solutions Industrielles
                </h3>
              </div>
              <p className="text-deco-charcoal/70 mb-6">
                DECO GROUP collecte et transforme les matières premières pour les industries locales. 
                Nous fournissons :
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Plaquettes de plastique recyclé',
                  'Lots de fer et métaux',
                  'Ballots de bois traité',
                  'Matières premières pour fonderies',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-deco-gold mr-3">✓</span>
                    <span className="text-deco-charcoal/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/b2b" className="btn-primary">
                  Voir les offres B2B
                </Link>
                <Link href="/contact?type=devis" className="btn-secondary">
                  Demander un devis
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-deco-cream p-8 rounded-2xl"
            >
              <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-4">
                Catalogue Matière
              </h3>
              <p className="text-deco-charcoal/70 mb-6">
                Téléchargez notre catalogue complet des matières disponibles pour vos projets industriels.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <DownloadOutline color="#2C2C2C" height="20px" width="20px" />
                Télécharger le catalogue
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

