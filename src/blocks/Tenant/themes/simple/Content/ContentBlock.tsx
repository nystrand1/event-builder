'use client'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { motion } from 'motion/react'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
        {columns?.map((col, index) => {
          const { enableLink, link, richText, size } = col

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`)}
              key={index}
            >
              {richText && <RichText data={richText} enableGutter={false} />}
              {enableLink && link && (
                <a href={link.url ?? ''} className="text-black underline mt-4 inline-block">
                  {link.label}
                </a>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
