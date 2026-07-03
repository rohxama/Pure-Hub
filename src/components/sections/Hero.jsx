import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="miracle-hero">
      <div className="miracle-hero-glow" />

      <div className="miracle-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="miracle-hero-type"
        >
          <h1 className="miracle-hero-title">
            <span className="miracle-hero-line miracle-hero-line-one">
              <span className="miracle-serif">Nourish</span>
              <span className="miracle-sans"> Your</span>
            </span>
            <span className="miracle-hero-line miracle-hero-line-two miracle-sans">
              Skin, Embrace
            </span>
            <span className="miracle-hero-line miracle-hero-line-three">
              <span className="miracle-sans">the </span>
              <span className="miracle-serif">Miracle</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="miracle-hero-bottom"
        >
          <p className="miracle-hero-copy">
            Experience the Miracle of Perfect Skin.<br />
            Nourish Your Skin, Embrace the Miracle.<br />
            The Essence of Glowing Skin.
          </p>
          <Link
            to="/products"
            className="miracle-hero-button"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
