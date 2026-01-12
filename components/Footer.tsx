'use client'

import Link from 'next/link'
import { 
  LogoInstagram, 
  LogoFacebook, 
  MailOutline, 
  CallOutline, 
  LocationOutline 
} from '@/lib/icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deco-charcoal text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">DECO GROUP</h3>
            <p className="text-white/70 mb-4">
              Donner une seconde vie. Créer un avenir.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/deco_group"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-deco-gold transition-colors"
                aria-label="Instagram"
              >
                <LogoInstagram color="#ffffff" height="20px" width="20px" />
              </a>
              <a
                href="https://facebook.com/deco_group"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-deco-gold transition-colors"
                aria-label="Facebook"
              >
                <LogoFacebook color="#ffffff" height="20px" width="20px" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-deco-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-white/70 hover:text-deco-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-white/70 hover:text-deco-gold transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/b2b" className="text-white/70 hover:text-deco-gold transition-colors">
                  Partenaires B2B
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-deco-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-deco-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cgv" className="text-white/70 hover:text-deco-gold transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-white/70 hover:text-deco-gold transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-white/70 hover:text-deco-gold transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <LocationOutline color="#D4AF37" height="20px" width="20px" className="mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CallOutline color="#D4AF37" height="20px" width="20px" />
                <a href="tel:+221XXXXXXXXX" className="text-white/70 hover:text-deco-gold transition-colors">
                  +221 XX XXX XX XX
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MailOutline color="#D4AF37" height="20px" width="20px" />
                <a href="mailto:contact@decogroup.sn" className="text-white/70 hover:text-deco-gold transition-colors">
                  contact@decogroup.sn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h4 className="font-heading font-semibold mb-4">
              Rejoignez la communauté DECO
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Idées, ventes & ateliers. Restez informé de nos actualités.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-deco-gold"
                required
              />
              <button
                type="submit"
                className="btn-primary px-6"
              >
                S'abonner
              </button>
            </form>
            <p className="text-white/50 text-xs mt-2">
              En vous abonnant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>
            © {currentYear} DECO GROUP — Diong Empire Corporation Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

