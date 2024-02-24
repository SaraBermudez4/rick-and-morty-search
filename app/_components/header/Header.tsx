'use client'

import Image from 'next/image'

import Logo from '@images/logo-rick-and-morty.webp'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center p-14 pb-4 md:pb-0'>
      <Image src={Logo} alt='logo-rick-morty' width={1200} height={1200} />
    </div>
  )
}

export default Header
