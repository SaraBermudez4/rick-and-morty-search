import { useQuery } from '@tanstack/react-query'

import fetchAsync from '@helpers/utils/fetchAsync'

/**
 * Retrieves a character from the Rick and Morty API by name.
 * @param name - The name of the character to search for.
 * @returns A Promise that resolves to the first character found with the specified name.
 */
const getCharacterByName = async (name: string, page: string) => {
  const characters = await fetchAsync(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  )
  return characters
}

const useGetCharacterByName = (name: string, page: string) => {
  return useQuery({
    queryKey: ['character', name],
    queryFn: () => getCharacterByName(name, page),
  })
}

export { useGetCharacterByName, getCharacterByName }
