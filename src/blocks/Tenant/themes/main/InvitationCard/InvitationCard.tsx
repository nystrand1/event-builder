'use client'

import { Event, Media } from '@/payload-types'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'

type InvitationCardPropsCMS = Event['invitationCard']
interface InvitationCardProps extends InvitationCardPropsCMS {
  url: string
}

export const InvitationCard = (props: InvitationCardProps) => {
  const { cardFront, cardBack, url } = props
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardHeight, setCardHeight] = useState<number>(0)
  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  // Update card height when content changes or on window resize
  useEffect(() => {
    const updateCardHeight = () => {
      // Get the height of both sides and use the larger one
      const frontHeight = frontRef.current?.scrollHeight || 0
      const backHeight = backRef.current?.scrollHeight || 0
      const maxHeight = Math.max(frontHeight, backHeight)
      setCardHeight(maxHeight)
    }

    // Initial height calculation
    updateCardHeight()

    // Recalculate on window resize
    window.addEventListener('resize', updateCardHeight)

    return () => {
      window.removeEventListener('resize', updateCardHeight)
    }
  }, [cardFront, cardBack])

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      className="w-full max-w-[450px] cursor-pointer font-anonymous-pro drop-shadow-2xl bg-transparent overflow-visible"
      style={{
        perspective: '1400px',
        height: cardHeight > 0 ? `${cardHeight}px` : 'auto',
        minHeight: '500px',
      }}
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
          ref={frontRef}
          title={cardFront.title}
          description={cardFront.description}
          image={cardFront.image as Media}
          information={cardFront.information}
          buttonLabel={cardFront.buttonLabel}
          className={!isFlipped ? 'z-10' : ''}
        />
        <CardBack
          ref={backRef}
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
