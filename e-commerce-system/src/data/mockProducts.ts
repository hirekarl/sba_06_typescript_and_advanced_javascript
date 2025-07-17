import Product from "../models/Product"

const mockImage = "https://placehold.co/100x100.png"

const MAX_RANDOM_PRICE = 100
const MAX_RANDOM_DISCOUNT_PERCENTAGE = 50


function randomPrice(): number {
  return parseFloat((Math.random() * MAX_RANDOM_PRICE).toFixed(2))
}

function randomDiscountPercentage(): number {
  return parseFloat((Math.random() * MAX_RANDOM_DISCOUNT_PERCENTAGE).toFixed(2))
}

const mockProduct1 = new Product(
  "Fidget Spinner",
  "A small fidget spinner, perfect for everyone.",
  "toys",
  randomPrice(),
  randomDiscountPercentage(),
  [mockImage, mockImage],
  mockImage
)

const mockProduct2 = new Product(
  "Giant Head of Lettuce",
  "Just what it sounds like.",
  "groceries",
  randomPrice(),
  randomDiscountPercentage(),
  [mockImage, mockImage],
  mockImage
)

const mockProduct3 = new Product(
  "Beanbag Chair",
  "Terrible for your back, great for fun!",
  "furniture",
  randomPrice(),
  randomDiscountPercentage(),
  [mockImage, mockImage],
  mockImage
)

export { mockProduct1, mockProduct2, mockProduct3 }
