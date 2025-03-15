'use client'

import { Event } from '@/payload-types'
import React, { createContext, useContext, useState } from 'react'

type Component = Event['layout'][number]

type DemoContextType = {
  demo: boolean
  page: Event
  addComponent: (component: Component, index?: number) => void
  removeComponent: (index: number) => void
  moveComponentUp: (index: number) => void
  moveComponentDown: (index: number) => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function DemoProvider({
  children,
  demo,
  page: initialPage,
}: {
  children: React.ReactNode
  demo: boolean
  page: Event
}) {
  const [page, setPage] = useState<Event>(initialPage)

  const addComponent = (component: Component, index?: number) => {
    setPage((currentPage) => {
      const currentLayout = currentPage.layout || []

      // If index is provided and valid, insert at that position
      if (index !== undefined && index >= 0 && index <= currentLayout.length) {
        const newLayout = [
          ...currentLayout.slice(0, index),
          component,
          ...currentLayout.slice(index),
        ]
        return {
          ...currentPage,
          layout: newLayout,
        }
      }

      // Otherwise, append to the end (original behavior)
      return {
        ...currentPage,
        layout: [...currentLayout, component],
      }
    })
  }

  const removeComponent = (index: number) => {
    setPage((currentPage) => ({
      ...currentPage,
      layout: currentPage.layout.filter((_, i) => i !== index),
    }))
  }

  const moveComponentUp = (index: number) => {
    if (index <= 0) return // Can't move up if already at the top

    setPage((currentPage) => {
      const newLayout = [...currentPage.layout]
      // Swap with the component above
      const temp = newLayout[index]
      newLayout[index] = newLayout[index - 1]
      newLayout[index - 1] = temp

      return {
        ...currentPage,
        layout: newLayout,
      }
    })
  }

  const moveComponentDown = (index: number) => {
    setPage((currentPage) => {
      if (index >= currentPage.layout.length - 1) return currentPage // Can't move down if already at the bottom

      const newLayout = [...currentPage.layout]
      // Swap with the component below
      const temp = newLayout[index]
      newLayout[index] = newLayout[index + 1]
      newLayout[index + 1] = temp

      return {
        ...currentPage,
        layout: newLayout,
      }
    })
  }

  return (
    <DemoContext.Provider
      value={{
        demo,
        page,
        addComponent,
        removeComponent,
        moveComponentUp,
        moveComponentDown,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const context = useContext(DemoContext)
  if (context === undefined) {
    return {
      demo: false,
      page: null,
      addComponent: () => {},
      removeComponent: () => {},
      moveComponentUp: () => {},
      moveComponentDown: () => {},
    }
  }
  return context
}
