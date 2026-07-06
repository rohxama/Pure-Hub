import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Filter, Heart, SlidersHorizontal, Star } from 'lucide-react'
import { products } from '@/data/products'
import { EmptyImage, Newsletter, PageFooter, PageHero } from '@/components/sections/PageCommon'

const categories = ['All Products', 'Face Care', 'Body Care', 'Serums', 'Moisturizers', 'Cleansers', 'Masks']
const skinTypes = ['All Skin Types', 'Normal', 'Oily', 'Dry', 'Sensitive', 'Combination']
const concerns = ['Hydration', 'Anti-Aging', 'Acne Care', 'Brightening', 'Soothing']
const chips = ['All Products', 'Best Seller', 'New Arrivals', 'On Sale']

export default function Products() {
  const [category, setCategory] = useState('All Products')
  const [skinType, setSkinType] = useState('All Skin Types')
  const [chip, setChip] = useState('All Products')
  const [sort, setSort] = useState('Featured')
  const [page, setPage] = useState(1)

  const visibleProducts = useMemo(() => {
    let result = [...products]
    if (chip === 'Best Seller') result = result.filter((product) => product.badge?.toLowerCase().includes('best') || product.rating >= 4.8)
    if (chip === 'New Arrivals') result = result.filter((product) => product.badge?.toLowerCase().includes('new') || product.id % 3 === 0)
    if (chip === 'On Sale') result = result.filter((product) => product.originalPrice)
    if (sort === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
    if (sort === 'Rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [chip, sort])

  const paged = visibleProducts.slice((page - 1) * 12, page * 12)

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="Our"
        titleRest="Products"
        copy="Discover skincare crafted with nature and science to nourish, protect, and bring out your natural glow."
      />

      <section className="ph-products-layout">
        <aside className="ph-filter-panel">
          <button type="button" className="ph-filter-trigger"><SlidersHorizontal /> Filter</button>
          <FilterGroup title="Categories" items={categories} active={category} setActive={setCategory} />
          <FilterGroup title="Skin Type" items={skinTypes} active={skinType} setActive={setSkinType} />
          <div className="ph-filter-block">
            <h3>Price <ChevronDown /></h3>
            <input type="range" min="10" max="100" defaultValue="70" aria-label="Price range" />
            <div className="ph-price-range"><span>$10</span><span>$100</span></div>
          </div>
          <FilterGroup title="Concerns" items={concerns} active="" setActive={() => {}} checkbox />
          <FilterGroup title="Availability" items={['In Stock', 'Out of Stock']} active="In Stock" setActive={() => {}} checkbox />
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
                    <EmptyImage />
                    {product.originalPrice ? <span>{Math.max(10, Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100))}% OFF</span> : product.badge ? <span>{product.badge}</span> : null}
                    <button type="button" aria-label={`Save ${product.name}`}><Heart /></button>
                  </div>
                  <p className="ph-product-category">Face Care</p>
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
      <section className="ph-product-benefits">
        {[
          ['Clean Ingredients', 'Carefully selected natural ingredients for your skin.'],
          ['Dermatologist-Tested', 'Tested for safety and effectiveness.'],
          ['Sustainable Beauty', 'Eco-friendly packaging for a better tomorrow.'],
        ].map(([title, copy]) => (
          <article key={title}>
            <span><Filter /></span>
            <div><h3>{title}</h3><p>{copy}</p></div>
          </article>
        ))}
      </section>
      <PageFooter active="Products" />
    </main>
  )
}

function FilterGroup({ title, items, active, setActive, checkbox = false }) {
  return (
    <div className="ph-filter-block">
      <h3>{title} <ChevronDown /></h3>
      {items.map((item) => (
        <label key={item}>
          <input
            type={checkbox ? 'checkbox' : 'radio'}
            name={title}
            checked={checkbox ? item === 'In Stock' : active === item}
            onChange={() => setActive(item)}
          />
          {item}
        </label>
      ))}
    </div>
  )
}
