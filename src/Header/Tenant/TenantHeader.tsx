'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 bg-accent rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 justify-center flex-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isScrolled ? 'text-gray-900' : 'text-gray-700',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu panel */}
        <div
          className={cn(
            'md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-screen py-4' : 'max-h-0',
          )}
        >
          <ul className="space-y-4 px-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-900 hover:text-primary py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
