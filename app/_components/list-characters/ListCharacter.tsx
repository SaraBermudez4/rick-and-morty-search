import CardCaracter from '../card-caracter/CardCaracter'

import { characterType } from '@helpers/types'

interface ListCharacterProps {
  characters: characterType[]
}

export default function ListCharacter({ characters }: ListCharacterProps) {
  return (
    <div className='auto-grid grid gap-8'>
      {characters.map(character => (
        <CardCaracter key={character.id} character={character} />
      ))}
    </div>
  )
}
