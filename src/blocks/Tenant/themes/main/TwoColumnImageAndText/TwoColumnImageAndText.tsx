'use client'

import { useDemo } from '@/app/(frontend)/event/[slug]/providers/DemoProvider'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ImageAndTextTwoColumn } from '@/payload-types'
import { motion } from 'motion/react'

export const TwoColumnImageAndText = (props: ImageAndTextTwoColumn) => {
  const { title, text, image, imagePosition = 'left' } = props
  const { demo } = useDemo()

  const imageContent = (
    <div className="w-full ">
      <Media
        resource={image}
        className="aspect-[4/3] rounded-xl overflow-hidden"
        imgClassName="w-full h-full object-cover"
      />
    </div>
  )

  const textContent = (
    <div contentEditable={demo} className="w-full flex flex-col justify-center space-y-6 md:px-12">
      {text && <RichText className="pl-0" data={text} />}
    </div>
  )
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 md:flex-row gap-12 items-center"
      >
        {title && (
          <h2
            contentEditable={demo}
            className="text-6xl font-anonymous-pro text-center mx-auto font-bold w-full md:col-span-2"
          >
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
