import type { CollectionConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { Event } from '@/payload-types'
import { defaultEvent } from '@/utilities/defaultValues/defaultEventRelation'
import { onlyGuestsOnSameEvent } from '@/utilities/filterOptions/onlyGuestsOnSameEvent'
import { onlyTenantOrAdmin } from '@/utilities/filterOptions/onlyTenantOrAdmin'
import { randomUUID } from 'crypto'
import { authenticated } from '../../access/authenticated'

export const Guests: CollectionConfig<'guests'> = {
  slug: 'guests',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: adminOnly,
    read: () => true,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'events'],
    useAsTitle: 'name',
    baseListFilter: ({ req }) => {
      if (req.user?.role === 'admin') return null
      const userEvents = req.user?.events?.map((event: Event) => event.id)
      return {
        events: {
          in: userEvents,
        },
      }
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'guestId',
      type: 'text',
      unique: true,
      defaultValue: () => randomUUID(),
      admin: {
        condition: (_data, _siblingData, { user }) => user?.role === 'admin',
      },
    },
    {
      name: 'invitationLink',
      type: 'text',
      hooks: {
        beforeChange: [
          async ({ value, data }) => {
            if (data?.invitationLink) return data.invitationLink
            if (!data?.guestId) return value
            // TODO: Fix for local dev
            if (!process.env.TENANT_DOMAIN && data?.events[0]?.eventDetails?.domain) {
              return `http://localhost:3000/event/${data.events[0].eventDetails.domain}/invitation/?guest=${data.guestId}`
            }
            return `https://${process.env.TENANT_DOMAIN}/invitation?guest=${data.guestId}`
          },
        ],
      },
    },
    {
      name: 'excludedFromRsvp',
      label: 'Exclude from RSVP',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Exclude this guest from RSVP, but show them in the guest list and invitation',
      },
    },
    {
      name: 'relatedGuests',
      type: 'relationship',
      relationTo: 'guests',
      filterOptions: onlyGuestsOnSameEvent,
      hasMany: true,
    },
    {
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      admin: {
        allowCreate: false,
        allowEdit: false,
        condition: (_data, _siblingData, { user }) => {
          return (user?.events?.length ?? 0) > 1 || user?.role === 'admin'
        },
      },
      hooks: {
        beforeChange: [
          async ({ value, req, data }) => {
            const userEvents = req.user?.events?.map((event: Event) => event.id)
            if (!data?.events && userEvents?.length) {
              return userEvents[0]
            }
            return value
          },
        ],
      },
      defaultValue: defaultEvent,
      filterOptions: onlyTenantOrAdmin,
    },
    {
      name: 'rsvpAnswer',
      type: 'json',
    },
  ],
  timestamps: true,
}
