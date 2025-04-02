import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cookies, draftMode } from 'next/headers'
import { notFound, redirect, RedirectType } from 'next/navigation'
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

export default async function EventPage({ params, searchParams }: Params) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = (await params) ?? {}
  const { guest } = await searchParams

  const eventSlug = slug

  if (!eventSlug) {
    return notFound()
  }
  const page = await queryEventBySlug({ slug: eventSlug })

  if (!page || !page.eventDetails?.eventId) {
    return notFound()
  }

  const c = await cookies()

  const guestIdFromCookie = c.get('guestId')?.value

  const guestFromCms = await queryGuestById({ id: guest || guestIdFromCookie })

  if (guest) {
    const redirectLink = process.env.TENANT_DOMAIN ? process.env.TENANT_DOMAIN : `/event/${slug}`
    redirect(redirectLink, RedirectType.replace)
  }

  return (
    <EventProvider eventId={page.eventDetails.eventId}>
      <GuestProvider guest={guestFromCms}>
        {draft && <LivePreviewListener />}
        <RenderBlocks blocks={page.layout} theme={page.theme?.theme} />
      </GuestProvider>
    </EventProvider>
  )
}
