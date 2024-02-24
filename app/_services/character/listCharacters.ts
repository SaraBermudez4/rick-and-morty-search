import { useQuery } from '@tanstack/react-query'

import fetchAsync from '@helpers/utils/fetchAsync'

/**
 * Fetches a list of characters from the Rick and Morty API based on the specified page.
 * @param page - The page number to fetch characters from.
 * @returns A Promise that resolves to the fetched characters.
 */
const listCharacters = async (page: string) => {
  const characters = await fetchAsync(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  )
  return characters
}

const useListCharacters = (page: string) => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: () => listCharacters(page),
  })
}

export { useListCharacters, listCharacters }
