'use client'

import { useRef } from 'react'
import { Mesh, BufferGeometry, Material } from 'three'
import { useFrame } from '@react-three/fiber'

interface FloatingGeometryProps {
  geometry: BufferGeometry
  material: Material
  position: [number, number, number]
  rotation?: [number, number, number]
  rotationSpeed?: { x: number; y: number; z: number }
  floatAmp?: number
  floatSpeed?: number
}

export function FloatingGeometry({
  geometry,
  material,
  position,
  rotation = [0, 0, 0],
  rotationSpeed = { x: 0.1, y: 0.15, z: 0.05 },
  floatAmp = 0.5,
  floatSpeed = 0.5,
}: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null)
  const tRef = useRef(0)
  const initialY = position[1]

  useFrame((_, delta) => {
    if (!meshRef.current) return

    // delta-based rotation (frame-rate independent)
    meshRef.current.rotation.x += rotationSpeed.x * delta
    meshRef.current.rotation.y += rotationSpeed.y * delta
    meshRef.current.rotation.z += rotationSpeed.z * delta

    // delta-based float
    tRef.current += delta
    meshRef.current.position.y =
      initialY + Math.sin(tRef.current * floatSpeed) * floatAmp
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      geometry={geometry}
      material={material}
    />
  )
}
