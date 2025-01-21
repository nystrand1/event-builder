import React from 'react'

import type { Event } from '@/payload-types'

import { DefaultHero } from '@/heros/Tenant/Default'

export const RenderHero: React.FC<Event['hero']> = (props) => {
  return <DefaultHero {...props} />
}
