import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/helpers'

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-dark-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-dark-300" />
          </div>
          <h1 className="font-serif text-3xl font-semibold text-dark-900 mb-3">Your Cart is Empty</h1>
          <p className="text-dark-400 mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. Start exploring our collection!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    )
  }

  const shipping = cartTotal > 99 ? 0 : 9.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  return (
    <div className="min-h-screen bg-dark-50/50">
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">Shopping Cart</h1>
            <p className="mt-3 text-dark-400">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={`${item.id}-${item.selectedSize}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-6 shadow-sm"
              >
                <Link to={`/product/${item.slug}`} className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-dark-50 flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link to={`/product/${item.slug}`} className="text-sm sm:text-base font-semibold text-dark-900 hover:text-primary-600 transition-colors line-clamp-1">
                        {item.name}
                      </Link>
                      {item.selectedSize && <p className="text-xs text-dark-400 mt-0.5">Size: {item.selectedSize}</p>}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="p-2 text-dark-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div className="flex items-center border border-dark-200 rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)} className="p-2 hover:bg-dark-50 transition-colors rounded-l-lg">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 py-2 text-sm font-semibold min-w-[40px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)} className="p-2 hover:bg-dark-50 transition-colors rounded-r-lg">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-dark-900">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <Link to="/products" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-700 transition-colors">
                <ArrowLeft className="w-4 h-4" />Continue Shopping
              </Link>
              <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-600 transition-colors">Clear Cart</button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm sticky top-28"
            >
              <h3 className="text-lg font-semibold text-dark-900 mb-6">Order Summary</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span className="text-dark-500">Subtotal</span><span className="font-medium">{formatPrice(cartTotal)}</span></div>
                <div className="flex justify-between"><span className="text-dark-500">Shipping</span><span className="font-medium">{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span></div>
                <div className="flex justify-between"><span className="text-dark-500">Tax (est.)</span><span className="font-medium">{formatPrice(tax)}</span></div>
                <div className="border-t border-dark-100 pt-4 flex justify-between"><span className="font-semibold text-dark-900">Total</span><span className="font-bold text-lg text-dark-900">{formatPrice(total)}</span></div>
              </div>

              {cartTotal < 99 && (
                <div className="mt-4 p-3 bg-primary-50 rounded-xl text-xs text-primary-700">
                  Add {formatPrice(99 - cartTotal)} more for free shipping!
                </div>
              )}

              <Link to="/checkout" className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20">
                Proceed to Checkout<ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 flex gap-2">
                <input type="text" placeholder="Promo code" className="flex-1 px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10" />
                <button className="px-4 py-3 border border-dark-200 rounded-xl text-sm font-medium hover:bg-dark-50 transition-colors">Apply</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
