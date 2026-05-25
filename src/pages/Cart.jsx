import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <main className="mx-[calc(50%-50vw)] min-h-screen w-screen bg-background text-secondary">
      <section className="flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-wide text-primary">
            Shopping Cart
          </span>

          <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-none tracking-normal">
            Your cart is empty
          </h1>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-muted">
            This route is ready. You can now build the cart experience here
            while React Router handles the page change.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="rounded-full bg-secondary px-7 py-3 text-sm font-black text-primary-foreground shadow-[0_18px_40px_rgba(8,145,178,0.22)] transition hover:bg-primary-focus md:text-base"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-full border border-border bg-background-primary px-7 py-3 text-sm font-black text-secondary shadow-[0_12px_30px_rgba(2,6,23,0.08)] transition hover:border-primary hover:text-primary md:text-base"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
