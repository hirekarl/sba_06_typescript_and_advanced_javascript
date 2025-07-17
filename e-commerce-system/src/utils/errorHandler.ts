class HTTPError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "HTTPError"
  }
}

function logError(error: Error, productId: number | undefined) {
  console.error(
    `[ERROR] ${error.message} (Product with ID ${productId})\n`
  )
}

export { HTTPError, logError }
