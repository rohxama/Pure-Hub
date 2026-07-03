import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, calculateDiscount } from '@/utils/helpers'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()
  const discount = calculateDiscount(product.originalPrice, product.price)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-50 mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <span className="px-3 py-1 bg-dark-900 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 bg-red-500 text-white text-[11px] font-semibold rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 text-dark-700" />
            </button>
          </div>

          {/* Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addToCart(product)
              }}
              className="w-full py-3 bg-dark-900 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-dark-800 transition-colors shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-dark-200'
              }`}
            />
          ))}
          <span className="text-xs text-dark-400 ml-1">({product.reviews.toLocaleString()})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-dark-700 group-hover:text-dark-900 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-dark-900">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-dark-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
