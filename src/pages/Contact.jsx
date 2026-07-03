import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageCircle, Share2 } from 'lucide-react'
import { CONTACT_INFO } from '@/constants'

const iconMap = { Mail, Phone, MapPin, Clock }

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-400 mb-3 block">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">Contact Us</h1>
            <p className="mt-4 text-dark-400 text-lg">Have a question, suggestion, or just want to say hello? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CONTACT_INFO.map((info, i) => {
            const Icon = iconMap[info.icon]
            return (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-dark-100 hover:border-dark-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-dark-900 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-dark-900 mb-1">{info.title}</h4>
                <p className="text-sm font-medium text-dark-700">{info.detail}</p>
                <p className="text-xs text-dark-400 mt-1">{info.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-dark-700 mb-1.5">First Name</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="John" /></div>
                <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Last Name</label><input type="text" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="Doe" /></div>
              </div>
              <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Email</label><input type="email" className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all" placeholder="john@example.com" /></div>
              <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Subject</label>
                <select className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all">
                  <option>General Inquiry</option><option>Order Support</option><option>Returns & Exchanges</option><option>Wholesale</option><option>Press & Media</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium text-dark-700 mb-1.5">Message</label><textarea rows={5} className="w-full px-4 py-3 bg-dark-50 border border-dark-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-dark-900/10 focus:border-dark-300 transition-all resize-none" placeholder="Tell us what's on your mind..." /></div>
              <button type="button" className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-xl text-sm font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg shadow-dark-900/20">
                <Send className="w-4 h-4" />Send Message
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-dark-100">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 rounded-3xl bg-dark-50">
              <h3 className="font-semibold text-dark-900 mb-4">Follow Us</h3>
              <p className="text-sm text-dark-500 mb-6">Stay connected and discover more on our social channels.</p>
              <div className="flex gap-3">
                {[
                  { icon: Globe, label: 'Website', color: 'hover:bg-blue-50 hover:text-blue-600' },
                  { icon: MessageCircle, label: 'Chat', color: 'hover:bg-green-50 hover:text-green-600' },
                  { icon: Share2, label: 'Share', color: 'hover:bg-purple-50 hover:text-purple-600' },
                ].map(({ icon: Icon, label, color }) => (
                  <a key={label} href="#" className={`w-12 h-12 rounded-xl bg-white border border-dark-100 flex items-center justify-center transition-all duration-200 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
