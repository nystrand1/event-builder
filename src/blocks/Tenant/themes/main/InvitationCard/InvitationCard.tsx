'use client'

import { Event, Media } from '@/payload-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type InvitationCardPropsCMS = Event['invitationCard']
interface InvitationCardProps extends InvitationCardPropsCMS {
  url: string
}

export const InvitationCard = (props: InvitationCardProps) => {
  const { cardFront, cardBack, url } = props
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      className="w-full max-w-[450px] cursor-pointer h-[120dvh] md:h-[80vh] font-anonymous-pro drop-shadow-2xl bg-transparent"
      style={{ perspective: '1400px' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 0.5,
      }}
      onClick={handleCardClick}
    >
      <motion.div
        className="h-full size-full relative"
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <CardFront
          title={cardFront.title}
          description={cardFront.description}
          image={cardFront.image as Media}
          information={cardFront.information}
          buttonLabel={cardFront.buttonLabel}
          className={!isFlipped ? 'z-10' : ''}
        />
        <CardBack
          url={url}
          className={isFlipped ? 'z-10' : ''}
          firstTextSection={cardBack.firstTextSection}
          secondTextSection={cardBack.secondTextSection}
          buttonlabel={cardBack.buttonlabel}
        />
      </motion.div>
    </motion.div>
  )
}
