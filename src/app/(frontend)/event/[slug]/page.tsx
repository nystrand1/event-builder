import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cookies, draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { EventProvider } from './providers/EventProvider'
import { GuestProvider } from './providers/GuestProvider'
import { queryEventBySlug } from './queryEventBySlug'
import { queryGuestById } from './queryGuestbyId'

export const dynamic = 'force-dynamic'

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
    return notFound()
  }
  const page = await queryEventBySlug({ slug })

  if (!page) {
    return notFound()
  }

  const c = await cookies()

  const guestIdFromCookie = c.get('guestId')?.value

  const guestFromCms = await queryGuestById({ id: guest || guestIdFromCookie })

  if (guest) {
    redirect(`/event/${slug}`)
  }

  return (
    <EventProvider eventId={page.id}>
      <GuestProvider guest={guestFromCms}>
        {draft && <LivePreviewListener />}
        <RenderBlocks blocks={page.layout} theme={page.theme?.theme} />
      </GuestProvider>
    </EventProvider>
  )
}
