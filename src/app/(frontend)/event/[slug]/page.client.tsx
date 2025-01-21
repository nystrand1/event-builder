'use client'

import { hexToHSL } from '@/utilities/hexToHSL'
import React, { useEffect } from 'react'
interface PageClientProps {
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
}

export const PageClient: React.FC<PageClientProps> = ({ theme }) => {
  useEffect(() => {
    const root = document.documentElement
    if (theme.accentColor) {
      root.style.setProperty('--accent', hexToHSL(theme.accentColor))
    }
    if (theme.primaryColor) {
      root.style.setProperty('--primary', hexToHSL(theme.primaryColor))
    }
    if (theme.secondaryColor) {
      root.style.setProperty('--secondary', hexToHSL(theme.secondaryColor))
    }
  }, [theme])

  return null
}

export default PageClient
