'use client'

import { RSVPFormBlock } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const QuestionRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<RSVPFormBlock['fields']>[number]>()

  const label = data?.data?.label
    ? `${data?.data?.label} (${data.data.type})`
    : `Question ${data.rowNumber}`

  return <div>{label}</div>
}
