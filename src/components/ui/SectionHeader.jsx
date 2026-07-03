import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 block ${
          light ? 'text-white/60' : 'text-dark-400'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold ${
        light ? 'text-white' : 'text-dark-900'
      }`}>
        {title}
      </h2>
    </motion.div>
  )
}
