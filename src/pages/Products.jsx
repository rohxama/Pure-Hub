import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Filter, Heart, SlidersHorizontal, Star } from 'lucide-react'
import { products } from '@/data/products'
import { Newsletter, PageFooter, PageHero } from '@/components/sections/PageCommon'
import hero2Img from '@/assets/hero2.avif'
import product4Img from '@/assets/product4-_2_.avif'
import product5Img from '@/assets/product5.avif'
import product6Img from '@/assets/product6.avif'
import product7Img from '@/assets/product7.avif'
import product9Img from '@/assets/product9.avif'
import product10Img from '@/assets/product10.avif'
import product11Img from '@/assets/product11.avif'
import product12Img from '@/assets/product12.avif'
import productExp1Img from '@/assets/product-exp1.avif'
import productExp2Img from '@/assets/product-exp2.avif'
import productExp3Img from '@/assets/product-exp3.avif'
import perfumeImg from '@/assets/perfume.avif'
import hairOilImg from '@/assets/hair-oil.avif'
import featureSecMainImg from '@/assets/feature-sec-main-img.avif'
import feature1Img from '@/assets/feature1-img.avif'
import feature2Img from '@/assets/feature2-img.avif'
import feature4Img from '@/assets/feature4-img.jpg'

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

const categoryLabels = {
  'face-care': 'Face Care',
  serums: 'Serums',
  moisturizers: 'Moisturizers',
  'body-care': 'Body Care',
  fragrance: 'Fragrance',
}
const categories = [
  'All Products',
  ...Array.from(new Set(products.map((product) => product.category))).map(
    (value) => categoryLabels[value] || value,
  ),
]
const skinTypes = ['All Skin Types', 'Normal', 'Oily', 'Dry', 'Sensitive', 'Combination']
const concerns = ['Hydration', 'Anti-Aging', 'Acne Care', 'Brightening', 'Soothing']
const chips = ['All Products', 'Best Seller', 'New Arrivals', 'On Sale']

const PRICE_MIN = 10

export default function Products() {
  const [category, setCategory] = useState('All Products')
  const [skinType, setSkinType] = useState('All Skin Types')
  const [concernsSel, setConcernsSel] = useState([])
  const [priceMax, setPriceMax] = useState(450)
  const [availability, setAvailability] = useState('In Stock')
  const [chip, setChip] = useState('All Products')
  const [sort, setSort] = useState('Featured')
  const [page, setPage] = useState(1)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    let result = [...products]
    if (category !== 'All Products') {
      result = result.filter(
        (product) => (categoryLabels[product.category] || product.category) === category,
      )
    }
    if (skinType !== 'All Skin Types') {
      result = result.filter((product) => product.skinType === skinType)
    }
    if (concernsSel.length > 0) {
      result = result.filter((product) =>
        concernsSel.some((concern) => product.concerns?.includes(concern)),
      )
    }
    result = result.filter((product) => product.price <= priceMax)
    if (availability === 'In Stock') result = result.filter((product) => product.inStock)
    if (chip === 'Best Seller') result = result.filter((product) => product.badge?.toLowerCase().includes('best') || product.rating >= 4.8)
    if (chip === 'New Arrivals') result = result.filter((product) => product.badge?.toLowerCase().includes('new') || product.id % 3 === 0)
    if (chip === 'On Sale') result = result.filter((product) => product.originalPrice)
    if (sort === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
    if (sort === 'Rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [category, skinType, concernsSel, priceMax, availability, chip, sort])

  const paged = visibleProducts.slice((page - 1) * 12, page * 12)

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="Our"
        titleRest="Products"
        copy="Discover skincare crafted with nature and science to nourish, protect, and bring out your natural glow."
        backgroundImage={hero2Img}
      />

      <section className="ph-products-layout">
        <aside className={`ph-filter-panel ${filtersOpen ? 'ph-filter-open' : ''}`}>
          <button type="button" className="ph-filter-trigger" onClick={() => setFiltersOpen((value) => !value)}><SlidersHorizontal /> Filter</button>
          <FilterGroup title="Categories" items={categories} active={category} setActive={(value) => { setCategory(value); setPage(1) }} />
          <FilterGroup title="Skin Type" items={skinTypes} active={skinType} setActive={(value) => { setSkinType(value); setPage(1) }} />
          <div className="ph-filter-block">
            <h3>Price <ChevronDown /></h3>
            <input
              type="range"
              min={PRICE_MIN}
              max="450"
              value={priceMax}
              onChange={(event) => { setPriceMax(Number(event.target.value)); setPage(1) }}
              aria-label="Price range"
            />
            <div className="ph-price-range"><span>${PRICE_MIN}</span><span>${priceMax}</span></div>
          </div>
          <FilterGroup
            title="Concerns"
            items={concerns}
            active={concernsSel}
            setActive={(value) => {
              setConcernsSel((current) =>
                current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
              )
              setPage(1)
            }}
            checkbox
          />
          <FilterGroup title="Availability" items={['In Stock', 'Out of Stock']} active={availability} setActive={(value) => { setAvailability(value); setPage(1) }} checkbox />
        </aside>

        <div className="ph-products-main">
          <div className="ph-products-toolbar">
            <span>Showing 1–{Math.min(12, visibleProducts.length)} of {visibleProducts.length} results</span>
            <label>
              Sort by:
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating'].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <div className="ph-product-chips">
            {chips.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setChip(item)
                  setPage(1)
                }}
                className={chip === item ? 'ph-active' : ''}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="ph-product-grid">
            {paged.map((product) => (
              <article className="ph-product-card" key={product.id}>
                <Link to={`/product/${product.slug}`}>
                  <div className="ph-product-media">
                    <img src={productImageMap[product.slug]} alt={product.name} className="ph-product-image" />
                    {product.originalPrice ? <span>{Math.max(10, Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100))}% OFF</span> : product.badge ? <span>{product.badge}</span> : null}
                    <button type="button" aria-label={`Save ${product.name}`}><Heart /></button>
                  </div>
                  <p className="ph-product-category">{product.category}</p>
                  <h2>{product.name}</h2>
                  <div className="ph-card-stars">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} />)}
                    <span>({product.reviews})</span>
                  </div>
                  <p className="ph-product-price">
                    <strong>${product.price.toFixed(2)}</strong>
                    {product.originalPrice ? <span>${product.originalPrice.toFixed(2)}</span> : null}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          <div className="ph-pagination">
            <button type="button" onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
            {[1, 2, 3, 4].map((item) => (
              <button type="button" key={item} onClick={() => setPage(item)} className={page === item ? 'ph-active' : ''}>{item}</button>
            ))}
            <button type="button" onClick={() => setPage(page + 1)}>›</button>
          </div>
        </div>
      </section>

      <Newsletter />
      <PageFooter active="Products" />
    </main>
  )
}

function FilterGroup({ title, items, active, setActive, checkbox = false }) {
  const isChecked = (item) => (checkbox ? Array.isArray(active) ? active.includes(item) : item === active : active === item)
  return (
    <div className="ph-filter-block">
      <h3>{title} <ChevronDown /></h3>
      {items.map((item) => (
        <label key={item}>
          <input
            type={checkbox ? 'checkbox' : 'radio'}
            name={title}
            checked={isChecked(item)}
            onChange={() => setActive(item)}
          />
          {item}
        </label>
      ))}
    </div>
  )
}
