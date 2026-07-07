import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone, Plus } from 'lucide-react'
import { Newsletter, PageFooter, PageHero } from '@/components/sections/PageCommon'

const contactItems = [
  ['Email Us', 'hello@purehub.com', Mail],
  ['Call Us', '+1 (555) 123-4567', Phone],
  ['Our Location', '123 Glow Street, Suite 100 Los Angeles, CA 90001, USA', MapPin],
  ['Business Hours', 'Mon - Fri: 9:00 AM - 6:00 PM Sat - Sun: Closed', Clock],
]

const faqs = [
  'Where are your products made?',
  'Are your products suitable for sensitive skin?',
  'How long does shipping take?',
  'What is your return policy?',
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="ph-page">
      <PageHero
        titleItalic="Contact"
        titleRest="Us"
        copy="We'd love to hear from you. Reach out for any questions, support, or collaborations."
      />

      <section className="ph-contact-intro">
        <div>
          <p className="ph-kicker">Get In Touch</p>
          <h2>We’re Here To<br /><span>Help You</span></h2>
        </div>
        <p>Have a question about our products, need help with an order, or want to work with us? Fill out the form or reach us through any of the channels below.</p>
      </section>

      <section className="ph-contact-grid">
        <form className="ph-contact-form" onSubmit={submitForm}>
          <h2>Send Us A Message</h2>
          <input required placeholder="Your Name" aria-label="Your name" />
          <input required type="email" placeholder="Email Address" aria-label="Email address" />
          <input required placeholder="Subject" aria-label="Subject" />
          <textarea required placeholder="Your Message" aria-label="Your message" />
          <button type="submit" className="btn-slide" data-label="Send Message"><span className="btn-text">Send Message</span> <span>→</span></button>
          {sent ? <p className="ph-form-status">Thanks, your message is ready to send.</p> : null}
        </form>

        <div className="ph-contact-info">
          <h2>Contact Information</h2>
          {contactItems.map(([title, detail, Icon]) => (
            <article key={title}>
              <span><Icon /></span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ph-faq">
        <div>
          <p className="ph-kicker">Quick Help</p>
          <h2>Frequently Asked<br /><span>Questions</span></h2>
          <p>Find quick answers to common questions about orders, shipping, returns, and our products.</p>
          <Link to="/contact">Visit FAQs <span>›</span></Link>
        </div>
        <div className="ph-faq-list">
          {faqs.map((faq, index) => (
            <button
              key={faq}
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className={openFaq === index ? 'ph-open' : ''}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {faq}
              <Plus />
            </button>
          ))}
        </div>
      </section>

      <Newsletter />
      <PageFooter active="Contact Us" />
    </main>
  )
}
