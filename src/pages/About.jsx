import { motion } from 'framer-motion'
import { Heart, Target, Eye, Leaf, Users, Sparkles } from 'lucide-react'
import { ABOUT_VALUES, ABOUT_STATS } from '@/constants'

const iconMap = { Heart, Leaf, Users, Sparkles, Target, Eye }

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" alt="Store" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4 block">Our Story</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">Redefining the Shopping Experience</h1>
            <p className="mt-6 text-dark-400 text-lg leading-relaxed">We started with a simple belief: everyone deserves access to exceptional products without compromise.</p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4 block">Who We Are</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Born from a Love of Design</h2>
              <div className="space-y-4 text-dark-500 leading-relaxed">
                <p>LUXE was founded in 2019 with a clear mission: to create a curated marketplace where design-conscious consumers could discover products that truly stand out.</p>
                <p>We partner directly with independent makers, established brands, and emerging designers who share our commitment to quality, craftsmanship, and sustainability.</p>
                <p>Every product in our collection tells a story. We believe that the things we surround ourselves with should bring joy, serve a purpose, and stand the test of time.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Our team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold font-serif text-dark-900">7+</div>
                <div className="text-sm text-dark-500">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Our Mission', text: "To democratize access to premium products by connecting discerning consumers with the world's most talented makers and brands." },
              { icon: Eye, title: 'Our Vision', text: 'A world where quality, design, and sustainability are not luxuries but expectations. Where every purchase is a vote for a better future.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 md:p-12 rounded-3xl">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-dark-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-400 mb-3 block">What Drives Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_VALUES.map((value, i) => {
              const Icon = iconMap[value.icon]
              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-2xl border border-dark-100 hover:border-dark-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-dark-500 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT_STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</div>
                <div className="text-sm text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
