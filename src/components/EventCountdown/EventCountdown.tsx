import { useTimeToEvent } from '@/hooks/useTimeToEvent'
import React from 'react'

interface EventCountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  eventDate: Date
}

export const EventCountdown = ({ eventDate, className, ...props }: EventCountdownProps) => {
  const timeLeft = useTimeToEvent(eventDate)

  return (
    <div className={className} {...props}>
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium">{timeLeft.days}</p>
          <p>dagar</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium">{timeLeft.hours}</p>
          <p>timmar</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium">{timeLeft.minutes}</p>
          <p>minuter</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium">{timeLeft.seconds}</p>
          <p>sekunder</p>
        </div>
      </div>
    </div>
  )
}
