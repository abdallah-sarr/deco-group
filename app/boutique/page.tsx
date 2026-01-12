import { Metadata } from 'next'
import ProductsGrid from '@/components/shop/ProductsGrid'

export const metadata: Metadata = {
  title: 'Boutique — DECO GROUP',
  description: 'Découvrez notre collection de mobilier, mode et œuvres d\'art upcyclés. Pièces uniques made in Sénégal.',
}

export default function BoutiquePage() {
  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            Notre Boutique
          </h1>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Chaque pièce raconte une histoire unique de transformation et de créativité.
          </p>
        </div>
        <ProductsGrid />
      </div>
    </div>
  )
}

