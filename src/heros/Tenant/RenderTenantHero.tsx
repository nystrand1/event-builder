import React from 'react'

import type { Event } from '@/payload-types'

import { DefaultHero } from '@/heros/Tenant/Default'
import { FullScreenWithCountdownHero } from '@/heros/Tenant/FullScreenWithCountdown'

export const RenderHero: React.FC<Event['hero']> = (props) => {
  return null
  return <FullScreenWithCountdownHero {...props} />
}
