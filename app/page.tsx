import { listCharacters } from '@services/character/listCharacters'

import ListCharacter from '@components/list-characters/ListCharacter'
import Pagination from '@components/list-characters/Pagination'

import { orderByName } from '@helpers/utils/orderByName'

const getData = async (page: string) => {
  const res = await listCharacters(page)
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
  const currentPage = searchParams?.page || '1'

  const characters = await getData(currentPage)

  const totalPages = characters.info.pages

  return (
    <main>
      <ListCharacter characters={orderByName(characters.results)} />
      <Pagination totalPages={totalPages} />
    </main>
  )
}
