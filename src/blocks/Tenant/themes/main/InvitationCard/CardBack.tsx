import { useGuest } from '@/app/(frontend)/event/[slug]/providers/GuestProvider'
import { Button } from '@/components/ui/button'
import { Guest } from '@/payload-types'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardBackProps {
  title: string
  description?: string
  url: string
}

export const CardBack = ({ url }: CardBackProps) => {
  const { guest } = useGuest()

  const allGuests = [guest, ...(guest?.relatedGuests ?? [])]

  const guestNames = allGuests.map((g: Guest) => g.name?.split(' ')[0]).join(', ')

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        overflow: 'hidden',
        transform: 'rotateY(180deg)',
      }}
    >
      <div className="h-full paper-texture p-8 text-center">
        <h2 className="text-3xl tracking-wide font-light mb-8 text-gray-900 mt-12">{guestNames}</h2>

        <div className="mb-8 text-center">
          <p className="text-lg leading-relaxed text-gray-800">
            Vi skulle vara hedrade att få ha er med oss på vår speciella dag.
          </p>
        </div>

        <div className="my-8 py-6 border-t border-b border-accent">
          <p className="text-lg mb-2 text-gray-800">
            Vi har samlat all information kring bröllopet och destinationen på vår hemsida. Där kan
            ni även OSA och anmäla tal
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button variant="secondary" className="w-[300px] text-base" asChild>
            <Link href={url} target="_blank">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Till hemsidan</span>
              </motion.div>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
