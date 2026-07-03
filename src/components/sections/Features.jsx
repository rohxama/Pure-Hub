import { motion } from 'framer-motion'
import { ArrowDownLeft } from 'lucide-react'

const featureRows = [
  {
    number: '01',
    title: 'Natural Ingredients',
    description: 'Miracle Skincare products are formulated with the finest natural ingredients',
  },
  {
    number: '02',
    title: 'Innovative Formulations',
  },
  {
    number: '03',
    title: 'Eco-Friendly Packaging',
  },
  {
    number: '04',
    title: 'Dermatologist-Tested',
  },
]

export default function Features() {
  return (
    <section className="miracle-features">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="miracle-features-inner"
      >
        <p className="miracle-features-eyebrow">Our Features</p>

        <h2 className="miracle-features-title">
          We Provide <span className="miracle-features-serif">High-Quality,</span>
          <br />
          Skincare{' '}
          <span className="miracle-features-image" aria-hidden="true">
            <img alt="" />
          </span>{' '}
          Products
        </h2>

        <div className="miracle-features-list">
          {featureRows.map((feature) => (
            <div className="miracle-feature-row" key={feature.number}>
              <span className="miracle-feature-number">{feature.number}</span>
              <h3 className="miracle-feature-title">{feature.title}</h3>
              {feature.description ? (
                <p className="miracle-feature-description">{feature.description}</p>
              ) : (
                <span className="miracle-feature-arrow" aria-hidden="true">
                  <ArrowDownLeft />
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
