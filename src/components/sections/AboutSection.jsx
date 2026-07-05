import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Mail, MessageCircle, Phone, Star } from 'lucide-react'

const catalogueProducts = [
  'Body Lotion',
  'Face Wash',
  'Barrier Restore',
  'Sun Block',
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

export default function AboutSection() {
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
              <Link to="/about" className="pure-hub-light-button">Learn More</Link>
            </div>
          </div>
        </div>
        <EmptyImage className="pure-hub-about-image" />
      </section>

      <section className="pure-hub-experience">
        <p className="pure-hub-section-label">The product experience</p>
        <h2 className="pure-hub-experience-title">Soft, Nourishing And Tender</h2>

        <div className="pure-hub-experience-grid">
          <EmptyImage className="pure-hub-experience-image" />
          <article className="pure-hub-product-showcase">
            <div className="pure-hub-showcase-top">
              <div>
                <h3>Barrier Restore<br />Cream</h3>
                <p>Soft and nourishing - eucalyptus and honey</p>
                <span>(5,662) Reviews</span>
              </div>
              <div className="pure-hub-stars" aria-label="4 out of 5 stars">
                {[0, 1, 2, 3].map((item) => (
                  <Star key={item} />
                ))}
                <Star className="pure-hub-star-empty" />
              </div>
            </div>

            <div className="pure-hub-showcase-body">
              <button aria-label="Previous product"><ArrowLeft /></button>
              <EmptyImage className="pure-hub-showcase-image" />
              <button aria-label="Next product"><ArrowRight /></button>
            </div>

            <div className="pure-hub-showcase-bottom">
              <strong>$200.87</strong>
              <Link to="/products" className="pure-hub-outline-button">
                Buy Now <ArrowUpRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="pure-hub-reviews">
        <div className="pure-hub-reviews-intro">
          <h3>DUA SAJJAD</h3>
          <p>Head dermatologist</p>
          <blockquote>
            “ I loved it when I used it it made my skin glow. And I am a regular customer for 10 years. I have only used
            Pure Hub skin lotion and I don&apos;t use any other product. This product is the best. ”
          </blockquote>
          <h2>What People Say About<br />Our Products</h2>
        </div>

        <div className="pure-hub-avatar-cloud">
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-one" />
          <EmptyImage className="pure-hub-avatar pure-hub-avatar-two" />
          <Link to="/products" className="pure-hub-view-more">View More</Link>
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
          <div className="pure-hub-slider-controls" aria-hidden="true">
            <button><ArrowLeft /></button>
            <button className="pure-hub-slider-active"><ArrowRight /></button>
          </div>
        </div>

        <div className="pure-hub-catalogue-grid">
          {catalogueProducts.map((product) => (
            <article className="pure-hub-catalogue-card" key={product}>
              <div className="pure-hub-card-topline">
                <h3>{product}</h3>
                <Link to="/products" aria-label={`View ${product}`}>
                  $00 <ArrowUpRight />
                </Link>
              </div>
              <EmptyImage className="pure-hub-catalogue-image" />
            </article>
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
            <Link to="/contact" className="pure-hub-light-button">Contact Us</Link>
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
