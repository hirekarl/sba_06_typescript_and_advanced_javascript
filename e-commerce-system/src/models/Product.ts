import calculateDiscount from "../utils/discountCalculator"
import calculateTax from "../utils/taxCalculator"
import formatAsCurrency from "../utils/formatAsCurrency"

const taxRate = {
  DEFAULT: 0.0475,
  GROCERIES: 0.03,
} as const

class Product {
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  images: string[]
  thumbnail: string
  taxRate: number
  id?: number

  constructor(
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    images: string[],
    thumbnail: string,
    id?: number
  ) {
    this.title = title
    this.description = description
    this.category = category
    this.price = price
    this.discountPercentage = discountPercentage
    this.images = images
    this.thumbnail = thumbnail
    this.id = id

    this.taxRate =
      this.category !== "groceries" ? taxRate.DEFAULT : taxRate.GROCERIES
  }

  displayDetails() {
    const details =
      `Name: ${this.title}\n` +
      `Description: ${this.description}\n` +
      `Category: ${this.category}\n` +
      `Price: ${formatAsCurrency(this.price)}\n` +
      `Discounted Price (${this.discountPercentage}% off): ${formatAsCurrency(
        this.getPriceWithDiscount()
      )}\n` +
      `Discounted Price with Tax (${this.taxRate * 100}%): ${formatAsCurrency(
        this.getPriceWithDiscountAndTax()
      )}\n` +
      `Images: ${this.images.join(", ")}\n` +
      `Thumbnail: ${this.thumbnail}\n`

    console.log(`${details}`)
  }

  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this)
    return this.price - discountAmount
  }

  getTax(): number {
    return calculateTax(this)
  }

  getPriceWithDiscountAndTax(): number {
    return this.getPriceWithDiscount() + this.getTax()
  }
}

export default Product
