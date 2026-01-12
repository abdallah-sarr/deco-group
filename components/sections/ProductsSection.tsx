'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { BagHandleOutline, HeartOutline, EyeOutline } from '@/lib/icons'

interface Product {
  id: string
  name: string
  category: 'mode' | 'mobilier' | 'decor'
  price: number
  image: string
  materials: string[]
  tag?: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Sac "La Rénovée"',
    category: 'mode',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    materials: ['Wax récupéré', 'Denim'],
    tag: 'Upcycled',
  },
  {
    id: '2',
    name: 'Table basse "Renaissance"',
    category: 'mobilier',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    materials: ['Bois récupéré', 'Métal'],
    tag: 'Upcycled',
  },
  {
    id: '3',
    name: 'Sculpture "Métamorphose"',
    category: 'decor',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    materials: ['Métal', 'Plastique'],
    tag: 'Upcycled',
  },
  {
    id: '4',
    name: 'Veste patchwork',
    category: 'mode',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    materials: ['Tissus récupérés'],
    tag: 'Upcycled',
  },
]

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mode' | 'mobilier' | 'decor'>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'mode', label: 'Mode' },
    { id: 'mobilier', label: 'Mobilier' },
    { id: 'decor', label: 'Œuvres & Décor' },
  ]

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section ref={ref} id="produits" className="py-20 bg-deco-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
            Nos Créations
          </h2>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Découvrez nos pièces uniques, chacune racontant une histoire de transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-deco-gold text-white shadow-lg'
                  : 'bg-white text-deco-charcoal hover:bg-deco-gold/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-hover bg-white rounded-2xl overflow-hidden group relative"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-deco-olive text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="p-3 rounded-full bg-white hover:bg-deco-gold transition-colors">
                    <EyeOutline color="#2C2C2C" height="20px" width="20px" />
                  </button>
                  <button className="p-3 rounded-full bg-white hover:bg-deco-gold transition-colors">
                    <HeartOutline color="#2C2C2C" height="20px" width="20px" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-deco-charcoal/60 mb-3">
                  {product.materials.join(', ')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-deco-gold">
                    {product.price.toLocaleString()} FCFA
                  </span>
                  <button className="p-2 rounded-full bg-deco-gold/10 hover:bg-deco-gold transition-colors">
                    <BagHandleOutline color="#D4AF37" height="20px" width="20px" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/boutique" className="btn-primary">
            Voir toute la collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

