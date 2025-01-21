import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Wishlist } from '@/payload-types'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { SubmitButton } from '../../components/SubmitButton/SubmitButton'
import { reserveItem } from './actions'
import RichText from '@/components/RichText'

interface WishlistItemProps {
  item: NonNullable<Wishlist['items']>[number]
  wishlist: Wishlist
  className?: string
}

const reservedAmount = (item: WishlistItemProps['item']) => {
  if (!item.reservationCodes) return 0
  return item.reservationCodes?.reduce((acc, code) => acc + (code.quantity || 0), 0)
}
const reservableAmount = (item: WishlistItemProps['item']) => {
  return (item.quantity || 0) - reservedAmount(item)
}

export const WishlistItem = ({ item, wishlist, className }: WishlistItemProps) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={twMerge('w-full md:w-1/2 lg:w-1/3', className)}
    >
      <Card className="rounded-3xl">
        <CardHeader>
          <h2 className="text-xl">{item.name}</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <Media resource={item.image} imgClassName="aspect-[3/2] object-cover" />
          {item.quantity && (
            <div className="flex justify-between">
              {item.quantity && <p>Antal: {item.quantity}</p>}
              {reservedAmount(item) > 0 && <p>Reserverat: {reservedAmount(item)}</p>}
            </div>
          )}
          {item.description && <RichText data={item.description} enableGutter={false} />}
          {item.link && (
            <Button className="w-full" asChild>
              <Link href={item.link}>Länk</Link>
            </Button>
          )}
          {reservableAmount(item) > 1 && item.quantity && (
            <div className="flex flex-row justify-center gap-2">
              <Button
                variant="outline"
                disabled={quantity <= 1}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1)
                  }
                }}
              >
                -
              </Button>
              <Input
                type="number"
                min={0}
                max={reservableAmount(item)}
                className="font bg-transparent w-[70px]"
                value={quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value)
                  if (value > reservableAmount(item)) {
                    setQuantity(reservableAmount(item))
                    return
                  }
                  if (value < 0) {
                    setQuantity(1)
                    return
                  }
                  setQuantity(value)
                }}
              />
              <Button
                variant="outline"
                disabled={quantity >= reservableAmount(item)}
                onClick={() => {
                  if (quantity < reservableAmount(item)) {
                    setQuantity(quantity + 1)
                  }
                }}
              >
                +
              </Button>
            </div>
          )}
          {reservableAmount(item) > 0 && (
            <form action={reserveItem}>
              <input type="hidden" name="wishlistId" value={wishlist.id} />
              <input type="hidden" name="itemId" value={item.id!} />
              <input type="hidden" name="quantity" value={quantity} />
              <SubmitButton
                isDisabled={reservableAmount(item) === 0}
                pendingLabel="Reserverar..."
                label={reservableAmount(item) === 0 ? 'Helt reserverad' : 'Reservera'}
              />
            </form>
          )}
        </CardContent>
      </Card>
    </motion.li>
  )
}
