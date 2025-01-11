import { breakDateIntoParts } from '@/utilities/date/breakDateIntoParts'
import { useEffect, useState } from 'react'

export const useTimeToEvent = (eventDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const today = new Date()
    const eventDateObj = new Date(eventDate ?? today)
    return breakDateIntoParts(today, eventDateObj)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date()
      const eventDateObj = new Date(eventDate ?? today)
      setTimeLeft(breakDateIntoParts(today, eventDateObj))
    }, 1000)

    return () => clearInterval(interval)
  }, [eventDate])

  return timeLeft
}
