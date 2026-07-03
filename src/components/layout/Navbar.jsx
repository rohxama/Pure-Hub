import { motion } from 'framer-motion'
import { Camera, Menu, ShoppingBag, User, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { NAV_LINKS } from '@/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { cartItemsCount } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-white'
        }`}
      >
        <div className="miracle-nav-shell">
          <div className="miracle-nav-bar">
            <Link to="/" className="flex items-center shrink-0">
              <span className="miracle-logo">
                Miracle
              </span>
            </Link>

            <nav className="miracle-nav-links hidden lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`miracle-nav-link ${
                    location.pathname === link.path
                      ? 'miracle-nav-link-active'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="miracle-nav-actions">
              <button className="miracle-icon-button hidden sm:flex">
                <User className="h-5 w-5 text-neutral-950" />
              </button>

              <button className="miracle-icon-button hidden sm:flex">
                <Camera className="h-5 w-5 text-neutral-950" />
              </button>

              <Link
                to="/cart"
                className="miracle-icon-button relative"
              >
                <ShoppingBag className="h-5 w-5 text-neutral-950" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </Link>

              <Link
                to="/products"
                className="miracle-shop-button hidden sm:inline-flex"
              >
                Shop Now
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="miracle-icon-button lg:hidden"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex-1 space-y-1">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`flex items-center py-4 px-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-neutral-900 text-white'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="pt-4 pb-6">
            <Link
              to="/products"
              className="flex items-center justify-center w-full py-3.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <p className="text-xs text-neutral-400 text-center">&copy; 2026 Miracle. All rights reserved.</p>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  )
}
