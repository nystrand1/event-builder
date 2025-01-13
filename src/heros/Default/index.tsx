'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'

export const DefaultHero: React.FC<Page['hero']> = ({ media, richText }) => {
  return (
    <div className="relative flex items-center justify-center py-8">
      <div className="container mb-8 z-10 relative flex flex-col items-center justify-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[80%]"
        >
          {richText && (
            <RichText
              className="font-amatic mb-6 [&_p]:text-3xl prose-h1:mb-0 [&_h1]:text-8xl"
              data={richText}
              enableGutter={false}
            />
          )}
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
