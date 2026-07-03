import { motion } from 'framer-motion'
import { ShoppingBag, Search, Menu, X, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { NAV_LINKS } from '@/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-dark-900">
                LUXE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-dark-900'
                      : 'text-dark-500 hover:text-dark-900'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-dark-900"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-dark-100 transition-colors duration-200"
              >
                <Search className="w-5 h-5 text-dark-700" />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-full hover:bg-dark-100 transition-colors duration-200"
              >
                <ShoppingBag className="w-5 h-5 text-dark-700" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-dark-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-dark-100 transition-colors duration-200"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <motion.div
          initial={false}
          animate={{ height: isSearchOpen ? 'auto' : 0, opacity: isSearchOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white border-t border-dark-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 bg-dark-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 transition-all"
              />
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
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
                  className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-dark-900 text-white'
                      : 'hover:bg-dark-50 text-dark-700'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="pt-6 border-t border-dark-100">
            <p className="text-xs text-dark-400 text-center">&copy; 2026 LUXE. All rights reserved.</p>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
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
