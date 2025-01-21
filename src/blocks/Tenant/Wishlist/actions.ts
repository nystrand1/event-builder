'use server'

import { getPayload } from 'payload'
import payloadConfig from '@payload-config'

export const reserveItem = async (formData: FormData) => {
  const wishlistId = formData.get('wishlistId') as string
  const itemId = formData.get('itemId') as string
  const quantity = parseInt(formData.get('quantity') as string)

  const payload = await getPayload({ config: payloadConfig })
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

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
                code: 'test-code', // Cookie of the user
                quantity,
              },
            ],
          }
        }

        return wishlistItem
      }),
    },
  })

  // Your reservation logic here
  console.log('reserving', { wishlistId, itemId, quantity })
}
