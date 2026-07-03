import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Share2, ArrowUpRight, Mail } from 'lucide-react'
import { FOOTER_LINKS } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-3xl font-semibold mb-3">Stay in the Loop</h3>
            <p className="text-dark-400 mb-8">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <button className="px-6 py-3.5 bg-white text-dark-900 rounded-xl text-sm font-semibold hover:bg-dark-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold">LUXE</span>
            </Link>
            <p className="mt-4 text-dark-400 text-sm leading-relaxed max-w-xs">
              Curating the finest products for the discerning consumer. Quality, design, and sustainability at our core.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, MessageCircle, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1 text-sm text-dark-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500">&copy; 2026 LUXE. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-dark-500">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                  <span key={card} className="px-2 py-1 bg-white/5 rounded text-[10px] font-medium text-dark-400">
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
