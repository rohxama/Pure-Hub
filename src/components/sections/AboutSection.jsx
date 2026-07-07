import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Mail, MessageCircle, Phone, Star } from 'lucide-react'

const experienceSlides = [
  {
    title: 'Barrier Restore',
    subtitle: 'Cream',
    description: 'Soft and nourishing - eucalyptus and honey',
    reviews: '(5,662) Reviews',
    price: '$200.87',
  },
  {
    title: 'Body Lotion',
    subtitle: 'Daily Milk',
    description: 'Silky hydration - oat extract and almond',
    reviews: '(4,918) Reviews',
    price: '$180.00',
  },
  {
    title: 'Face Wash',
    subtitle: 'Cleanser',
    description: 'Gentle cleanse - aloe and green tea',
    reviews: '(3,420) Reviews',
    price: '$145.00',
  },
]

const catalogueProducts = [
  'Body Lotion',
  'Face Wash',
  'Barrier Restore',
  'Sun Block',
  'Night Cream',
  'Glow Serum',
]

const blogTiles = [
  { title: 'Know More About Glassy Skin', size: 'large', tone: 'dark' },
  { title: 'How To Use Our Products', tone: 'dark' },
  { title: 'Product Name', price: '$00', tone: 'light' },
  { title: 'Product Name', price: '$00', tone: 'light' },
  { title: 'Get The Perfect Glow For The Summer', tone: 'dark' },
]

const footerLinks = ['Home', 'Products', 'About Us', 'Blog', 'Faqs', 'Contact Us']

function EmptyImage({ className = '' }) {
  return (
    <div className={`pure-hub-image-slot ${className}`} aria-hidden="true">
      <img alt="" />
    </div>
  )
}

const reviews = [
  {
    name: 'DUA SAJJAD',
    profession: 'Head dermatologist',
    text: 'I loved it when I used it it made my skin glow. And I am a regular customer for 10 years. I have only used Pure Hub skin lotion and I don\'t use any other product. This product is the best.',
  },
  {
    name: 'SARAH CHEN',
    profession: 'Beauty influencer',
    text: 'Pure Hub transformed my skincare routine completely. My skin has never looked this radiant and healthy. The natural ingredients make all the difference.',
  },
  {
    name: 'JAMES WILSON',
    profession: 'Skincare specialist',
    text: 'After years of trying different products, Pure Hub is the only brand that delivered real results. The quality and formulation are unmatched in the industry.',
  },
  {
    name: 'EMILY RODRIGUEZ',
    profession: 'Esthetician',
    text: 'I recommend Pure Hub to all my clients. The products are gentle yet effective, and the results speak for themselves. Truly a game-changer.',
  },
]

