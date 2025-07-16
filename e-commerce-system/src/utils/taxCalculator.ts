import Product from "../models/Product"

function calculateTax(product: Product): number {
  return product.price * product.taxRate
}

export default calculateTax
