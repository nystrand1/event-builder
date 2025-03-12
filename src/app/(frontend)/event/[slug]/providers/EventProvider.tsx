'use client'

import React, { createContext, useContext } from 'react'

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
  return <GuestContext.Provider value={{ eventId }}>{children}</GuestContext.Provider>
}

export function useEvent() {
  const context = useContext(GuestContext)
  if (context === undefined) {
    throw new Error('useEvent must be used within an EventProvider')
  }
  return context
}
