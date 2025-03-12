import React, { Fragment } from 'react'

import type { Page, Event } from '@/payload-types'

import { CallToActionBlock } from '@/blocks/Main/CallToAction/Component'
import { ContentBlock } from '@/blocks/Main/Content/Component'
import { MediaBlock } from '@/blocks/Main/MediaBlock/Component'
import { twMerge } from 'tailwind-merge'
import { ScheduleBlock } from '../Tenant/themes/main/Schedule/ScheduleBlock'
import { TwoColumnImageAndText } from '../Tenant/themes/main/TwoColumnImageAndText/TwoColumnImageAndText'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
  schedule: ScheduleBlock,
  twoColumnImageAndText: TwoColumnImageAndText,
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
