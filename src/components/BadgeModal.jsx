import { useEffect, useMemo, useState } from 'react'
import { Code2, GitBranch, X } from 'lucide-react'
import { usePendulum } from '../hooks/usePendulum'

function BrandMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-5 w-7 text-lime-400" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 15.4 6.7 5.2l7.9 4.1 4.2-5.2 10.2 6.5-3.6 8.3-8.4-4-4 5.1L3 15.4Z"
      />
    </svg>
  )
}

function RibbonPiece({ className }) {
  return (
    <div
      className={`absolute rounded-[1.4rem] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 shadow-[0_20px_24px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_18px_rgba(5,28,125,0.28)] ${className}`}
    />
  )
}

function LanyardRibbon() {
  return (
    <div className="absolute left-1/2 top-0 h-72 w-[31rem] -translate-x-1/2">
      <RibbonPiece className="left-[6.4rem] top-12 h-12 w-40 -rotate-[28deg]" />
      <RibbonPiece className="left-[2.2rem] top-[7.1rem] h-12 w-36 rotate-[28deg]" />
      <RibbonPiece className="right-[5.1rem] top-9 h-12 w-44 rotate-[18deg]" />
      <RibbonPiece className="right-[1.9rem] top-[5.9rem] h-12 w-32 rotate-[50deg]" />
      <RibbonPiece className="left-[12.6rem] top-[5.4rem] h-12 w-36 rotate-[31deg]" />
      <RibbonPiece className="left-[14.6rem] top-[9.7rem] h-40 w-12 rotate-[-2deg]" />
      <div className="absolute left-[5.1rem] top-[8.6rem] h-12 w-20 rotate-[25deg] rounded-l-[1.4rem] bg-gradient-to-r from-blue-700 to-blue-500 shadow-[0_18px_18px_rgba(15,23,42,0.16)]" />
      <div className="absolute left-[17.2rem] top-[2.35rem] h-12 w-16 rotate-[18deg] rounded-r-[1.4rem] bg-gradient-to-l from-blue-800 to-blue-500 shadow-[0_16px_20px_rgba(15,23,42,0.18)]" />
      <div className="absolute left-[13.1rem] top-[9.4rem] h-20 w-12 rotate-[7deg] rounded-xl bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 opacity-85" />
    </div>
  )
}

function MetalSwivel() {
  return (
    <div className="absolute left-1/2 top-[15.1rem] z-20 -translate-x-1/2">
      <div className="absolute left-1/2 top-[-1.15rem] h-10 w-16 -translate-x-1/2 rounded-b-full border-[5px] border-zinc-400 bg-transparent shadow-[0_7px_12px_rgba(0,0,0,0.14)]" />
      <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border border-zinc-500 bg-gradient-to-br from-white via-zinc-300 to-zinc-600 shadow-md" />
      <div className="absolute left-1/2 top-3 h-20 w-6 -translate-x-1/2 rounded-full border border-zinc-500 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-700 shadow-[6px_10px_12px_rgba(0,0,0,0.18)]" />
      <div className="absolute left-1/2 top-[4.6rem] h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-400/60 blur-sm" />
    </div>
  )
}

function PlasticHolder({ children }) {
  return (
    <div className="relative mx-auto mt-[18.4rem] w-[min(76vw,18.4rem)]">
      <div className="absolute -inset-2 rounded-[1.45rem] bg-zinc-200 shadow-[0_18px_26px_rgba(15,23,42,0.2)]" />
      <div className="absolute -inset-[0.34rem] rounded-[1.25rem] border border-zinc-300 bg-white/45 backdrop-blur-sm" />
      <div className="absolute -left-5 top-[9.1rem] z-10 h-16 w-8 rounded-l-lg bg-white shadow-[inset_-3px_0_0_rgba(148,163,184,0.45),0_6px_12px_rgba(0,0,0,0.12)]" />
      <div className="absolute -right-5 top-[11.7rem] z-10 h-16 w-8 rounded-r-lg bg-white shadow-[inset_3px_0_0_rgba(148,163,184,0.45),0_6px_12px_rgba(0,0,0,0.12)]" />
      <div className="absolute -top-5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-t-xl border-x border-t border-zinc-300 bg-white/65" />
      <div className="relative overflow-hidden rounded-[1.05rem] border border-zinc-300 bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)]">
        {children}
      </div>
      <div className="absolute -bottom-2 left-5 h-5 w-11 rounded-b-md bg-zinc-200 shadow-sm" />
      <div className="absolute -bottom-2 right-5 h-5 w-11 rounded-b-md bg-zinc-200 shadow-sm" />
    </div>
  )
}

