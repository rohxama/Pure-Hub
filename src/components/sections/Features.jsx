import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, RotateCcw, Headphones } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Shipping', description: 'Free shipping on all orders over $99' },
  { icon: Shield, title: 'Secure Payment', description: '100% secure payment processing' },
  { icon: RotateCcw, title: 'Easy Returns', description: '30-day hassle-free return policy' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer support' },
]

export default function Features() {
  return (
    <section className="py-24 bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Premium Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-dark-900 rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-bold font-serif">100%</div>
              <div className="text-sm text-dark-500">Satisfaction Guarantee</div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                The Premium Shopping Experience
              </h2>
              <p className="mt-6 text-dark-400 leading-relaxed max-w-lg">
                We believe in delivering nothing but the best. From curated products to exceptional service, 
                every detail is designed with you in mind.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-dark-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-900 rounded-xl text-sm font-semibold hover:bg-dark-100 transition-all duration-300"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
