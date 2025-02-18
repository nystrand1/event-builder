'use client'

import { Event } from '@/payload-types'
import React, { createContext, useContext } from 'react'

type ThemeContextType = {
  theme: NonNullable<Event['theme']>['theme']
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: ThemeContextType['theme'] | null
}) {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
