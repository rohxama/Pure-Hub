import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ContactBand, EmptyImage, InlineArrow, Newsletter, PageFooter, PageHero } from '@/components/sections/PageCommon'

const posts = [
  {
    category: 'Skincare Tips',
    date: 'May 12, 2025',
    title: 'A Simple Routine For Healthy, Glowing Skin',
    copy: 'Discover a gentle daily skincare routine that nourishes your skin and brings out your natural glow.',
  },
  {
    category: 'Ingredients',
    date: 'May 8, 2025',
    title: 'The Power Of Natural Ingredients',
    copy: 'Learn how carefully selected natural ingredients can transform your skin in the most effective way.',
  },
  {
    category: 'Wellness',
    date: 'May 3, 2025',
    title: 'Self-Care Rituals For A Better You',
    copy: 'Small moments of self-care can make a big difference. Here are easy rituals to feel your best every day.',
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
              <EmptyImage className="ph-post-image" />
              <p>{post.category} <span>•</span> {post.date}</p>
              <h2>{post.title}</h2>
              <p>{post.copy}</p>
              <Link to="/blog" className="btn-slide" data-label="Read More">
                <span className="btn-text">Read More</span> <InlineArrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
      <ContactBand />
      <PageFooter active="Blog" />
    </main>
  )
}
