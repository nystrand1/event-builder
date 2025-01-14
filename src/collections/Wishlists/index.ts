import { authenticated } from '@/access/authenticated'
import { Event } from '@/payload-types'
import { CollectionConfig } from 'payload'

export const WishLists: CollectionConfig<'wishlists'> = {
  slug: 'wishlists',
  labels: {
    singular: 'Wishlist',
    plural: 'Wishlists',
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title',
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
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'event',
      label: 'Event',
      type: 'relationship',
      relationTo: 'events',
      filterOptions: (props) => {
        if (props.user?.role === 'admin') return true
        const userEvents = props.user?.events?.map((event: Event) => event.id)
        return {
          id: {
            in: userEvents,
          },
        }
      },
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
        {
          name: 'quantity',
          label: 'Quantity',
          type: 'number',
        },
        {
          name: 'reservationCodes',
          label: 'Reservation Codes',
          type: 'array',
          admin: {
            disabled: true,
          },
          fields: [
            {
              name: 'code',
              label: 'Code',
              type: 'text',
            },
            {
              name: 'quantity',
              label: 'Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
}
