import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="bg-black text-white">
      {/* Top Content */}
      <div className="px-[clamp(8px,1.5vw,24px)] py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-normal leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,7vw,7rem)]"
        >
          <span className="block">The Power Of Nature</span>
          <span className="block">
            For <em>Glowing Skin</em>
          </span>
        </motion.h2>

        {/* Middle Row: About us label + Paragraph */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-neutral-400 tracking-wide uppercase shrink-0"
          >
            About us
          </motion.p>

          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] text-neutral-300 leading-relaxed"
            >
              Welcome to Miracle, where beauty meets innovation. At Miracle,
              we believe that skincare is not just about looking good—it's about
              feeling confident in your own skin. Our mission is to provide high-
              quality, effective skincare products that cater to the unique needs
              of every individual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-white rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <img
          src=""
          alt="Skincare product in use"
          className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover bg-neutral-800"
        />
      </motion.div>
    </section>
  )
}
