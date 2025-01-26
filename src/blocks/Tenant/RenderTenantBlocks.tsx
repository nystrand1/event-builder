import React, { Fragment } from 'react'

import type { Page, Event } from '@/payload-types'

import { ContentBlock } from '@/blocks/Tenant/Content/Component'
import { FormBlock } from '@/blocks/Shared/Form/Component'
import { MediaBlock } from '@/blocks/Tenant/MediaBlock/Component'
import { twMerge } from 'tailwind-merge'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'
import { ScheduleBlock } from './Schedule/ScheduleBlock'
import { WishlistBlock } from './Wishlist/WishlistBlock'
import { PeopleBlock } from '../People/PeopleBlock'
import { TwoColumnImageAndText } from './TwoColumnImageAndText/TwoColumnImageAndText'
import { FullScreenWithCountdownHero } from '@/heros/Tenant/FullScreenWithCountdown'

const blockComponents = {
  content: ContentBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  countdown: EventCountdown,
  schedule: ScheduleBlock,
  wishlistBlock: WishlistBlock,
  peopleBlock: PeopleBlock,
  twoColumnImageAndText: TwoColumnImageAndText,
  fullScreenWithCountdownHero: FullScreenWithCountdownHero,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][] | Event['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className={twMerge('py-16 bg-primary', index === 0 ? 'py-0' : '')} key={index}>
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
