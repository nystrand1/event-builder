import { BlockType } from '../../RenderTenantBlocks'
import { ContentBlock } from './ContentBlock'
import { MediaBlock } from './MediaBlock'
import { ScheduleBlock } from './ScheduleBlock'
import { TwoColumnImageAndText } from './TwoColumnImageAndText'

export const playfulTheme = {
  content: ContentBlock,
  mediaBlock: MediaBlock,
  schedule: ScheduleBlock,
  twoColumnImageAndText: TwoColumnImageAndText,
} as Record<BlockType, React.FC<any>>
