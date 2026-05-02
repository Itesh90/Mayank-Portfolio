'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points } from 'three'

const PARTICLE_COUNT = 200

export function ParticleField() {
  const pointsRef = useRef<Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += 0.03 * delta
    pointsRef.current.rotation.x += 0.01 * delta
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={0xc5a56b}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  )
}
