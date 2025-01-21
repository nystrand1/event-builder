import { Block } from 'payload'

export const Countdown: Block = {
  slug: 'countdown',
  fields: [
    {
      name: 'eventDate',
      type: 'date',
      defaultValue: () => new Date(),
      hooks: {
        beforeChange: [
          async ({ data }) => {
            return data?.eventDetails?.eventDate ?? new Date()
          },
        ],
      },
    },
  ],
}
