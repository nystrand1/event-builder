import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { adminOnly } from '@/access/adminOnly'
import { Event } from '@/payload-types'
import { randomUUID } from 'crypto'
import { defaultEvent } from '@/utilities/defaultValues/defaultEventRelation'
import { onlyTenantOrAdmin } from '@/utilities/filterOptions/onlyTenantOrAdmin'

export const Guests: CollectionConfig<'guests'> = {
  slug: 'guests',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: adminOnly,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'events'],
    useAsTitle: 'name',
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
  ],
  timestamps: true,
}
