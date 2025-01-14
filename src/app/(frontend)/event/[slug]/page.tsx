import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const generateStaticParams = async () => {
  return []
}

type Params = {
  params: Promise<{
    slug?: string
  }>
}

export const Page = async ({ params }: Params) => {
  const { slug } = await params

  if (!slug) {
    return null
  }

  const page = await queryEventBySlug({ slug })
  return (
    <div>
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
      domain: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default Page
