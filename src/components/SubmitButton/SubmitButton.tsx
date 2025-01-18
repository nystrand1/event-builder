'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export function SubmitButton({
  isDisabled,
  label,
  pendingLabel,
}: {
  isDisabled: boolean
  label: string
  pendingLabel
}) {
  const { pending } = useFormStatus()

  return (
    <Button variant="outline" className="w-full" type="submit" disabled={isDisabled || pending}>
      {pending ? pendingLabel : label}
    </Button>
  )
}
