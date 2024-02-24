'use client'

import Image from 'next/image'

import { useAppStateContext } from '@context/AppStateContext'

import CardCaracter from '../card-caracter/CardCaracter'

import { characterType } from '@helpers/types'

import NotFound from '@images/404.webp'
import { Container } from '@mui/material'

interface ListCharacterProps {
  characters: characterType[]
}

export default function ListCharacter({ characters }: ListCharacterProps) {
  const { searchQuery } = useAppStateContext()

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      {filteredCharacters.length === 0 ? (
        <Container className='rounded-xl border-4 border-dotted border-[#badf40] bg-[#43b1c9]'>
          <div className='flex items-center justify-evenly p-10'>
            <Image src={NotFound} alt='No characters found' />
            <h1 className='text-4xl font-semibold text-black '>
              No characters found
            </h1>
          </div>
        </Container>
      ) : (
        <div className='auto-grid grid gap-8'>
          {filteredCharacters.map(character => (
            <CardCaracter key={character.id} character={character} />
          ))}
        </div>
      )}
    </>
  )
}
