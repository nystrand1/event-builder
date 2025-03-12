'use client'

import React, { createContext, useContext, useEffect } from 'react'

type GuestContextType = {
  eventId: string | number
}

const GuestContext = createContext<GuestContextType | undefined>(undefined)

export function EventProvider({
  children,
  eventId,
}: {
  children: React.ReactNode
  eventId: string | number
}) {
  useEffect(() => {
    document.cookie = `eventId=${eventId}; path=/; max-age=31536000`
  }, [eventId])
  return <GuestContext.Provider value={{ eventId }}>{children}</GuestContext.Provider>
}

export function useEvent() {
  const context = useContext(GuestContext)
  if (context === undefined) {
    throw new Error('useEvent must be used within an EventProvider')
  }
  return context
}
