/**
 * Makes an asynchronous HTTP request using the fetch API.
 *
 * @param url - The URL to send the request to.
 * @param options - Optional request options.
 * @returns A promise that resolves to the parsed JSON response if the request is successful, or throws an error if the request fails.
 */
export default async function fetchAsync(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  if (response.ok) {
    return await response.json()
  } else {
    const errorBody = await response.text()
    if (response.status === 404) {
      return null
    }
    throw new Error(`HTTP Error: ${response.status} - ${errorBody}`)
  }
}
