import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import simpleBgImg from '../../assets/simple bg.png'
import footerImg from '../../assets/footer-img.jpg'

export function EmptyImage({ className = '' }) {
  return (
    <div className={`ph-image ${className}`} aria-hidden="true">
      <img alt="" />
    </div>
  )
}

export function PageHero({ titleItalic, titleRest, copy, backgroundImage }) {
  return (
    <section className="ph-hero">
      {backgroundImage && <div className="ph-hero-bg" style={{ backgroundImage: `url(${backgroundImage})` }} />}
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
    <section className="ph-newsletter" style={{ backgroundImage: `url(${simpleBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
        <h1>Get In<br />Touch<br />With Us</h1>
        <p>We&apos;d love to hear from you. Reach out for any questions or support.</p>
        <Link to="/contact" className="btn-slide"><div className="btn-slide-inner"><span className="btn-text">Contact Us</span><span className="btn-slide-text-alt" aria-hidden="true">Contact Us</span></div></Link>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
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
        <p className="pure-hub-contact-address">Sophia Farms, Bedian Road, Lahore</p>
        <div className="pure-hub-contact-socials" aria-label="Social links">
          <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
          <a href="#" aria-label="WhatsApp"><MessageCircle /></a>
          <a href="#" aria-label="Gmail"><Mail /></a>
        </div>
        <p className="pure-hub-contact-details">03295033300<br />info@purehubskincare.com</p>
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
        <img src={logoImg} alt="Pure Hub" className="ph-footer-logo" />
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
      <p className="ph-copyright">© 2026 - Purehub. All rights reserved</p>
    </>
  )
}

export function InlineArrow() {
  return <ArrowRight aria-hidden="true" />
}
