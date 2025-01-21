'use client'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScheduleBlock as ScheduleBlockProps } from '@/payload-types'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function ScheduleBlock({ title, schedule }: ScheduleBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 30%'], // Adjusted to show more of the timeline
  })

  return (
    <div className="container relative" ref={containerRef}>
      <h2 className="text-center text-6xl mb-20">{title}</h2>
      <div className="relative w-[90%] md:w-3/5 mx-auto flex">
        <div className="absolute mr-8 w-[6px] h-full -left-5 md:-left-8 top-0">
          <div className="h-full justify-start items-start">
            <motion.div
              className="w-full bg-white origin-top h-full"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-12">
          {schedule &&
            schedule.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  margin: '0% 0% -30% 0%', // Adjusted to keep cards visible longer
                }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-none pl-8">
                  <CardHeader>
                    <Badge className="w-fit text-black text-base">{step.time}</Badge>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RichText className="pl-0" data={step.description} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
