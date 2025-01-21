import React, { Fragment } from 'react'

import type { Page, Event } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { twMerge } from 'tailwind-merge'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'
import { PeopleBlock } from './People/PeopleBlock'
import { WishlistBlock } from './Wishlist/WishlistBlock'
import { ScheduleBlock } from './Schedule/ScheduleBlock'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  countdown: EventCountdown,
  peopleBlock: PeopleBlock,
  wishlistBlock: WishlistBlock,
  schedule: ScheduleBlock,
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
                <div
                  className={twMerge('py-16', index % 2 === 0 ? 'bg-[#f0e9d6]' : '')}
                  key={index}
                >
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
