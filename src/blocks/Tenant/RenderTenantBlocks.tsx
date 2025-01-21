import React, { Fragment } from 'react'

import type { Page, Event } from '@/payload-types'

import { ContentBlock } from '@/blocks/Tenant/Content/Component'
import { FormBlock } from '@/blocks/Shared/Form/Component'
import { MediaBlock } from '@/blocks/Tenant/MediaBlock/Component'
import { twMerge } from 'tailwind-merge'
import { EventCountdown } from '@/components/EventCountdown/EventCountdown'
import { ScheduleBlock } from './Schedule/ScheduleBlock'

const blockComponents = {
  content: ContentBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  countdown: EventCountdown,
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
