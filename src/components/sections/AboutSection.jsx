import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Mail, MessageCircle, Phone, Star } from 'lucide-react'
import abtSecImg from '../../assets/abt-img.png'
import productExp1Img from '../../assets/product-exp1.png'
import productExp2Img from '../../assets/product-exp2.png'
import productExp3Img from '../../assets/product-exp3.png'
import maskExpImg from '../../assets/mask-exp.png'
import hairOilImg from '../../assets/hair-oil.png'
import perfumeImg from '../../assets/perfume.png'
import product4Img from '../../assets/product4 (2).png'
import product5Img from '../../assets/product5.png'
import product6Img from '../../assets/product6.png'
import product7Img from '../../assets/product7.png'
import product9Img from '../../assets/product9.png'
import product10Img from '../../assets/product10.png'
import product11Img from '../../assets/product11.png'
import product12Img from '../../assets/product12.png'
import blogImg1 from '../../assets/blog-img1.jpg'
import blogImg2 from '../../assets/blog2.jpg'
import featureSecMainImg from '../../assets/feature-sec-main-img.png'
import footerImg from '../../assets/footer-img.jpg'
import client1Img from '../../assets/client1.jpg'
import client2Img from '../../assets/client2.jpg'
import client3Img from '../../assets/client3.jpg'
import client4Img from '../../assets/client4.jpg'
import client5Img from '../../assets/client5.jpg'
import client6Img from '../../assets/client6.jpg'
import client7Img from '../../assets/client7.jpg'
import client8Img from '../../assets/client8.jpg'
import client9Img from '../../assets/client9.jpg'

const experienceSlides = [
  {
    title: 'Barrier Restore',
    subtitle: 'Cream',
    description: 'Soft and nourishing - eucalyptus and honey',
    reviews: '(5,662) Reviews',
    price: '$200.87',
    slug: 'barrier-restore',
    leftImg: maskExpImg,
    rightImg: productExp1Img,
  },
  {
    title: 'Body Lotion',
    subtitle: 'Daily Milk',
    description: 'Silky hydration - oat extract and almond',
    reviews: '(4,918) Reviews',
    price: '$180.00',
    slug: 'body-lotion',
    leftImg: hairOilImg,
    rightImg: productExp2Img,
  },
  {
    title: 'Face Wash',
    subtitle: 'Cleanser',
    description: 'Gentle cleanse - aloe and green tea',
    reviews: '(3,420) Reviews',
    price: '$145.00',
    slug: 'face-wash',
    leftImg: perfumeImg,
    rightImg: productExp3Img,
  },
]

const catalogueProducts = [
  'Body Lotion',
  'Face Wash',
  'Barrier Restore',
  'Sun Block',
  'Night Cream',
  'Glow Serum',
  'Hair Oil',
  'Perfume',
  'Lip Balm',
  'Eye Cream',
  'Face Mask',
]

const blogTiles = [
  { title: 'Know More About Glassy Skin', size: 'large', tone: 'dark', img: blogImg1 },
  { title: 'How To Use Our Products', tone: 'dark', img: featureSecMainImg, objectPosition: 'top' },
  { title: 'Product Name', price: '$00', tone: 'light', img: product6Img },
  { title: 'Product Name', price: '$00', tone: 'light', img: product7Img },
  { title: 'Get The Perfect Glow For The Summer', tone: 'dark', img: blogImg2 },
]

