import { iconField } from '@/fields/iconField'
import { Block } from 'payload'

export const ScheduleBlock: Block = {
  slug: 'schedule',
  interfaceName: 'ScheduleBlock',
  labels: {
    singular: 'Schedule',
    plural: 'Schedules',
  },
  fields: [
    iconField,
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'schedule',
      label: 'Schedule',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'time',
          label: 'Time',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
}
