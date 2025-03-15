import { Event } from '@/payload-types'
import { hexToHSL } from '@/utilities/hexToHSL'
import { DemoProvider } from '../event/[slug]/providers/DemoProvider'
import { EventProvider } from '../event/[slug]/providers/EventProvider'
import { GuestProvider } from '../event/[slug]/providers/GuestProvider'
import { mockData } from './mockData'
import DemoPage from './page.client'

export default function Page() {
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
      <DemoProvider demo page={page as Event}>
        <EventProvider eventId={page.eventDetails.eventId}>
          <GuestProvider guest={guestFromCms}>
            <DemoPage />
          </GuestProvider>
        </EventProvider>
      </DemoProvider>
    </div>
  )
}
