'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactFormProps {
  type?: string
}

export default function ContactForm({ type = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: type,
    materialType: '',
    address: '',
    preferredDate: '',
    message: '',
    files: null as FileList | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: e.target.files }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: type,
        materialType: '',
        address: '',
        preferredDate: '',
        message: '',
        files: null,
      })
    }, 3000)
  }

  const formTypes = {
    collecte: {
      title: 'Demander une collecte',
      description: 'Organisez une collecte de vos matériaux recyclables.',
    },
    partenariat: {
      title: 'Devenir partenaire',
      description: 'Rejoignez notre réseau de partenaires B2B.',
    },
    devis: {
      title: 'Demander un devis',
      description: 'Obtenez un devis personnalisé pour vos besoins.',
    },
    contact: {
      title: 'Nous contacter',
      description: 'Une question ? Un projet ? Contactez-nous.',
    },
  }

  const currentForm = formTypes[type as keyof typeof formTypes] || formTypes.contact

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center"
      >
        <div className="text-6xl mb-4">✓</div>
        <h3 className="font-heading text-2xl font-bold text-deco-charcoal mb-2">
          Message envoyé !
        </h3>
        <p className="text-deco-charcoal/70 mb-4">
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <p className="text-sm text-deco-charcoal/50">
          Numéro de suivi: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="font-heading text-2xl font-bold text-deco-charcoal mb-2">
        {currentForm.title}
      </h2>
      <p className="text-deco-charcoal/70 mb-6">
        {currentForm.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-deco-charcoal mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-deco-charcoal mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-deco-charcoal mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
          />
        </div>

        {type === 'collecte' && (
          <>
            <div>
              <label htmlFor="materialType" className="block text-sm font-medium text-deco-charcoal mb-2">
                Type de matériau *
              </label>
              <select
                id="materialType"
                name="materialType"
                required
                value={formData.materialType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
              >
                <option value="">Sélectionnez un type</option>
                <option value="plastique">Plastique</option>
                <option value="bois">Bois</option>
                <option value="metal">Métal</option>
                <option value="tissus">Tissus</option>
                <option value="mixte">Mixte</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-deco-charcoal mb-2">
                Adresse de collecte *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-deco-charcoal mb-2">
                Date préférée
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
              />
            </div>

            <div>
              <label htmlFor="files" className="block text-sm font-medium text-deco-charcoal mb-2">
                Photos (optionnel)
              </label>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-deco-charcoal mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-deco-charcoal/20 focus:outline-none focus:border-deco-gold"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
    </div>
  )
}

