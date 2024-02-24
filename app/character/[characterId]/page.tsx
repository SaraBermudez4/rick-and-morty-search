import Image from 'next/image'

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { getCharacterById } from '@services/character/getCharacterById'

import GoBackButton from '@components/buttons/GoBackButton'
import FavoriteButton from '@components/buttons/FavoriteButton'

import { characterType } from '@helpers/types'

import PublicIcon from '@mui/icons-material/Public'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import StreamIcon from '@mui/icons-material/Stream'
import ReportIcon from '@mui/icons-material/Report'
import Face2Icon from '@mui/icons-material/Face2'

type Props = {
  params?: { characterId: string }
}

const getData = async (id: string) => {
  const res = await getCharacterById(id)
  return res
}

export default async function Page({ params }: Props) {
  const character: characterType = await getData(params?.characterId || '')

  const infoCharacter = [
    {
      id: 1,
      icon: <Face2Icon />,
      text: (
        <span>
          <strong>Species:</strong> {character.species}
        </span>
      ),
    },
    {
      id: 2,
      icon:
        character.status === 'Alive' ? (
          <StreamIcon />
        ) : character.status === 'Dead' ? (
          <ReportIcon />
        ) : (
          <QuestionMarkIcon />
        ),
      text: (
        <span>
          <strong>Status:</strong> {character.status}
        </span>
      ),
    },
    {
      id: 3,
      icon:
        character.gender === 'Male' ? (
          <MaleIcon />
        ) : character.gender === 'Female' ? (
          <FemaleIcon />
        ) : (
          <QuestionMarkIcon />
        ),
      text: (
        <span>
          <strong>Gender:</strong> {character.gender}
        </span>
      ),
    },
    {
      id: 4,
      icon: <PublicIcon />,
      text: (
        <span>
          <strong>Orgin:</strong> {character.origin.name}
        </span>
      ),
    },
  ]

  return (
    <Container>
      <GoBackButton />
      <div
        className=' mt-10 rounded-3xl bg-white'
        style={{ boxShadow: '10px 12px 0px 5px #05001e' }}>
        <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-2 '>
          <div>
            <Image
              src={character.image}
              width={400}
              height={400}
              alt={character.name}
              className='rounded-3xl '
            />
          </div>

          <div className='flex flex-col items-center text-center'>
            <div>
              <FavoriteButton idCharacter={character.id} />
            </div>
            <h1 className='text-3xl font-semibold'>{character.name}</h1>
            <List>
              {infoCharacter.map(info => (
                <ListItem key={info.id}>
                  <ListItemIcon>{info.icon}</ListItemIcon>
                  <ListItemText primary={info.text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Container>
  )
}
