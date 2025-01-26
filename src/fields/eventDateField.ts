import { Field } from 'payload'

interface EventDateFieldProps {
  fieldName: string
  hidden?: boolean
}

export const eventDateField = ({ fieldName, hidden }: EventDateFieldProps): Field => {
  return {
    name: fieldName,
    type: 'date',
    defaultValue: () => new Date(),
    admin: {
      hidden,
    },
    hooks: {
      beforeChange: [
        async ({ data }) => {
          return data?.eventDetails?.eventDate ?? new Date()
        },
      ],
    },
  }
}
