'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'L\'art de l\'upcycling au Sénégal',
    excerpt: 'Découvrez comment nous transformons les déchets en œuvres d\'art et créons de la valeur locale.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    date: '15 Jan 2024',
    category: 'Impact',
  },
  {
    id: '2',
    title: 'Formation des artisans : notre engagement',
    excerpt: 'Comment DECO GROUP forme les artisans locaux aux techniques d\'upcycling et de design.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    date: '8 Jan 2024',
    category: 'Formation',
  },
  {
    id: '3',
    title: 'Partenariats B2B : l\'économie circulaire en action',
    excerpt: 'Nos collaborations avec les industries locales pour une approvisionnement durable.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    date: '2 Jan 2024',
    category: 'B2B',
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deco-charcoal mb-6">
            Blog & Actualités
          </h2>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Restez informé de nos projets, événements et actualités.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-hover bg-deco-cream rounded-2xl overflow-hidden group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-deco-olive text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-deco-charcoal/60 mb-2">{post.date}</p>
                  <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-3 group-hover:text-deco-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-deco-charcoal/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-deco-gold font-medium text-sm group-hover:underline">
                    Lire la suite →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-secondary">
            Voir tous les articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

