import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Collections from './Collections'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionByPath = {
      '/': 'home',
      '/about': 'about',
      '/collections': 'collections',
    }

    const targetSectionId =
      location.hash?.replace('#', '') ||
      sectionByPath[location.pathname] ||
      'home'

    const timer = window.setTimeout(() => {
      const targetSection = document.getElementById(targetSectionId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: location.pathname === '/' && !location.hash
            ? 'auto'
            : 'smooth',
          block: 'start',
        })
      } else if (targetSectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        })
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <main className="relative w-full">

      {/* FIXED HEADER */}
      <Header />

      {/* HOME / HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen w-full scroll-mt-0"
      >

        {/* DESKTOP LEFT IMAGE */}
        <div className="absolute left-0 top-0 hidden h-full w-[37.5%] overflow-hidden md:block">
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616002/ChatGPT_Image_Sep_28_2026_10_49_32_PM_k8qs7t.png"
            alt="Furniture Interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DESKTOP CONTENT */}
        <div className="relative hidden min-h-screen w-[62.5%] md:ml-[37.5%] md:block">

          {/* DESCRIPTION */}
          <p className="absolute left-[1.5%] top-[36.5%] w-[78%] max-w-[850px] text-[clamp(22px,2.15vw,36px)] font-normal leading-[1.25] tracking-[-0.8px] text-[#102C80]">
            We believe that furniture is more than just
            functional pieces. It's a reflection of your style,
            taste and personality.
          </p>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            className="group absolute right-[2.5%] top-[69%] z-50 flex h-[60px] w-[44%] max-w-[320px] items-center justify-between rounded-full bg-[#102C80] px-5 text-[15px] font-normal text-white transition-colors duration-300 hover:bg-[#193B9C]"
          >
            <span>Talk with us</span>
            <span className="text-[24px] mb-2 font-light transition-transform duration-300 group-hover:translate-x-1">
              ⟶
            </span>
          </button>

          {/* TITLE */}
          <h1 className="absolute bottom-[30px] left-[1.5%] whitespace-nowrap text-[clamp(198px,13.2vw,230px)] font-medium leading-[0.95] tracking-[-0.09em] text-[#193B91]">
            your space
          </h1>

        </div>

        {/* MOBILE LAYOUT */}
        <div className="flex min-h-screen w-full flex-col md:hidden">

          {/* MOBILE CONTENT */}
          <div className="relative h-[46svh] min-h-[390px] w-full shrink-0">

            {/* DESCRIPTION */}
            <p className="absolute left-[3.6%] right-[3.6%] top-[29%] text-[clamp(18px,4.1vw,22px)] font-normal leading-[1.2] tracking-[-0.5px] text-[#102C80]">
              We believe that furniture is more than just
              functional pieces. It's a reflection of your style,
              taste and personality.
            </p>

            {/* CONTACT BUTTON */}
            <button
              type="button"
              className="group absolute right-[2.5%] top-[67%] flex h-[40px] w-[44%] max-w-[220px] items-center justify-between rounded-full bg-[#102C80] px-5 text-[10px] font-normal text-white transition-colors duration-300 hover:bg-[#193B9C]"
            >
              <span>Talk with us</span>
              <span className="text-[20px] font-light transition-transform duration-300 group-hover:translate-x-1">
                ⟶
              </span>
            </button>

            {/* TITLE */}
            <h1 className="absolute bottom-3 left-[2%] whitespace-nowrap text-[22.5vw] font-medium leading-[0.9] tracking-[-0.11em] text-[#193B91]">
              your space
            </h1>

          </div>

          {/* MOBILE IMAGE */}
          <div className="relative min-h-[54svh] w-full flex-1 overflow-hidden">
            <img
              src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616002/ChatGPT_Image_Sep_28_2026_10_49_32_PM_k8qs7t.png"
              alt="Furniture Interior"
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative w-full scroll-mt-0"
      >
        <About />
      </section>

      {/* COLLECTIONS SECTION */}
      <div className="relative w-full">
        <Collections />
      </div>
      <Contact/>

      <Footer/>

    </main>
  )
}

export default Home