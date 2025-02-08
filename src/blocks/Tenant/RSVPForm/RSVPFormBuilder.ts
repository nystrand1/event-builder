import { RSVPFormBlock } from '@/payload-types'

export const RSVPFormBuilder = (fields: RSVPFormBlock['fields']) => {
  return fields?.reduce((initialSchema, field) => {
    if (field.type === 'checkbox') {
      return {
        ...initialSchema,
        [field.id!]: field.options?.[0].value ?? false,
      }
    }

    if (field.type === 'email') {
      return {
        ...initialSchema,
        [field.id!]: '',
      }
    }
    if (field.type === 'text') {
      return {
        ...initialSchema,
        [field.id!]: '',
      }
    }
    if (field.type === 'select') {
      return {
        ...initialSchema,
        [field.id!]: '',
      }
    }
    if (field.type === 'textarea') {
      return {
        ...initialSchema,
        [field.id!]: '',
      }
    }
  }, {})
}
