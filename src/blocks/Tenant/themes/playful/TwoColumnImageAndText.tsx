'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ImageTextTwoColumns } from '@/payload-types'
import { motion } from 'motion/react'

export const TwoColumnImageAndText = (props: ImageTextTwoColumns) => {
  const { title, text, image, imagePosition = 'left' } = props

  const imageContent = (
    <div className="w-full">
      <Media
        resource={image}
        className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
        imgClassName="w-full h-full object-cover"
      />
    </div>
  )

  const textContent = (
    <div className="w-full flex flex-col justify-center space-y-6 md:px-12">
      {text && <RichText className="pl-0" data={text} />}
    </div>
  )
  return (
    <section className="container bg-gradient-to-r from-pink-200 to-yellow-200 p-8 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: [0, 2, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {title && (
          <h2 className="text-5xl font-bold font-handwritten text-pink-600 text-center md:col-span-2">
            {title}
          </h2>
        )}
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
