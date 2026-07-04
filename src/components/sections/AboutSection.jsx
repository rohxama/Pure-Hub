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
    <div className={`miracle-image-slot ${className}`} aria-hidden="true">
      <img alt="" />
    </div>
  )
}

export default function AboutSection() {
  return (
    <>
      <section className="miracle-about-panel">
        <div className="miracle-about-content">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="miracle-about-title"
          >
            The Power Of Nature
            <br />
            For <span>Glowing Skin</span>
          </motion.h2>

          <div className="miracle-about-row">
            <p className="miracle-section-label">About us</p>
            <div className="miracle-about-copy">
              <p>
                Welcome to Miracle, where beauty meets innovation. At Miracle, we believe that skincare is not just about
                looking good--it&apos;s about feeling confident in your own skin. Our mission is to provide high-quality,
                effective skincare products that cater to the unique needs of every individual.
              </p>
              <Link to="/about" className="miracle-light-button">Learn More</Link>
            </div>
          </div>
        </div>
        <EmptyImage className="miracle-about-image" />
      </section>

      <section className="miracle-experience">
        <p className="miracle-section-label">The product experience</p>
        <h2 className="miracle-experience-title">Soft, Nourishing And Tender</h2>

        <div className="miracle-experience-grid">
          <EmptyImage className="miracle-experience-image" />
          <article className="miracle-product-showcase">
            <div className="miracle-showcase-top">
              <div>
                <h3>Barrier Restore<br />Cream</h3>
                <p>Soft and nourishing - eucalyptus and honey</p>
                <span>(5,662) Reviews</span>
              </div>
              <div className="miracle-stars" aria-label="4 out of 5 stars">
                {[0, 1, 2, 3].map((item) => (
                  <Star key={item} />
                ))}
                <Star className="miracle-star-empty" />
              </div>
            </div>

            <div className="miracle-showcase-body">
              <button aria-label="Previous product"><ArrowLeft /></button>
              <EmptyImage className="miracle-showcase-image" />
              <button aria-label="Next product"><ArrowRight /></button>
            </div>

            <div className="miracle-showcase-bottom">
              <strong>$200.87</strong>
              <Link to="/products" className="miracle-outline-button">
                Buy Now <ArrowUpRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="miracle-reviews">
        <div className="miracle-reviews-intro">
          <h3>DUA SAJJAD</h3>
          <p>Head dermatologist</p>
          <blockquote>
            “ I loved it when I used it it made my skin glow. And I am a regular customer for 10 years. I have only used
            Miracle skin lotion and I don&apos;t use any other product. This product is the best. ”
          </blockquote>
          <h2>What People Say About<br />Our Products</h2>
        </div>

        <div className="miracle-avatar-cloud">
          <EmptyImage className="miracle-avatar miracle-avatar-one" />
          <EmptyImage className="miracle-avatar miracle-avatar-two" />
          <Link to="/products" className="miracle-view-more">View More</Link>
          <EmptyImage className="miracle-avatar miracle-avatar-three" />
          <EmptyImage className="miracle-avatar miracle-avatar-four" />
          <EmptyImage className="miracle-avatar miracle-avatar-main" />
          <EmptyImage className="miracle-avatar miracle-avatar-five" />
          <EmptyImage className="miracle-avatar miracle-avatar-six" />
          <EmptyImage className="miracle-avatar miracle-avatar-seven" />
          <EmptyImage className="miracle-avatar miracle-avatar-eight" />
        </div>
      </section>

      <section className="miracle-catalogue">
        <div className="miracle-section-heading-row">
          <div>
            <p className="miracle-section-label">Our Catalogue</p>
            <h2>Our Skincare Products</h2>
          </div>
          <div className="miracle-slider-controls" aria-hidden="true">
            <button><ArrowLeft /></button>
            <button className="miracle-slider-active"><ArrowRight /></button>
          </div>
        </div>

        <div className="miracle-catalogue-grid">
          {catalogueProducts.map((product) => (
            <article className="miracle-catalogue-card" key={product}>
              <div className="miracle-card-topline">
                <h3>{product}</h3>
                <Link to="/products" aria-label={`View ${product}`}>
                  $00 <ArrowUpRight />
                </Link>
              </div>
              <EmptyImage className="miracle-catalogue-image" />
            </article>
          ))}
        </div>
      </section>

      <section className="miracle-blogs">
        <p className="miracle-section-label">Our Blogs</p>
        <h2>Stories That Present Us</h2>
        <div className="miracle-blog-grid">
          {blogTiles.map((tile, index) => (
            <article className={`miracle-blog-card ${tile.size === 'large' ? 'miracle-blog-large' : ''} ${tile.tone === 'light' ? 'miracle-blog-light' : ''}`} key={`${tile.title}-${index}`}>
              <EmptyImage className="miracle-blog-image" />
              <h3>{tile.title}</h3>
              {tile.price ? (
                <Link to="/products" className="miracle-blog-price">
                  {tile.price} <ArrowUpRight />
                </Link>
              ) : null}
              <Link to="/blog" className="miracle-blog-arrow" aria-label={`Read ${tile.title}`}>
                <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="miracle-contact-wrap">
        <div className="miracle-contact-card">
          <EmptyImage className="miracle-contact-image" />
          <div className="miracle-contact-content">
            <h2>Get In Touch<br />With Us</h2>
            <p>Know more about how we work and contact us for a newsletter or collaboration</p>
            <Link to="/contact" className="miracle-light-button">Contact Us</Link>
          </div>
          <p className="miracle-contact-address">1 Tampines Drive #01-99 abc<br />space Singapore 123456</p>
          <div className="miracle-contact-socials" aria-label="Social links">
            <a href="#"><MessageCircle /></a>
            <a href="#"><Phone /></a>
            <a href="#"><Camera /></a>
            <a href="#"><Mail /></a>
          </div>
          <p className="miracle-contact-details">323-967-098<br />duasajjad.info@gmail.com</p>
        </div>

        <footer className="miracle-home-footer">
          <div className="miracle-footer-mark" aria-hidden="true" />
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
        <p className="miracle-copyright">All rights reserved © 2023 Miracle</p>
      </section>
    </>
  )
}
