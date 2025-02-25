import React, { Fragment } from 'react'

import type { Event } from '@/payload-types'

import { FormBlock } from '@/blocks/Shared/Form/Component'
import { ContentBlock } from '@/blocks/Tenant/themes/main/Content/ContentBlock'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'
import { FullScreenWithCountdownHero } from '@/blocks/Tenant/themes/main/FullScreenWithCountdown/FullScreenWithCountdown'
import { twMerge } from 'tailwind-merge'
import { PeopleBlock } from '../People/PeopleBlock'
import { RSVPForm } from './themes/main/RSVPForms/RSVPForm'
import { ScheduleBlock } from './themes/main/Schedule/ScheduleBlock'
import { TwoColumnImageAndText } from './themes/main/TwoColumnImageAndText/TwoColumnImageAndText'
import { WishlistBlock } from './themes/main/Wishlist/WishlistBlock'
import { MediaBlock } from './themes/main/MediaBlock/MediaBlock'
import { playfulTheme } from './themes/playful'

type Theme = NonNullable<NonNullable<Event['theme']>['theme']>

export type BlockType = Event['layout'][0]['blockType']

const blockComponents = {
  main: {
    content: ContentBlock,
    formBlock: FormBlock,
    mediaBlock: MediaBlock,
    countdown: EventCountdown,
    schedule: ScheduleBlock,
    wishlistBlock: WishlistBlock,
    peopleBlock: PeopleBlock,
    twoColumnImageAndText: TwoColumnImageAndText,
    fullScreenWithCountdownHero: FullScreenWithCountdownHero,
    rsvpFormBlock: RSVPForm,
  },
  simple: playfulTheme,
} as Record<Theme, Record<BlockType, React.FC<any>>>

export const RenderBlocks: React.FC<{
  blocks: Event['layout'][0][]
  theme: NonNullable<Event['theme']>['theme']
}> = (props) => {
  const { blocks, theme } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType, blockName } = block
          const components = blockComponents[theme ?? 'main']
          if (blockType && blockType in components) {
            const Block = components[blockType]

            if (Block && blockName) {
              return (
                <div
                  id={blockName}
                  className={twMerge('py-16 bg-primary', index === 0 ? 'py-0' : '')}
                  key={index}
                >
                  {index > 0 && (
                    <div className="h-2 bg-accent rounded-xl w-[384px] mx-auto my-10" />
                  )}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
