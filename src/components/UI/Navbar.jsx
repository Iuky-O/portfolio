import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV_ITEMS = ['about', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_ITEMS.map(id => document.getElementById(id))
      const current = sections.findLast(s => s && s.getBoundingClientRect().top <= 100)
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl font-semibold gradient-text hover:opacity-80 transition-opacity"
          >
            Iumy/IukyO<span className="text-neon">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  active === item
                    ? 'text-neon bg-neon/10'
                    : 'text-textsecond hover:text-textprimary hover:bg-white/5'
                }`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="glass px-3 py-1.5 rounded-full text-xs font-mono font-medium text-textsecond hover:text-textprimary transition-all duration-300 hover:border-neon/30"
            >
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-xs"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile menu btn */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleLang} className="glass px-2.5 py-1 rounded-full text-xs font-mono text-textsecond">
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-textprimary p-2"
              aria-label="Menu"
            >
              {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass-dark rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-body font-medium transition-all ${
                  active === item ? 'text-neon bg-neon/10' : 'text-textsecond hover:text-textprimary hover:bg-white/5'
                }`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
