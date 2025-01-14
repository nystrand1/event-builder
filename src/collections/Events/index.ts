import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { hero } from '@/heros/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Archive } from '@/blocks/ArchiveBlock/config'
import { FormBlock } from '@/blocks/Form/config'
import { adminOnly } from '@/access/adminOnly'
import { Event } from '@/payload-types'
import { Countdown } from '@/blocks/Countdown/config'
import { PeopleBlock } from '@/blocks/People/config'
import { WishlistBlock } from '@/blocks/Wishlist/config'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
    baseListFilter: ({ req }) => {
      if (req.user?.role === 'admin') return null
      const userEvents = req.user?.events?.map((event: Event) => event.id)
      return {
        id: {
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
      name: 'eventDate',
      type: 'date',
    },
    {
      name: 'domain',
      type: 'text',
      access: {
        create: adminOnly,
        update: adminOnly,
      },
    },
    {
      name: 'endDate',
      type: 'date',
      access: {
        create: adminOnly,
        update: adminOnly,
        read: authenticated,
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Guests',
          fields: [
            {
              name: 'guests',
              type: 'join',
              collection: 'guests',
              on: 'events',
            },
          ],
        },
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                Countdown,
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                PeopleBlock,
                WishlistBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          label: 'Wishlist',
          fields: [
            {
              name: 'wishlist',
              type: 'blocks',
              blocks: [WishlistBlock],
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
