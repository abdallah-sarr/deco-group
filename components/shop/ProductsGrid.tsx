'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BagHandleOutline, HeartOutline, EyeOutline } from '@/lib/icons'

interface Product {
  id: string
  name: string
  category: 'mode' | 'mobilier' | 'decor'
  price: number
  image: string
  materials: string[]
  tag?: string
  story?: string
}

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Sac "La Rénovée"',
    category: 'mode',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    materials: ['Wax récupéré', 'Denim'],
    tag: 'Upcycled',
    story: 'Sac fabriqué à partir de chutes de wax et denim récupérés. Pièce unique.',
  },
  {
    id: '2',
    name: 'Table basse "Renaissance"',
    category: 'mobilier',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    materials: ['Bois récupéré', 'Métal'],
    tag: 'Upcycled',
    story: 'Table basse élégante créée à partir de bois de récupération et métal recyclé.',
  },
  {
    id: '3',
    name: 'Sculpture "Métamorphose"',
    category: 'decor',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    materials: ['Métal', 'Plastique'],
    tag: 'Upcycled',
    story: 'Œuvre d\'art unique transformant déchets métalliques en sculpture contemporaine.',
  },
  {
    id: '4',
    name: 'Veste patchwork',
    category: 'mode',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    materials: ['Tissus récupérés'],
    tag: 'Upcycled',
    story: 'Veste unique en patchwork de tissus récupérés, chaque pièce est différente.',
  },
  {
    id: '5',
    name: 'Chaise "Élégance"',
    category: 'mobilier',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    materials: ['Bois récupéré', 'Tissu'],
    tag: 'Upcycled',
    story: 'Chaise design créée à partir de bois de récupération et tissu upcyclé.',
  },
  {
    id: '6',
    name: 'Luminaire "Éclat"',
    category: 'decor',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    materials: ['Métal', 'Verre'],
    tag: 'Upcycled',
    story: 'Luminaire artistique fabriqué à partir de métal et verre recyclés.',
  },
]

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mode' | 'mobilier' | 'decor'>('all')

  const categories = [
    { id: 'all', label: 'Tous les produits' },
    { id: 'mode', label: 'Mode' },
    { id: 'mobilier', label: 'Mobilier' },
    { id: 'decor', label: 'Œuvres & Décor' },
  ]

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
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
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="card-hover bg-white rounded-2xl overflow-hidden group relative"
          >
            <Link href={`/boutique/${product.id}`}>
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
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // Quick view logic
                    }}
                    className="p-3 rounded-full bg-white hover:bg-deco-gold transition-colors"
                  >
                    <EyeOutline color="#2C2C2C" height="20px" width="20px" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // Wishlist logic
                    }}
                    className="p-3 rounded-full bg-white hover:bg-deco-gold transition-colors"
                  >
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
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // Add to cart logic
                    }}
                    className="p-2 rounded-full bg-deco-gold/10 hover:bg-deco-gold transition-colors"
                  >
                    <BagHandleOutline color="#D4AF37" height="20px" width="20px" />
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  )
}

