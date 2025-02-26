import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export const GET = async () => {
  const payload = await getPayload({ config })

  const event = await payload.create({
    collection: 'events',
    data: {
      name: 'My first event',
      eventDetails: {
        domain: 'snyggdoman.se',
        eventDate: new Date().toISOString(),
      },
      layout: [
        {
          blockType: 'mediaBlock',
          blockName: 'Media Block',
          media: 2,
        },
      ],
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      name: 'Filip Nystrand',
      email: 'filip.nystrand+api@gmail.com',
      password: 'testtest123',
      role: 'mediumUser',
      events: [event.id],
    },
  })

  return NextResponse.json({
    status: 'success',
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
  })
}
