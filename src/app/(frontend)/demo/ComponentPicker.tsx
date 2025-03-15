'use client'

import { Button } from '@/components/ui/button'
import { Card, CardDescription } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Edit } from 'lucide-react'
import { useState } from 'react'
import { useDemo } from '../event/[slug]/providers/DemoProvider'
import { mockSchedule } from './mockSchedule'

const blockOptions = [
  { name: 'Hero', description: 'A hero section for your landing page', mockData: mockSchedule },
  {
    name: 'Two column image & text',
    description: 'Display image alongside descriptive text',
    mockData: mockSchedule,
  },
  { name: 'Schedule', description: 'Show your event schedule', mockData: mockSchedule },
  { name: 'RSVP Form', description: 'A form for guests to RSVP', mockData: mockSchedule },
  {
    name: 'Info blocks',
    description: 'Display information in block format',
    mockData: mockSchedule,
  },
]

interface ComponentPickerProps {
  index: number
}

export const ComponentPicker = ({ index }: ComponentPickerProps) => {
  const [open, setOpen] = useState(false)
  const { addComponent } = useDemo()

  const handleBlockSelect = (blockName: string) => {
    setOpen(false)
    const block = blockOptions.find((block) => block.name === blockName)
    if (!block) return
    addComponent(block.mockData, index)
  }

  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-10 top-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full shadow-sm bg-accent hover:bg-accent/80 text-white hover:text-white"
          >
            <span>Add block</span>
            <Edit className="h-4 w-4 ml-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Choose a block</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4 py-4">
            {blockOptions.map((block) => (
              <Card
                key={block.name}
                className="p-4 cursor-pointer hover:bg-accent transition-colors"
                onClick={() => handleBlockSelect(block.name)}
              >
                <h3 className="font-medium">{block.name}</h3>
                <CardDescription>{block.description}</CardDescription>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
