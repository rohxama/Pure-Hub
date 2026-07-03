export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

export const generateStars = (rating) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  return { fullStars, hasHalfStar, emptyStars: 5 - fullStars - (hasHalfStar ? 1 : 0) }
}
