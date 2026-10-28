import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const sectionIds = ['home', 'about', 'collections', 'contact']

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((sectionId) => document.getElementById(sectionId))
        .filter(Boolean)

      // Collection Details പോലുള്ള section ഇല്ലാത്ത pages
      if (sections.length === 0) {
        if (location.pathname.startsWith('/collections/')) {
          setActiveSection('collections')
        } else if (location.pathname === '/about') {
          setActiveSection('about')
        } else {
          setActiveSection('home')
        }

        return
      }

      const activationLine = 150
      let currentSection = 'home'

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId)

        if (section) {
          const sectionTop = section.getBoundingClientRect().top

          if (sectionTop <= activationLine) {
            currentSection = sectionId
          }
        }
      })

      // Page-ന്റെ ഏറ്റവും താഴെ എത്തിയാൽ Contact active ആക്കുക
      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      if (pageBottom && document.getElementById('contact')) {
        currentSection = 'contact'
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [location.pathname])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      setActiveSection(sectionId)

      // എല്ലാ sections-ഉം same scroll behavior
      // Contact-ന് ഇനി extra manual gap ഇല്ല
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setIsOpen(false)
      return
    }

    const routes = {
      home: '/',
      about: '/about',
      collections: '/collections',
      contact: '/#contact',
    }

    navigate(routes[sectionId] || '/')
    setIsOpen(false)
  }

  const renderDesktopDot = (sectionId) => {
    if (activeSection !== sectionId) return null

    return (
      <span className="absolute -bottom-[9px] left-1/2 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#102C80]" />
    )
  }

  const renderMobileDot = (sectionId) => {
    if (activeSection !== sectionId) return null

    return (
      <span className="h-1.5 w-1.5 rounded-full bg-[#102C80]" />
    )
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent font-['Inter']">
      <div className="relative flex h-[75px] w-full items-start justify-between px-[4.2%] md:h-[110px] md:px-[3%]">

        {/* DESKTOP NAVIGATION */}
        <nav className="absolute left-1/2 top-[20px] hidden -translate-x-1/2 items-center gap-[34px] rounded-full border border-white/30 bg-[#D3D7E6]/45 px-[38px] py-[20px] shadow-lg shadow-[#102C80]/5 backdrop-blur-sm md:flex">

          {/* HOME */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="relative whitespace-nowrap text-[21px] font-normal text-[#102C80] transition-opacity hover:opacity-70"
          >
            Home
            {renderDesktopDot('home')}
          </button>

          {/* ABOUT */}
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="relative whitespace-nowrap text-[21px] font-normal text-[#102C80] transition-opacity hover:opacity-70"
          >
            About
            {renderDesktopDot('about')}
          </button>

          {/* COLLECTIONS */}
          <button
            type="button"
            onClick={() => scrollToSection('collections')}
            className="relative whitespace-nowrap text-[21px] font-normal text-[#102C80] transition-opacity hover:opacity-70"
          >
            Collections
            {renderDesktopDot('collections')}
          </button>

          {/* CONNECT US */}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="relative whitespace-nowrap text-[21px] font-normal text-[#102C80] transition-opacity hover:opacity-70"
          >
            connect us
            {renderDesktopDot('contact')}
          </button>
        </nav>

        {/* MOBILE LOGO */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="absolute left-[4.2%] top-[12px] text-[30px] font-extrabold leading-none tracking-[-2px] text-[#102C80] md:hidden"
        >
          ys.
        </button>

        {/* DESKTOP LOGO */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="absolute right-[3%] top-[35px] hidden text-[36px] font-extrabold leading-none tracking-[-2px] text-[#102C80] transition-opacity hover:opacity-80 md:block"
        >
          ys.
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="absolute right-[4.2%] top-[13px] flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[1.5px] w-[19px] rounded-full bg-[#102C80] transition-transform duration-300 ${
              isOpen
                ? 'translate-y-[3.25px] rotate-45'
                : ''
            }`}
          />

          <span
            className={`h-[1.5px] w-[19px] rounded-full bg-[#102C80] transition-all duration-300 ${
              isOpen
                ? '-translate-y-[3.25px] -rotate-45'
                : ''
            }`}
          />
        </button>

        {/* MOBILE DROPDOWN */}
        <div
          className={`absolute right-[4.2%] top-[55px] w-[190px] origin-top-right rounded-2xl border border-white/40 bg-[#D3D7E6]/40 p-4 shadow-lg shadow-[#102C80]/10 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isOpen
              ? 'visible translate-y-0 scale-100 opacity-100'
              : 'invisible -translate-y-2 scale-95 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4">

            {/* MOBILE HOME */}
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center justify-between text-left text-[16px] text-[#102C80]"
            >
              Home
              {renderMobileDot('home')}
            </button>

            {/* MOBILE ABOUT */}
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="flex items-center justify-between text-left text-[16px] text-[#102C80]"
            >
              About
              {renderMobileDot('about')}
            </button>

            {/* MOBILE COLLECTIONS */}
            <button
              type="button"
              onClick={() => scrollToSection('collections')}
              className="flex items-center justify-between text-left text-[16px] text-[#102C80]"
            >
              Collections
              {renderMobileDot('collections')}
            </button>

            {/* MOBILE CONTACT */}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-between text-left text-[16px] text-[#102C80]"
            >
              connect us
              {renderMobileDot('contact')}
            </button>

          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header