export default function AboutSection() {
  const [experienceIndex, setExperienceIndex] = useState(0)
  const [catalogueIndex, setCatalogueIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)

  const activeExperience = experienceSlides[experienceIndex]
  const visibleCatalogue = Array.from({ length: 4 }, (_, index) => (
    catalogueProducts[(catalogueIndex + index) % catalogueProducts.length]
  ))

  const activeReview = reviews[reviewIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goExperience = (direction) => {
    setExperienceIndex((current) => (
      (current + direction + experienceSlides.length) % experienceSlides.length
    ))
  }

  const goCatalogue = (direction) => {
    setCatalogueIndex((current) => (
      (current + direction + catalogueProducts.length) % catalogueProducts.length
    ))
  }

  return (
    <>
      <section className="pure-hub-about-panel">
        <div className="pure-hub-about-content">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pure-hub-about-title"
          >
            The Power Of Nature
            <br />
            For <span>Glowing Skin</span>
          </motion.h2>

          <div className="pure-hub-about-row">
            <p className="pure-hub-section-label">About us</p>
            <div className="pure-hub-about-copy">
              <p>
                Welcome to Pure Hub, where beauty meets innovation. At Pure Hub, we believe that skincare is not just about
                looking good--it&apos;s about feeling confident in your own skin. Our mission is to provide high-quality,
                effective skincare products that cater to the unique needs of every individual.
              </p>
              <Link to="/about" className="pure-hub-light-button btn-slide"><div className="btn-slide-inner"><span className="btn-text">Learn More</span><span className="btn-slide-text-alt" aria-hidden="true">Learn More</span></div></Link>
            </div>
          </div>
        </div>
        <EmptyImage className="pure-hub-about-image" />
      </section>

      <section className="pure-hub-experience">
        <p className="pure-hub-section-label">The product experience</p>
        <h2 className="pure-hub-experience-title">Soft, Nourishing And Tender</h2>

        <div className="pure-hub-experience-grid">
          <EmptyImage className={`pure-hub-experience-image pure-hub-slide-tone-${experienceIndex}`} />
          <article className="pure-hub-product-showcase">
            <motion.div
              key={activeExperience.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="pure-hub-showcase-top"
            >
              <div>
                <h3>{activeExperience.title}<br />{activeExperience.subtitle}</h3>
                <p>{activeExperience.description}</p>
                <span>{activeExperience.reviews}</span>
              </div>
              <div className="pure-hub-stars" aria-label="4 out of 5 stars">
                {[0, 1, 2, 3].map((item) => (
                  <Star key={item} />
                ))}
                <Star className="pure-hub-star-empty" />
              </div>
            </motion.div>

            <div className="pure-hub-showcase-body">
              <button type="button" onClick={() => goExperience(-1)} aria-label="Previous product"><ArrowLeft /></button>
              <EmptyImage className={`pure-hub-showcase-image pure-hub-slide-tone-${experienceIndex}`} />
              <button type="button" onClick={() => goExperience(1)} aria-label="Next product"><ArrowRight /></button>
            </div>

            <div className="pure-hub-showcase-bottom">
              <strong>{activeExperience.price}</strong>
              <Link to="/products" className="pure-hub-outline-button btn-slide">
                <div className="btn-slide-inner"><span className="btn-text">Buy Now</span><span className="btn-slide-text-alt" aria-hidden="true">Buy Now</span></div> <ArrowUpRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="pure-hub-reviews">
        <div className="pure-hub-reviews-intro">
          <div className="pure-hub-review-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <h3>{activeReview.name}</h3>
                <p>{activeReview.profession}</p>
                <blockquote>{activeReview.text}</blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
          <h2>What People Say About<br />Our Products</h2>
        </div>

        <div className="pure-hub-avatar-cloud">
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-one" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-two" />
          <Link to="/products" className="pure-hub-view-more btn-slide"><div className="btn-slide-inner"><span className="btn-text">View More</span><span className="btn-slide-text-alt" aria-hidden="true">View More</span></div></Link>
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-three" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-four" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-main" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-five" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-six" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-seven" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-eight" />
        </div>
      </section>

      <section className="pure-hub-catalogue">
        <div className="pure-hub-section-heading-row">
          <div>
            <p className="pure-hub-section-label">Our Catalogue</p>
            <h2>Our Skincare Products</h2>
          </div>
          <div className="pure-hub-slider-controls">
            <button type="button" onClick={() => goCatalogue(-1)} aria-label="Previous catalogue products"><ArrowLeft /></button>
            <button type="button" onClick={() => goCatalogue(1)} className="pure-hub-slider-active" aria-label="Next catalogue products"><ArrowRight /></button>
          </div>
        </div>

        <div className="pure-hub-catalogue-grid">
          {visibleCatalogue.map((product, index) => (
            <motion.article
              className="pure-hub-catalogue-card"
              key={`${product}-${catalogueIndex}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
            >
              <div className="pure-hub-card-topline">
                <h3>{product}</h3>
                <Link to="/products" aria-label={`View ${product}`}>
                  $00 <ArrowUpRight />
                </Link>
              </div>
              <EmptyImage className="pure-hub-catalogue-image" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pure-hub-blogs">
        <p className="pure-hub-section-label">Our Blogs</p>
        <h2>Stories That Present Us</h2>
        <div className="pure-hub-blog-grid">
          {blogTiles.map((tile, index) => (
            <article className={`pure-hub-blog-card ${tile.size === 'large' ? 'pure-hub-blog-large' : ''} ${tile.tone === 'light' ? 'pure-hub-blog-light' : ''}`} key={`${tile.title}-${index}`}>
              <EmptyImage className="pure-hub-blog-image" />
              <h3>{tile.title}</h3>
              {tile.price ? (
                <Link to="/products" className="pure-hub-blog-price">
                  {tile.price} <ArrowUpRight />
                </Link>
              ) : null}
              <Link to="/blog" className="pure-hub-blog-arrow" aria-label={`Read ${tile.title}`}>
                <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pure-hub-contact-wrap">
        <div className="pure-hub-contact-card">
          <EmptyImage className="pure-hub-contact-image" />
          <div className="pure-hub-contact-content">
            <h2>Get In Touch<br />With Us</h2>
            <p>Know more about how we work and contact us for a newsletter or collaboration</p>
            <Link to="/contact" className="pure-hub-light-button btn-slide"><div className="btn-slide-inner"><span className="btn-text">Contact Us</span><span className="btn-slide-text-alt" aria-hidden="true">Contact Us</span></div></Link>
          </div>
          <p className="pure-hub-contact-address">1 Tampines Drive #01-99 abc<br />space Singapore 123456</p>
          <div className="pure-hub-contact-socials" aria-label="Social links">
            <a href="#"><MessageCircle /></a>
            <a href="#"><Phone /></a>
            <a href="#"><Camera /></a>
            <a href="#"><Mail /></a>
          </div>
          <p className="pure-hub-contact-details">323-967-098<br />duasajjad.info@gmail.com</p>
        </div>

        <footer className="pure-hub-home-footer">
          <div className="pure-hub-footer-mark" aria-hidden="true" />
          <nav aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link} to={link === 'Home' ? '/' : `/${link.toLowerCase().replaceAll(' ', '-')}`}>
                {link}
              </Link>
            ))}
          </nav>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Services</Link>
          </div>
        </footer>
        <p className="pure-hub-copyright">All rights reserved © 2023 Pure Hub</p>
      </section>
    </>
  )
}
