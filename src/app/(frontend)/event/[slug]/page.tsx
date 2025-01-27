import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/Tenant/RenderTenantHero'
import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import PageClient from './page.client'
import { hexToHSL } from '@/utilities/hexToHSL'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export const generateStaticParams = async () => {
  return []
}

type Params = {
  params: Promise<{
    slug?: string
  }>
}

export const Page = async ({ params }: Params) => {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params

  if (!slug) {
    return null
  }

  const page = await queryEventBySlug({ slug })

  const cssVars = {}

  if (page?.theme?.accentColor) {
    cssVars['--accent'] = hexToHSL(page.theme.accentColor)
  }
  if (page?.theme?.primaryColor) {
    cssVars['--primary'] = hexToHSL(page.theme.primaryColor)
  }
  if (page?.theme?.secondaryColor) {
    cssVars['--secondary'] = hexToHSL(page.theme.secondaryColor)
  }

  return (
    <div style={cssVars}>
      {draft && <LivePreviewListener />}
      <RenderHero {...page.hero} />
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}

const queryEventBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      'eventDetails.domain': {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default Page
