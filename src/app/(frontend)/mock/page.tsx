import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { mockData } from './mockData'
import { GuestProvider } from '../event/[slug]/providers/GuestProvider'
import { hexToHSL } from '@/utilities/hexToHSL'
import { Event } from '@/payload-types'
import { EventProvider } from '../event/[slug]/providers/EventProvider'
import { notFound } from 'next/navigation'

export default function Page() {
  if (process.env.TENANT_DOMAIN) {
    return notFound()
  }
  const page = mockData

  const [guestFromCms] = page.guests.docs ?? []

  const cssVars = {}

  if (page?.theme?.accentColor) {
    cssVars['--accent'] = hexToHSL(page.theme.accentColor)
  }
  if (page?.theme?.primaryColor) {
    cssVars['--primary'] = hexToHSL(page.theme.primaryColor)
    cssVars['--background'] = hexToHSL(page.theme.primaryColor)
  }
  if (page?.theme?.secondaryColor) {
    cssVars['--secondary'] = hexToHSL(page.theme.secondaryColor)
  }

  return (
    <div style={cssVars}>
      <EventProvider eventId={page.eventDetails.eventId}>
        <GuestProvider guest={guestFromCms}>
          <RenderBlocks
            blocks={page.layout as Event['layout'][0][]}
            theme={page.theme?.theme as NonNullable<Event['theme']>['theme']}
          />
        </GuestProvider>
      </EventProvider>
    </div>
  )
}
