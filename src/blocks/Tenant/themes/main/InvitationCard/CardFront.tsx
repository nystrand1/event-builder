import { Media as MediaBlock } from '@/components/Media'
import RichText from '@/components/RichText'
import { Media } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface CardFrontProps {
  title: string
  description?: string
  image?: Media
  information?: SerializedEditorState | null
  className?: string
  buttonLabel?: string
}

export const CardFront = ({
  title,
  description,
  image,
  information,
  className,
  buttonLabel = 'Klicka för mer info',
}: CardFrontProps) => {
  return (
    <motion.div
      className={twMerge('card-front size-full overflow-auto absolute', className)}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="h-full paper-texture overflow-scroll pb-4 bg-white">
        {/* Main image */}
        <div className="relative mx-8 mt-8 mb-6 overflow-hidden p-2 shadow-lg paper-texture bg-white">
          <MediaBlock
            resource={image}
            className="w-full md:h-64 object-bottom relative overflow-hidden"
            imgClassName="w-full h-full object-cover"
          />
        </div>

        {/* Names */}
        <div className="text-center px-4">
          <h1 className="font-tangerine text-6xl tracking-widest font-light mb-8 text-gray-900">
            {title}
          </h1>

          <div className="mb-8 text-center">
            <p className="text-lg leading-relaxed text-gray-800 mb-2">{description}</p>
            <div className="flex items-center justify-center">
              <div className="h-0.5 bg-accent w-16"></div>
              <Heart className="text-pink-500 mx-4" size={24} />
              <div className="h-0.5 bg-accent w-16"></div>
            </div>

            {information && <RichText data={information} className="[&_p]:text-lg text-gray-800" />}
          </div>

          <motion.div
            className="click-instruction mt-6 flex items-center justify-center bg-accent py-3 px-4 rounded-2xl border"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <p className="text-accent-foreground font-medium">{buttonLabel}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
