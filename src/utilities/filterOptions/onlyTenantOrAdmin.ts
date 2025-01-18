import { Event } from '@/payload-types'
import { FilterOptions } from 'payload'

export const onlyTenantOrAdmin: FilterOptions = async ({ req }) => {
  if (req.user?.role === 'admin') return true
  const userEvents = req.user?.events?.map((event: Event) => event.id)
  return {
    id: {
      in: userEvents,
    },
  }
}
