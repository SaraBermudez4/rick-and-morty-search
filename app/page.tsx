import { listCharacters } from '@services/character/listCharacters'
import { getCharacterByName } from '@services/character/getCharacterByName'

import ListCharacter from '@components/list-characters/ListCharacter'
import Pagination from '@components/list-characters/Pagination'

import { orderByName } from '@helpers/utils/orderByName'

const getAllCharacter = async (page: string) => {
  const res = await listCharacters(page)
  return res
}

const getCharacter = async (name: string, page: string) => {
  if (!name) return
  const res = await getCharacterByName(name, page)
  return res
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const searchQuery = searchParams?.query || ''
  const currentPage = searchParams?.page || '1'

  const characters = await getAllCharacter(currentPage)
  const character = await getCharacter(searchQuery, currentPage)

  const totalPages = characters?.info?.pages
  const totalPagesCharacter = character?.info?.pages

  return (
    <main>
      <ListCharacter
        characters={
          character
            ? orderByName(character.results)
            : orderByName(characters.results)
        }
      />
      {(searchQuery && totalPagesCharacter) || (!searchQuery && totalPages) ? (
        <Pagination totalPages={totalPagesCharacter || totalPages} />
      ) : null}
    </main>
  )
}
