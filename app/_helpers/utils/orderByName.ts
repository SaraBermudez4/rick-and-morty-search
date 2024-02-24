/**
 * Orders an array of objects by their name property.
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 */
export function orderByName(arr: any[]) {
  return arr?.sort((a, b) => a?.name?.localeCompare(b?.name))
}
