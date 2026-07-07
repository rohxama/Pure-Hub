import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Beaker, Leaf, ShieldCheck, Sprout, Plus } from 'lucide-react'
import { ContactBand, EmptyImage, PageFooter, PageHero } from '@/components/sections/PageCommon'

const values = [
  ['Natural Ingredients', 'Carefully selected botanical ingredients that nourish and protect your skin.', Leaf],
  ['Innovative Formulations', 'Advanced science meets nature to deliver visible and lasting results.', Beaker],
  ['Eco-Friendly', 'Sustainable packaging and responsible practices for a better tomorrow.', Sprout],
  ['Dermatologist-Tested', 'Each product is tested to ensure safety, quality, and effectiveness.', ShieldCheck],
]

const promises = ['Paraben-Free', 'Sulfate-Free', 'Cruelty-Free', 'Toxin-Free', 'Made With Care']
const experts = ['Dr. Olivia Carter', 'James Mitchell', 'Sophia Reynolds', 'Emily Watson']

export default function About() {
  const [openPromise, setOpenPromise] = useState(0)

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="About"
        titleRest="Us"
        copy="At Pure Hub, we believe real beauty begins with healthy, nourished skin and honest, high-quality skincare."
      />

      <section className="ph-about-mission">
        <div>
          <p className="ph-kicker">Our Mission</p>
          <h2>Nourishing Skin,<br /><span>Naturally</span></h2>
        </div>
        <p>
          We create effective skincare products using natural ingredients and innovative formulations. Our mission is to
          help you embrace your natural glow with safe, sustainable, and dermatologist-tested solutions.
        </p>
      </section>

      <section className="ph-values">
        {values.map(([title, copy, Icon]) => (
          <article key={title}>
            <span><Icon /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="ph-dark-callout">
        <h2>The Power Of Nature<br />For <span>Glowing Skin</span></h2>
        <div>
          <p>We combine the best of nature and science to create skincare that is gentle, effective, and honest.</p>
          <Link to="/products" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Discover Products</span><span className="btn-slide-text-alt" aria-hidden="true">Discover Products</span></div></Link>
        </div>
      </section>

      <section className="ph-promise">
        <div>
          <p className="ph-kicker">Our Promise</p>
          <h2>Clean, Conscious,<br />And <span>Effective</span></h2>
          <EmptyImage className="ph-promise-image" />
        </div>
        <div>
          <p>We are committed to transparency in every step, from ingredient sourcing to product formulation.</p>
          <div className="ph-accordion">
            {promises.map((promise, index) => (
              <button
                key={promise}
                type="button"
                onClick={() => setOpenPromise(openPromise === index ? -1 : index)}
                className={openPromise === index ? 'ph-open' : ''}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {promise}
                <Plus />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-experts">
        <div className="ph-two-col-heading">
          <div>
            <p className="ph-kicker">Our Experts</p>
            <h2>The Minds Behind<br /><span>Pure Hub</span></h2>
          </div>
          <p>A team of skincare specialists, researchers, and formulators dedicated to creating products that truly care for your skin.</p>
        </div>
        <div className="ph-expert-grid">
          {experts.map((expert) => (
            <article key={expert}>
              <EmptyImage />
              <h3>{expert}</h3>
              <p>{expert.includes('Olivia') ? 'Chief Formulator' : expert.includes('James') ? 'Skincare Researcher' : expert.includes('Sophia') ? 'Product Developer' : 'Wellness Expert'}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ph-stats">
        {[
          ['10+', 'Years of Experience'],
          ['50+', 'Skincare Products'],
          ['20K+', 'Happy Customers'],
          ['98%', 'Satisfaction Rate'],
        ].map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <ContactBand />
      <PageFooter active="About Us" />
    </main>
  )
}
