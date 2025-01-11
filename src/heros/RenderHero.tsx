import React from 'react'

import type { Page } from '@/payload-types'

import { DefaultHero } from '@/heros/Default'

const heroes = {
  highImpact: DefaultHero,
  default: DefaultHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  return <DefaultHero {...props} />
}
