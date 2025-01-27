import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { hero } from '@/heros/Tenant/Default/config'
import { Content } from '@/blocks/Tenant/Content/config'
import { MediaBlock } from '@/blocks/Tenant/MediaBlock/config'
import { Archive } from '@/blocks/Main/ArchiveBlock/config'
import { FormBlock } from '@/blocks/Shared/Form/config'
import { adminOnly } from '@/access/adminOnly'
import { Event } from '@/payload-types'
import { Countdown } from '@/blocks/Tenant/Countdown/config'
import { PeopleBlock } from '@/blocks/People/config'
import { WishlistBlock } from '@/blocks/Tenant/Wishlist/config'
import { ScheduleBlock } from '@/blocks/Tenant/Schedule/config'

import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { TwoColumnImageAndTextBlock } from '@/blocks/Tenant/TwoColumnImageAndText/config'
import { FullScreenWithCountdownHero } from '@/heros/Tenant/FullScreenWithCountdown/config'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

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
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.eventDetails.domain === 'string' ? data.eventDetails.domain : '',
          collection: 'events',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) => {
      const doc = data as unknown as Event
      return generatePreviewPath({
        slug: typeof doc?.eventDetails?.domain === 'string' ? doc?.eventDetails?.domain : '',
        collection: 'events',
        req,
      })
    },
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
      type: 'tabs',
      admin: {
        position: 'sidebar',
      },
      tabs: [
        {
          label: 'Event details',
          fields: [
            {
              type: 'group',
              name: 'eventDetails',
              label: 'Event details',
              fields: [
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
              ],
            },
          ],
        },
        {
          label: 'Theme',
          fields: [
            {
              type: 'group',
              name: 'theme',
              fields: [
                colorPickerField({
                  name: 'primaryColor',
                  label: 'Primary color',
                }),
                colorPickerField({
                  name: 'secondaryColor',
                  label: 'Secondary color',
                }),
                colorPickerField({
                  name: 'accentColor',
                  label: 'Accent color',
                }),
              ],
            },
          ],
        },
      ],
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
                FullScreenWithCountdownHero,
                Countdown,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                PeopleBlock,
                WishlistBlock,
                ScheduleBlock,
                TwoColumnImageAndTextBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
      ],
    },
  ],
  timestamps: true,
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 10,
  },
}
