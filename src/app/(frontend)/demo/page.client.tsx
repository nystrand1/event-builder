'use client'

import { RenderBlocks } from '@/blocks/Tenant/RenderTenantBlocks'
import { useDemo } from '../event/[slug]/providers/DemoProvider'
import { hexToHSL } from '@/utilities/hexToHSL'

export default function DemoPage() {
  const { page } = useDemo()
  if (!page) return null

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
      <RenderBlocks demo blocks={page.layout} theme={page.theme?.theme} />
    </div>
  )
}
