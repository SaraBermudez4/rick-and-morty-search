import Image from 'next/image'

import { Divider, IconButton, Stack } from '@mui/material'

import LogoFooter from '@images/logo-footer-rick-and-morty.webp'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <GitHubIcon />,
      url: 'https://github.com/SaraBermudez4/',
    },
    {
      id: 2,
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/sara-bermudez-543906125/',
    },
  ]

  return (
    <div
      className='pt-20'
      style={{
        background:
          'radial-gradient( circle at bottom, rgb(98, 0, 128) 0,#0c0c26 100% )',
      }}>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center  text-lg text-white'>
          <Image
            src={LogoFooter}
            alt='logo-footer'
            width={200}
            height={200}
            priority
          />
          <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            spacing={2}>
            {socialLinks.map((link, index) => (
              <IconButton key={index} size='large' className='text-[#42b5cb]'>
                <a href={link.url} target='__blank' key={link.id}>
                  <i className='text-xl sm:text-2xl md:text-3xl'>{link.icon}</i>
                </a>
              </IconButton>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  )
}
