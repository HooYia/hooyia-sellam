import { Link } from 'react-router-dom'
import { 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Mail, 
  MapPin, 
  Phone, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const categories = [
    { name: 'Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop', count: '12 Products' },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop', count: '8 Products' },
    { name: 'Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop', count: '15 Products' },
    { name: 'T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', count: '20 Products' },
  ]

  const products = [
    { id: 1, name: 'Flannel Shirt', price: 49.00, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop' },
    { id: 2, name: 'Hoodie Gray', price: 59.00, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop' },
    { id: 3, name: 'Sneakers Black', price: 89.00, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop' },
    { id: 4, name: 'Denim Jacket', price: 79.00, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop' },
    { id: 5, name: 'Casual Shirt', price: 45.00, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop' },
    { id: 6, name: 'Leather Jacket', price: 129.00, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
  ]

  const newCollections = [
    { title: 'New Collection', subtitle: 'Summer 2026', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop' },
    { title: 'New Collection', subtitle: 'Winter 2026', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop' },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Customer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Jane Smith',
      role: 'Customer',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Simplicity is the ultimate in sophistication
            </h1>
            <p className="text-lg text-gray-600">
              Discover our new collection of minimalist fashion designed for modern living.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop" 
                  alt="Fashion model" 
                  className="h-64 w-full object-cover md:h-80"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
                  New Arrival
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop" 
                  alt="Fashion" 
                  className="h-48 w-full object-cover md:h-56"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop" 
                  alt="Fashion model" 
                  className="h-80 w-full object-cover md:h-96"
                />
                <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="bg-white px-4 py-12 text-center md:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-600">
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim, acitis pulvinar.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Our Category</h2>
            <Link to="/categories" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="text-sm text-white/80">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="bg-white px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Our Best Selling Product</h2>
            <Link to="/shop" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <button className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md opacity-0 transition group-hover:opacity-100">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Collection Banner */}
      <section className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">New Collection</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {newCollections.map((col, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 md:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-medium text-white/80">{col.subtitle}</p>
                  <h3 className="mt-1 text-2xl font-bold">{col.title}</h3>
                  <Link 
                    to="/shop" 
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-6 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/30"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Customer Say!</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex gap-4 rounded-2xl bg-gray-50 p-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <div className="mb-2 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{testimonial.text}</p>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Brand Info */}
     
    </div>
  )
}