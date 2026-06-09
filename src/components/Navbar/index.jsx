import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSnowflake } from 'react-icons/fa'
import { NAV_ITEMS, WHATSAPP_URL } from '../../utils/constants'
import { useScrollSpy, useScrollToSection } from '../../hooks/useScrollSpy'

const sectionIds = NAV_ITEMS.map((i) => i.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)
  const scrollTo = useScrollToSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    scrollTo(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F172A] shadow-lg shadow-black/20' : 'bg-[#0F172A]/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#inicio')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center group-hover:bg-[#3385FF] transition-colors">
              <FaSnowflake className="text-white text-lg" />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-base leading-tight">Costa</span>
              <span className="block text-[#0066FF] text-xs font-medium leading-tight tracking-wider uppercase">Ar Condicionado</span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#0066FF] bg-[#0066FF]/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F172A] border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#0066FF] text-white text-center py-3 rounded-lg font-semibold text-sm"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
