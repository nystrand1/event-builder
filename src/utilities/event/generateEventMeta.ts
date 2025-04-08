import { queryEventBySlug } from '@/app/(frontend)/event/[slug]/queryEventBySlug'
import { mergeOpenGraph } from '../mergeOpenGraph'
import { getImageURL } from '../generateMeta'

export const generateEventMetadata = async () => {
  const tenantDomain = process.env.TENANT_DOMAIN
  if (!tenantDomain) {
    return {
      title: 'Home',
      description: 'Home page',
    }
  }

  const page = await queryEventBySlug({ slug: tenantDomain })

  if (!page || !page.name) {
    return {
      title: 'Home',
      description: 'Home page',
    }
  }

  const ogImage = getImageURL(page.invitationCard.cardFront.image)
  console.log(page.invitationCard.cardFront.description)
  return {
    title: page.name,
    description: page.invitationCard.cardFront.title,
    openGraph: mergeOpenGraph({
      siteName: page.name,
      title: page.name,
      description: page.invitationCard.cardFront.title,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}
