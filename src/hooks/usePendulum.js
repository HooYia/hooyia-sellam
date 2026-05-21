import { useCallback, useEffect, useRef, useState } from 'react'

const RAD_TO_DEG = 180 / Math.PI
const DEG_TO_RAD = Math.PI / 180

export function usePendulum({
  length = 0.92,
  gravity = 18,
  damping = 1.25,
  stopThreshold = 0.0025,
} = {}) {
  const [angle, setAngle] = useState(0)
  const state = useRef({
    angle: 0,
    velocity: 0,
    raf: null,
    lastTime: 0,
  })
  const tickRef = useRef(null)

  const stop = useCallback(() => {
    if (state.current.raf) {
      cancelAnimationFrame(state.current.raf)
      state.current.raf = null
    }
    state.current.lastTime = 0
  }, [])

  const step = useCallback(
    (time) => {
      const s = state.current
      const elapsed = s.lastTime ? (time - s.lastTime) / 1000 : 1 / 60
      const dt = Math.min(elapsed, 1 / 30)

      s.lastTime = time

      const acceleration =
        -(gravity / length) * Math.sin(s.angle) - damping * s.velocity

      s.velocity += acceleration * dt
      s.angle += s.velocity * dt

      const angleInDegrees = s.angle * RAD_TO_DEG
      setAngle(Math.abs(angleInDegrees) < 0.01 ? 0 : angleInDegrees)

      if (
        Math.abs(s.angle) > stopThreshold ||
        Math.abs(s.velocity) > stopThreshold
      ) {
        s.raf = requestAnimationFrame(tickRef.current)
        return
      }

      s.angle = 0
      s.velocity = 0
      s.raf = null
      s.lastTime = 0
      setAngle(0)
    },
    [damping, gravity, length, stopThreshold],
  )

  useEffect(() => {
    tickRef.current = step
  }, [step])

  const start = useCallback(
    (initialAngle = 22, initialVelocity = -0.8) => {
      stop()

      const s = state.current
      s.angle = initialAngle * DEG_TO_RAD
      s.velocity = initialVelocity
      s.lastTime = 0
      setAngle(initialAngle)
      s.raf = requestAnimationFrame(step)
    },
    [step, stop],
  )

  const impulse = useCallback(
    (velocity = 1.1) => {
      const s = state.current
      s.velocity += velocity

      if (!s.raf) {
        s.lastTime = 0
        s.raf = requestAnimationFrame(step)
      }
    },
    [step],
  )

  return { angle, impulse, start, stop }
}
