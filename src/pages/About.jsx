import { Link } from 'react-router-dom'
import { Beaker, Leaf, ShieldCheck, Sprout } from 'lucide-react'
import { ContactSection, EmptyImage, PageFooter, PageHero } from '@/components/sections/PageCommon'
import hero2Img from '@/assets/hero2.avif'
import simpleBgImg from '@/assets/simple bg.avif'
import client1Img from '@/assets/client1.avif'
import client2Img from '@/assets/client2.avif'
import client3Img from '@/assets/client3.avif'
import client4Img from '@/assets/client4.avif'

const values = [
  ['Natural Ingredients', 'Carefully selected botanical ingredients that nourish and protect your skin.', Leaf],
  ['Innovative Formulations', 'Advanced science meets nature to deliver visible and lasting results.', Beaker],
  ['Eco-Friendly', 'Sustainable packaging and responsible practices for a better tomorrow.', Sprout],
  ['Dermatologist-Tested', 'Each product is tested to ensure safety, quality, and effectiveness.', ShieldCheck],
]

const experts = [
  ['Dr. Olivia Carter', 'Chief Formulator', client1Img],
  ['James Mitchell', 'Skincare Researcher', client2Img],
  ['Sophia Reynolds', 'Product Developer', client3Img],
  ['Emily Watson', 'Wellness Expert', client4Img],
]

export default function About() {

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="About"
        titleRest="Us"
        copy="At Pure Hub, we believe real beauty begins with healthy, nourished skin and honest, high-quality skincare."
        backgroundImage={hero2Img}
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

      <section className="ph-dark-callout" style={{ backgroundImage: `url(${simpleBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2>The Power Of Nature<br />For <span>Glowing Skin</span></h2>
        <div>
          <p>We combine the best of nature and science to create skincare that is gentle, effective, and honest.</p>
          <Link to="/products" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Discover Products</span><span className="btn-slide-text-alt" aria-hidden="true">Discover Products</span></div></Link>
        </div>
      </section>

      <section className="ph-experts">
        <div className="ph-two-col-heading">
          <div>
            <p className="ph-kicker">Our Experts</p>
            <h2>The Minds Behind <span>Pure Hub</span></h2>
          </div>
          <p>A team of skincare specialists, researchers, and formulators dedicated to creating products that truly care for your skin.</p>
        </div>
        <div className="ph-expert-grid">
          {experts.map(([name, role, img]) => (
            <article key={name}>
              <img src={img} alt={name} className="ph-expert-img" />
              <h3>{name}</h3>
              <p>{role}</p>
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

      <ContactSection />
      <PageFooter active="About" />
    </main>
  )
}
