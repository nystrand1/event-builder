import { eventDateField } from '@/fields/eventDateField'
import { Block } from 'payload'

export const Countdown: Block = {
  slug: 'countdown',
  fields: [eventDateField({ fieldName: 'eventDate' })],
}
