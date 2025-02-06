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
  ],
}
