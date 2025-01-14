import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WishlistBlock: Block = {
  slug: 'wishlistBlock',
  interfaceName: 'WishlistBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'text',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
        },
        {
          name: 'reservationCodes',
          type: 'array',
          admin: {
            disabled: true,
          },
          fields: [
            {
              name: 'code',
              type: 'text',
            },
            {
              name: 'quantity',
              type: 'number',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
