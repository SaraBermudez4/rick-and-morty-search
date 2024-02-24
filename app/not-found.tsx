'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button, Container } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import NotFoundImage from '@images/404.webp'

export default function NotFound() {
  const router = useRouter()
  return (
    <Container className='rounded-xl border-4 border-dotted border-[#badf40] bg-[#43b1c9]'>
      <div className='flex items-center  justify-evenly p-10'>
        <Image src={NotFoundImage} alt='No characters found' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold text-black '>Not Found</h1>
          <p>Could not find requested resource</p>
          <Button
            style={{
              borderRadius: '15px',
              borderColor: '#c0df44',
              backgroundColor: '#c0df44',
              color: 'black',
            }}
            size='large'
            variant='outlined'
            startIcon={<ArrowBackIcon />}
            onClick={() => router.replace('/')}>
            Return Home
          </Button>
        </div>
      </div>
    </Container>
  )
}
