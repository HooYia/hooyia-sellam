import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Card({
  to,
  title,
  description,
  category,
  imageLabel,
  meta,
  badge,
  sizes,
  colors,
  isFeatured = false,
  actionLabel,
  onAction,
  linkLabel = 'View details',
}) {
  const imageContent = (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-[1.25rem] bg-background-secondary ${
        isFeatured ? 'min-h-[34rem]' : 'aspect-[4/3]'
      }`}
    >
      <button
        type="button"
        className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-lg bg-background-primary/80 text-secondary shadow-[0_10px_24px_rgba(2,6,23,0.08)] transition hover:text-primary"
        aria-label="Add to favorites"
      >
        <Heart className="h-5 w-5" aria-hidden="true" />
      </button>

      {badge && (
        <span className="absolute right-4 top-4 rounded-md bg-secondary px-4 py-2 text-xs font-black uppercase text-primary-foreground">
          {badge}
        </span>
      )}

      <span className="text-7xl font-black text-primary">
        {imageLabel}
      </span>
    </div>
  )

  return (
    <article
      className={`group ${
        isFeatured ? 'lg:row-span-2' : ''
      }`}
    >
      {to ? (
        <Link to={to} className="block">
          {imageContent}
        </Link>
      ) : (
        imageContent
      )}

      <div className="mt-4">
        {category && (
          <span className="text-xs font-black uppercase tracking-wide text-primary">
            {category}
          </span>
        )}

        {title && (
          <h2 className="mt-2 text-lg font-black uppercase leading-tight text-secondary">
            {title}
          </h2>
        )}

        {meta && (
          <p className="mt-1 text-base font-black text-secondary">
            {meta}
          </p>
        )}

        {description && (
          <p className="mt-3 text-sm font-semibold leading-relaxed text-muted">
            {description}
          </p>
        )}

        {(sizes || colors) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-muted">
            {sizes && (
              <span>
                Sizes: <span className="text-secondary">{sizes}</span>
              </span>
            )}

            {colors && (
              <span className="flex items-center gap-2">
                Colors:
                <span className="flex items-center gap-1">
                  {colors.map((color) => (
                    <span
                      key={color}
                      className="h-3 w-3 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
              </span>
            )}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {actionLabel && onAction && (
            <button
              type="button"
              onClick={onAction}
              className="rounded-full bg-secondary px-5 py-2 text-sm font-black text-primary-foreground transition hover:bg-primary-focus"
            >
              {actionLabel}
            </button>
          )}

          {to && (
            <Link
              to={to}
              className="text-sm font-black text-primary transition hover:text-primary-focus"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
