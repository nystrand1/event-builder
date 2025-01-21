import { useEffect } from 'react'

export function useScrollCallback(callback: () => void, dependencies: unknown[] = []) {
  useEffect(() => {
    const handleScroll = () => {
      callback()
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
