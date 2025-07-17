import Product from "../models/Product"
import HTTPError from "../utils/errorHandler"

const BASE_URL = "https://dummyjson.com/products"

const dummyJSONAPIRequest = {
  get: (productId: number) => {
    return fetch(`${BASE_URL}/${productId}`)
  },
  post: (productToAdd: Product) => {
    return fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productToAdd),
    })
  },
  put: (productId: number, editedProduct: Product) => {
    return fetch(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedProduct),
    })
  },
  delete: (productId: number) => {
    return fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    })
  },
} as const

function checkResponseStatus(response: Response) {
  if (!response.ok) {
    throw new HTTPError(`${response.status} - ${response.statusText}`)
  }
}

function makeResponseProduct(data: Product): Product {
  return new Product(
    data.title,
    data.description,
    data.category,
    data.price,
    data.discountPercentage,
    data.images,
    data.thumbnail,
    data.id
  )
}

function logError(error: Error, productId: number | undefined) {
  console.error(
    `[ERROR] ${error.name}: ${error.message} (Product with ID ${productId})\n`
  )
}

async function getProductById(productId: number): Promise<Product | undefined> {
  try {
    const response = await dummyJSONAPIRequest.get(productId)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    logError(error as Error, productId)
  }
}

async function addProduct(productToAdd: Product): Promise<Product | undefined> {
  try {
    const response = await dummyJSONAPIRequest.post(productToAdd)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    logError(error as Error, productToAdd.id)
  }
}

async function editProduct(
  productId: number,
  editedProduct: Product
): Promise<Product | undefined> {
  try {
    const response = await dummyJSONAPIRequest.put(productId, editedProduct)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    logError(error as Error, productId)
  }
}

async function deleteProduct(productId: number): Promise<Product | undefined> {
  try {
    const response = await dummyJSONAPIRequest.delete(productId)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    logError(error as Error, productId)
  }
}

export { getProductById, addProduct, editProduct, deleteProduct }
