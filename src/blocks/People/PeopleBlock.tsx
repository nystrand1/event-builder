'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { PeopleBlock as PeopleBlockProps } from '@/payload-types'
import { motion } from 'motion/react'

export const PeopleBlock = ({ people, title }: PeopleBlockProps) => {
  if (!people || !people.length) return null

  return (
    <div className="container space-y-8">
      <h2 className="text-center text-6xl">{title}</h2>
      <div className="flex flex-col md:flex-row md:gap-12 justify-center">
        {people.map((person, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Media resource={person.image} className="rounded-full overflow-hidden max-w-80" />
              <div className="text-center space-y-1">
                <h2 className="text-3xl">{person.name}</h2>
                <p className="font-medium text-lg">{person.role}</p>
              </div>
              <RichText data={person.bio} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
