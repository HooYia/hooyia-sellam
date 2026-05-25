import { SlidersHorizontal } from 'lucide-react'
import Card from '../components/Card'

const categories = ['All', 'Audio', 'Wearables', 'Accessories', 'Workspace']

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: '$49.00',
    description:
      'Clear wireless sound with soft cushions and long battery life.',
    imageLabel: 'WH',
    badge: 'New',
    sizes: 'One Size',
    colors: ['#020617', '#f8fdff', '#0891b2'],
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Wearables',
    price: '$89.00',
    description:
      'Track activity, calls, and daily goals from your wrist.',
    imageLabel: 'SW',
    badge: 'Hot',
    sizes: 'S, M, L',
    colors: ['#020617', '#64748b', '#67e8f9'],
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: '$39.00',
    description:
      'Durable daily storage with a padded laptop compartment.',
    imageLabel: 'LB',
    sizes: '15 inch',
    colors: ['#020617', '#0e7490', '#bae6fd'],
  },
  {
    id: 4,
    name: 'Desk Lamp',
    category: 'Workspace',
    price: '$29.00',
    description:
      'Compact lighting for focused work sessions and late study nights.',
    imageLabel: 'DL',
    badge: 'New',
    sizes: 'One Size',
    colors: ['#f8fdff', '#020617'],
  },
  {
    id: 5,
    name: 'Portable Speaker',
    category: 'Audio',
    price: '$59.00',
    description:
      'Small speaker with bold sound for home, travel, and outdoor use.',
    imageLabel: 'PS',
    sizes: 'One Size',
    colors: ['#020617', '#0891b2', '#10b981'],
  },
]

export default function Products() {
  return (
    <section className="py-10">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] font-black uppercase leading-none text-secondary">
                All Products
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-muted">
                Browse all available products and choose the items that fit your everyday
                needs.
            </p>
        </div>

      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-base font-black text-secondary">
            {products.length} Items
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-md border px-4 py-2 text-sm font-black transition ${
                index === 0
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background-primary text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-black text-primary-foreground transition hover:bg-primary-focus"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filter
        </button>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            to={`/product/${product.id}`}
            title={product.name}
            description={product.description}
            category={product.category}
            imageLabel={product.imageLabel}
            meta={product.price}
            badge={product.badge}
            sizes={product.sizes}
            colors={product.colors}
            actionLabel="Add to Cart"
            onAction={() => console.log('Add to cart:', product.name)}
            linkLabel="View details"
          />
        ))}
      </div>
    </section>
  )
}
