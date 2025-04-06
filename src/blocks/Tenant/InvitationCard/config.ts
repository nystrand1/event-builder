import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
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
              required: true,
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
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
              }),
            },
            {
              name: 'secondTextSection',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
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
