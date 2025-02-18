'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ReservationSuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  code: string
  itemName: string
}

export const ReservationSuccessDialog = ({
  open,
  onOpenChange,
  code,
  itemName,
}: ReservationSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservation Successful!</DialogTitle>
          <DialogDescription className="space-y-4">
            <p>You have successfully reserved {itemName}.</p>
            <div>
              <p className="font-semibold mb-2">Your reservation code is:</p>
              <div className="bg-muted p-4 rounded-md text-center">
                <code className="text-2xl font-mono">{code}</code>
              </div>
              <p className="text-sm mt-2">
                Please save this code - you&apos;ll need it if you want to cancel your reservation.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