function BadgeCard({ contributor }) {
  const githubUrl = `https://github.com/${contributor.githubUsername}`
  const avatarUrl = `${githubUrl}.png`

  return (
    <article className="relative h-[27.5rem] bg-white px-9 pt-12 text-slate-700">
      <div className="relative z-10">
        <BrandMark />
        <p className="mt-5 text-[0.92rem] font-medium leading-tight text-slate-500">
          Hooyia Core Meeting
        </p>
        <p className="text-[0.98rem] font-black leading-tight text-slate-800">
          26 - 28 March
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[15.7rem] bg-[radial-gradient(circle_at_22%_9%,rgba(150,255,89,0.95),transparent_37%),radial-gradient(circle_at_78%_25%,rgba(82,178,255,0.88),transparent_39%),linear-gradient(145deg,#11c168_0%,#087c7a_39%,#024b67_73%,#0046c9_100%)]" />
      <div className="absolute inset-x-0 bottom-[13.1rem] h-20 bg-gradient-to-b from-transparent via-lime-200/70 to-emerald-400/50 blur-xl" />

      <div className="relative z-10 mt-[5.35rem] flex flex-col items-center text-center">
        <img
          src={avatarUrl}
          alt={`${contributor.name} GitHub avatar`}
          className="h-[6.35rem] w-[6.35rem] rounded-full border-[5px] border-slate-900 bg-emerald-200 object-cover shadow-[0_12px_24px_rgba(15,23,42,0.34)]"
        />
        <h2 className="mt-5 max-w-[13rem] truncate text-[2.05rem] font-black leading-none tracking-normal text-white drop-shadow">
          ID Card
        </h2>
        <p className="mt-1 max-w-[13rem] truncate text-[1.45rem] font-light leading-none text-white/95">
          {contributor.name}
        </p>
        <p className="mt-6 max-w-[14rem] truncate text-[0.68rem] font-medium text-white/76">
          {githubUrl}/ecosystem/{contributor.favoriteTech}
        </p>
      </div>

      <div className="absolute bottom-5 left-7 z-10 flex items-center gap-2 text-white/82">
        <Code2 size={15} />
        <span className="max-w-24 truncate text-xs font-semibold">
          {contributor.favoriteTech}
        </span>
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 right-7 z-10 inline-flex max-w-28 items-center gap-1.5 truncate text-xs font-semibold text-white/82 hover:text-white"
      >
        <GitBranch size={14} />
        <span className="truncate">@{contributor.githubUsername}</span>
      </a>
    </article>
  )
}

export default function BadgeModal({ contributor, developer, onClose }) {
  const profile = contributor ?? developer
  const { angle, impulse, start, stop } = usePendulum({
    length: 1.08,
    gravity: 15,
    damping: 1.08,
  })
  const [entered, setEntered] = useState(false)

  const shadowStyle = useMemo(
    () => ({
      transform: `translateX(${angle * 0.55}px) scale(${1 + Math.abs(angle) / 150})`,
      opacity: 0.18 + Math.min(Math.abs(angle) / 110, 0.12),
    }),
    [angle],
  )

  useEffect(() => {
    const enterTimer = setTimeout(() => setEntered(true), 40)
    const swingTimer = setTimeout(() => start(18, -1.05), 500)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(swingTimer)
      stop()
    }
  }, [start, stop])

  if (!profile) return null

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-slate-50 px-3 py-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.name} contributor badge`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-lg backdrop-blur transition hover:bg-white hover:text-slate-950"
        aria-label="Close badge"
      >
        <X size={19} />
      </button>

      <div
        className="relative h-[48rem] w-full max-w-[33rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="absolute bottom-8 left-1/2 h-16 w-72 -translate-x-1/2 rounded-full bg-slate-400 blur-2xl transition-opacity"
          style={shadowStyle}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(148,163,184,0.18),transparent_48%)]" />

        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 transition-transform duration-700 ease-[cubic-bezier(0.18,0.9,0.24,1)]"
          style={{
            transform: `translateX(-50%) translateY(${entered ? '0' : '-42rem'})`,
          }}
        >
          <div
            className="relative h-[46rem] w-[33rem] max-w-[96vw]"
            onMouseEnter={() => impulse(angle > 0 ? -0.48 : 0.48)}
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: '50% 15.75rem',
            }}
          >
            <LanyardRibbon />
            <MetalSwivel />
            <PlasticHolder>
              <BadgeCard contributor={profile} />
            </PlasticHolder>
          </div>
        </div>
      </div>
    </div>
  )
}
