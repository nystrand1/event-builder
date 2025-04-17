import React, { Fragment } from 'react'

import type { Event } from '@/payload-types'

import { ComponentPicker } from '@/app/(frontend)/demo/ComponentPicker'
import MoveComponent from '@/app/(frontend)/demo/MoveComponent'
import RemoveComponent from '@/app/(frontend)/demo/RemoveComponent'
import { ContentBlock } from '@/blocks/Tenant/themes/main/Content/ContentBlock'
import { FullScreenWithCountdownHero } from '@/blocks/Tenant/themes/main/FullScreenWithCountdown/FullScreenWithCountdown'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'
import { twMerge } from 'tailwind-merge'
import { PeopleBlock } from '../People/PeopleBlock'
import { MediaBlock } from './themes/main/MediaBlock/MediaBlock'
import { RSVPForm } from './themes/main/RSVPForms/RSVPForm'
import { ScheduleBlock } from './themes/main/Schedule/ScheduleBlock'
import { TwoColumnImageAndText } from './themes/main/TwoColumnImageAndText/TwoColumnImageAndText'
import { WishlistBlock } from './themes/main/Wishlist/WishlistBlock'

type Theme = NonNullable<NonNullable<Event['theme']>['theme']>

export type BlockType = Event['layout'][0]['blockType']

const blockComponents = {
  main: {
    content: ContentBlock,
    mediaBlock: MediaBlock,
    countdown: EventCountdown,
    schedule: ScheduleBlock,
    wishlistBlock: WishlistBlock,
    peopleBlock: PeopleBlock,
    twoColumnImageAndText: TwoColumnImageAndText,
    fullScreenWithCountdownHero: FullScreenWithCountdownHero,
    rsvpFormBlock: RSVPForm,
  },
} as Record<Theme, Record<BlockType, React.FC<any>>>

export const RenderBlocks: React.FC<{
  blocks: Event['layout'][0][]
  theme: NonNullable<Event['theme']>['theme']
  demo?: boolean
}> = (props) => {
  const { blocks, theme, demo } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType, blockName } = block
          const components = blockComponents[theme ?? 'main']
          const showEditBlocks = (index > 0 || blocks.length === 1) && demo
          if (blockType && blockType in components) {
            const Block = components[blockType]
            if (Block && blockName) {
              return (
                <div
                  id={blockName}
                  className={twMerge(
                    'pt-16 last:pb-16 bg-primary relative',
                    index === 0 ? 'py-0' : '',
                  )}
                  key={index}
                >
                  {index > 0 && (
                    <div className="h-2 bg-accent rounded-xl w-[90%] md:w-[384px] mx-auto mb-10" />
                  )}
                  {showEditBlocks && <ComponentPicker index={index} />}
                  {showEditBlocks && (
                    <div className="flex flex-col space-y-4 mb-4">
                      <MoveComponent index={index} />
                      <RemoveComponent index={index} />
                    </div>
                  )}
                  <Block {...block} disableInnerContainer id={index} />
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
