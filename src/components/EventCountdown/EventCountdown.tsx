'use client'

import { useTimeToEvent } from '@/hooks/useTimeToEvent'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface EventCountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  eventDate: Date
}

export const EventCountdown = ({ eventDate, className, ...props }: EventCountdownProps) => {
  const timeLeft = useTimeToEvent(eventDate)

  return (
    <div className={twMerge('flex items-center justify-center', className)} {...props}>
      <div className="flex flex-col md:flex-row md:space-x-24">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[96px] font-medium" suppressHydrationWarning>
            {timeLeft.days}
          </p>
          <p className="text-lg uppercase">dagar</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[96px] font-medium" suppressHydrationWarning>
            {timeLeft.hours}
          </p>
          <p className="text-lg uppercase">timmar</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[96px] font-medium" suppressHydrationWarning>
            {timeLeft.minutes}
          </p>
          <p className="text-lg uppercase">minuter</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[96px] font-medium" suppressHydrationWarning>
            {timeLeft.seconds}
          </p>
          <p className="text-lg uppercase">sekunder</p>
        </div>
      </div>
    </div>
  )
}
