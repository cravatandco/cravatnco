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
        <Link href="/the_firm"><a className="hover:text-gray-400">The Firm</a></Link>
        <Link href="/our-philosophy"><a className="hover:text-gray-400">Our  Philosophy</a></Link>
        <Link href="/capabilities"><a className="hover:text-gray-400">Capabilities</a></Link>
        <Link href="/The Buisness of Advocacy"><a className="hover:text-gray-400">The Buisness of Aodvocay</a></Link>
        <Link href="/Clientele"><a className="hover:text-gray-400">Clientele</a></Link>
        // the firm (home page)
// our-philosophy (about us)
// the buisness of adovocay (lobbying/services )
//  Discretion & Clientele (Clients)
// The  Lobbyesses & Lobbyists (Team)
// Contact the Offices (Contact Page)
// The Seal (Symbolism Page)
// Positions & Papers (Thought Leadership / Library)
//Induction (Careers / Apprenticeship) 
// Ethics & Disclosure (Compliance Page)
      </div>
    </nav>
  );
}