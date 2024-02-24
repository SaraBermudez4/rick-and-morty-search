import Image from 'next/image'

import Logo from '@images/logo-rick-and-morty.webp'

function Header() {
  return (
    <div className='p-14'>
      <Image src={Logo} alt='logo-rick-morty' />
    </div>
  )
}

export default Header
