import { motion } from 'framer-motion'
import { ArrowDownLeft } from 'lucide-react'

const featureRows = [
  {
    number: '01',
    title: 'Natural Ingredients',
    description: 'Pure Hub Skincare products are formulated with the finest natural ingredients',
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
    <section className="pure-hub-features">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pure-hub-features-inner"
      >
        <p className="pure-hub-features-eyebrow">Our Features</p>

        <h2 className="pure-hub-features-title">
          We Provide <span className="pure-hub-features-serif">High-Quality,</span>
          <br />
          Skincare{' '}
          <span className="pure-hub-features-image" aria-hidden="true">
            <img alt="" />
          </span>{' '}
          Products
        </h2>

        <div className="pure-hub-features-list">
          {featureRows.map((feature) => (
            <div className="pure-hub-feature-row" key={feature.number}>
              <span className="pure-hub-feature-number">{feature.number}</span>
              <h3 className="pure-hub-feature-title">{feature.title}</h3>
              {feature.description ? (
                <p className="pure-hub-feature-description">{feature.description}</p>
              ) : (
                <span className="pure-hub-feature-arrow" aria-hidden="true">
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
