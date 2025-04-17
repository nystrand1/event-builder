import { ContentBlock } from '@/payload-types'
import React from 'react'
import * as LucideIcons from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { LucideIcon } from 'lucide-react'

interface IconProps {
  iconField: ContentBlock['icon']
  className?: string
}

export const Icon = ({ iconField, className }: IconProps) => {
  if (!iconField?.variant || iconField.variant === 'none') {
    return null
  }

  // Try to get the icon component using the exact variant name
  let IconComponent: LucideIcon | undefined = LucideIcons[
    iconField.variant as keyof typeof LucideIcons
  ] as LucideIcon | undefined

  // If not found, try with the first letter capitalized (common convention)
  if (!IconComponent) {
    const capitalizedVariant =
      iconField.variant.charAt(0).toUpperCase() + iconField.variant.slice(1)
    IconComponent = LucideIcons[capitalizedVariant as keyof typeof LucideIcons] as
      | LucideIcon
      | undefined
  }

  // If still not found, return null
  if (!IconComponent) {
    return null
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <IconComponent className={twMerge('text-accent size-10', className)} />
    </div>
  )
}
