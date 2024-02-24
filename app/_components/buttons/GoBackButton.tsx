'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function GoBackButton() {
  const router = useRouter()
  return (
    <Button
      className={
        'rounded-xl border-[#42b5cb] bg-[#42b5cb] text-black hover:border-[#c0df44] hover:bg-[#c0df44] hover:text-black'
      }
      size='large'
      variant='outlined'
      startIcon={<ArrowBackIcon />}
      onClick={() => router.back()}>
      Volver atras
    </Button>
  )
}
