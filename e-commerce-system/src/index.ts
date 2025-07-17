import {
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
} from "./services/apiService"

import { mockProduct1, mockProduct2, mockProduct3 } from "./data/mockProducts"

import { logError } from "./utils/errorHandler"

const MAX_PRODUCT_ID = 194

function getRandomProductId(): number {
  return Math.ceil(Math.random() * (MAX_PRODUCT_ID + 1))
}

main()

async function main(): Promise<void> {
  console.log("A GET request that should work:")
  console.log("-------------------------------")
  const randomProductId1 = getRandomProductId()
  try {
    const product1 = await getProductById(randomProductId1)
    if (product1) {
      console.info(
        `[INFO] Successfully fetched ${product1.title} with ID ${product1.id}.\n`
      )
      product1.displayDetails()
    }
  } catch (error) {
    logError(error as Error, randomProductId1)
  }

  console.log("A GET request that shouldn't work:")
  console.log("----------------------------------")
  const brokenProductId = MAX_PRODUCT_ID + 1
  try {
    const product2 = await getProductById(brokenProductId)
    if (product2) {
      console.info(
        `[INFO] This line shouldn't print, because ID ${brokenProductId} doesn't exist.`
      )
      product2.displayDetails()
    }
  } catch (error) {
    logError(error as Error, brokenProductId)
  }

  console.log("A POST request (non-grocery item):")
  console.log("----------------------------------")
  const product3 = await addProduct(mockProduct1)
  try {
    if (product3) {
      console.info(
        `[INFO] Successfully added ${product3.title} with ID ${product3.id}.\n`
      )
      product3.displayDetails()
    }
  } catch (error) {
    logError(error as Error, undefined)
  }

  console.log("A POST request (grocery item):")
  console.log("------------------------------")
  const product4 = await addProduct(mockProduct2)
  try {
    if (product4) {
      console.info(
        `[INFO] Successfully added ${product4.title} with ID ${product4.id}.\n`
      )
      product4.displayDetails()
    }
  } catch (error) {
    logError(error as Error, undefined)
  }

  console.log("A PUT request:")
  console.log("--------------")
  const randomProductId2 = getRandomProductId()
  try {
    const product5 = await editProduct(randomProductId2, mockProduct3)
    if (product5) {
      console.info(
        `[INFO] Successfully edited ${product5.title} with ID ${product5.id}.\n`
      )
      product5.displayDetails()
    }
  } catch (error) {
    logError(error as Error, randomProductId2)
  }

  console.log("A DELETE request:")
  console.log("-----------------")
  const randomProductId3 = getRandomProductId()
  try {
    const product6 = await deleteProduct(getRandomProductId())
    if (product6) {
      console.info(
        `[INFO] Successfully deleted ${product6.title} with ID ${product6.id}.\n`
      )
    }
  } catch (error) {
    logError(error as Error, randomProductId3)
  }
}
