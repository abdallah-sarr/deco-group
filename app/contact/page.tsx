'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import { MailOutline, CallOutline, LocationOutline } from '@/lib/icons'

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [type, setType] = useState('contact')

  useEffect(() => {
    setType(searchParams.get('type') || 'contact')
  }, [searchParams])

  return (
    <div className="pt-20 pb-20 bg-deco-cream min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-deco-charcoal mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg text-deco-charcoal/70 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-deco-charcoal mb-6">
                Informations de contact
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-deco-gold/10 flex-shrink-0">
                    <LocationOutline color="#D4AF37" height="24px" width="24px" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-deco-charcoal mb-1">
                      Adresse
                    </h3>
                    <p className="text-deco-charcoal/70">
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-deco-gold/10 flex-shrink-0">
                    <CallOutline color="#D4AF37" height="24px" width="24px" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-deco-charcoal mb-1">
                      Téléphone
                    </h3>
                    <a href="tel:+221XXXXXXXXX" className="text-deco-charcoal/70 hover:text-deco-gold">
                      +221 XX XXX XX XX
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-deco-gold/10 flex-shrink-0">
                    <MailOutline color="#D4AF37" height="24px" width="24px" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-deco-charcoal mb-1">
                      Email
                    </h3>
                    <a href="mailto:contact@decogroup.sn" className="text-deco-charcoal/70 hover:text-deco-gold">
                      contact@decogroup.sn
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center">
                <p className="text-deco-charcoal/50">Carte interactive à intégrer</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm type={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

