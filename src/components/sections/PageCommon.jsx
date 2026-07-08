import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function EmptyImage({ className = '' }) {
  return (
    <div className={`ph-image ${className}`} aria-hidden="true">
      <img alt="" />
    </div>
  )
}

export function PageHero({ titleItalic, titleRest, copy }) {
  return (
    <section className="ph-hero">
      <div className="ph-hero-copy">
        <h1>
          <span>{titleItalic}</span> {titleRest}
        </h1>
        <p>{copy}</p>
      </div>
      <EmptyImage className="ph-hero-image" />
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="ph-newsletter">
      <div>
        <h2>Stay In The <span>Glow</span></h2>
        <p>Subscribe to get skincare tips, product updates, and exclusive offers.</p>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="Enter your email" aria-label="Email address" />
        <button type="submit" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Subscribe</span><span className="btn-slide-text-alt" aria-hidden="true">Subscribe</span></div></button>
      </form>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="ph-contact-band">
      <EmptyImage className="ph-contact-band-image" />
      <div>
        <h2>Get In<br />Touch<br />With Us</h2>
        <p>We&apos;d love to hear from you. Reach out for any questions or support.</p>
        <Link to="/contact" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Contact Us</span><span className="btn-slide-text-alt" aria-hidden="true">Contact Us</span></div></Link>
      </div>
    </section>
  )
}

export function PageFooter({ active = 'Home' }) {
  const links = [
    ['Home', '/'],
    ['Products', '/products'],
    ['About', '/about'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
  ]

  return (
    <>
      <footer className="ph-footer">
        <div className="ph-footer-mark" />
        <nav aria-label="Footer navigation">
          {links.map(([label, path]) => (
            <Link key={label} to={path} className={active === label ? 'ph-footer-active' : ''}>
              {label}
            </Link>
          ))}
        </nav>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </footer>
      <p className="ph-copyright">© 2025 Pure Hub. All Rights Reserved.</p>
    </>
  )
}

export function InlineArrow() {
  return <ArrowRight aria-hidden="true" />
}
