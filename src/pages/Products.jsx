import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'

export default function Products() {
  return (
    <section className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="px-[clamp(8px,1.5vw,24px)] pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-neutral-400">
          <Link to="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-neutral-900">Shop</span>
        </nav>
      </div>

      {/* Header */}
      <div className="px-[clamp(8px,1.5vw,24px)] pb-10 sm:pb-14">
        <h1 className="font-serif text-4xl sm:text-5xl text-neutral-900">All Products</h1>
        <p className="mt-3 text-sm text-neutral-500">{products.length} products</p>
      </div>

      {/* Product Grid */}
      <div className="px-[clamp(8px,1.5vw,24px)] pb-20 sm:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/product/${product.slug}`} className="group block">
                {/* Image */}
                <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-neutral-900 text-white text-[10px] font-medium rounded-sm uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">${product.originalPrice}</span>
                    )}
                    <span className="text-sm font-medium text-neutral-900">${product.price}</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-neutral-900 text-neutral-900'
                            : 'fill-neutral-200 text-neutral-200'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-neutral-400 ml-1">{product.rating}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
