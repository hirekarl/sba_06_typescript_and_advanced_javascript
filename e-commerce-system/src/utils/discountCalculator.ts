import Product from "../models/Product"

function calculateDiscount(product: Product): number {
  const discountRate = product.discountPercentage / 100

  return product.price * discountRate
}

export default calculateDiscount
