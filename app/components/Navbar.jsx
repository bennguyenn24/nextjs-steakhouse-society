import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='bg-gray-900 px-4'>
     <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
      <div className='text-white'>
        <Link href="/">
        <Image
                            src="/logo2.png"
                            width={100}
                            height={100}
                            alt=""
                        />
        </Link>
      </div>
      <div className='text-white'>
      <Link href="/collection">Collection</Link>
      </div>
      <div className='text-white'>
      <Link href="/aboutus">About Us</Link>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar