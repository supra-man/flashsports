import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--color-tennis-green)] rounded-full flex items-center justify-center text-white font-bold text-xl">
              FS
            </div>
            <span className="font-bold text-xl text-[var(--color-dark-gray)] tracking-tight">Flash Sports Nepal</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[var(--color-clay-red)] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[var(--color-clay-red)] hover:bg-[var(--color-clay-red-light)] text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Book Court
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[var(--color-clay-red)] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-[var(--color-clay-red)] text-white px-6 py-3 rounded-full font-medium"
            >
              Book Court
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
