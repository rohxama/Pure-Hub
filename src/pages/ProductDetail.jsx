import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronRight, Heart, Minus, Plus, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

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

  const tabCopy = {
    'how-to-use': [
      'We always recommend that you speak to your skincare specialist before you begin any new routine. Everyone is different, and your daily care should support your unique skin needs.',
      'Apply a small amount in the morning and evening after cleansing. Use consistently for best results, and avoid applying to irritated skin.',
      'Pair with a balanced routine and sunscreen during the day. This product is designed to support healthy-looking skin as part of a complete ritual.',
    ],
    benefit: [
      'Helps soften, nourish, and comfort the skin while supporting a smoother daily routine. The lightweight feel makes it easy to layer with other skincare products.',
    ],
    ingredients: [
      'Built around gentle skincare essentials and botanical-inspired actives. Add your full ingredient list here when the product content is finalized.',
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
              <EmptyProductImage className="pure-hub-detail-main-image" />
            </motion.div>

            <div className="pure-hub-detail-thumbs">
              {Array.from({ length: galleryCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={index === selectedImage ? 'pure-hub-thumb-active' : ''}
                  aria-label={`View product image ${index + 1}`}
                >
                  <EmptyProductImage />
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

            <button type="button" onClick={addCurrentToCart} className="pure-hub-add-cart">Add to cart</button>
            <button type="button" className="pure-hub-favorite">
              Favorite <Heart />
            </button>

            <div className="pure-hub-detail-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? 'pure-hub-tab-active' : ''}
                >
                  {tab.label}
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
                <EmptyProductImage className="pure-hub-related-image" />
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

        <div className="pure-hub-more-products">
          <Link to="/products">
            More products <ArrowRight />
          </Link>
        </div>
      </section>
    </section>
  )
}
