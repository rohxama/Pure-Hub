import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pure-hub-hero">
      <div className="pure-hub-hero-glow" />

      <div className="pure-hub-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pure-hub-hero-type"
        >
          <h1 className="pure-hub-hero-title">
            <span className="pure-hub-hero-line pure-hub-hero-line-one">
              <span className="pure-hub-serif">Nourish</span>
              <span className="pure-hub-sans"> Your</span>
            </span>
            <span className="pure-hub-hero-line pure-hub-hero-line-two pure-hub-sans">
              Skin, Embrace
            </span>
            <span className="pure-hub-hero-line pure-hub-hero-line-three">
              <span className="pure-hub-sans">the </span>
              <span className="pure-hub-serif">Pure Hub</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="pure-hub-hero-bottom"
        >
          <p className="pure-hub-hero-copy">
            Experience the Pure Hub of Perfect Skin.<br />
            Nourish Your Skin, Embrace the Pure Hub.<br />
            The Essence of Glowing Skin.
            
          </p>
          <Link
            to="/products"
            className="pure-hub-hero-button"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
