import React from 'react'

function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white font-['Inter'] text-[#193B91]">

      {/* ================= DESKTOP RIGHT IMAGE ================= */}
      <div className="absolute right-0 top-0 hidden h-full w-[34.7%] overflow-hidden lg:block">
        <img
          src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616555/20_Dreamy_Blue_Pink_Living_Rooms__Get_Inspired_gr3zep.jpg"
          alt="Furniture interior"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* ================= DESKTOP CONTENT ================= */}
      <div className="relative hidden  min-h-screen w-full lg:block lg:w-[65.3%]">

        {/* LEFT TOP IMAGE */}
        <div className="absolute left-[3.1%] top-[4%] aspect-[2/3] w-[29.5%] overflow-hidden">
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616748/Blue_Pink_Living_Room__Modern_Chic_qfvbrz.jpg"
            alt="Furniture chair"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* MAIN HEADING */}
        <div className="absolute left-[35.5%] top-[19.5%] w-[60%]">
          <h1 className="text-[clamp(30px,3.5vw,50px)] text-center font-bold leading-[1.15] tracking-[-1.8px] text-[#193B91]">
            <span className="block whitespace-nowrap">
              Crafted for <span className="italic font-medium">Your Space.</span>
            </span>

            <span className="block whitespace-nowrap">
              Designed for Your Story.
            </span>
          </h1>
        </div>

        {/* DECORATIVE VERTICAL LINE */}
        <div className="absolute left-[65.2%] top-[37%] h-[130px] w-px bg-[#193B91]" />

        {/* FIRST PARAGRAPH */}
        <div className="absolute left-[3.1%] top-[57.5%] w-[96%]">
          <p className="text-[clamp(15px,1.35vw,22px)] font-semibold leading-[1.35] tracking-[-0.35px] text-[#193B91]">
            As a growing furniture brand, we bring your ideas to life through thoughtfully designed, beautifully crafted, and fully customizable furniture. Whether you’re furnishing a cozy home, creating a modern workspace, or looking for a unique piece that reflects your personality, we make it happen just the way you imagine.
          </p>
        </div>

        {/* SECOND PARAGRAPH */}
        <div className="absolute left-[3.1%] top-[74.5%] w-[43%]">
          <p className="text-[clamp(15px,1.35vw,22px)] font-semibold leading-[1.35] tracking-[-0.35px] text-[#193B91]">
            From choosing the design and materials to the final finishing touches, every detail is shaped around your preferences.
          </p>
        </div>

        {/* BOTTOM TAGLINE */}
        <p className="absolute bottom-[9.5%] left-[1.1%] w-[96%] text-right text-[15px] font-extrabold leading-tight text-[#193B91]">
          -Your vision. Your style. Our craftsmanship.
        </p>

      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="relative h-[100svh] w-full overflow-hidden bg-white lg:hidden">

        {/* MOBILE HEADING */}
        <div className="absolute left-[4.2%] right-[3%] top-[9.5%]">
          <h1 className="text-[clamp(29px,7.2vw,59px)] text-center font-bold leading-[1.12] tracking-[-1.5px] text-[#193B91]">
            <span className="block whitespace-nowrap">
              Crafted for <span className="italic font-medium">Your Space.</span>
            </span>

            <span className="block whitespace-nowrap">
              Designed for Your Story.
            </span>
          </h1>
        </div>

        {/* LEFT TOP IMAGE */}
        <div className="absolute left-[4.2%] top-[21.3%] h-[28svh] w-[56%] overflow-hidden">
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616748/Blue_Pink_Living_Room__Modern_Chic_qfvbrz.jpg"
            alt="Furniture chair"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DECORATIVE VERTICAL LINE */}
        <div className="absolute left-[80.8%] top-[27.3%] h-[16.5%] w-[1.5px] bg-[#193B91]" />

        {/* FIRST PARAGRAPH - FULL WIDTH */}
        <div className="absolute left-[1.8%] right-[1.8%] top-[54.5%]">
          <p className="text-[clamp(14px,3.8vw,5px)] font-semibold leading-[1.22] tracking-[-0.25px] text-[#193B91]">
            As a growing furniture brand, we bring your ideas to life through thoughtfully designed, beautifully crafted, and fully customizable furniture. Whether you’re furnishing a cozy home, creating a modern workspace, or looking for a unique piece that reflects your personality, we make it happen just the way you imagine.
          </p>
        </div>

        {/* SECOND PARAGRAPH - LEFT SIDE */}
        <div className="absolute left-[1.8%] top-[68.3%] w-[49%]">
          <p className="text-[clamp(14px,3.8vw,5px)] font-semibold leading-[1.3] tracking-[-0.25px] text-[#193B91]">
            From choosing the design and materials to the final finishing touches, every detail is shaped around your preferences.
          </p>
        </div>

        {/* RIGHT IMAGE - TOUCHING SCREEN BOTTOM */}
        <div className="absolute bottom-0 right-0 h-[32%] w-[47.3%] overflow-hidden">
          <img
            src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790616555/20_Dreamy_Blue_Pink_Living_Rooms__Get_Inspired_gr3zep.jpg"
            alt="Furniture interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* BOTTOM TAGLINE - LEFT OF RIGHT IMAGE */}
        <p className="absolute bottom-[6.2%] left-[5.5%] w-[40%] text-right text-[clamp(14px,3.8vw,5px)] font-extrabold leading-tight text-[#193B91]">
          -Your vision. Your style. Our craftsmanship.
        </p>

      </div>
    </section>
  )
}

export default About