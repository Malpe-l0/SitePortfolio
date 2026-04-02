import { useState } from 'react'
import logo from '../assets/logo.png'

const navItems = ['Home', 'Progetti', 'Esperienze', 'Contatti']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[82px] bg-[#222]/70 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-10">
        <img src={logo} alt="Logo" className="h-10 object-contain" />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-16">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-white tracking-[0.3px] hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#222]/95 backdrop-blur-sm px-6 pb-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-white tracking-[0.3px] hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
