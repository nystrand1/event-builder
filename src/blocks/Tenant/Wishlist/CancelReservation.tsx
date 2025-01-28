'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState, useTransition } from 'react'
import { cancelReservation } from './actions'

interface CancelReservationProps {
  wishlistId: number
  itemId: string
  itemName: string
}

export const CancelReservation = ({ wishlistId, itemId, itemName }: CancelReservationProps) => {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await cancelReservation(formData)
        setOpen(false)
      } catch (error) {}
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-black">
          Cancel Reservation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Reservation</DialogTitle>
          <DialogDescription>
            Enter your reservation code to cancel your reservation for {itemName}
          </DialogDescription>
        </DialogHeader>
        <form action={onSubmit} className="space-y-4">
          <input type="hidden" name="wishlistId" value={wishlistId} />
          <input type="hidden" name="itemId" value={itemId} />
          <Input name="code" placeholder="Enter reservation code" required />
          <Button type="submit" className="w-full" variant="outline" disabled={isPending}>
            {isPending ? 'Cancelling...' : 'Cancel Reservation'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
