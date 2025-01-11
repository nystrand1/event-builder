import { Media } from '@/payload-types'

export const getMediaItem = (media: number | Media | null | undefined) => {
  if (!media) {
    return null
  }

  if (typeof media === 'number') {
    return null
  }

  if (!media.url) {
    throw new Error('Media item is missing a URL')
  }

  return {
    ...media,
    url: media.url!,
  }
}
