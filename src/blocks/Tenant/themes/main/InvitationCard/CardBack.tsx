import { useGuest } from '@/app/(frontend)/event/[slug]/providers/GuestProvider'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Guest } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardBackProps {
  url: string
  className?: string
  firstTextSection?: SerializedEditorState | null
  secondTextSection?: SerializedEditorState | null
  buttonlabel?: string
}

export const CardBack = forwardRef<HTMLDivElement, CardBackProps>(
  ({ url, className, firstTextSection, secondTextSection, buttonlabel = 'Till hemsidan' }, ref) => {
    const { guest } = useGuest()

    const allGuests = [guest, ...(guest?.relatedGuests ?? [])]

    let guestNames = ''

    if (allGuests.length === 2) {
      guestNames = allGuests.map((g: Guest) => g.name?.split(' ')[0]).join(' & ')
    } else if (allGuests.length > 2) {
      guestNames = allGuests.map((g: Guest) => g.name?.split(' ')[0]).join(', ')
      // Replace last comma with ' & '
      const lastCommaIndex = guestNames.lastIndexOf(',')
      if (lastCommaIndex !== -1) {
        guestNames =
          guestNames.substring(0, lastCommaIndex) + ' & ' + guestNames.substring(lastCommaIndex + 1)
      }
    } else {
      guestNames = guest?.name?.split(' ')[0] ?? ''
    }

    return (
      <motion.div
        ref={ref}
        className={twMerge('card-back size-full absolute', className)}
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <div className="paper-texture p-8 px-4 text-center bg-white">
          <h2 className="text-3xl tracking-wide font-light mb-8 text-gray-900 mt-12">
            {guestNames}
          </h2>

          <div className="mb-8 text-center">
            {firstTextSection && (
              <RichText data={firstTextSection} className="[&_p]:text-lg text-gray-800 mb-2" />
            )}
          </div>

          {secondTextSection && (
            <div className="my-8 py-6 border-t border-b border-accent">
              <RichText data={secondTextSection} className="[&_p]:text-lg text-gray-800 mb-2" />
            </div>
          )}

          <div className="mt-8 space-y-4 pb-4">
            <Button
              onClick={(e) => e.stopPropagation()}
              variant="secondary"
              className="w-full text-base touch-none py-6"
              asChild
            >
              <Link href={url} target="_blank" className="size-full">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {buttonlabel}
                </motion.div>
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    )
  },
)

CardBack.displayName = 'CardBack'
