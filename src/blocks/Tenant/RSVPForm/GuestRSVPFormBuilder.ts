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
    let defaultValue = null
    if (guest.rsvpAnswer && guest.rsvpAnswer[key] !== undefined) {
      defaultValue = guest.rsvpAnswer[key]
    }
    if (field.type === 'radio') {
      return {
        ...initialSchema,
        [key]: defaultValue ?? false,
      }
    }

    if (field.type === 'email') {
      return {
        ...initialSchema,
        [key]: defaultValue,
      }
    }
    if (field.type === 'text') {
      return {
        ...initialSchema,
        [key]: defaultValue,
      }
    }
    if (field.type === 'select') {
      return {
        ...initialSchema,
        [key]: defaultValue,
      }
    }
    if (field.type === 'textarea') {
      return {
        ...initialSchema,
        [key]: defaultValue,
      }
    }
    return initialSchema
  }, {})
}
