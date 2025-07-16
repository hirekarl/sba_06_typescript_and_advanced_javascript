import calculateDiscount from "../utils/discountCalculator"
import calculateTax from "../utils/taxCalculator"
import formatAsCurrency from "../utils/formatAsCurrency"

class Product {
  private _id: number
  private _title: string
  private _description: string
  private _category: string
  private _price: number
  private _discountPercentage: number
  private _images: string[]
  private _thumbnail: string
  private _taxRate: number

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    images: string[],
    thumbnail: string
  ) {
    this._id = id
    this._title = title
    this._description = description
    this._category = category
    this._price = price
    this._discountPercentage = discountPercentage
    this._images = images
    this._thumbnail = thumbnail

    if (this._category === "groceries") {
      this._taxRate = 0.03
    } else {
      this._taxRate = 0.0475
    }
  }

  get id(): number {
    return this._id
  }

  get title(): string {
    return this._title
  }

  get description(): string {
    return this._description
  }

  get category(): string {
    return this._category
  }

  get price(): number {
    return this._price
  }

  get discountPercentage(): number {
    return this._discountPercentage
  }

  get images(): string[] {
    return this._images
  }

  get thumbnail(): string {
    return this._thumbnail
  }

  get taxRate(): number {
    return this._taxRate
  }

  displayDetails() {
    const details =
      `Name: ${this.title}\n` +
      `Description: ${this.description}\n` +
      `Category: ${this.category}\n` +
      `Price: ${formatAsCurrency(this.price)}\n` +
      `Discounted Price (${this.discountPercentage}%): ${formatAsCurrency(
        this.getPriceWithDiscount()
      )}\n` +
      `Discounted Price with Tax (${this.taxRate * 100}%): ${formatAsCurrency(
        this.getPriceWithDiscountAndTax()
      )}\n` +
      // `Images:\n${this.images.forEach((imageUrl) => "- " + imageUrl + "\n")}` +
      `Images:\n${this.images.join("\n")}\n` +
      `Thumbnail: ${this.thumbnail}\n`

    console.log(`${details}\n`)
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
