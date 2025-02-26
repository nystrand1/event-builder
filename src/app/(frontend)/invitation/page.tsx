import EventCard from '@/components/EventCard/EventCard'

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <div className="w-screen h-[90vh]">
        <EventCard flipped={false} textureUrl="/static/eventCard.glb" />
      </div>
    </div>
  )
}
