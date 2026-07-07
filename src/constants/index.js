export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
]

export const FOOTER_LINKS = {
  Shop: [
    { name: 'All Products', path: '/products' },
    { name: 'New Arrivals', path: '/products?filter=new' },
    { name: 'Best Sellers', path: '/products?filter=best' },
    { name: 'Sale', path: '/products?filter=sale' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
  ],
  Support: [
    { name: 'FAQ', path: '#' },
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
}

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export const CONTACT_INFO = [
  {
    icon: 'Mail',
    title: 'Email Us',
    detail: 'hello@luxe-store.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: 'Phone',
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: 'MapPin',
    title: 'Visit Us',
    detail: '123 Design District',
    description: 'New York, NY 10001',
  },
  {
    icon: 'Clock',
    title: 'Business Hours',
    detail: 'Mon - Fri: 9am - 6pm',
    description: 'Weekend: By appointment',
  },
]

export const ABOUT_VALUES = [
  {
    icon: 'Heart',
    title: 'Passion for Quality',
    description: 'Every product is handpicked and rigorously tested to meet our exacting standards.',
  },
  {
    icon: 'Leaf',
    title: 'Sustainability',
    description: 'We partner with brands committed to ethical practices and environmental responsibility.',
  },
  {
    icon: 'Users',
    title: 'Customer First',
    description: 'Your satisfaction drives everything we do, from curation to post-purchase support.',
  },
  {
    icon: 'Sparkles',
    title: 'Innovation',
    description: 'We constantly seek out cutting-edge products that push boundaries.',
  },
]

export const ABOUT_STATS = [
  { value: '2019', label: 'Founded' },
  { value: '50+', label: 'Countries Served' },
  { value: '200+', label: 'Brand Partners' },
  { value: '99%', label: 'Satisfaction Rate' },
]

export const CHECKOUT_STEPS = ['Cart', 'Checkout', 'Confirmation']
