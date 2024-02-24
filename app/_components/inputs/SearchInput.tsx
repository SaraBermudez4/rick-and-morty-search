'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { useAppStateContext } from '@context/AppStateContext'

export default function SearchInput({ placeholder }: { placeholder: string }) {
  const { searchQuery, setSearchQuery } = useAppStateContext()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
    setSearchQuery(term)
  }

  return (
    <div className='relative flex flex-1 flex-shrink-0 justify-center '>
      <input
        className='peer block h-8 w-48 rounded-xl border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 md:h-12 md:w-72'
        placeholder={placeholder}
        onChange={e => {
          handleSearch(e.target.value)
        }}
        value={searchQuery}
      />
    </div>
  )
}
