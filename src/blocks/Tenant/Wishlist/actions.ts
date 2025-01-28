'use server'

import { getPayload } from 'payload'
import payloadConfig from '@payload-config'

const generateReadableReservationCode = () => {
  // Generate a random string of 4 characters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const reserveItem = async (formData: FormData) => {
  const wishlistId = formData.get('wishlistId') as string
  const itemId = formData.get('itemId') as string
  const quantity = parseInt(formData.get('quantity') as string)

  const payload = await getPayload({ config: payloadConfig })
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const code = generateReadableReservationCode()

  const wishlist = await payload.findByID({
    collection: 'wishlists',
    id: wishlistId,
  })

  await payload.update({
    collection: 'wishlists',
    id: wishlistId,
    data: {
      items: wishlist.items.map((wishlistItem) => {
        if (wishlistItem.id === itemId) {
          return {
            ...wishlistItem,
            reservationCodes: [
              ...(wishlistItem.reservationCodes || []),
              {
                code,
                quantity,
              },
            ],
          }
        }
        return wishlistItem
      }),
    },
  })

  return code
}

export const cancelReservation = async (formData: FormData) => {
  const wishlistId = formData.get('wishlistId') as string
  const itemId = formData.get('itemId') as string
  const code = formData.get('code') as string

  const payload = await getPayload({ config: payloadConfig })

  const wishlist = await payload.findByID({
    collection: 'wishlists',
    id: wishlistId,
  })

  // Find the item and verify the code exists
  const item = wishlist.items.find((item) => item.id === itemId)
  const reservationExists = item?.reservationCodes?.some((reservation) => reservation.code === code)

  if (!reservationExists) {
    throw new Error('Invalid reservation code')
  }

  await payload.update({
    collection: 'wishlists',
    id: wishlistId,
    data: {
      items: wishlist.items.map((wishlistItem) => {
        if (wishlistItem.id === itemId) {
          return {
            ...wishlistItem,
            reservationCodes: wishlistItem?.reservationCodes?.filter(
              (reservation) => reservation.code !== code,
            ),
          }
        }
        return wishlistItem
      }),
    },
  })
}
