'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black text-white h-16 px-8 flex items-center justify-between shadow-md fixed top-0 w-full z-50">
      <Link href="/">
        <a className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={120} height={30} />
        </a>
      </Link>
      <div className="flex space-x-8 text-sm font-medium tracking-wide">
        <Link href="/about"><a className="hover:text-gray-400">About</a></Link>
        <Link href="/capabilities"><a className="hover:text-gray-400">Capabilities</a></Link>
        <Link href="/products"><a className="hover:text-gray-400">Products</a></Link>
        <Link href="/careers"><a className="hover:text-gray-400">Careers</a></Link>
      </div>
    </nav>
  );
}