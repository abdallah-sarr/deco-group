import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'À propos — DECO GROUP',
  description: 'Découvrez l\'histoire de DECO GROUP et de son fondateur M. DIONG Mamadou Lamine. Entrepreneur social et culturel.',
}

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            À propos de DECO GROUP
          </h1>
          <p className="text-xl text-deco-charcoal/70 max-w-3xl mx-auto">
            Donner une seconde vie. Créer un avenir.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="M. DIONG Mamadou Lamine, Fondateur de DECO GROUP"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deco-charcoal mb-6">
              M. DIONG Mamadou Lamine
            </h2>
            <p className="text-lg text-deco-charcoal/70 mb-6">
              Entrepreneur social et culturel, M. Diong transforme compétences en impact. 
              DECO GROUP récupère, crée, forme.
            </p>
            <p className="text-deco-charcoal/70 mb-6">
              Fondé par M. DIONG Mamadou Lamine, DECO GROUP réinvente l'économie circulaire 
              au Sénégal : créations, emplois et partenariats industriels.
            </p>
            <p className="text-deco-charcoal/70">
              Avec une vision claire de l'impact social et environnemental, M. Diong a créé 
              DECO GROUP pour transformer les déchets en opportunités, former les artisans 
              locaux et créer une économie circulaire durable au Sénégal.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deco-charcoal mb-12 text-center">
            Notre Histoire
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: '2018',
                title: 'Création de DECO GROUP',
                description: 'Lancement de l\'entreprise avec une vision claire : transformer les déchets en design.',
              },
              {
                year: '2019',
                title: 'Premier atelier de formation',
                description: 'Ouverture du premier programme de formation pour artisans locaux.',
              },
              {
                year: '2021',
                title: 'Partenariats B2B établis',
                description: 'Développement de partenariats avec industries locales pour la valorisation des matières.',
              },
              {
                year: '2023',
                title: 'Expansion de la boutique en ligne',
                description: 'Lancement de la plateforme e-commerce pour une meilleure accessibilité.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 text-deco-gold font-heading font-bold text-xl">
                  {item.year}
                </div>
                <div className="flex-1 pt-1">
                  <div className="h-1 w-12 bg-deco-gold mb-3" />
                  <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-deco-charcoal/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deco-charcoal mb-12 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Impact Social',
                description: 'Créer des emplois et former les artisans locaux pour un développement durable.',
              },
              {
                title: 'Innovation',
                description: 'Transformer les déchets en design unique et créatif.',
              },
              {
                title: 'Durabilité',
                description: 'Promouvoir l\'économie circulaire et la protection de l\'environnement.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-deco-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