const footerLinks = ['Home', 'Products', 'About', 'Blog', 'Contact']

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
  const [catalogueDir, setCatalogueDir] = useState(1)
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
    setCatalogueDir(direction)
    setCatalogueIndex((current) => {
      const next = current + direction * 4
      const len = catalogueProducts.length
      return ((next % len) + len) % len
    })
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
        <img src={abtSecImg} alt="" className="pure-hub-about-image" />
      </section>

      <section className="pure-hub-experience">
        <p className="pure-hub-section-label">The product experience</p>
        <h2 className="pure-hub-experience-title">Soft, Nourishing And Tender</h2>

        <div className="pure-hub-experience-grid">
          <AnimatePresence mode="wait">
            <motion.img
              key={`left-${experienceIndex}`}
              src={activeExperience.leftImg}
              alt=""
              className={`pure-hub-experience-image pure-hub-slide-tone-${experienceIndex} pure-hub-slide-left-${experienceIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={`right-${experienceIndex}`}
                  src={activeExperience.rightImg}
                  alt=""
                  className={`pure-hub-showcase-image pure-hub-slide-tone-${experienceIndex} pure-hub-slide-right-${experienceIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <button type="button" onClick={() => goExperience(1)} aria-label="Next product"><ArrowRight /></button>
            </div>

            <div className="pure-hub-showcase-bottom">
              <strong>{activeExperience.price}</strong>
              <Link to={`/product/${activeExperience.slug}`} className="pure-hub-outline-button btn-slide">
                <div className="btn-slide-inner"><span className="btn-text">Buy Now <ArrowUpRight className="pure-hub-buy-icon" /></span><span className="btn-slide-text-alt" aria-hidden="true">Buy Now <ArrowUpRight className="pure-hub-buy-icon" /></span></div>
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
          <img src={client1Img} alt="" className="pure-hub-avatar pure-hub-avatar-one" />
          <img src={client2Img} alt="" className="pure-hub-avatar pure-hub-avatar-two" />
          <Link to="/products" className="pure-hub-view-more btn-slide"><div className="btn-slide-inner"><span className="btn-text">View More</span><span className="btn-slide-text-alt" aria-hidden="true">View More</span></div></Link>
          <img src={client3Img} alt="" className="pure-hub-avatar pure-hub-avatar-three" />
          <img src={client4Img} alt="" className="pure-hub-avatar pure-hub-avatar-four" />
          <img src={client5Img} alt="" className="pure-hub-avatar pure-hub-avatar-main" />
          <img src={client6Img} alt="" className="pure-hub-avatar pure-hub-avatar-five" />
          <img src={client7Img} alt="" className="pure-hub-avatar pure-hub-avatar-six" />
          <img src={client8Img} alt="" className="pure-hub-avatar pure-hub-avatar-seven" />
          <img src={client9Img} alt="" className="pure-hub-avatar pure-hub-avatar-eight" />
        </div>
      </section>

      <section className="pure-hub-catalogue">
        <div className="pure-hub-section-heading-row">
          <div>
            <p className="pure-hub-section-label">Our Catalogue</p>
            <h2>Our Skincare Products</h2>
          </div>
          <div className="pure-hub-slider-controls">
            <button type="button" onClick={() => goCatalogue(-1)} className={catalogueDir === -1 ? 'pure-hub-slider-active' : ''} aria-label="Previous catalogue products"><ArrowLeft /></button>
            <button type="button" onClick={() => goCatalogue(1)} className={catalogueDir === 1 ? 'pure-hub-slider-active' : ''} aria-label="Next catalogue products"><ArrowRight /></button>
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
                <h3><Link to={`/product/${product.toLowerCase().replaceAll(' ', '-')}`}>{product}</Link></h3>
                <Link to={`/product/${product.toLowerCase().replaceAll(' ', '-')}`} className="btn-slide" aria-label={`View ${product}`}>
                  <div className="btn-slide-inner"><span className="btn-text">$00 <ArrowUpRight /></span><span className="btn-slide-text-alt" aria-hidden="true">$00 <ArrowUpRight /></span></div>
                </Link>
              </div>
              <img src={[productExp1Img, productExp2Img, productExp3Img, product4Img, product5Img, product6Img, product7Img, product9Img, product10Img, product11Img, product12Img][(catalogueIndex + index) % catalogueProducts.length]} alt="" className="pure-hub-catalogue-image" />
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
              <Link to="/blog" className="pure-hub-blog-image-link" aria-label={`Read ${tile.title}`}>
                <img src={tile.img} alt="" className="pure-hub-blog-image" style={{ objectPosition: tile.objectPosition || 'center', objectFit: tile.objectFit || 'cover' }} />
              </Link>
              <h3>{tile.title}</h3>
              {tile.price ? (
                <Link to="/products" className="pure-hub-blog-price btn-slide">
                  <div className="btn-slide-inner"><span className="btn-text">{tile.price} <ArrowUpRight /></span><span className="btn-slide-text-alt" aria-hidden="true">{tile.price} <ArrowUpRight /></span></div>
                </Link>
              ) : null}
              <Link to="/blog" className="pure-hub-blog-arrow btn-slide" aria-label={`Read ${tile.title}`}>
                <div className="btn-slide-inner"><span className="btn-text"><ArrowUpRight /></span><span className="btn-slide-text-alt" aria-hidden="true"><ArrowUpRight /></span></div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pure-hub-contact-wrap">
        <div
          className="pure-hub-contact-card"
          style={{
            backgroundImage: `url(${footerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="pure-hub-contact-content">
            <h2>Get In Touch With Us</h2>
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
