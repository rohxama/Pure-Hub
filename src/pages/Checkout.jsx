import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CreditCard, Lock, ChevronRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/helpers'
import { CHECKOUT_STEPS } from '@/constants'

export default function Checkout() {
  const { items, cartTotal } = useCart()
  const shipping = cartTotal > 99 ? 0 : 9.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  return (
    <div className="min-h-screen bg-dark-50/50">
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">Checkout</h1>
            <div className="flex items-center gap-2 mt-4">
              {CHECKOUT_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className={`text-sm ${i === 1 ? 'text-white font-medium' : 'text-dark-400'}`}>{step}</span>
                  {i < 2 && <ChevronRight className="w-3.5 h-3.5 text-dark-500" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-400 mb-6">Your cart is empty. Add some items before checking out.</p>
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {/* Contact */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-dark-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">First Name</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="John" /></div>
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Last Name</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="Doe" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Email</label><input type="email" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="john@example.com" /></div>
                  <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Phone</label><input type="tel" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="+1 (555) 000-0000" /></div>
                </div>
              </motion.div>

              {/* Shipping */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-dark-900 mb-6">Shipping Address</h3>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Address</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="123 Main Street" /></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">City</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="New York" /></div>
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">ZIP Code</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="10001" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Country</label>
                    <select className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all">
                      <option>United States</option><option>Canada</option><option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Payment */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-dark-900">Payment</h3>
                  <div className="flex items-center gap-1.5 text-xs text-dark-400"><Lock className="w-3.5 h-3.5" />Secure</div>
                </div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Card Number</label>
                    <div className="relative">
                      <input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all pl-11" placeholder="4242 4242 4242 4242" />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Expiry</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="MM/YY" /></div>
                    <div><label className="block text-sm font-medium text-dark-700 mb-1.5">CVC</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="123" /></div>
                  </div>
                </div>
              </motion.div>

              <button className="w-full lg:hidden py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20">
                Place Order — {formatPrice(total)}
              </button>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
                <h3 className="text-lg font-semibold text-dark-900 mb-6">Order Summary</h3>
                <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-dark-50 flex-shrink-0">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-dark-900 line-clamp-1">{item.name}</p>
                        <p className="text-xs text-dark-400">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-sm border-t border-dark-100 pt-4">
                  <div className="flex justify-between"><span className="text-dark-500">Subtotal</span><span className="font-medium">{formatPrice(cartTotal)}</span></div>
                  <div className="flex justify-between"><span className="text-dark-500">Shipping</span><span className="font-medium">{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span></div>
                  <div className="flex justify-between"><span className="text-dark-500">Tax</span><span className="font-medium">{formatPrice(tax)}</span></div>
                  <div className="border-t border-dark-100 pt-3 flex justify-between"><span className="font-semibold text-dark-900">Total</span><span className="font-bold text-lg text-dark-900">{formatPrice(total)}</span></div>
                </div>
                <button className="hidden lg:flex w-full mt-6 items-center justify-center gap-2 px-6 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20">
                  <Lock className="w-4 h-4" />Place Order
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-dark-400">
                  <Lock className="w-3 h-3" />Your payment information is secure and encrypted
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
