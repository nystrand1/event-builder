'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'

export const DefaultHero: React.FC<Page['hero']> = ({ media, richText, eventDate }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="container mb-8 z-10 relative flex flex-col items-center justify-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[36.5rem] text-center"
        >
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {eventDate && <EventCountdown eventDate={new Date(eventDate)} />}
        </motion.div>
        {media && typeof media === 'object' && (
          <motion.div
            className="relative aspect-[4/3] w-full max-w-lg rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
