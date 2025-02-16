'use server'

import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import { z } from 'zod'

const formSchema = z.object({
  people: z.array(
    z.object({
      guestId: z.string(),
      name: z.string(),
      answers: z.record(z.string(), z.unknown()),
    }),
  ),
})

export const submitGuestRSVP = async (data: z.infer<typeof formSchema>) => {
  const payload = await getPayload({ config: payloadConfig })

  const promises = data.people.map(async (person) => {
    const { guestId, answers } = person
    return payload.update({
      collection: 'guests',
      where: {
        guestId: {
          equals: guestId,
        },
      },
      data: {
        rsvpAnswer: answers,
      },
    })
  })

  await Promise.all(promises)
}
