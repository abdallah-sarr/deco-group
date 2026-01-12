'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SparklesOutline, 
  MenuOutline, 
  CloseOutline 
} from '@/lib/icons'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/processus', label: 'Atelier & Processus' },
    { href: '/boutique', label: 'Produits' },
    { href: '/b2b', label: 'Partenaires B2B' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <SparklesOutline
                color={isScrolled ? '#D4AF37' : '#ffffff'}
                height="32px"
                width="32px"
                className="transition-colors"
              />
              <span className={`font-heading font-bold text-xl transition-colors ${
                isScrolled ? 'text-deco-charcoal' : 'text-white'
              }`}>
                DECO GROUP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-deco-gold ${
                    isScrolled ? 'text-deco-charcoal' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact?type=collecte"
                className="btn-primary text-sm"
              >
                Demander une collecte
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <CloseOutline
                  color={isScrolled ? '#2C2C2C' : '#ffffff'}
                  height="28px"
                  width="28px"
                />
              ) : (
                <MenuOutline
                  color={isScrolled ? '#2C2C2C' : '#ffffff'}
                  height="28px"
                  width="28px"
                />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading font-bold text-xl text-deco-charcoal">
                    DECO GROUP
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Fermer"
                  >
                    <CloseOutline color="#2C2C2C" height="24px" width="24px" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-4 flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-medium text-deco-charcoal hover:text-deco-gold py-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t">
                  <Link
                    href="/contact?type=collecte"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Demander une collecte
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

