'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { Stack } from '@mui/material'
import PaginationMUI from '@mui/material/Pagination'

function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`)
  }
  return (
    <Stack spacing={2} className='mt-20 items-center'>
      <PaginationMUI
        count={totalPages}
        variant='outlined'
        shape='rounded'
        page={currentPage}
        onChange={createPageURL}
        size='large'
        className='text-white'
      />
    </Stack>
  )
}

export default Pagination
