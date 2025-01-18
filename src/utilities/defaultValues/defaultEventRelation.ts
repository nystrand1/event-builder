import { Event } from '@/payload-types'
import { DefaultValue } from 'payload'

export const defaultEvent: DefaultValue = ({ req }) => {
  const userEvents = req.user?.events?.map((event: Event) => event.id)
  if (userEvents?.length) {
    return userEvents[0]
  }
}
