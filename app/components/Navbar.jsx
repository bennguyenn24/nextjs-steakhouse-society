import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-gray-900 px-4'>
     <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
      <div className='text-white'>Logo</div>
      <div className='text-white'>
      <Link href="/steaks">Steak</Link>
      </div>
      <div className='text-white'>
      <Link href="/pork">Pork</Link>
      </div>
      <div className='text-white'>
      <Link href="/seafood">Seafood</Link>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar