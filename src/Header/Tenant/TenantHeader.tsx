'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
}

interface TenantHeaderProps {
  items?: NavItem[]
}

export const TenantHeader = ({ items = [] }: TenantHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname.includes('invitation')) {
    return null
  }

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 md:block hidden',
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-center h-20">
            <ul className="flex items-center space-x-8">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      'font-medium transition-colors hover:text-gray-900/60',
                      isScrolled ? 'text-gray-900' : 'text-gray-700',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile floating button and menu */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent hover:bg-accent/90 text-black p-4 rounded-full shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-lg min-w-[250px] w-full overflow-hidden"
            >
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="block px-4 py-2 text-gray-900 hover:bg-accent/10"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
