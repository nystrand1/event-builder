import { Field } from 'payload'
import { Event } from '@/payload-types'

export const extractBlockName = (layoutItem: Event['layout'][number]) => {
  switch (layoutItem.blockType) {
    case 'fullScreenWithCountdownHero':
      return layoutItem.blockName ?? 'Start'
    case 'countdown':
      return layoutItem.blockName ?? 'Countdown'
    case 'content':
      return layoutItem.blockName ?? 'Content'
    case 'mediaBlock':
      return layoutItem.blockName ?? 'Media'
    case 'archive':
      return layoutItem.blockName ?? 'Archive'
    case 'twoColumnImageAndText':
      return layoutItem.blockName ?? 'Introduction'
    case 'peopleBlock':
      return layoutItem.title ?? layoutItem.blockName ?? 'People'
    case 'wishlistBlock':
      return layoutItem.title ?? layoutItem.blockName ?? 'Wishlist'
    case 'schedule':
      return layoutItem.blockName ?? 'Schedule'
    default:
      return 'unnamed'
  }
}

export const formatSlug = (blockName: string) => {
  return blockName
    .replace(/ /g, '-')
    .replaceAll('ö', 'o')
    .replaceAll('å', 'a')
    .replaceAll('ä', 'a')
    .replace(/[^\w-]+/g, '')
}

export const TenantHeaderNavField: Field = {
  name: 'headerNav',
  type: 'array',
  label: 'Header Navigation',
  admin: {
    initCollapsed: true,
  },
  hooks: {
    beforeChange: [
      ({ data, value }) => {
        const event = data as Event
        const { layout } = event
        if (!layout) return []
        // Zip layout and value, allowing the value array to have precedence
        const headerNav = layout
          .filter((block) => Boolean(block.blockName))
          .map((block) => {
            const { blockName } = block
            const formattedSlug = blockName ? formatSlug(blockName) : undefined
            const sectionLink = formattedSlug ? `#${formattedSlug}` : undefined
            const valueItem = value.find((item) => item.sectionLink === sectionLink)
            return {
              sectionLink,
              label: valueItem?.label ?? extractBlockName(block),
            }
          })
        return headerNav
      },
    ],
  },
  labels: {
    singular: 'Header Item',
    plural: 'Header Items',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Label',
    },
    {
      name: 'sectionLink',
      type: 'text',
      label: 'Section Link',
    },
  ],
}
