import { Link, useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: '$49.00',
    imageLabel: 'WH',
    badge: 'New',
    sizes: 'One Size',
    colors: ['#020617', '#f8fdff', '#0891b2'],
    description:
      'Comfortable wireless headphones designed for daily listening, remote work, and travel. They deliver clear sound, soft cushioning, and reliable battery life in a lightweight build.',
    features: [
      'Bluetooth wireless connection',
      'Long-lasting battery life',
      'Soft cushioned ear pads',
    ],
    details: [
      'Up to 30 hours of playback on a single charge.',
      'Foldable design that fits easily into a backpack.',
      'Built-in microphone for calls and online meetings.',
    ],
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Wearables',
    price: '$89.00',
    imageLabel: 'SW',
    badge: 'Hot',
    sizes: 'S, M, L',
    colors: ['#020617', '#64748b', '#67e8f9'],
    description:
      'A lightweight smart watch built to help you follow your daily activity, receive useful alerts, and keep track of your routines without constantly checking your phone.',
    features: [
      'Activity and step tracking',
      'Call and message notifications',
      'Water-resistant body',
    ],
    details: [
      'Bright touch display for quick navigation.',
      'Multiple sport modes for everyday workouts.',
      'Comfortable strap made for all-day wear.',
    ],
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: '$39.00',
    imageLabel: 'LB',
    sizes: '15 inch',
    colors: ['#020617', '#0e7490', '#bae6fd'],
    description:
      'A durable laptop backpack made for school, work, and travel. It keeps your device protected while giving you organized space for chargers, notebooks, and daily essentials.',
    features: [
      'Padded laptop compartment',
      'Multiple organizer pockets',
      'Comfortable shoulder straps',
    ],
    details: [
      'Fits most laptops up to 15 inches.',
      'Water-resistant exterior for light rain.',
      'Side pocket for a bottle or compact umbrella.',
    ],
  },
  {
    id: 4,
    name: 'Desk Lamp',
    category: 'Workspace',
    price: '$29.00',
    imageLabel: 'DL',
    badge: 'New',
    sizes: 'One Size',
    colors: ['#f8fdff', '#020617'],
    description:
      'A compact desk lamp made for focused work sessions, study time, and calm evening routines. It brings clean lighting to your workspace without taking up too much room.',
    features: [
      'Adjustable lighting angle',
      'Compact desk-friendly base',
      'Soft light for long work sessions',
    ],
    details: [
      'Minimal design that fits modern workspaces.',
      'Stable base for desks, shelves, and bedside tables.',
      'Designed for reading, studying, and focused tasks.',
    ],
  },
  {
    id: 5,
    name: 'Portable Speaker',
    category: 'Audio',
    price: '$59.00',
    imageLabel: 'PS',
    sizes: 'One Size',
    colors: ['#020617', '#0891b2', '#10b981'],
    description:
      'A portable speaker with bold sound for home, travel, and outdoor use. It is easy to carry, simple to connect, and built for everyday listening.',
    features: [
      'Compact travel-ready design',
      'Wireless audio connection',
      'Rich sound for its size',
    ],
    details: [
      'Lightweight body that fits easily into a small bag.',
      'Simple controls for volume and playback.',
      'Useful for desk setups, small rooms, and casual outdoor moments.',
    ],
  },
]

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
        <span className="text-sm font-black uppercase tracking-wide text-primary">
          Product not found
        </span>
        <h1 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-none text-secondary">
          This product does not exist
        </h1>
        <Link
          to="/products"
          className="mt-8 rounded-full bg-secondary px-7 py-3 text-sm font-black text-primary-foreground transition hover:bg-primary-focus"
        >
          Back to Products
        </Link>
      </section>
    )
  }

  return (
    <section className="py-10">
      <Link
        to="/products"
        className="inline-flex rounded-full border border-border bg-background-primary px-5 py-2 text-sm font-black text-secondary transition hover:border-primary hover:text-primary"
      >
        Back to Products
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[2rem] bg-background-secondary">
            {product.badge && (
              <span className="absolute right-5 top-5 rounded-md bg-secondary px-4 py-2 text-xs font-black uppercase text-primary-foreground">
                {product.badge}
              </span>
            )}
          <span className="text-8xl font-black text-primary">
            {product.imageLabel}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-black uppercase tracking-wide text-primary">
              {product.category}
            </span>

            {product.badge && (
              <span className="rounded-full bg-background-secondary px-3 py-1 text-xs font-black uppercase text-secondary">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.75rem)] font-black leading-none text-secondary">
            {product.name}
          </h1>

          <strong className="mt-6 block text-3xl font-black text-secondary">
            {product.price}
          </strong>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-muted">
                Sizes
              </p>
              <p className="mt-2 text-sm font-black text-secondary">
                {product.sizes}
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wide text-muted">
                Colors
              </p>
              <div className="mt-2 flex items-center gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="h-5 w-5 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/cart"
              className="rounded-full bg-secondary px-7 py-3 text-sm font-black text-primary-foreground shadow-[0_18px_40px_rgba(8,145,178,0.22)] transition hover:bg-primary-focus md:text-base"
            >
              Add to Cart
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-border bg-background-primary px-7 py-3 text-sm font-black text-secondary transition hover:border-primary hover:text-primary md:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <h2 className="text-xl font-black text-secondary">
          Product information
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {product.details.map((detail) => (
            <p
              key={detail}
              className="text-sm font-semibold leading-relaxed text-muted"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
