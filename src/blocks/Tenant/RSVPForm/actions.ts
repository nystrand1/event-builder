'use server'

import { z } from 'zod'
import { getPayload } from 'payload'
import payloadConfig from '@payload-config'

const personSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  isAttending: z.boolean(),
})

const formSchema = z.object({
  people: z.array(personSchema).min(1).max(5),
})

export async function submitRSVP(data: z.infer<typeof formSchema>) {
  const validatedData = formSchema.parse(data)

  const payload = await getPayload({ config: payloadConfig })

  // Here you would typically save the RSVP data to your database
  // For example:
  try {
    await payload.create({
      collection: 'rsvps',
      data: {
        people: validatedData.people,
        submittedAt: new Date(),
      },
    })
  } catch (error) {
    console.error('Failed to submit RSVP:', error)
    throw new Error('Failed to submit RSVP')
  }
}
