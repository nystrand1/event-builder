import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GuestProvider } from './providers/GuestProvider'
import { queryEventBySlug } from './queryEventBySlug'
import { queryGuestById } from './queryGuestbyId'

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

export default async function Page({ params, searchParams }: Params) {
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
