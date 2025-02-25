import { BlockType } from '../../RenderTenantBlocks'
import { ContentBlock } from './Content/ContentBlock'
import { MediaBlock } from './MediaBlock/MediaBlock'
import { ScheduleBlock } from './Schedule/ScheduleBlock'
import { TwoColumnImageAndText } from './TwoColumnImageAndText/TwoColumnImageAndText'

export const simpleTheme = {
  content: ContentBlock,
  mediaBlock: MediaBlock,
  schedule: ScheduleBlock,
  twoColumnImageAndText: TwoColumnImageAndText,
} as Record<BlockType, React.FC<any>>
