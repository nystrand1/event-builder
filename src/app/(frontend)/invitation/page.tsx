'use client'

import EventCard from '@/components/EventCard/EventCard'

export const Page = () => {
  return (
    <div>
      <h1>Page</h1>
      <div className="w-screen h-[90vh]">
        <EventCard flipped={false} textureUrl="/static/eventCard.glb" />
      </div>
    </div>
  )
}

export default Page
