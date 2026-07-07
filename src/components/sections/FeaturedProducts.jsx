import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function FeaturedProducts() {
  const featured = products.slice(0, 8)

  return (
    <section className="py-24 bg-dark-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Picks"
          title="Featured Products"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20 btn-slide"
          >
            <div className="btn-slide-inner"><span className="btn-text">View All Products</span><span className="btn-slide-text-alt" aria-hidden="true">View All Products</span></div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
