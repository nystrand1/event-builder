import { defaultEvent } from '@/utilities/defaultValues/defaultEventRelation'
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
      name: 'wishList',
      type: 'relationship',
      relationTo: 'wishlists',
      hasMany: false,
      defaultValue: defaultEvent,
    },
  ],
}
