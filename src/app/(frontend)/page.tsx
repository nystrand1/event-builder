'use server'

import { cookies, draftMode } from 'next/headers'
import PageTemplate, { generateMetadata } from './[slug]/page'
import { queryEventBySlug } from './event/[slug]/queryEventBySlug'
import { notFound } from 'next/navigation'
import { queryGuestById } from './event/[slug]/queryGuestbyId'
import { EventProvider } from './event/[slug]/providers/EventProvider'
import { GuestProvider } from './event/[slug]/providers/GuestProvider'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import PageClient from './page.client'

type Params = {
  searchParams: Promise<{
    guest?: string
  }>
}

export default async function Page({ searchParams }: Params) {
  const tenantDomain = process.env.TENANT_DOMAIN
  if (!tenantDomain) {
    return PageTemplate
  }

  const { isEnabled: draft } = await draftMode()
  const { guest } = await searchParams
  const page = await queryEventBySlug({ slug: tenantDomain })
  if (!page || !page.eventDetails?.eventId) {
    return notFound()
  }

  const c = await cookies()

  const guestIdFromCookie = c.get('guestId')?.value

  const guestFromCms = await queryGuestById({ id: guest || guestIdFromCookie })

  return (
    <EventProvider eventId={page.eventDetails.eventId}>
      <GuestProvider guest={guestFromCms}>
        {page.theme && (
          <PageClient
            theme={{
              accentColor: page.theme?.accentColor,
              primaryColor: page.theme?.primaryColor,
              secondaryColor: page.theme?.secondaryColor,
            }}
          />
        )}
        {draft && <LivePreviewListener />}
        <RenderBlocks blocks={page.layout} theme={page.theme?.theme} />
      </GuestProvider>
    </EventProvider>
  )

  return
}

export { generateMetadata }
