import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import { HeadingFeatureClient } from '@payloadcms/richtext-lexical/client'
import { Block } from 'payload'

export const InviationCardBlock: Block = {
  slug: 'invitationCardBlock',
  interfaceName: 'InvitationCardBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'cardFront',
          label: 'Card Front',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'information',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
              }),
            },
            {
              name: 'buttonLabel',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'cardBack',
          label: 'Card Back',
          fields: [
            {
              name: 'firstTextSection',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HeadingFeature(),
                  ]
                },
              }),
            },
            {
              name: 'secondTextSection',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HeadingFeature(),
                  ]
                },
              }),
            },
            {
              name: 'buttonlabel',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
