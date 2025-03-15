'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useDemo } from '../event/[slug]/providers/DemoProvider'

interface RemoveComponentProps {
  index: number
}

export default function RemoveComponent({ index }: RemoveComponentProps) {
  const [open, setOpen] = useState(false)
  const { removeComponent } = useDemo()

  const handleDelete = () => {
    removeComponent(index)
    setOpen(false)
  }

  return (
    <>
      <Button
        className="mx-auto w-fit flex justify-center my-2 -mt-4 z-10 bg-white/80 hover:bg-red-100 text-red-600 rounded-full"
        onClick={() => setOpen(true)}
        aria-label="Delete block"
      >
        <span>Delete block</span>
        <Trash2 className="h-4 w-4 ml-2" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Component</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this component? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
