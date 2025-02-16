import { Guest, RSVPFormBlock } from '@/payload-types'

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const GuestRSVPFormBuilder = (fields: RSVPFormBlock['fields'], guest: Guest) => {
  return fields?.reduce((initialSchema, field) => {
    const key = slugify(field.label)
    if (field.type === 'checkbox') {
      return {
        ...initialSchema,
        [key]: field.options?.[0].value ?? false,
      }
    }

    if (field.type === 'email') {
      return {
        ...initialSchema,
        [key]: '',
      }
    }
    if (field.type === 'text') {
      const nameFields = ['name', 'namn']
      const isNameField = nameFields.includes(field.label.toLowerCase())
      return {
        ...initialSchema,
        [key]: isNameField ? guest.name : '',
      }
    }
    if (field.type === 'select') {
      return {
        ...initialSchema,
        [key]: '',
      }
    }
    if (field.type === 'textarea') {
      return {
        ...initialSchema,
        [key]: '',
      }
    }
    return initialSchema
  }, {})
}
