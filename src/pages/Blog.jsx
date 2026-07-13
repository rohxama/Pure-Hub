import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ContactSection, InlineArrow, PageFooter, PageHero } from '@/components/sections/PageCommon'
import hero2Img from '@/assets/hero2.avif'
import feature1Img from '@/assets/feature1-img.avif'
import feature2Img from '@/assets/feature2-img.avif'
import feature3Img from '@/assets/feature3-img.avif'

const posts = [
  {
    category: 'Skincare Tips',
    date: 'May 12, 2025',
    title: 'A Simple Routine For Healthy, Glowing Skin',
    copy: 'Discover a gentle daily skincare routine that nourishes your skin and brings out your natural glow.',
    image: feature1Img,
  },
  {
    category: 'Ingredients',
    date: 'May 8, 2025',
    title: 'The Power Of Natural Ingredients',
    copy: 'Learn how carefully selected natural ingredients can transform your skin in the most effective way.',
    image: feature2Img,
  },
  {
    category: 'Wellness',
    date: 'May 3, 2025',
    title: 'Self-Care Rituals For A Better You',
    copy: 'Small moments of self-care can make a big difference. Here are easy rituals to feel your best every day.',
    image: feature3Img,
  },
]

export default function Blog() {
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(posts.map((post) => post.category))]
  const visiblePosts = useMemo(() => (
    category === 'All' ? posts : posts.filter((post) => post.category === category)
  ), [category])

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="Our"
        titleRest="Blog"
        copy="Insights, tips, and stories to help you nourish your skin and embrace natural beauty every day."
        backgroundImage={hero2Img}
      />

      <section className="ph-blog-list">
        <div className="ph-list-top">
          <p className="ph-kicker">Latest Articles</p>
          <label>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
            <ChevronDown />
          </label>
        </div>

        <div className="ph-post-grid">
          {visiblePosts.map((post) => (
            <article key={post.title} className="ph-post-card">
              <img src={post.image} alt={post.title} className="ph-post-image" />
              <p>{post.category} <span>•</span> {post.date}</p>
              <h2>{post.title}</h2>
              <p>{post.copy}</p>
              <Link to="/blog" className="btn-slide">
                <div className="btn-slide-inner"><span className="btn-text">Read More</span><span className="btn-slide-text-alt" aria-hidden="true">Read More</span></div> <InlineArrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
      <PageFooter active="Blog" />
    </main>
  )
}
