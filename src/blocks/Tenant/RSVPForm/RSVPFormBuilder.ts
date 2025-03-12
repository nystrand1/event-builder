import { RSVPFormBlock } from '@/payload-types'

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

export const RSVPFormBuilder = (fields: RSVPFormBlock['fields']) => {
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
        [key]: null,
      }
    }
    if (field.type === 'text') {
      return {
        ...initialSchema,
        [key]: null,
      }
    }
    if (field.type === 'select') {
      return {
        ...initialSchema,
        [key]: null,
      }
    }
    if (field.type === 'textarea') {
      return {
        ...initialSchema,
        [key]: null,
      }
    }
  }, {})
}
