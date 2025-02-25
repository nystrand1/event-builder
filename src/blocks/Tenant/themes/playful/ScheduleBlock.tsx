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
    offset: ['start 90%', 'end 30%'],
  })

  return (
    <div className="container relative" ref={containerRef}>
      <h2 className="text-center text-5xl mb-16 text-purple-500 font-handwritten">{title}</h2>
      <div className="relative w-[90%] md:w-3/5 mx-auto flex justify-center">
        <div className="flex flex-col space-y-8 relative">
          {schedule &&
            schedule.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
                viewport={{ margin: '0% 0% -30% 0%' }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-none shadow-xl shadow-pink-200">
                  <CardHeader>
                    <Badge className="w-fit text-black text-base bg-yellow-300">{step.time}</Badge>
                    <CardTitle className="text-purple-600">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RichText className="pl-0" data={step.description} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          <motion.div
            className="w-[8px] bg-yellow-300 origin-top h-full absolute -left-6"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>
    </div>
  )
}
