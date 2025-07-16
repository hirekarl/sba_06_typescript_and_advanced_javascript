function formatAsCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

class Product {
  private _id: number
  private _title: string
  private _description: string
  private _category: string
  private _price: number
  private _discountPercentage: number
  private _images: string[]
  private _thumbnail: string

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

  displayDetails() {
    const details =
      `Name: ${this.title}\n` +
      `Description: ${this.description}\n` +
      `Category: ${this.category}\n` +
      `Price: ${formatAsCurrency(this.price)}\n` +
      `Discount: ${this.discountPercentage}%\n` +
      `Images:\n${this.images.forEach((imageUrl) => "- " + imageUrl + "\n")}` +
      `Thumbnail: ${this.thumbnail}\n`

    console.log(`${details}\n`)
  }

  getPriceWithDiscount() {
    /* TODO */
  }
}

export default Product
