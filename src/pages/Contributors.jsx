import { useEffect, useState } from 'react'
import contributorsData from '../data/contributors.json'
import BadgeModal from '../components/BadgeModal'

const headline = 'Learn React, build real interfaces, use it with confidence'
const primaryPhrase = 'Learn React, build real interfaces,'

function TypedHeadline() {
  const [typedLength, setTypedLength] = useState(() => {
    if (typeof window === 'undefined') return 0

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? headline.length
      : 0
  })
  const typedText = headline.slice(0, typedLength)
  const primaryText = typedText.slice(0, primaryPhrase.length)
  const accentText =
    typedLength > primaryPhrase.length
      ? typedText.slice(primaryPhrase.length).trimStart()
      : ''
  const isTypingAccent = typedLength > primaryPhrase.length

  useEffect(() => {
    if (typedLength >= headline.length) {
      return undefined
    }

    const timer = setInterval(() => {
      setTypedLength((current) => {
        if (current >= headline.length) {
          clearInterval(timer)
          return current
        }

        return current + 1
      })
    }, 45)

    return () => clearInterval(timer)
  }, [typedLength])

  return (
    <h1 className="w-full max-w-[82rem] text-center text-[clamp(2.1rem,4.35vw,4.9rem)] font-black leading-[1.02] tracking-normal drop-shadow-[0_18px_40px_rgba(8,145,178,0.2)]">
      <span className="block whitespace-nowrap text-secondary">
        {primaryText}
        {!isTypingAccent && <span className="typing-cursor" aria-hidden="true" />}
      </span>
      <span className="block whitespace-nowrap text-primary">
        {accentText}
        {isTypingAccent && <span className="typing-cursor" aria-hidden="true" />}
      </span>
    </h1>
  )
}

function ContributorAvatar({ contributor, isRevealed, onReveal, onSelect }) {
  const githubUrl = `https://github.com/${contributor.githubUsername}`

  return (
    <button
      type="button"
      className="group flex w-36 flex-col items-center text-center outline-none"
      aria-label={`Open ${contributor.name} workshop badge`}
      onMouseEnter={onReveal}
      onFocus={onReveal}
      onClick={onSelect}
    >
      <span className="relative grid h-[6.35rem] w-[6.35rem] place-items-center rounded-full border-[3px] border-primary bg-background-primary shadow-[0_18px_36px_rgba(2,6,23,0.16)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_42px_rgba(8,145,178,0.22)]">
        <img
          src={`${githubUrl}.png`}
          alt={`${contributor.name} GitHub avatar`}
          className={`h-24 w-24 rounded-full object-cover transition duration-500 group-hover:grayscale-0 ${
            isRevealed ? 'grayscale-0' : 'grayscale'
          }`}
        />
      </span>
      <strong className="mt-4 max-w-36 text-lg font-black leading-tight text-secondary transition group-hover:text-primary">
        {contributor.name}
      </strong>
      <span className="mt-1 max-w-32 text-sm font-semibold text-muted">
        {contributor.role || 'Contributor'}
      </span>
    </button>
  )
}

export default function Contributors() {
  const [revealedProfiles, setRevealedProfiles] = useState(() => new Set())
  const [selectedContributor, setSelectedContributor] = useState(null)

  function revealProfile(githubUsername) {
    setRevealedProfiles((current) => {
      if (current.has(githubUsername)) return current

      const next = new Set(current)
      next.add(githubUsername)
      return next
    })
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-secondary">
      <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,var(--color-background)_0%,var(--color-background-secondary)_52%,var(--color-background-primary)_100%)]">
        <div className="absolute left-1/2 top-[45%] h-[42rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-accent/65 blur-[150px]" />
        <div className="absolute left-1/2 top-[62%] h-[32rem] w-[46rem] -translate-x-1/2 rounded-full bg-primary/35 blur-[170px]" />
        <div className="absolute left-[-8rem] top-[35%] h-72 w-96 bg-secondary-accent/45 blur-[130px]" />

        <nav className="relative z-10 flex min-h-24 items-center justify-between px-5 py-6 text-base font-black md:min-h-28 md:px-10">
          <a href="/" className="flex items-center gap-4 tracking-tight">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-lg text-primary-foreground shadow-[0_14px_34px_rgba(8,145,178,0.24)]">
              R
            </span>
            <span className="text-lg md:text-xl">React Workshop</span>
          </a>

          <a
            href="#contributors"
            className="rounded-full bg-secondary px-7 py-3 text-sm font-black text-primary-foreground shadow-[0_18px_40px_rgba(8,145,178,0.25)] transition hover:bg-primary-focus md:text-base"
          >
            Join
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col items-center justify-center px-4 pb-14 pt-0 text-center">
          <TypedHeadline />

          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.22rem)] font-bold leading-snug text-tertiary">
            Turn workshop ideas into real interfaces with code you understand.
          </p>

          <div
            id="contributors"
            className="mt-11 flex w-screen flex-wrap items-start justify-center gap-x-10 gap-y-10 px-5 py-6"
          >
            {contributorsData.map((contributor) => (
              <ContributorAvatar
                key={contributor.githubUsername}
                contributor={contributor}
                isRevealed={revealedProfiles.has(contributor.githubUsername)}
                onReveal={() => revealProfile(contributor.githubUsername)}
                onSelect={() => {
                  revealProfile(contributor.githubUsername)
                  setSelectedContributor(contributor)
                }}
              />
            ))}
          </div>

          <p className="mt-8 max-w-xl text-sm font-bold text-muted">
            Add your details in <span className="text-secondary">contributors.json</span> and your profile appears here.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes workshopCaret {
          0%, 44% { border-color: var(--color-primary); }
          45%, 100% { border-color: transparent; }
        }

        .typing-cursor {
          display: inline-block;
          height: 0.8em;
          margin-left: 0.08em;
          transform: translateY(0.08em);
          border-right: 4px solid var(--color-primary);
          animation: workshopCaret 0.78s step-end infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .typing-cursor {
            border-right: 0;
            animation: none;
          }
        }
      `}</style>

      {selectedContributor && (
        <BadgeModal
          contributor={selectedContributor}
          onClose={() => setSelectedContributor(null)}
        />
      )}
    </main>
  )
}
