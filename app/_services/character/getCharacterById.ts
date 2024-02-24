import { useQuery } from '@tanstack/react-query'

import fetchAsync from '@helpers/utils/fetchAsync'

/**
 * Retrieves a character by their ID from the Rick and Morty API.
 * @param id - The ID of the character to retrieve.
 * @returns A Promise that resolves to the character object.
 */
const getCharacterById = async (id: string) => {
  const characters = await fetchAsync(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  return characters
}

const useGetCharacterById = (id: string) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
  })
}

export { useGetCharacterById, getCharacterById }
