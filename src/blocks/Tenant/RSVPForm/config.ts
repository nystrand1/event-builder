import { Block } from 'payload'

export const RSVPFormBlock: Block = {
  interfaceName: 'RSVPFormBlock',
  slug: 'rsvpFormBlock',
  labels: {
    singular: 'RSVP Form',
    plural: 'RSVP Forms',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'fields',
      type: 'array',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/Tenant/RSVPForm/QuestionRowLabel#QuestionRowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          label: 'Type',
          type: 'select',
          defaultValue: 'text',
          options: [
            {
              label: 'Text',
              value: 'text',
            },
            {
              label: 'Email',
              value: 'email',
            },
            {
              label: 'Number',
              value: 'number',
            },
            {
              label: 'Textarea',
              value: 'textarea',
            },
            {
              label: 'Checkbox',
              value: 'checkbox',
            },
            {
              label: 'Select',
              value: 'select',
            },
            {
              label: 'Radio',
              value: 'radio',
            },
          ],
        },
        {
          name: 'required',
          label: 'Required',
          type: 'checkbox',
        },
        {
          name: 'options',
          label: 'Options',
          type: 'array',
          admin: {
            condition: (_, siblingData) =>
              siblingData.type === 'select' || siblingData.type === 'radio',
          },
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              label: 'Value',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
