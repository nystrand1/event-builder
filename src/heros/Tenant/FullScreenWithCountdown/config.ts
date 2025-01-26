import type { Block } from 'payload'

import { eventDateField } from '@/fields/eventDateField'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FullScreenWithCountdownHero: Block = {
  interfaceName: 'FullScreenWithCountdownHero',
  slug: 'fullScreenWithCountdownHero',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'showCountdown',
      type: 'checkbox',
      defaultValue: true,
    },
    eventDateField({ fieldName: 'eventDate', hidden: true }),
  ],
}
