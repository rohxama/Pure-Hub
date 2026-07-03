import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Star, ChevronRight, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, calculateDiscount } from '@/utils/helpers'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary-600 hover:underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const discount = calculateDiscount(product.originalPrice, product.price)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-dark-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-dark-400">
            <Link to="/" className="hover:text-dark-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-dark-700 transition-colors">Shop</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-dark-700">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-dark-50 mb-4">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i ? 'border-dark-900' : 'border-transparent hover:border-dark-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {product.badge && (
              <span className="inline-block self-start px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-dark-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-dark-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-dark-400">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-3xl font-bold text-dark-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-dark-400 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-lg">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <p className="mt-6 text-dark-500 leading-relaxed">{product.description}</p>

            {product.sizes.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-dark-900 mb-3">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-dark-900 bg-dark-900 text-white'
                          : 'border-dark-200 hover:border-dark-300 text-dark-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-dark-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-dark-50 transition-colors rounded-l-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-semibold min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-dark-50 transition-colors rounded-r-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product, selectedSize)
                }}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>

              <button className="p-4 border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
                <Heart className="w-5 h-5 text-dark-600" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: Shield, text: '2-Year Warranty' },
                { icon: RotateCcw, text: '30-Day Returns' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-2 p-3 bg-dark-50 rounded-xl">
                  <Icon className="w-5 h-5 text-dark-500" />
                  <span className="text-xs text-dark-500 text-center">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark-100">
              <h4 className="text-sm font-semibold text-dark-900 mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-dark-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-3xl font-semibold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
