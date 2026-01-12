import { Metadata } from 'next'
import Link from 'next/link'
import { BusinessOutline, DownloadOutline } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Partenaires B2B — DECO GROUP',
  description: 'Solutions industrielles : matières premières valorisées pour plasturgie, sidérurgie et fonderies.',
}

export default function B2BPage() {
  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            Partenaires B2B
          </h1>
          <p className="text-xl text-deco-charcoal/70 max-w-3xl mx-auto">
            Matières valorisées pour l'industrie : approvisionnement durable pour plasturgie & sidérurgie.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-deco-gold/10 mr-4">
                  <BusinessOutline color="#D4AF37" height="40px" width="40px" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-deco-charcoal">
                  Solutions Industrielles
                </h2>
              </div>
              <p className="text-deco-charcoal/70 mb-6">
                DECO GROUP collecte et transforme les matières premières pour les industries locales. 
                Nous fournissons des matières de qualité pour vos projets industriels.
              </p>
              <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-4">
                Nos offres B2B :
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Plaquettes de plastique recyclé (PE, PP, PET)',
                  'Lots de fer et métaux triés',
                  'Ballots de bois traité et prêt à l\'emploi',
                  'Matières premières pour fonderies',
                  'Granulés plastiques pour injection',
                  'Métaux non-ferreux (cuivre, aluminium)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-deco-gold mr-3">✓</span>
                    <span className="text-deco-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?type=devis" className="btn-primary">
                  Demander un devis
                </Link>
                <Link href="/contact?type=partenariat" className="btn-secondary">
                  Devenir partenaire
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-xl font-bold text-deco-charcoal mb-4">
                Catalogue Matière
              </h3>
              <p className="text-deco-charcoal/70 mb-6">
                Téléchargez notre catalogue complet des matières disponibles pour vos projets industriels. 
                Spécifications techniques, quantités et tarifs détaillés.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <DownloadOutline color="#2C2C2C" height="20px" width="20px" />
                Télécharger le catalogue PDF
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-heading text-2xl font-bold text-deco-charcoal mb-8 text-center">
              Pourquoi choisir DECO GROUP ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Qualité Garantie',
                  description: 'Matières triées et contrôlées selon vos spécifications.',
                },
                {
                  title: 'Approvisionnement Régulier',
                  description: 'Livraisons programmées selon vos besoins.',
                },
                {
                  title: 'Prix Compétitifs',
                  description: 'Tarifs avantageux pour volumes importants.',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-heading text-lg font-bold text-deco-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-deco-charcoal/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-deco-gold to-deco-terracotta rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Prêt à devenir partenaire ?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins en matières premières et découvrir 
              nos solutions sur mesure.
            </p>
            <Link href="/contact?type=partenariat" className="btn-secondary bg-white text-deco-charcoal hover:bg-deco-cream">
              Contacter notre équipe B2B
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

