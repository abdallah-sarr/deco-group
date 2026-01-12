import { Metadata } from 'next'
import Link from 'next/link'
import { 
  TrashOutline, 
  ConstructOutline, 
  SwapHorizontalOutline 
} from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Atelier & Processus — DECO GROUP',
  description: 'Découvrez notre processus de transformation : collecte, atelier créatif et valorisation des matières.',
}

export default function ProcessusPage() {
  const steps = [
    {
      icon: TrashOutline,
      title: 'Collecte',
      description: 'Récupération de matériaux (plastique, bois, métal, tissus) auprès de particuliers et entreprises.',
      details: [
        'Collecte à domicile sur demande',
        'Points de collecte dans Dakar',
        'Partenariats avec entreprises',
        'Tri et sélection des matières',
      ],
      color: 'from-deco-olive to-deco-gold',
    },
    {
      icon: ConstructOutline,
      title: 'Atelier Créatif',
      description: 'Transformation artistique par nos artisans formés. Design unique et qualité premium.',
      details: [
        'Formation des artisans aux techniques d\'upcycling',
        'Design et création de pièces uniques',
        'Contrôle qualité rigoureux',
        'Personnalisation sur demande',
      ],
      color: 'from-deco-gold to-deco-terracotta',
    },
    {
      icon: SwapHorizontalOutline,
      title: 'Valorisation & Vente',
      description: 'Distribution via notre boutique et partenaires B2B. Matières premières pour l\'industrie.',
      details: [
        'Vente en boutique et en ligne',
        'Partenariats B2B avec industries',
        'Export de matières premières',
        'Suivi et garantie qualité',
      ],
      color: 'from-deco-terracotta to-deco-olive',
    },
  ]

  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            Atelier & Processus
          </h1>
          <p className="text-xl text-deco-charcoal/70 max-w-3xl mx-auto">
            De la collecte à la création, découvrez comment nous transformons les déchets en design.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${step.color} p-12 rounded-2xl text-white`}>
                  <div className="flex justify-center mb-6">
                    <div className="p-6 rounded-full bg-white/20 backdrop-blur-sm">
                      <Icon color="#ffffff" height="64px" width="64px" />
                    </div>
                  </div>
                  <h2 className="font-heading text-3xl font-bold mb-4 text-center">
                    {step.title}
                  </h2>
                  <p className="text-center text-white/90">{step.description}</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-6">
                    Détails du processus
                  </h3>
                  <ul className="space-y-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-deco-gold mr-3 text-xl">✓</span>
                        <span className="text-deco-charcoal/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-deco-charcoal mb-4">
            Vous souhaitez organiser une collecte ?
          </h2>
          <p className="text-deco-charcoal/70 mb-6">
            Contactez-nous pour planifier une collecte de vos matériaux.
          </p>
          <Link href="/contact?type=collecte" className="btn-primary">
            Demander une collecte
          </Link>
        </div>
      </div>
    </div>
  )
}

