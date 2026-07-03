import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingBag, Search, Heart, Menu } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-400/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* ========== LEFT: Text Content ========== */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
                New Collection 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.08] tracking-tight text-white"
            >
              Elevate Your
              <span className="block mt-1">
                <span className="text-primary-400">Style,</span> Define
              </span>
              <span className="block mt-1">Your Story</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Discover premium essentials crafted for the modern connoisseur.
              Where exceptional quality meets timeless design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-xl shadow-white/10"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/80 rounded-xl text-sm font-medium hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-12 sm:mt-16 flex gap-8 sm:gap-12 justify-center lg:justify-start"
            >
              {[
                { value: '12K+', label: 'Happy Customers' },
                { value: '500+', label: 'Products' },
                { value: '4.9', label: 'Rating', icon: true },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="flex items-center gap-1 justify-center lg:justify-start">
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                    {stat.icon && <Star className="w-4 h-4 fill-primary-400 text-primary-400" />}
                  </div>
                  <span className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 block">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ========== RIGHT: Laptop Mockup ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Laptop Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px] xl:max-w-[500px]">
              {/* ===== Screen ===== */}
              <div className="relative bg-neutral-800 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl border border-b-0 border-neutral-600/40 overflow-hidden shadow-2xl shadow-black/50">
                {/* Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-4 sm:h-5 bg-neutral-800 rounded-b-xl z-20 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-600 ring-1 ring-neutral-500" />
                </div>

                {/* Screen Bezel */}
                <div className="bg-neutral-900 p-[3px] sm:p-[4px] lg:p-[5px]">
                  {/* Screen Content — the actual display */}
                  <div className="relative aspect-[16/10] bg-white overflow-hidden rounded-sm">
                    {/* --- Simulated LUXE Website --- */}

                    {/* Nav Bar */}
                    <div className="flex items-center justify-between px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 border-b border-neutral-100">
                      <span className="font-serif text-[10px] sm:text-xs lg:text-sm font-bold text-neutral-900 tracking-tight">LUXE</span>
                      <div className="hidden sm:flex items-center gap-3 lg:gap-5">
                        {['Home', 'Products', 'About', 'Contact'].map((item) => (
                          <span key={item} className="text-[7px] sm:text-[8px] lg:text-[10px] text-neutral-400 font-medium hover:text-neutral-900 transition-colors cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-neutral-100 flex items-center justify-center">
                          <Search className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-neutral-500" />
                        </div>
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-neutral-900 flex items-center justify-center relative">
                          <ShoppingBag className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Hero Content inside screen */}
                    <div className="px-3 sm:px-4 lg:px-5 pt-3 sm:pt-4 lg:pt-6 relative">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-primary-50 rounded-full mb-2 sm:mb-3">
                        <span className="w-1 h-1 rounded-full bg-primary-400" />
                        <span className="text-[5px] sm:text-[6px] lg:text-[7px] font-medium text-primary-700 uppercase tracking-wider">New 2026</span>
                      </div>

                      {/* Headline */}
                      <h3 className="font-serif text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold text-neutral-900 leading-[1.1] mb-1 sm:mb-2">
                        Discover
                        <span className="block text-primary-600">Premium</span>
                        Essentials
                      </h3>

                      {/* Subtext */}
                      <p className="text-[5px] sm:text-[7px] lg:text-[9px] text-neutral-400 max-w-[55%] leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                        Curated collection of exceptional products for the modern connoisseur.
                      </p>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-1 px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 lg:py-1.5 bg-neutral-900 rounded-md sm:rounded-lg">
                        <span className="text-[5px] sm:text-[7px] lg:text-[9px] text-white font-medium">Shop Now</span>
                        <ArrowRight className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                      </div>

                      {/* Product Image - pops out of screen */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: -3 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute -right-2 sm:-right-4 lg:-right-8 top-12 sm:top-16 lg:top-20 w-16 h-24 sm:w-24 sm:h-36 lg:w-32 lg:h-44 xl:w-40 xl:h-56 z-10"
                      >
                        <motion.img
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
                          alt="Featured Product"
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-2xl shadow-black/30"
                        />
                        {/* Price tag */}
                        <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded-md shadow-lg">
                          <span className="text-[7px] sm:text-[9px] lg:text-[10px] font-bold text-neutral-900">$279</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Product Grid inside screen */}
                    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-5 right-2 sm:right-3 lg:right-5 flex gap-1 sm:gap-1.5 lg:gap-2">
                      {[
                        { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80', label: 'Audio' },
                        { src: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&q=80', label: 'Style' },
                      ].map((item, i) => (
                        <div key={i} className="relative">
                          <div className="w-8 h-10 sm:w-11 sm:h-14 lg:w-14 lg:h-18 rounded-md sm:rounded-lg overflow-hidden bg-neutral-100 shadow-md">
                            <img
                              src={item.src}
                              alt={item.label}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Status bar dots (bottom of screen) */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${i === 0 ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Keyboard / Bottom Bar ===== */}
              <div className="relative bg-gradient-to-b from-neutral-700 to-neutral-800 h-4 sm:h-5 lg:h-6 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl border border-t-0 border-neutral-600/40">
                {/* Hinge line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-neutral-500/30" />
                {/* Trackpad notch */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[25%] h-[2px] sm:h-[3px] bg-neutral-500/40 rounded-t-full" />
              </div>

              {/* ===== Base (bottom edge) ===== */}
              <div className="relative bg-gradient-to-b from-neutral-600 to-neutral-700 h-1.5 sm:h-2 rounded-b-lg sm:rounded-b-xl mx-6 sm:mx-8 lg:mx-12 shadow-lg shadow-black/40">
                {/* Touchpad indicator */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-px bg-neutral-400/30" />
              </div>
            </div>

            {/* Reflection / Ground glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-16 bg-primary-500/8 blur-3xl rounded-full" />

            {/* Rocky surface hint */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-gradient-to-t from-neutral-800/60 to-transparent blur-sm rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-neutral-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
