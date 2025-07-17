import {
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
} from "./services/apiService"

import { mockProduct1, mockProduct2, mockProduct3 } from "./data/mockProducts"

const MAX_PRODUCT_ID = 194

function getRandomProductId(): number {
  return Math.ceil(Math.random() * (MAX_PRODUCT_ID + 1))
}

main()

async function main(): Promise<void> {
  console.log("A GET request that should work:")
  console.log("-------------------------------")
  const product1 = await getProductById(getRandomProductId())
  if (product1) {
    console.info(
      `[INFO] Successfully fetched ${product1.title} with ID ${product1.id}.\n`
    )
    product1.displayDetails()
  }

  console.log("A GET request that shouldn't work:")
  console.log("----------------------------------")
  const product2 = await getProductById(MAX_PRODUCT_ID + 1)
  if (product2) {
    product2.displayDetails()
  }

  console.log("A POST request (non-grocery item):")
  console.log("----------------------------------")
  const product3 = await addProduct(mockProduct1)
  if (product3) {
    console.info(
      `[INFO] Successfully added ${product3.title} with ID ${product3.id}.\n`
    )
    product3.displayDetails()
  }

  console.log("A POST request (grocery item):")
  console.log("------------------------------")
  const product4 = await addProduct(mockProduct2)
  if (product4) {
    console.info(
      `[INFO] Successfully added ${product4.title} with ID ${product4.id}.\n`
    )
    product4.displayDetails()
  }

  console.log("A PUT request:")
  console.log("--------------")
  const product5 = await editProduct(getRandomProductId(), mockProduct3)
  if (product5) {
    console.info(
      `[INFO] Successfully edited ${product5.title} with ID ${product5.id}.\n`
    )
    product5.displayDetails()
  }

  console.log("A DELETE request:")
  console.log("-----------------")
  const product6 = await deleteProduct(getRandomProductId())
  if (product6) {
    console.info(
      `[INFO] Successfully deleted ${product6.title} with ID ${product6.id}.\n`
    )
  }
}
