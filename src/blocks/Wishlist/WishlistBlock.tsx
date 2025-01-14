'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { WishlistBlock as WishlistBlockProps } from '@/payload-types'
import { motion } from 'motion/react'
import Link from 'next/link'
import { reserveItem } from './actions'

type WishlistItem = NonNullable<WishlistBlockProps['items']>[number]

const reservedAmount = (item: WishlistItem) => {
  if (!item.reservationCodes) return 0
  return item.reservationCodes?.reduce((acc, code) => acc + (code.quantity || 0), 0)
}

export const WishlistBlock = (props: WishlistBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container flex flex-col space-y-8 items-center"
    >
      <h2 className="text-3xl">{props.title}</h2>
      {props.text && <RichText data={props.text} />}
      <ul className="flex flex-col md:flex-row justify-center w-full gap-4 md:w-1/2 lg:w-1/3">
        {props.items?.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 * i }}
          >
            <Card className="rounded-3xl">
              <CardHeader>
                <h2 className="text-xl">{item.name}</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <Media resource={item.image} />
                {item.quantity && <p>Antal: {item.quantity}</p>}
                {reservedAmount(item) > 0 && <p>Reserverat: {reservedAmount(item)}</p>}
                <Button className="w-full" asChild>
                  <Link href={item.link}>Länk</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => reserveItem(item)}>
                  Reservera
                </Button>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
