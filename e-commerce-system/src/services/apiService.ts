import Product from "../models/Product"
import HTTPError from "../utils/errorHandler"

const BASE_URL = "https://dummyjson.com/products"

async function getProductById(productId: number): Promise<Product | void> {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "GET",
    })

    if (!response.ok) {
      throw new HTTPError(`${response.status} - ${response.statusText}`)
    }

    const data = await response.json()

    const responseProduct: Product = new Product(
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.images,
      data.thumbnail,
      data.id
    )

    return responseProduct
  } catch (error) {
    console.error(
      `[ERROR] ${(error as Error).name}: ${
        (error as Error).message
      } (Product with ID ${productId})\n`
    )
  }
}

async function addProduct(productToAdd: Product): Promise<Product | void> {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productToAdd),
    })

    if (!response.ok) {
      throw new HTTPError(`${response.status} - ${response.statusText}`)
    }

    const data = await response.json()

    const responseProduct: Product = new Product(
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.images,
      data.thumbnail,
      data.id
    )

    return responseProduct
  } catch (error) {
    console.error(
      `[ERROR] ${(error as Error).name}: ${(error as Error).message} (Product with ID ${
        productToAdd.id
      })\n`
    )
  }
}

async function editProduct(
  productId: number,
  editedProduct: Product
): Promise<Product | void> {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedProduct),
    })

    if (!response.ok) {
      throw new HTTPError(`${response.status} - ${response.statusText}`)
    }

    const data = await response.json()

    const responseProduct: Product = new Product(
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.images,
      data.thumbnail,
      data.id
    )

    return responseProduct
  } catch (error) {
    console.error(
      `[ERROR] ${(error as Error).name}: ${
        (error as Error).message
      } (Product with ID ${productId})\n`
    )
  }
}

async function deleteProduct(productId: number): Promise<Product | void> {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    })

    if (!response.ok) {
      throw new HTTPError(`${response.status} - ${response.statusText}`)
    }

    const data = await response.json()

    const responseProduct: Product = new Product(
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.images,
      data.thumbnail,
      data.id
    )

    return responseProduct
  } catch (error) {
    console.error(
      `[ERROR] ${(error as Error).name}: ${
        (error as Error).message
      } (Product with ID ${productId})\n`
    )
  }
}

export { getProductById, addProduct, editProduct, deleteProduct }
