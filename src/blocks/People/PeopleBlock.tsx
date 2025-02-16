'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Card, CardContent } from '@/components/ui/card'
import { PeopleBlock as PeopleBlockProps } from '@/payload-types'
import { motion } from 'motion/react'

export const PeopleBlock = ({ people, title }: PeopleBlockProps) => {
  if (!people || !people.length) return null

  return (
    <div className="container space-y-8">
      <h2 className="text-center text-6xl">{title}</h2>
      <div className="md:max-w-[70%] lg:max-w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center">
        {people.map((person, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="size-full shadow-md border-none">
                <CardContent className="p-4 flex flex-col items-center space-y-2">
                  <Media
                    resource={person.image}
                    className="rounded-full overflow-hidden aspect-square size-48 md:size-auto"
                  />
                  <div className="text-center space-y-1 w-full">
                    <h2 className="text-2xl">{person.name}</h2>
                    <p className="font-medium text-lg">{person.role}</p>
                  </div>
                  <RichText data={person.bio} className="px-0" />
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
