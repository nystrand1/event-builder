'use client'

import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import { Environment, Lightformer } from '@react-three/drei'
import BandAndCard from './BandAndCard'

interface EventCardProps {
  flipped: boolean
  textureUrl: string
}

export default function EventCard({ flipped, textureUrl }: EventCardProps) {
  return (
    <Canvas camera={{ position: [0, 0, 13], fov: 25 }} className="touch-none lg:touch-auto">
      <Physics interpolate gravity={[0, -30, 0]} timeStep={1 / 120}>
        <BandAndCard
          name="Filip och Josse"
          memberType="Brudpar"
          flipped={flipped}
          textureUrl={textureUrl}
        />
      </Physics>
      <Environment>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  )
}
