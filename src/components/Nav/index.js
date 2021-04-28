import Link from 'next/link'

function Nav() {
  return (
    <nav className='flex items-center justify-between'>
      <Hamburger />
      <Link href='/'>
        <a className='text-2xl font-bold text-purple-dark xs:text-white xs:absolute xs:top-10'>Quran App</a>
      </Link>
    </nav>
  )
}


function Hamburger() {
  return (
    <div className='flex flex-col w-6 h-6 justify-evenly sm:hidden'>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
    </div>
  )
}

export default Nav