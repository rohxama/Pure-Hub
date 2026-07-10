import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownLeft } from 'lucide-react'
import featureSecMainImg from '../../assets/feature-sec-main-img.png'
import feature1Img from '../../assets/feature1-img.jpg'
import feature2Img from '../../assets/feature2-img.jpg'
import feature3Img from '../../assets/feature3-img.jpg'
import feature4Img from '../../assets/feature4-img.jpg'

const featureRows = [
  {
    number: '01',
    title: 'Natural Ingredients',
    description: 'Pure Hub Skincare products are formulated with the finest natural ingredients',
    img: feature1Img,
  },
  {
    number: '02',
    title: 'Innovative Formulations',
    description: 'Advanced science meets nature for visible and lasting skincare results',
    img: feature2Img,
  },
  {
    number: '03',
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable materials and responsible practices for a better tomorrow',
    img: feature3Img,
  },
  {
    number: '04',
    title: 'Dermatologist-Tested',
    description: 'Every product is rigorously tested for safety, quality, and effectiveness',
    img: feature4Img,
  },
]

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

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
            <img src={featureSecMainImg} alt="" />
          </span>{' '}
          Products
        </h2>

        <div className="pure-hub-features-list">
          {featureRows.map((feature) => (
            <div
              className="pure-hub-feature-row"
              key={feature.number}
              onMouseEnter={() => setHoveredFeature(feature.number)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <span className="pure-hub-feature-number">{feature.number}</span>
              <div className="pure-hub-feature-title-group">
                <h3 className="pure-hub-feature-title">{feature.title}</h3>
                <img src={feature.img} className={`pure-hub-feature-image ${hoveredFeature === feature.number ? 'pure-hub-img-visible' : ''}`} alt="" />
              </div>
              <div className="pure-hub-feature-right">
                <p className={`pure-hub-feature-description ${hoveredFeature === feature.number ? 'pure-hub-desc-visible' : ''}`}>{feature.description}</p>
                <span className="pure-hub-feature-arrow" aria-hidden="true">
                  <ArrowDownLeft />
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
