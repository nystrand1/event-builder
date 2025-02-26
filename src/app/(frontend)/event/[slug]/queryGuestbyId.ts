import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'

export const queryGuestById = cache(async ({ id }: { id?: string }) => {
  if (!id) return null
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guests',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      guestId: {
        equals: id,
      },
    },
  })

  return result.docs?.[0] || null
})
