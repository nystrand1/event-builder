import { Media as MediaBlock } from '@/components/Media'
import RichText from '@/components/RichText'
import { Media } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface CardFrontProps {
  title: string
  description?: string
  image?: Media
  information: SerializedEditorState
}

export const CardFront = ({ title, description, image, information }: CardFrontProps) => {
  return (
    <motion.div
      className="card-front size-full overflow-auto absolute"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="h-full paper-texture overflow-hidden">
        {/* Main image */}
        <div className="relative mx-8 mt-16 mb-6 overflow-hidden border-8 border-white shadow-lg">
          <MediaBlock resource={image} className="w-full md:h-64 object-cover" />
        </div>

        {/* Names */}
        <div className="text-center px-8">
          <h1 className="font-tangerine text-6xl tracking-widest font-light mb-8 text-gray-900">
            {title}
          </h1>

          <div className="mb-8 text-center">
            <p className="text-lg leading-relaxed text-gray-800 mb-2">{description}</p>
            <div className="flex items-center justify-center">
              <div className="h-px bg-pink-500 w-16"></div>
              <Heart className="text-pink-500 mx-4" size={20} />
              <div className="h-px bg-pink-500 w-16"></div>
            </div>

            {information && <RichText data={information} className="[&_p]:text-lg text-gray-800" />}
          </div>

          <motion.div
            className="click-instruction mt-6 flex items-center justify-center bg-accent py-3 px-4 rounded-2xl border border-amber-200"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <p className="text-accent-foreground font-medium">Klicka för mer info</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
