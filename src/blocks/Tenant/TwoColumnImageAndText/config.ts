import { Block } from 'payload'

export const TwoColumnImageAndTextBlock: Block = {
  slug: 'twoColumnImageAndText',
  interfaceName: 'Image & Text (Two columns)',
  labels: {
    singular: 'Image & Text (Two columns)',
    plural: 'Image & Text (Two columns)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      defaultValue: 'left',
    },
  ],
}
