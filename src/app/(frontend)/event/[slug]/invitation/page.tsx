import { InvitationCard } from '@/blocks/Tenant/themes/main/InvitationCard/InvitationCard'
import { notFound } from 'next/navigation'
import { GuestProvider } from '../providers/GuestProvider'
import { queryEventBySlug } from '../queryEventBySlug'
import { queryGuestById } from '../queryGuestbyId'

interface InvitationPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{
    guest?: string
  }>
}

export default async function Page({ params, searchParams }: InvitationPageProps) {
  const { slug } = await params
  const { guest } = await searchParams
  const page = await queryEventBySlug({ slug })

  if (!page || !guest) {
    notFound()
  }

  const guestFromCms = await queryGuestById({ id: guest })

  if (!guestFromCms) {
    notFound()
  }

  return (
    <GuestProvider guest={guestFromCms}>
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary/20 flex items-center justify-center p-4">
        <InvitationCard
          cardFront={page.invitationCard.cardFront}
          cardBack={page.invitationCard.cardBack}
          url={`/event/${slug}?guest=${guestFromCms.guestId}`}
        />
      </div>
    </GuestProvider>
  )
}
