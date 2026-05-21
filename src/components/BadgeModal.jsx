import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei'
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { X } from 'lucide-react'
import * as THREE from 'three'
import cardModelUrl from '../assets/3d/card.glb?url'
import tagTextureUrl from '../assets/images/tag_texture.png'

extend({ MeshLineGeometry, MeshLineMaterial })

const segmentProps = {
  angularDamping: 2,
  canSleep: true,
  colliders: false,
  linearDamping: 2,
  type: 'dynamic',
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = text.split(' ')
  const lines = []
  let line = ''

  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word

    if (ctx.measureText(nextLine).width > maxWidth && line) {
      lines.push(line)
      line = word
      return
    }

    line = nextLine
  })

  if (line) lines.push(line)

  lines.slice(0, maxLines).forEach((currentLine, index) => {
    ctx.fillText(currentLine, x, y + index * lineHeight)
  })
}

function createBadgeTexture(contributor) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1440

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 16
  texture.flipY = false

  const ctx = canvas.getContext('2d')
  const githubUrl = `https://github.com/${contributor.githubUsername}`
  const avatarUrl = `https://images.weserv.nl/?url=github.com/${contributor.githubUsername}.png`
  const role = contributor.role || 'Contributor'
  const favoriteTech = contributor.favoriteTech || 'React'

  function paint(avatar) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const front = { x: 0, y: 0, width: 512, height: 1090 }
    const back = { x: 512, y: 0, width: 512, height: 1090 }
    const bottomY = 1090

    ctx.fillStyle = '#f8fafc'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const frontGradient = ctx.createLinearGradient(0, 0, 512, 760)
    frontGradient.addColorStop(0, '#020617')
    frontGradient.addColorStop(0.5, '#083344')
    frontGradient.addColorStop(1, '#0e7490')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(front.x, front.y, front.width, 1090)
    ctx.fillStyle = frontGradient
    ctx.beginPath()
    ctx.moveTo(front.x, front.y)
    ctx.lineTo(front.x + front.width, front.y)
    ctx.lineTo(front.x + front.width, 610)
    ctx.bezierCurveTo(front.x + 452, 800, front.x + 354, 862, front.x + 256, 862)
    ctx.bezierCurveTo(front.x + 158, 862, front.x + 60, 800, front.x, 610)
    ctx.closePath()
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.arc(68, 46, 104, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(103,232,249,0.78)'
    ctx.lineWidth = 24
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(68, 46, 72, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(14,165,233,0.55)'
    ctx.lineWidth = 16
    ctx.stroke()
    ctx.restore()

    ctx.fillStyle = 'rgba(207,250,254,0.44)'
    for (let row = 0; row < 6; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        ctx.beginPath()
        ctx.arc(66 + col * 22, 86 + row * 22, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    ctx.save()
    ctx.translate(438, 492)
    ctx.rotate(-0.78)
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'
    ctx.lineWidth = 4
    for (let i = -320; i < 300; i += 30) {
      ctx.beginPath()
      ctx.moveTo(i, -360)
      ctx.lineTo(i, 360)
      ctx.stroke()
    }
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.arc(452, 405, 80, 0, Math.PI * 2)
    ctx.strokeStyle = '#facc15'
    ctx.lineWidth = 18
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(452, 405, 48, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(103,232,249,0.75)'
    ctx.lineWidth = 11
    ctx.stroke()
    ctx.restore()

    const avatarSize = 174
    const avatarX = 256
    const avatarY = 226
    ctx.save()
    ctx.beginPath()
    ctx.arc(avatarX, avatarY, avatarSize / 2 + 15, 0, Math.PI * 2)
    ctx.fillStyle = '#e0f2fe'
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.arc(avatarX, avatarY, avatarSize / 2, 0, Math.PI * 2)
    ctx.clip()
    if (avatar) {
      const sourceSize = Math.min(avatar.naturalWidth, avatar.naturalHeight)
      const sourceX = (avatar.naturalWidth - sourceSize) / 2
      const sourceY = (avatar.naturalHeight - sourceSize) / 2
      ctx.drawImage(
        avatar,
        sourceX,
        sourceY,
        sourceSize,
        sourceSize,
        avatarX - avatarSize / 2,
        avatarY - avatarSize / 2,
        avatarSize,
        avatarSize,
      )
    } else {
      ctx.fillStyle = '#0891b2'
      ctx.font = '900 96px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(contributor.name?.[0]?.toUpperCase() || 'R', avatarX, avatarY)
    }
    ctx.restore()

    ctx.fillStyle = '#ffffff'
    ctx.font = '900 58px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    drawWrappedText(ctx, contributor.name, 256, 344, 350, 55, 2)

    ctx.fillStyle = 'rgba(255,255,255,0.82)'
    ctx.font = '900 19px Arial'
    ctx.fillText(role.toUpperCase(), 256, 486)

    ctx.fillStyle = '#67e8f9'
    ctx.fillRect(186, 534, 140, 7)
    ctx.fillStyle = '#ec4899'
    ctx.fillRect(326, 534, 64, 7)

    ctx.fillStyle = '#facc15'
    ctx.beginPath()
    ctx.roundRect(144, 598, 224, 54, 27)
    ctx.fill()
    ctx.fillStyle = '#020617'
    ctx.font = '900 18px Arial'
    ctx.textBaseline = 'middle'
    ctx.fillText(favoriteTech.toUpperCase(), 256, 626)

    ctx.textAlign = 'left'
    ctx.fillStyle = '#475569'
    ctx.font = '700 25px Arial'
    ctx.fillText('React Workshop', 76, 852)
    ctx.font = '700 23px Arial'
    ctx.fillText(`@${contributor.githubUsername}`, 76, 906)
    ctx.fillText(githubUrl.replace('https://', ''), 76, 960)

    const backGradient = ctx.createLinearGradient(back.x, 0, back.x + back.width, 900)
    backGradient.addColorStop(0, '#083344')
    backGradient.addColorStop(0.38, '#020617')
    backGradient.addColorStop(1, '#0e7490')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(back.x, back.y, back.width, 1090)
    ctx.fillStyle = backGradient
    ctx.beginPath()
    ctx.moveTo(back.x, back.y)
    ctx.lineTo(back.x + back.width, back.y)
    ctx.lineTo(back.x + back.width, 610)
    ctx.bezierCurveTo(back.x + 452, 800, back.x + 354, 862, back.x + 256, 862)
    ctx.bezierCurveTo(back.x + 158, 862, back.x + 60, 800, back.x, 610)
    ctx.closePath()
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.arc(700, 128, 104, 0, Math.PI * 2)
    ctx.strokeStyle = '#67e8f9'
    ctx.lineWidth = 18
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(700, 128, 70, 0, Math.PI * 2)
    ctx.strokeStyle = '#7c3aed'
    ctx.lineWidth = 22
    ctx.stroke()
    ctx.restore()

    ctx.fillStyle = 'rgba(207,250,254,0.5)'
    for (let row = 0; row < 7; row += 1) {
      for (let col = 0; col < 7; col += 1) {
        ctx.beginPath()
        ctx.arc(640 + col * 20, 225 + row * 20, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    ctx.fillStyle = '#ffffff'
    ctx.font = '300 60px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('REACT', 768, 410)
    ctx.font = '900 72px Arial'
    ctx.fillText('LAB.', 768, 476)
    ctx.fillStyle = '#67e8f9'
    ctx.fillRect(650, 548, 150, 8)
    ctx.fillStyle = '#ec4899'
    ctx.fillRect(800, 548, 88, 8)

    ctx.fillStyle = 'rgba(255,255,255,0.82)'
    ctx.font = '900 24px Arial'
    ctx.fillText('LEARN. BUILD. USE.', 768, 606)
    ctx.fillStyle = '#64748b'
    ctx.font = '700 21px Arial'
    ctx.fillText('A dynamic badge for React workshop contributors.', 768, 858)
    ctx.fillText('Add your profile in contributors.json.', 768, 900)

    ctx.fillStyle = '#0891b2'
    ctx.fillRect(0, bottomY, canvas.width, 130)
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'right'
    ctx.font = '900 26px Arial'
    ctx.fillText('EXPIRES 13-09-15', 934, bottomY + 74)

    ctx.fillStyle = '#f8fafc'
    ctx.fillRect(0, bottomY + 130, canvas.width, canvas.height - bottomY - 130)

    texture.needsUpdate = true
  }

  paint()

  const avatar = new Image()
  avatar.crossOrigin = 'anonymous'
  avatar.onload = () => paint(avatar)
  avatar.onerror = () => paint()
  avatar.src = avatarUrl

  return texture
}

function useBadgeTexture(contributor) {
  const texture = useMemo(() => createBadgeTexture(contributor), [contributor])

  useEffect(() => () => texture.dispose(), [texture])

  return texture
}

function Band({ contributor, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(null)
  const fixed = useRef(null)
  const j1 = useRef(null)
  const j2 = useRef(null)
  const j3 = useRef(null)
  const card = useRef(null)
  const vec = useMemo(() => new THREE.Vector3(), [])
  const ang = useMemo(() => new THREE.Vector3(), [])
  const rot = useMemo(() => new THREE.Vector3(), [])
  const dir = useMemo(() => new THREE.Vector3(), [])
  const { width, height } = useThree((state) => state.size)
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)
  const curve = useRef(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]),
  )

  const { nodes } = useGLTF(cardModelUrl)
  const texture = useTexture(tagTextureUrl)
  const badgeTexture = useBadgeTexture(contributor)

  useRopeJoint(fixed, j1, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useRopeJoint(j1, j2, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useRopeJoint(j2, j3, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [-0.14, 1.12, 0],
  ])

  useEffect(() => {
    if (!hovered) {
      document.body.style.cursor = 'auto'
      return undefined
    }

    document.body.style.cursor = dragged ? 'grabbing' : 'grab'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [dragged, hovered])

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !band.current ||
      !card.current
    ) {
      return
    }

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))

      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    const j1Translation = j1.current.translation()
    const j2Translation = j2.current.translation()
    const j1Lerped = vec.copy(j1Translation)
    const j2Lerped = dir.copy(j2Translation)
    const j1Distance = Math.max(0.1, Math.min(1, j1Lerped.distanceTo(j1Translation)))
    const j2Distance = Math.max(0.1, Math.min(1, j2Lerped.distanceTo(j2Translation)))

    curve.current.points[0].copy(j3.current.translation())
    curve.current.points[1].copy(
      j2Lerped.lerp(j2Translation, delta * (minSpeed + j2Distance * (maxSpeed - minSpeed))),
    )
    curve.current.points[2].copy(
      j1Lerped.lerp(j1Translation, delta * (minSpeed + j1Distance * (maxSpeed - minSpeed))),
    )
    curve.current.points[3].copy(fixed.current.translation())
    curve.current.curveType = 'chordal'
    band.current.geometry.setPoints(curve.current.getPoints(32))

    ang.copy(card.current.angvel())
    rot.copy(card.current.rotation())
    card.current.setAngvel(
      {
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z,
      },
      false,
    )
  })

  const pointerDown = (event) => {
    event.target.setPointerCapture(event.pointerId)
    if (!card.current) return

    drag(new THREE.Vector3().copy(event.point).sub(vec.copy(card.current.translation())))
  }

  const pointerUp = (event) => {
    event.target.releasePointerCapture(event.pointerId)
    drag(false)
  }

  return (
    <>
      <group position={[-0.88, 4.22, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.22, -0.18, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.5, -0.38, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.78, -0.56, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          ref={card}
          position={[1.0, -0.84, 0]}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.32}
            position={[0, -1.04, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerDown={pointerDown}
            onPointerUp={pointerUp}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={badgeTexture}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
                side={THREE.DoubleSide}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry}>
              <meshStandardMaterial color="#050505" roughness={0.3} metalness={0.9} />
            </mesh>
            <mesh geometry={nodes.clamp.geometry}>
              <meshStandardMaterial color="#0f172a" roughness={0.28} metalness={0.92} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          lineWidth={0.72}
          map={texture}
          repeat={new THREE.Vector2(-3, 1)}
          resolution={new THREE.Vector2(width, height)}
          useMap={1}
        />
      </mesh>
    </>
  )
}

function BadgeScene({ contributor }) {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 14.2], fov: 25 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ backgroundColor: 'transparent' }}
    >
      <ambientLight intensity={Math.PI} />
      <Physics debug={false} gravity={[0, -40, 0]} interpolate timeStep={1 / 60}>
        <Suspense fallback={null}>
          <Band contributor={contributor} />
        </Suspense>
      </Physics>
      <Environment background={false} blur={0.75}>
        <Lightformer
          color="white"
          intensity={2}
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          color="white"
          intensity={3}
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          color="white"
          intensity={3}
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          color="white"
          intensity={10}
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  )
}

export default function BadgeModal({ contributor, developer, onClose }) {
  const profile = contributor ?? developer

  if (!profile) return null

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-white/30 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.name} contributor badge`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white shadow-[0_18px_38px_rgba(15,23,42,0.24)] transition hover:bg-cyan-700"
        aria-label="Close badge"
      >
        <X size={19} />
      </button>

      <div
        className="h-screen w-screen"
        onClick={(event) => event.stopPropagation()}
      >
        <BadgeScene contributor={profile} />
      </div>
    </div>
  )
}

useGLTF.preload(cardModelUrl)
useTexture.preload(tagTextureUrl)
