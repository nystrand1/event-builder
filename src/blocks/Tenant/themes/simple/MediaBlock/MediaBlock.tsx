'use client'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { motion } from 'motion/react'

export const MediaBlock: React.FC<MediaBlockProps> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <motion.div
      className={cn('max-w-4xl mx-auto px-4', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('aspect-video object-cover', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div className={cn('mt-4 text-sm text-gray-600', captionClassName)}>
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </motion.div>
  )
}
