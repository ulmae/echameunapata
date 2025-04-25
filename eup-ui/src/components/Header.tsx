'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logotipo.png" alt="Logo" width={80} height={60} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-red-900">
          <Link href="/" className="hover:text-(--info) py-2">Inicio</Link>
          <Link href="/acerca-de" className="hover:text-(--info) py-2">Sobre Nosotros</Link>
          <Link href="/adopta" className="hover:text-(--info) py-2">Adopta</Link>
          <Link href="/contactanos" className="text-white bg-(--info) hover:bg-(--brand) py-2 px-4 rounded-full">Contáctanos</Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white  px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/test" className="block hover:text-blue-600">Test</Link>
        </nav>
      )}
    </header>
  )
}

export default Header
