import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog & Actualités — DECO GROUP',
  description: 'Découvrez nos articles sur l\'upcycling, les projets en cours, les événements et les actualités de DECO GROUP.',
}

const posts = [
  {
    id: '1',
    title: 'L\'art de l\'upcycling au Sénégal',
    excerpt: 'Découvrez comment nous transformons les déchets en œuvres d\'art et créons de la valeur locale.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    date: '15 Jan 2024',
    category: 'Impact',
    author: 'DECO GROUP',
  },
  {
    id: '2',
    title: 'Formation des artisans : notre engagement',
    excerpt: 'Comment DECO GROUP forme les artisans locaux aux techniques d\'upcycling et de design.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    date: '8 Jan 2024',
    category: 'Formation',
    author: 'DECO GROUP',
  },
  {
    id: '3',
    title: 'Partenariats B2B : l\'économie circulaire en action',
    excerpt: 'Nos collaborations avec les industries locales pour une approvisionnement durable.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    date: '2 Jan 2024',
    category: 'B2B',
    author: 'DECO GROUP',
  },
  {
    id: '4',
    title: 'Workshop couture : retour sur l\'événement',
    excerpt: 'Retour en images sur notre dernier atelier de formation à la couture upcyclée.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    date: '28 Déc 2023',
    category: 'Événements',
    author: 'DECO GROUP',
  },
  {
    id: '5',
    title: 'Techniques de transformation du plastique',
    excerpt: 'Guide pratique sur les méthodes de transformation du plastique recyclé.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    date: '20 Déc 2023',
    category: 'Technique',
    author: 'DECO GROUP',
  },
  {
    id: '6',
    title: 'Impact social : témoignages d\'artisans',
    excerpt: 'Découvrez les parcours de nos artisans formés et leur impact dans leurs communautés.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    date: '12 Déc 2023',
    category: 'Impact',
    author: 'DECO GROUP',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            Blog & Actualités
          </h1>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Restez informé de nos projets, événements et actualités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-hover bg-white rounded-2xl overflow-hidden group"
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
                  <h2 className="font-heading text-xl font-bold text-deco-charcoal mb-3 group-hover:text-deco-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-deco-charcoal/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-deco-gold font-medium text-sm group-hover:underline">
                    Lire la suite →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

