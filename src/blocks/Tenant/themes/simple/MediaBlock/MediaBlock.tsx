'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { motion } from 'motion/react'
import { StaticImageData } from 'next/image'
import React from 'react'
import { cn } from 'src/utilities/cn'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
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
