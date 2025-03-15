'use client'

import { Button } from '@/components/ui/button'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { useDemo } from '../event/[slug]/providers/DemoProvider'

type MoveComponentProps = {
  index: number
}

export default function MoveComponent({ index }: MoveComponentProps) {
  const { moveComponentUp, moveComponentDown, page } = useDemo()

  const isFirst = index === 0
  const isLast = index === (page?.layout?.length ?? 0) - 1

  return (
    <div className="flex gap-4 justify-center">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full"
        onClick={() => {
          moveComponentUp(index)
        }}
        disabled={isFirst}
        title="Move up"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full"
        onClick={() => {
          moveComponentDown(index)
        }}
        disabled={isLast}
        title="Move down"
      >
        <ArrowDownIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}
