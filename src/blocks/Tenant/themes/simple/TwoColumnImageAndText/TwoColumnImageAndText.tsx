'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ImageTextTwoColumns } from '@/payload-types'
import { motion } from 'motion/react'

export const TwoColumnImageAndText = (props: ImageTextTwoColumns) => {
  const { title, text, image, imagePosition = 'left' } = props

  const imageContent = (
    <div className="w-full">
      <Media resource={image} className="aspect-[4/3]" imgClassName="w-full h-full object-cover" />
    </div>
  )

  const textContent = (
    <div className="w-full flex flex-col justify-center space-y-4 px-4 md:px-8">
      {text && <RichText className="pl-0" data={text} />}
    </div>
  )

  return (
    <section className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {title && <h2 className="text-3xl text-center mx-auto w-full md:col-span-2">{title}</h2>}
        {imagePosition === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </motion.div>
    </section>
  )
}
