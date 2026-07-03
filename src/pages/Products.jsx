import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, Grid3X3, LayoutList } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { SORT_OPTIONS } from '@/constants'

export default function Products() {
  const [searchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [showFilters, setShowFilters] = useState(false)
  const [gridCols, setGridCols] = useState(4)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    switch (sortBy) {
      case 'newest':
        result.reverse()
        break
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-400 block mb-3">
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">
              {selectedCategory !== 'all'
                ? categories.find((c) => c.id === selectedCategory)?.name
                : 'All Products'}
            </h1>
            <p className="mt-4 text-dark-400 max-w-lg">
              Explore our curated selection of premium products designed for the modern lifestyle.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-dark-200 rounded-lg text-sm font-medium hover:bg-dark-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden lg:flex items-center gap-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all' ? 'bg-dark-900 text-white' : 'text-dark-500 hover:bg-dark-50'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id ? 'bg-dark-900 text-white' : 'text-dark-500 hover:bg-dark-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-dark-400 hidden sm:block">
                {filteredProducts.length} products
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 bg-white"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              <div className="hidden lg:flex items-center gap-1 border border-dark-200 rounded-lg p-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1.5 rounded ${gridCols === 3 ? 'bg-dark-100' : ''}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-1.5 rounded ${gridCols === 4 ? 'bg-dark-100' : ''}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-b border-dark-100 bg-white"
          >
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Categories</span>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => { setSelectedCategory('all'); setShowFilters(false) }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all' ? 'bg-dark-900 text-white' : 'hover:bg-dark-50'
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setShowFilters(false) }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.id ? 'bg-dark-900 text-white' : 'hover:bg-dark-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-2 gap-4 lg:gap-8 ${
          gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
