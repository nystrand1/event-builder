'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'

export const DefaultHero: React.FC<Page['hero']> = ({ media, richText }) => {
  return (
    <div className="relative flex items-center justify-center py-8 min-h-[70vh]">
      {media && typeof media === 'object' && (
        <>
          <div className="absolute inset-0 bg-black opacity-50 z-[1]" />
          <Media
            fill
            imgClassName="overflow-hidden absolute size-full object-cover object-top object-[50%_50%]"
            priority
            resource={media}
          />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="bg-transparent border-none p-8 z-10 relative flex flex-col items-center justify-center space-y-4 rounded-3xl">
          <CardContent>
            {richText && (
              <RichText
                className="font-tangerine mb-6 [&_p]:text-3xl md:[&_p]:text-8xl prose-h1:mb-0 [&_h1]:text-8xl md:[&_h1]:text-[172px] [&_h1]:text-[#f0e9d6] text-[#f0e9d6]"
                data={richText}
                enableGutter={false}
              />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
