'use client'

import { Center, Html, useGLTF } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import {
  BallCollider,
  CuboidCollider,
  type RapierRigidBody,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { useEffect, useRef, useState } from 'react'

import * as THREE from 'three'

import { twMerge } from 'tailwind-merge'

extend({ MeshLineGeometry, MeshLineMaterial })

type ExtendedRigidBody = RapierRigidBody & { lerped?: THREE.Vector3 }

interface BandAndCardProps {
  maxSpeed?: number
  minSpeed?: number
  name?: string
  memberType?: string
  flipped?: boolean
  textureUrl?: string
}

export default function BandAndCard({
  maxSpeed = 50,
  minSpeed = 10,
  name = 'Filip Nystrand',
  memberType = 'Familjemedlemskap',
  textureUrl = 'https://cmsdev.vastrasidan.se/wp-content/uploads/2024/12/membercard_tag_vss.glb',
  flipped = true,
}: BandAndCardProps) {
  const initVal = {} as ExtendedRigidBody
  const fixed = useRef(initVal)
  const j1 = useRef(initVal)
  const j2 = useRef(initVal)
  const j3 = useRef(initVal)
  const card = useRef(initVal)
  const vec = new THREE.Vector3(0, 0, 0)
  const ang = new THREE.Vector3(0, 0, 0)
  const rot = new THREE.Vector3(0, 0, 0)
  const dir = new THREE.Vector3(0, 0, 0)
  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    angularDamping: 2,
    linearDamping: 2,
  }
  const { nodes, materials } = useGLTF(textureUrl)
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  )
  const [dragged, drag] = useState<boolean | THREE.Vector3>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.2]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.2]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.2]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.25, 0]]) // prettier-ignore

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useEffect(() => {
    if (card.current) {
      card.current.setRotation({ x: 0, y: flipped ? Math.PI : 2 * Math.PI, z: 0, w: 0 }, true)
    }
  }, [card, flipped])

  useFrame((state, delta) => {
    if (typeof dragged === 'object' && dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      ;[j1, j2].forEach((ref) => {
        if (!ref.current?.lerped)
          ref.current!.lerped = new THREE.Vector3().copy(ref.current!.translation())
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current!.lerped.distanceTo(ref.current!.translation())),
        )
        ref.current!.lerped.lerp(
          ref.current!.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        )
      })
      // Calculate catmul curve
      curve.points[0]!.copy(j3.current!.translation())
      if (j2.current?.lerped) curve.points[1]!.copy(j2.current.lerped)
      if (j1.current?.lerped) curve.points[2]!.copy(j1.current.lerped)
      curve.points[3]!.copy(fixed.current.translation())
      // Tilt it back towards the screen
      ang.copy(card.current!.angvel())
      rot.copy(card.current!.rotation())

      card.current!.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false)
    }
  })

  curve.curveType = 'chordal'

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={1.25}
            position={[0, -1.2, 0]}
            rotation={[0, flipped ? Math.PI : 0, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              const event = e.target as typeof e.target & {
                releasePointerCapture: (id: number) => void
              }
              event.releasePointerCapture(e.pointerId)
              drag(false)
            }}
            onPointerDown={(e) => {
              const event = e.target as typeof e.target & {
                setPointerCapture: (id: number) => void
              }
              event.setPointerCapture(e.pointerId)
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current!.translation())))
            }}
          >
            <mesh
              geometry={(nodes.card as THREE.Mesh).geometry}
              position={[0, 0, 0]}
              material={materials.metal}
              material-roughness={0.3}
            >
              <meshPhysicalMaterial
                map={(materials.base as THREE.MeshStandardMaterial)?.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
              <Center scale={0.5} position={[0.5, 0.45, 0]}>
                <Html
                  center
                  transform
                  className={twMerge(
                    'text-white text-right whitespace-nowrap flex w-36 m-auto transition-opacity opacity-0 delay-300',
                    flipped ? 'opacity-100 animate-pulse' : '',
                  )}
                  scale={0.2}
                  position={[-0.785, -0.35, 0]}
                  rotation={[0, Math.PI, 0]}
                >
                  {name}
                </Html>
                <Html
                  center
                  transform
                  className={twMerge(
                    'text-white text-right whitespace-nowrap flex w-36 m-auto transition-opacity opacity-0 delay-300',
                    flipped ? 'opacity-100 animate-pulse' : '',
                  )}
                  scale={0.15}
                  position={[-0.7, -0.5, 0]}
                  rotation={[0, Math.PI, 0]}
                >
                  {memberType}
                </Html>
              </Center>
            </mesh>
            <mesh
              geometry={
                'geometry' in nodes.clip!
                  ? (nodes.clip.geometry as THREE.BufferGeometry<THREE.NormalBufferAttributes>)
                  : undefined
              }
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh
              geometry={
                'geometry' in nodes.clamp!
                  ? (nodes.clamp.geometry as THREE.BufferGeometry<THREE.NormalBufferAttributes>)
                  : undefined
              }
              material={materials.metal}
            />
          </group>
        </RigidBody>
      </group>
    </>
  )
}
