'use client'

import { Guest } from '@/payload-types'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useEffect } from 'react'

type GuestContextType = {
  guest: Guest | null
}

const GuestContext = createContext<GuestContextType | undefined>(undefined)

export function GuestProvider({
  children,
  guest,
}: {
  children: React.ReactNode
  guest: Guest | null
}) {
  const router = useRouter()
  useEffect(() => {
    if (guest) {
      document.cookie = `guestId=${guest?.guestId}; path=/; max-age=31536000`
    }
  }, [guest, router])
  return <GuestContext.Provider value={{ guest }}>{children}</GuestContext.Provider>
}

export function useGuest() {
  const context = useContext(GuestContext)
  if (context === undefined) {
    throw new Error('useGuest must be used within a GuestProvider')
  }
  return context
}
