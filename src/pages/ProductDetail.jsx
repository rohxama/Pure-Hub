import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Heart, ChevronRight, Minus, Plus, ArrowRight } from 'lucide-react'
import { products } from '@/data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug) || products[0]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [purchaseType, setPurchaseType] = useState('one-time')
  const [activeTab, setActiveTab] = useState('how-to-use')

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const tabs = [
    { id: 'how-to-use', label: 'How to use' },
    { id: 'benefit', label: 'Benefit' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'return-policy', label: 'Return Policy' },
  ]

  return (
    <section className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="px-[clamp(8px,1.5vw,24px)] pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-neutral-400">
          <Link to="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-neutral-700 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-neutral-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail — Two Column */}
      <div className="px-[clamp(8px,1.5vw,24px)] pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* LEFT — Images */}
          <div className="lg:w-1/2">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-neutral-100 rounded-sm overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-neutral-900' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="lg:w-1/2 lg:pt-4">
            {/* Top row: Name + Badge */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight uppercase">
                {product.name}
              </h1>
              {product.badge && (
                <span className="shrink-0 px-3 py-1 bg-neutral-900 text-white text-[11px] font-medium rounded-sm uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Category + Size */}
            <div className="mt-3 flex items-center gap-4 text-sm text-neutral-500">
              <span className="capitalize">{product.category}</span>
              {product.sizes?.length > 0 && (
                <>
                  <span className="text-neutral-300">|</span>
                  <span>Size: {product.sizes[0]}</span>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? 'fill-neutral-900 text-neutral-900'
                        : 'fill-neutral-200 text-neutral-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-500">{product.rating}</span>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-medium text-neutral-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-base text-neutral-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Payment info */}
            <p className="mt-2 text-xs text-neutral-400">
              Or 4 easy payments of ${(product.price / 4).toFixed(2)} with
            </p>

            {/* Social proof */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <span className="inline-block w-4 h-4 bg-neutral-900 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {product.reviews?.toLocaleString()} people have purchased this product
            </div>

            {/* Divider */}
            <div className="mt-6 border-t border-neutral-200" />

            {/* Amount & Method */}
            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-900 mb-3">Amount & Method</p>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-neutral-200 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-neutral-500" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-neutral-50 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-neutral-500" />
                  </button>
                </div>
                <span className="text-xs text-neutral-400">Current stock: {product.inStock ? '27' : '0'}</span>
              </div>

              {/* Purchase type */}
              <div className="mt-5 space-y-3">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase"
                      value="one-time"
                      checked={purchaseType === 'one-time'}
                      onChange={() => setPurchaseType('one-time')}
                      className="w-4 h-4 accent-neutral-900"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">One time purchase</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900">${product.price}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase"
                      value="subscribe"
                      checked={purchaseType === 'subscribe'}
                      onChange={() => setPurchaseType('subscribe')}
                      className="w-4 h-4 accent-neutral-900"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">Subscribe 30 days</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900">${(product.price * 0.8).toFixed(0)}</span>
                </label>
              </div>
            </div>

            {/* Add to cart */}
            <button className="mt-6 w-full py-3.5 bg-neutral-900 text-white rounded-sm text-sm font-medium hover:bg-neutral-800 transition-colors duration-300">
              Add to cart
            </button>

            {/* Favorite */}
            <button className="mt-3 w-full py-3.5 border border-neutral-200 rounded-sm text-sm font-medium text-neutral-700 hover:border-neutral-400 transition-colors duration-300 flex items-center justify-center gap-2">
              Favorite
              <Heart className="w-4 h-4" />
            </button>

            {/* Tabs */}
            <div className="mt-8 border-b border-neutral-200">
              <div className="flex gap-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-neutral-900 text-neutral-900'
                        : 'border-transparent text-neutral-400 hover:text-neutral-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="mt-6 text-sm text-neutral-500 leading-relaxed space-y-4">
              {activeTab === 'how-to-use' && (
                <>
                  <p>
                    We always recommend that you speak to your GP before you embark on taking any
                    new supplements. Everyone is different and your GP is best positioned to provide
                    the right guidance for your unique situation and support your overall wellness
                    journey.
                  </p>
                  <p>
                    Take 2 tablets in the morning and 2 tablets in the evening. We recommend using
                    this supplement consistently for 90 days. Do not exceed the recommended daily
                    intake.
                  </p>
                  <p>
                    Whilst taking, consider introducing a healthy lifestyle to your daily routine to get
                    the best results. This product should not be used as a substitute for a varied and
                    balanced diet and a healthy lifestyle.
                  </p>
                </>
              )}
              {activeTab === 'benefit' && (
                <p>
                  Our premium formulation supports overall wellness with carefully selected
                  ingredients backed by scientific research. Designed for those who demand
                  the best from their daily routine.
                </p>
              )}
              {activeTab === 'ingredients' && (
                <p>
                  Each tablet contains a proprietary blend of essential vitamins, minerals,
                  and botanical extracts. Full ingredient list available on product packaging.
                </p>
              )}
              {activeTab === 'return-policy' && (
                <p>
                  We offer a 30-day satisfaction guarantee. If you are not completely satisfied
                  with your purchase, please contact our support team for a full refund.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-200" />

      {/* You might also like */}
      <div className="px-[clamp(8px,1.5vw,24px)] py-16 sm:py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">You might also like</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center hover:border-neutral-400 transition-colors">
              <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center hover:border-neutral-400 transition-colors">
              <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group">
              <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider">{p.name}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  {p.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">${p.originalPrice}</span>
                  )}
                  <span className="text-sm font-medium text-neutral-900">${p.price}</span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3.5 h-3.5 ${
                        star <= Math.floor(p.rating)
                          ? 'fill-neutral-900 text-neutral-900'
                          : 'fill-neutral-200 text-neutral-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-neutral-400 ml-1">{p.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More products button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-900 rounded-full text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            More products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
