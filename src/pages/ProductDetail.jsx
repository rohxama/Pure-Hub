import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Heart, Minus, Plus, Share2, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import productExp1Img from '@/assets/product-exp1.avif'
import productExp2Img from '@/assets/product-exp2.avif'
import productExp3Img from '@/assets/product-exp3.avif'
import product4Img from '@/assets/product4-_2_.avif'
import product5Img from '@/assets/product5.avif'
import product6Img from '@/assets/product6.avif'
import product7Img from '@/assets/product7.avif'
import product9Img from '@/assets/product9.avif'
import product10Img from '@/assets/product10.avif'
import product11Img from '@/assets/product11.avif'
import product12Img from '@/assets/product12.avif'
import featureSecMainImg from '@/assets/feature-sec-main-img.avif'
import feature1Img from '@/assets/feature1-img.avif'
import feature2Img from '@/assets/feature2-img.avif'
import feature4Img from '@/assets/feature4-img.jpg'
import hairOilImg from '@/assets/hair-oil.avif'
import perfumeImg from '@/assets/perfume.avif'
import client1Img from '@/assets/client1.avif'
import client2Img from '@/assets/client2.avif'
import client3Img from '@/assets/client3.avif'
import client4Img from '@/assets/client4.avif'
import client5Img from '@/assets/client5.avif'
import client6Img from '@/assets/client6.avif'
import client7Img from '@/assets/client7.avif'
import client8Img from '@/assets/client8.avif'
import client9Img from '@/assets/client9.avif'
import { PageFooter, Newsletter } from '@/components/sections/PageCommon'

const productImageMap = {
  'matcha-mask': productExp1Img,
  'inner-peace-hair-mist': productExp2Img,
  'cashmere-perfume': productExp3Img,
  'anti-ageing-serum': product4Img,
  'odemme-mist': product5Img,
  'mastana-beauty-cream': product6Img,
  'blue-orchid-perfume': product7Img,
  'hair-oil-serum': product9Img,
  'spark-oil': product10Img,
  'matcha-face-wash': product11Img,
  'anti-ageing-cream': product12Img,
}

const secondaryImages = {
  'matcha-mask': [feature1Img, featureSecMainImg],
  'inner-peace-hair-mist': [hairOilImg, featureSecMainImg],
  'cashmere-perfume': [perfumeImg, featureSecMainImg],
  'anti-ageing-serum': [feature2Img, featureSecMainImg],
  'odemme-mist': [feature1Img, featureSecMainImg],
  'mastana-beauty-cream': [feature4Img, featureSecMainImg],
  'blue-orchid-perfume': [perfumeImg, featureSecMainImg],
  'hair-oil-serum': [hairOilImg, featureSecMainImg],
  'spark-oil': [feature2Img, featureSecMainImg],
  'matcha-face-wash': [feature1Img, featureSecMainImg],
  'anti-ageing-cream': [feature4Img, featureSecMainImg],
}

