import { TenantHeader } from '@/Header/Tenant/TenantHeader'
import { draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { hexToHSL } from '@/utilities/hexToHSL'
import { Toaster } from 'react-hot-toast'
import { queryEventBySlug } from './queryEventBySlug'

interface EventLayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export default async function EventLayout({ children, params }: EventLayoutProps) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params

  const event = await queryEventBySlug({ slug })

  const navItems = event.headerNav?.map((item) => ({
    label: item.label ?? 'Unnamed',
    href: item.sectionLink ?? '#',
  }))

  const cssVars = {}

  if (event?.theme?.accentColor) {
    cssVars['--accent'] = hexToHSL(event.theme.accentColor)
  }
  if (event?.theme?.primaryColor) {
    cssVars['--primary'] = hexToHSL(event.theme.primaryColor)
    cssVars['--background'] = hexToHSL(event.theme.primaryColor)
  }
  if (event?.theme?.secondaryColor) {
    cssVars['--secondary'] = hexToHSL(event.theme.secondaryColor)
  }

  return (
    <div style={cssVars}>
      <Toaster position="bottom-center" />
      {draft && <LivePreviewListener />}
      {event.headerNav && <TenantHeader items={navItems} />}
      {children}
    </div>
  )
}
