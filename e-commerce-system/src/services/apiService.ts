import Product from "../models/Product"
import { HTTPError } from "../utils/errorHandler"

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

async function getProductById(productId: number): Promise<Product> {
  try {
    const response = await dummyJSONAPIRequest.get(productId)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    throw new Error(String(error))
  }
}

async function addProduct(productToAdd: Product): Promise<Product> {
  try {
    const response = await dummyJSONAPIRequest.post(productToAdd)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    throw new Error(String(error))
  }
}

async function editProduct(
  productId: number,
  editedProduct: Product
): Promise<Product> {
  try {
    const response = await dummyJSONAPIRequest.put(productId, editedProduct)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    throw new Error(String(error))
  }
}

async function deleteProduct(productId: number): Promise<Product> {
  try {
    const response = await dummyJSONAPIRequest.delete(productId)
    checkResponseStatus(response)
    const data = await response.json()
    return makeResponseProduct(data)
  } catch (error) {
    throw new Error(String(error))
  }
}

export { getProductById, addProduct, editProduct, deleteProduct }
