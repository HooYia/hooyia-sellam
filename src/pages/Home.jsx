import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-secondary">
      <section className="flex min-h-screen flex-col items-center justify-center px-5 py-12 text-center">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-wide text-primary">
            React Workshop
          </span>

          <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-normal">
            Welcome to the shop
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-muted">
            Browse the workshop pages with React Router and move between views
            without refreshing the browser.
          </p>

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/cart"
              className="rounded-full bg-secondary px-7 py-3 text-sm font-black text-primary-foreground shadow-[0_18px_40px_rgba(8,145,178,0.22)] transition hover:bg-primary-focus md:text-base"
            >
              View Cart
            </Link>

            <Link
              to="/contributors"
              className="rounded-full border border-border bg-background-primary px-7 py-3 text-sm font-black text-secondary shadow-[0_12px_30px_rgba(2,6,23,0.08)] transition hover:border-primary hover:text-primary md:text-base"
            >
              Contributors
            </Link>
          </nav>
        </div>
      </section>
    </main>
  )
}
