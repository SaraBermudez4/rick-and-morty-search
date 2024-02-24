'use client'

import Link from 'next/link'

import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

import FavoriteButton from '@components/buttons/FavoriteButton'

import { characterType } from '@helpers/types'

interface CardCaracterProps {
  character: characterType
}

export default function CardCaracter({ character }: CardCaracterProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card-container rounded-3xl'>
      <CardMedia
        component='img'
        height={240}
        image={character.image}
        alt={`image-${character.name}`}
      />
      <CardContent>
        <div className='z-50 flex justify-between'>
          <Typography gutterBottom variant='h6' component='div'>
            <strong>Id:</strong> {character.id}
          </Typography>
          <FavoriteButton idCharacter={character.id} />
        </div>
        <Typography gutterBottom variant='h6' component='div'>
          <strong>Nombre:</strong> {character.name}
        </Typography>
        <Link href={`/character/${character.id}`}>
          <Button
            variant='outlined'
            color='info'
            className={
              'rounded-xl border-[#42b5cb] bg-[#42b5cb] text-black hover:border-[#c0df44] hover:bg-[#c0df44] hover:text-black'
            }>
            Ver personaje
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
