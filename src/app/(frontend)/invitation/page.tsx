import { InvitationCard } from '@/blocks/Tenant/themes/main/InvitationCard/InvitationCard'
import { notFound } from 'next/navigation'
import EventLayout from '../event/[slug]/layout'
import { GuestProvider } from '../event/[slug]/providers/GuestProvider'
import { queryEventBySlug } from '../event/[slug]/queryEventBySlug'
import { queryGuestById } from '../event/[slug]/queryGuestbyId'

interface InvitationPageProps {
  searchParams: Promise<{
    guest?: string
  }>
}

export default async function Page({ searchParams }: InvitationPageProps) {
  const tenantDomain = process.env.TENANT_DOMAIN
  if (!tenantDomain) {
    return notFound()
  }
  const { guest } = await searchParams
  const page = await queryEventBySlug({ slug: tenantDomain })

  if (!page || !guest) {
    notFound()
  }

  const guestFromCms = await queryGuestById({ id: guest })

  if (!guestFromCms) {
    notFound()
  }

  return (
    <GuestProvider guest={guestFromCms}>
      <EventLayout tenantDomain={tenantDomain}>
        <div className="min-h-screen bg-gradient-to-br from-primary to-primary/20 flex items-center justify-center p-4">
          <InvitationCard
            cardFront={page.invitationCard.cardFront}
            cardBack={page.invitationCard.cardBack}
            url={`https://${tenantDomain}?guest=${guestFromCms.guestId}`}
          />
        </div>
      </EventLayout>
    </GuestProvider>
  )
}
