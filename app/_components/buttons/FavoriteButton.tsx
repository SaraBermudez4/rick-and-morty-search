'use client'

import { IconButton } from '@mui/material'

import { useAppStateContext } from '@context/AppStateContext'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface FavoriteButtonProps {
  idCharacter: number
}

function FavoriteButton({ idCharacter }: FavoriteButtonProps) {
  const { favoriteCharacters, setFavorites } = useAppStateContext()

  const isFavorite = favoriteCharacters?.some(
    character => character === idCharacter
  )

  const addFavoriteCharacter = () => {
    if (isFavorite) {
      const newFavorites = favoriteCharacters.filter(
        character => character !== idCharacter
      )
      return setFavorites(newFavorites)
    }
    setFavorites([...favoriteCharacters, idCharacter])
  }

  return (
    <IconButton
      className='text-[#42b5cb]'
      aria-label='add favorite character'
      size='large'
      onClick={addFavoriteCharacter}>
      {isFavorite ? (
        <FavoriteIcon className='text-[#42b5cb]' />
      ) : (
        <FavoriteBorderIcon className='text-[#42b5cb]' />
      )}
    </IconButton>
  )
}

export default FavoriteButton
