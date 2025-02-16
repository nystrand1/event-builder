import { Event } from '@/payload-types'
import { FilterOptions } from 'payload'

export const onlyGuestsOnSameEvent: FilterOptions = async ({ siblingData }) => {
  const { events } = siblingData as { events: Event[] }
  return {
    events: {
      in: events,
    },
  }
}
