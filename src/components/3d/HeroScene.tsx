'use client'

import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  IcosahedronGeometry,
  TorusGeometry,
  OctahedronGeometry,
  TorusKnotGeometry,
  SphereGeometry,
  MeshPhongMaterial,
} from 'three'
import { FloatingGeometry } from './FloatingGeometry'
import { SceneLighting } from './SceneLighting'
import { ParticleField } from './ParticleField'
import { CameraRig } from './CameraRig'

export function HeroScene() {
  // Memoize materials and geometries — they never change so we create them once
  // and avoid leaking GPU buffers on every render.
  const matGold = useMemo(
    () =>
      new MeshPhongMaterial({
        color: 0xd4b47a,
        shininess: 80,
        transparent: true,
        opacity: 0.18,
      }),
    []
  )
  const matDark = useMemo(
    () =>
      new MeshPhongMaterial({
        color: 0x3a3028,
        shininess: 60,
        transparent: true,
        opacity: 0.1,
      }),
    []
  )
  const matSage = useMemo(
    () =>
      new MeshPhongMaterial({
        color: 0x7b9e87,
        shininess: 40,
        transparent: true,
        opacity: 0.1,
      }),
    []
  )
  const matBlush = useMemo(
    () =>
      new MeshPhongMaterial({
        color: 0xe2c9b5,
        shininess: 100,
        transparent: true,
        opacity: 0.14,
      }),
    []
  )

  const geoIco = useMemo(() => new IcosahedronGeometry(4.5, 0), [])
  const geoTorus = useMemo(() => new TorusGeometry(2, 0.6, 24, 64), [])
  const geoOcta = useMemo(() => new OctahedronGeometry(1.4, 0), [])
  const geoKnot = useMemo(() => new TorusKnotGeometry(1.5, 0.35, 100, 16), [])
  const geoSphere = useMemo(() => new SphereGeometry(0.9, 24, 24), [])

  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        <CameraRig />
        <SceneLighting />
        <FloatingGeometry
          geometry={geoIco}
          material={matGold}
          position={[6, -2, -8]}
          rotationSpeed={{ x: 0.08, y: 0.12, z: 0.04 }}
        />
        <FloatingGeometry
          geometry={geoTorus}
          material={matDark}
          position={[-8, 3, -6]}
          rotation={[Math.PI / 5, 0.2, 0]}
          rotationSpeed={{ x: 0.1, y: 0.15, z: 0.05 }}
        />
        <FloatingGeometry
          geometry={geoOcta}
          material={matSage}
          position={[9, 5, -5]}
          rotationSpeed={{ x: 0.2, y: 0.18, z: 0.1 }}
        />
        <FloatingGeometry
          geometry={geoKnot}
          material={matGold}
          position={[0, -7, -7]}
          rotationSpeed={{ x: 0.15, y: 0.2, z: 0.1 }}
          floatAmp={0.3}
          floatSpeed={0.35}
        />
        <FloatingGeometry
          geometry={geoSphere}
          material={matBlush}
          position={[-5, -4, -4]}
          floatAmp={0.8}
          floatSpeed={0.6}
        />
        <ParticleField />
      </Suspense>
    </Canvas>
  )
}
