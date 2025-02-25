'use client'
import type { StaticImageData } from 'next/image'
import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'
import { Media } from '@/components/Media'

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
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption
  return (
    <motion.div
      className={twMerge(enableGutter ? 'container' : '', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, rotate: [0, 1, 0] }}
      viewport={{ once: true }}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn(
            'border-4 border-dashed border-pink-300 rounded-2xl aspect-video object-cover shadow-lg',
            imgClassName,
          )}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div className={cn('mt-6', { container: !disableInnerContainer }, captionClassName)}>
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </motion.div>
  )
}
