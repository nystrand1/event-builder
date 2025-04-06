'use server'

import { generateEventMetadata } from '@/utilities/event/generateEventMeta'
import PageTemplate from './[slug]/page'
import EventLayout from './event/[slug]/layout'
import EventPage from './event/[slug]/page'

type Params = {
  searchParams: Promise<{
    guest?: string
  }>
}

export default async function Page({ searchParams }: Params) {
  const tenantDomain = process.env.TENANT_DOMAIN
  if (!tenantDomain) {
    const homepageSlugPromise = new Promise<{ slug: string }>((resolve) => {
      resolve({ slug: 'home' })
    })
    return <PageTemplate params={homepageSlugPromise} />
  }

  const tenantDomainPromise = new Promise<{ slug: string }>((resolve) => {
    resolve({ slug: tenantDomain })
  })

  return (
    <EventLayout tenantDomain={tenantDomain}>
      <EventPage params={tenantDomainPromise} searchParams={searchParams} />
    </EventLayout>
  )
}

export const generateMetadata = generateEventMetadata
