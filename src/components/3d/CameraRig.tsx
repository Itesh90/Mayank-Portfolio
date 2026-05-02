'use client'

import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

/**
 * Subtly drifts the camera toward the cursor position. Uses a window-level
 * pointer listener since the parent Canvas has pointer-events:none and so
 * R3F's built-in mouse vector never updates.
 */
export function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame(() => {
    target.current.x += (mouse.current.x * 1.5 - target.current.x) * 0.04
    target.current.y += (-mouse.current.y * 1.0 - target.current.y) * 0.04

    camera.position.x += (target.current.x - camera.position.x) * 0.02
    camera.position.y += (target.current.y - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}
