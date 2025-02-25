'use client'

import RichText from '@/components/RichText'
import { ScheduleBlock as ScheduleBlockProps } from '@/payload-types'
import { motion } from 'framer-motion'

export function ScheduleBlock({ title, schedule }: ScheduleBlockProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl text-center mb-12">{title}</h2>
      <div className="space-y-8">
        {schedule?.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="border-l-2 border-gray-200 pl-4"
          >
            <time className="text-sm text-gray-500">{step.time}</time>
            <h3 className="text-xl mt-1">{step.title}</h3>
            <div className="mt-2">
              <RichText data={step.description} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
