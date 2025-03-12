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
  return <GuestContext.Provider value={{ guest }}>{children}</GuestContext.Provider>
}

export function useGuest() {
  const router = useRouter()
  const context = useContext(GuestContext)
  if (context === undefined) {
    throw new Error('useGuest must be used within a GuestProvider')
  }

  useEffect(() => {
    if (context.guest) {
      document.cookie = `guestId=${context.guest?.guestId}; path=/; max-age=31536000`
    }
  }, [context.guest, router])
  return context
}
