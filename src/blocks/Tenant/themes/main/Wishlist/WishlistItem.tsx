'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { SubmitButton } from '@/components/SubmitButton/SubmitButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Wishlist } from '@/payload-types'
import { ExternalLink, Minus, Plus } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { startTransition, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { reserveItem } from '../../../Wishlist/actions'
import { CancelReservation } from './CancelReservation'
import { ReservationSuccessDialog } from './ReservationSuccessDialog'

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

interface QuantitySelectorProps {
  item: WishlistItemProps['item']
  quantity: number
  setQuantity: (quantity: number) => void
}

const QuantitySelector = ({ item, quantity, setQuantity }: QuantitySelectorProps) => {
  const remaining = reservableAmount(item)
  if (remaining === 0) return null

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setQuantity(quantity - 1)}
        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity <= 1}
      >
        <Minus size={14} />
      </button>
      <span className="text-sm font-medium w-6 text-center">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity >= remaining}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}

export const WishlistItem = ({ item, wishlist, className }: WishlistItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const [reservationCode, setReservationCode] = useState<string>('')
  const [showSuccess, setShowSuccess] = useState(false)

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const code = await reserveItem(formData)
        setReservationCode(code)
        setShowSuccess(true)
      } catch (error) {
        // Handle error
      }
    })
  }

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={twMerge('w-full max-w-[800px] mx-auto', className)}
      >
        <Card className="rounded-3xl shadow-md border-none">
          <CardContent className="flex flex-col md:flex-row gap-8 p-6">
            <Media
              resource={item.image}
              className="flex-shrink-0"
              imgClassName="w-full h-48 md:size-48 object-cover rounded-xl"
            />
            <div className="flex flex-grow flex-col justify-between">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <h2 className="text-xl">{item.name}</h2>
                {item.quantity && item.quantity > 0 && (
                  <p className="text-sm text-gray-500">
                    {reservedAmount(item)} av {item.quantity} reserverade
                  </p>
                )}
              </div>
              {item.description && (
                <RichText
                  data={item.description}
                  enableGutter={false}
                  className="text-grey-800 text-left w-full flex-grow"
                />
              )}
              <div className="flex flex-col gap-4">
                <QuantitySelector item={item} quantity={quantity} setQuantity={setQuantity} />
                <div className="flex gap-2">
                  {reservableAmount(item) > 0 && (
                    <form action={onSubmit} className="w-full md:w-fit">
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
                  {item.link && (
                    <Link href={item.link}>
                      <Button variant="outline" className="w-full text-black justify-center">
                        Länk
                        <ExternalLink className="ml-2" />
                      </Button>
                    </Link>
                  )}
                  {item.reservationCodes && item.id && item.reservationCodes.length > 0 && (
                    <CancelReservation
                      itemName={item.name}
                      wishlistId={wishlist.id}
                      itemId={item.id}
                    />
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.li>

      <ReservationSuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        code={reservationCode}
        itemName={item.name}
      />
    </>
  )
}
