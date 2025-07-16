import Product from "../models/Product"

const DEFAULT_TAX_RATE: number = 0.0475
const GROCERIES_TAX_RATE: number = 0.03

function productIsGroceries(product: Product): boolean {
  return product.category === "groceries"
}

function calculateTax(product: Product): number {
  return productIsGroceries(product)
    ? product.getPriceWithDiscount() * GROCERIES_TAX_RATE
    : product.getPriceWithDiscount() * DEFAULT_TAX_RATE
}

export default calculateTax