function EmptyProductImage({ className = '' }) {
  return (
    <div className={`pure-hub-product-image-slot ${className}`} aria-hidden="true">
      <img alt="" />
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const { addToCart } = useCart()
  const product = products.find((p) => p.slug === slug) || products[0]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [purchaseType, setPurchaseType] = useState('one-time')
  const [activeTab, setActiveTab] = useState('how-to-use')
  const [relatedStart, setRelatedStart] = useState(0)
  const [selectedSize, setSelectedSize] = useState('30 ml')

  const galleryCount = Math.max(product.images?.length || 0, 5)
  const relatedProducts = products.filter((p) => p.id !== product.id)
  const visibleRelated = Array.from({ length: 4 }, (_, index) => (
    relatedProducts[(relatedStart + index) % relatedProducts.length]
  ))

  const tabs = [
    { id: 'how-to-use', label: 'How to use' },
    { id: 'benefit', label: 'Benefit' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'return-policy', label: 'Return Policy' },
  ]

  const detailPanelTabs = [
    { id: 'benefit', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'how-to-use', label: 'How To Use' },
    { id: 'return-policy', label: 'Reviews' },
  ]

  const tabCopy = {
    'how-to-use': [
      `We always recommend that you speak to your skincare specialist before you begin any new routine. Everyone is different, and your daily care should support your unique skin needs.`,
      'Apply a small amount in the morning and evening after cleansing. Use consistently for best results, and avoid applying to irritated skin.',
      'Pair with a balanced routine and sunscreen during the day. This product is designed to support healthy-looking skin as part of a complete ritual.',
    ],
    benefit: [
      product.description,
    ],
    ingredients: [
      `Formulated with carefully selected ingredients: ${product.features?.join(', ') || 'natural botanical extracts and active compounds.'}`,
    ],
    'return-policy': [
      'Products can be returned within 30 days when eligible. Keep the original packaging and contact support before sending anything back.',
    ],
  }

  const moveRelated = (direction) => {
    setRelatedStart((current) => (
      (current + direction + relatedProducts.length) % relatedProducts.length
    ))
  }

  const addCurrentToCart = () => {
    Array.from({ length: quantity }).forEach(() => addToCart(product))
  }

  return (
    <>
    <section className="pure-hub-detail-page">
      <div className="pure-hub-detail-shell">
        <nav className="pure-hub-detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight />
          <Link to="/products">Shop</Link>
          <ChevronRight />
          <span>{product.name}</span>
        </nav>

        <div className="pure-hub-detail-grid">
          <div className="pure-hub-detail-gallery">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28 }}
            >
              <img
                src={selectedImage === 0 ? productImageMap[product.slug] : (secondaryImages[product.slug]?.[selectedImage - 1] || productImageMap[product.slug])}
                alt={product.name}
                className="pure-hub-detail-main-image pure-hub-main-real-image"
              />
            </motion.div>

            <div className="pure-hub-detail-thumbs">
              {[productImageMap[product.slug], ...(secondaryImages[product.slug] || [])].slice(0, galleryCount).map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={index === selectedImage ? 'pure-hub-thumb-active' : ''}
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={img} alt="" className="pure-hub-thumb-image" />
                </button>
              ))}
            </div>
          </div>

          <div className="pure-hub-detail-info">
            <div className="pure-hub-detail-heading">
              <div>
                <h1>{product.name}</h1>
                <div className="pure-hub-detail-meta">
                  <span className="capitalize">{product.category}</span>
                  {product.sizes?.length ? <span>Size: {product.sizes[0]}</span> : <span>Size: 50 ml</span>}
                  <span className="pure-hub-detail-rating">
                    {[1, 2, 3, 4].map((star) => <Star key={star} />)}
                    <Star className="pure-hub-star-empty" />
                    {product.rating}
                  </span>
                </div>
              </div>
              {product.badge ? <span className="pure-hub-detail-badge">{product.badge}</span> : null}
            </div>

            <div className="pure-hub-detail-price">
              <strong>${Math.round(product.price)}</strong>
              <span>Or 4 easy payments of ${(product.price / 4).toFixed(2)} with</span>
            </div>

            <p className="pure-hub-purchase-note">
              {product.reviews?.toLocaleString()} people have purchased this product
            </p>

            <div className="pure-hub-method">
              <p>Size / Volume</p>
              <div className="ph-size-row">
                {['30 ml', '60 ml', '80 ml', '100 ml'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? 'ph-active' : ''}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p>Amount & Method</p>
              <div className="pure-hub-quantity-row">
                <div className="pure-hub-quantity">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                    <Minus />
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                    <Plus />
                  </button>
                </div>
                <span>Current stock: {product.inStock ? 27 : 0}</span>
              </div>

              <label className="pure-hub-purchase-option">
                <span>
                  <input
                    type="radio"
                    name="purchase"
                    checked={purchaseType === 'one-time'}
                    onChange={() => setPurchaseType('one-time')}
                  />
                  One time purchase
                </span>
                <strong>${Math.round(product.price)}</strong>
              </label>

              <label className="pure-hub-purchase-option">
                <span>
                  <input
                    type="radio"
                    name="purchase"
                    checked={purchaseType === 'subscribe'}
                    onChange={() => setPurchaseType('subscribe')}
                  />
                  Subscribe 30 days
                </span>
                <strong>${Math.round(product.price * 0.8)}</strong>
              </label>
            </div>

            <button type="button" onClick={addCurrentToCart} className="pure-hub-add-cart btn-slide"><div className="btn-slide-inner"><span className="btn-text">Add to cart</span><span className="btn-slide-text-alt" aria-hidden="true">Add to cart</span></div></button>
            <button type="button" className="pure-hub-favorite btn-slide">
              <div className="btn-slide-inner"><span className="btn-text">Favorite</span><span className="btn-slide-text-alt" aria-hidden="true">Favorite</span></div> <Heart />
            </button>

            <div className="ph-product-meta">
              <p><strong>SKU:</strong> PHS-{product.id.toString().padStart(4, '0')}</p>
              <p><strong>Categories:</strong> Skin Care, Serums</p>
              <p><strong>Tags:</strong> Hydrating, Brightening, Natural</p>
              <p><strong>Share:</strong> <a href="#"><Share2 /></a><a href="#"><Heart /></a></p>
            </div>

            <div className="pure-hub-detail-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? 'pure-hub-tab-active btn-slide' : 'btn-slide'}
                >
                  <div className="btn-slide-inner"><span className="btn-text">{tab.label}</span><span className="btn-slide-text-alt" aria-hidden="true">{tab.label}</span></div>
                </button>
              ))}
            </div>

            <div className="pure-hub-tab-copy">
              {tabCopy[activeTab].map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="ph-review-section">
        <div className="ph-review-summary">
          <div>
            <h2>Customer Reviews</h2>
            <strong>{product.rating}</strong>
            <p>out of 5</p>
            <div>{[1, 2, 3, 4, 5].map((star) => <Star key={star} />)}</div>
            <span>({product.reviews} Reviews)</span>
          </div>
          <div className="ph-review-bars">
            {[172, 52, 15, 4, 2].map((count, index) => (
              <p key={count}>
                {5 - index} Star <span><i style={{ width: `${Math.max(6, count / 1.8)}%` }} /></span> {count}
              </p>
            ))}
          </div>
          <button type="button" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Write A Review</span><span className="btn-slide-text-alt" aria-hidden="true">Write A Review</span></div></button>
        </div>

        {[
          ['Kristin Watson', 'Absolutely love this product!', 'This serum has made my skin feel so smooth and hydrated.', client1Img],
          ['Jenny Wilson', 'Perfect for my skincare routine!', 'Lightweight, non-greasy, and works great under makeup.', client3Img],
          ['Darlene Robertson', 'Great results', 'My skin looks brighter and healthier after a few weeks.', client5Img],
        ].map(([name, title, copy, avatarImg], index) => (
          <article className="ph-review-row" key={name}>
            <img src={avatarImg} alt={name} className="ph-review-avatar" />
            <div>
              <h3>{name}</h3>
              <p>Verified Buyer</p>
            </div>
            <div>
              <span className="ph-review-stars">{Array.from({ length: index === 2 ? 4 : 5 }).map((_, i) => <Star key={i} />)} {(index === 2 ? '4.0' : '5.0')}</span>
              <h4>{title}</h4>
              <p>{copy}</p>
            </div>
            <time>{index + 1} month ago</time>
          </article>
        ))}
      </section>

      <section className="pure-hub-related">
        <div className="pure-hub-related-heading">
          <h2>You might also like</h2>
          <div>
            <button type="button" onClick={() => moveRelated(-1)} aria-label="Previous related products"><ArrowLeft /></button>
            <button type="button" onClick={() => moveRelated(1)} aria-label="Next related products"><ArrowRight /></button>
          </div>
        </div>

        <div className="pure-hub-related-grid">
          {visibleRelated.map((item, index) => (
            <motion.article
              key={`${item.id}-${relatedStart}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
              className="pure-hub-related-card"
            >
              <Link to={`/product/${item.slug}`}>
                <img src={productImageMap[item.slug] || productImageMap['matcha-mask']} alt={item.name} className="pure-hub-related-image pure-hub-related-real-img" />
                <div className="pure-hub-related-card-body">
                  <h3>{item.name}</h3>
                  <p>
                    {item.originalPrice ? <span>${Math.round(item.originalPrice)}</span> : null}
                    <strong>${Math.round(item.price)}</strong>
                  </p>
                  <div className="pure-hub-related-stars">
                    {[1, 2, 3, 4].map((star) => <Star key={star} />)}
                    <Star className="pure-hub-star-empty" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </section>

      <div className="pure-hub-more-products">
        <Link to="/products" className="pure-hub-more-btn">
          More products <ArrowRight />
        </Link>
      </div>
    </section>

    <Newsletter />
    <PageFooter active="Products" />
    </>
  )
}
