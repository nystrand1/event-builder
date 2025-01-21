'use client'
import RichText from '@/components/RichText'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScheduleBlock as ScheduleBlockProps } from '@/payload-types'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function ScheduleBlock({ title, schedule }: ScheduleBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'], // Adjust these values to match card animations
  })

  return (
    <div className="container relative" ref={containerRef}>
      <h2 className="text-center text-6xl mb-20">{title}</h2>

      <div className="relative w-[90%] md:w-3/5 mx-auto">
        {/* Timeline background line */}
        <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-[4px] bg-transparent" />

        {/* Animated progress line */}
        <motion.div
          className="flex flex-col justify-end items-end absolute -left-4 md:-left-8 top-0 bottom-0 w-[4px] bg-card origin-top"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        {schedule &&
          schedule.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                margin: '-40% 0% -40% 0%', // Matches the scroll offset
              }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-none rounded-none pl-8 mb-12">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <RichText data={step.description} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
