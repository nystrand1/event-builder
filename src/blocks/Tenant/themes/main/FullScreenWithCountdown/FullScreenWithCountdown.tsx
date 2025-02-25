'use client'
import React from 'react'

import type { FullScreenWithCountdownHero as FullScreenWithCountdownHeroProps } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'

export const FullScreenWithCountdownHero = ({
  media,
  richText,
  eventDate,
  showCountdown,
}: FullScreenWithCountdownHeroProps) => {
  return (
    <div className="relative flex items-center justify-center py-8 h-dvh">
      {media && typeof media === 'object' && (
        <>
          <div className="absolute inset-0 bg-white opacity-80 z-[1]" />
          <Media
            fill
            imgClassName="overflow-hidden absolute size-full object-cover object-top object-[50%_50%]"
            priority
            resource={media}
          />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-black font-petit-formal-script z-10"
      >
        <Card className="bg-transparent border-none p-8 z-10 relative flex flex-col items-center justify-center space-y-4 rounded-3xl shadow-none">
          <CardContent>
            {richText && (
              <RichText
                className="mb-6 [&_p]:text-xl md:[&_p]:text-3xl prose-h1:mb-0 [&_h1]:text-7xl lg:[&_h1]:text-8xl [&_h1]:font-thin"
                data={richText}
                enableGutter={false}
              />
            )}
            {showCountdown && eventDate && <EventCountdown eventDate={new Date(eventDate)} />}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
