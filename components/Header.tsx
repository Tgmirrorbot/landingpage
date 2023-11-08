import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 bg-gray-800">
      <div className="px-4 py-3 sm:p-0 flex items-center justify-between">
        <div>
          <Image className="h-8" src="/logo.svg" alt="Logo" />
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <Link href="/">
          <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</a>
        </Link>
        <Link href="/about">
          <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">About Us</a>
        </Link>
        <Link href="/contact">
          <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Contact Us</a>
        </Link>
      </nav>
    </header>
  )
}