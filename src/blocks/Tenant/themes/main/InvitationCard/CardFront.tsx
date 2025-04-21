import { Media as MediaBlock } from '@/components/Media'
import RichText from '@/components/RichText'
import { Media } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardFrontProps {
  title: string
  description?: string
  image?: Media
  information?: SerializedEditorState | null
  className?: string
  buttonLabel?: string
}

export const CardFront = forwardRef<HTMLDivElement, CardFrontProps>(
  (
    { title, description, image, information, className, buttonLabel = 'Klicka för mer info' },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        className={twMerge('card-front size-full absolute', className)}
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="paper-texture pb-4 bg-white">
          {/* Main image */}
          <div className="relative mx-8 mt-8 mb-6 overflow-hidden p-2 shadow-lg paper-texture bg-white">
            <MediaBlock
              resource={image}
              className="w-full md:h-64 object-bottom relative overflow-hidden"
              imgClassName="w-full h-full object-cover"
            />
          </div>

          {/* Names */}
          <div className="text-center px-4 space-y-6">
            <h1 className="font-tangerine text-6xl tracking-widest font-light text-gray-900">
              {title}
            </h1>

            <div className="text-center space-y-6">
              {description && (
                <p className="text-lg leading-relaxed text-gray-800 mb-2">{description}</p>
              )}
              <div className="flex items-center justify-center">
                <div className="h-0.5 bg-accent w-16"></div>
                <Heart className="text-pink-500 mx-4" size={24} />
                <div className="h-0.5 bg-accent w-16"></div>
              </div>

              {information && (
                <RichText data={information} className="[&_p]:text-lg text-gray-800" />
              )}
            </div>

            <div className="click-instruction mt-6 flex items-center justify-center bg-accent py-3 px-4 rounded-2xl border">
              <p className="text-accent-foreground font-medium">{buttonLabel}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  },
)

CardFront.displayName = 'CardFront'
