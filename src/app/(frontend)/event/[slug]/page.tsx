import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GuestProvider } from './providers/GuestProvider'
import { ThemeProvider } from './providers/ThemeProvider'

export const generateStaticParams = async () => {
  return []
}

type Params = {
  params: Promise<{
    slug?: string
  }>
  searchParams: Promise<{
    guest?: string
  }>
}

export const Page = async ({ params, searchParams }: Params) => {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params
  const { guest } = await searchParams
  if (!slug) {
    return null
  }
  const page = await queryEventBySlug({ slug })

  const guestFromCms = await queryGuestById({ id: guest })

  return (
    <GuestProvider guest={guestFromCms}>
      {draft && <LivePreviewListener />}
      <RenderBlocks blocks={page.layout} theme={page.theme?.theme} />
    </GuestProvider>
  )
}

export const queryGuestById = cache(async ({ id }: { id?: string }) => {
  if (!id) return null
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guests',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      guestId: {
        equals: id,
      },
    },
  })

  return result.docs?.[0] || null
})

export const queryEventBySlug = cache(async ({ slug }: { slug: string }) => {
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
