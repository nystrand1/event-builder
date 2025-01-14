'use server'

import { WishlistBlock } from '@/payload-types'
import payloadConfig from '@payload-config'
import { getPayload } from 'payload'

type WishlistItem = NonNullable<WishlistBlock['items']>[number]

export const reserveItem = async (item: WishlistItem) => {
  'use server'
  const payload = await getPayload({ config: payloadConfig })

  console.log('Reserving item', item)
}
