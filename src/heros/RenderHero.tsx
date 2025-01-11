import React from 'react'

import type { Page } from '@/payload-types'

import { DefaultHero } from '@/heros/Default'

export const RenderHero: React.FC<Page['hero']> = (props) => {
  return <DefaultHero {...props} />
}
