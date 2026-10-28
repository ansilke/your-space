import React from "react";

const LEFT_IMAGE =
  "https://res.cloudinary.com/daadrhhk9/image/upload/v1791396476/image_129_ecd5lg.png";

const RIGHT_IMAGE =
  "https://res.cloudinary.com/daadrhhk9/image/upload/v1791396449/image_128_ttgrqj.png";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-white text-[#102d78]"
    >
      {/* =========================================================
          DESKTOP
          ========================================================= */}
      <div className="relative hidden min-h-screen w-full lg:block">

        {/* LEFT TOP IMAGE */}
        <div className="absolute left-[2%] top-[15.8%] h-[32%] w-[31.7%] overflow-hidden">
          <img
            src={LEFT_IMAGE}
            alt="Furniture"
            className="h-full w-full object-cover"
          />
        </div>

        {/* MAIN HEADING */}
        <h1 className="absolute left-[37.8%] top-[19%] z-10 whitespace-nowrap text-[clamp(72px,8vw,138px)] font-medium leading-[0.9] tracking-[-0.055em]">
          get touch.
        </h1>

        {/* DESCRIPTION */}
        <p className="absolute left-[37.8%] top-[41.5%] z-10 w-[29%] text-right text-[clamp(17px,1.35vw,23px)] font-medium leading-[1.16]">
          Have a furniture idea in mind? We'd love to
          hear from you! Get in touch to explore our
          collections, discuss custom designs, and bring
          your dream furniture to life.
        </p>

        {/* LEFT FORM */}
        <form className="absolute left-[3.2%] top-[55%] w-[38.5%]">

          {/* First + Second Name */}
          <div className="grid grid-cols-2 gap-[8%]">
            <div className="border-b-[2px] border-[#102d78] pb-4">
              <input
                type="text"
                placeholder="first name"
                className="w-full bg-transparent text-[19px] font-medium text-[#102d78] outline-none placeholder:text-[#102d78]"
              />
            </div>

            <div className="border-b-[2px] border-[#102d78] pb-4">
              <input
                type="text"
                placeholder="second name"
                className="w-full bg-transparent text-[19px] font-medium text-[#102d78] outline-none placeholder:text-[#102d78]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-8 border-b-[2px] border-[#102d78] pb-4">
            <input
              type="email"
              placeholder="email"
              className="w-full bg-transparent text-[19px] font-medium text-[#102d78] outline-none placeholder:text-[#102d78]"
            />
          </div>

          {/* Subject */}
          <div className="mt-8 border-b-[2px] border-[#102d78] pb-4">
            <input
              type="text"
              placeholder="subject"
              className="w-full bg-transparent text-[19px] font-medium text-[#102d78] outline-none placeholder:text-[#102d78]"
            />
          </div>

          {/* Message */}
          <div className="mt-8 border-b-[2px] border-[#102d78] pb-4">
            <textarea
              rows="1"
              placeholder="massage"
              className="w-full resize-none bg-transparent text-[19px] font-medium text-[#102d78] outline-none placeholder:text-[#102d78]"
            />
          </div>
        </form>

        {/* CENTER VERTICAL LINE */}
        <div className="absolute left-[54.7%] top-[62%] h-[18%] w-px bg-[#102d78]" />

        {/* SEND BUTTON */}
        <button
          type="button"
          className="group absolute bottom-[5.2%] left-[48.5%] flex h-[70px] w-[352px] items-center justify-between rounded-full bg-[#102C80] px-[50px] text-[20px] text-white transition-all duration-300 hover:bg-[#193B9C]"
        >
          <span>send</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* RIGHT LARGE IMAGE */}
        <div className="absolute right-[-1.5%] top-[19%] h-[80%] w-[27%] overflow-hidden">
          <img
            src={RIGHT_IMAGE}
            alt="Furniture chair"
            className="h-full w-full object-cover object-left"
          />
        </div>
      </div>


      {/* =========================================================
          MOBILE
          ========================================================= */}
      <div
        className="
          relative
          flex
          h-[100svh]
          min-h-[700px]
          w-full
          flex-col
          overflow-hidden
          bg-white
          lg:hidden
        "
      >

        {/* =======================================================
            HEADER SPACE
            Header already exists outside this component.
            So we intentionally leave space at the top.
            ======================================================= */}
        <div className="h-[88px] w-full shrink-0" />


        {/* =======================================================
            TOP IMAGE + GET TOUCH
            ======================================================= */}
        <div className="flex w-full shrink-0 items-start px-[20px]">

          {/* LEFT IMAGE */}
          <div
            className="
              h-[132px]
              w-[55%]
              shrink-0
              overflow-hidden
            "
          >
            <img
              src={LEFT_IMAGE}
              alt="Furniture"
              className="h-full w-full object-cover"
            />
          </div>

          {/* GET TOUCH */}
          <h1
            className="
              ml-[13px]
              pt-[8px]
              text-[clamp(48px,15vw,68px)]
              font-medium
              leading-[0.88]
              tracking-[-0.06em]
            "
          >
            get
            <br />
            touch.
          </h1>
        </div>


        {/* =======================================================
            FORM
            ======================================================= */}
        <form
          className="
            mt-[25px]
            w-full
            shrink-0
            px-[20px]
          "
        >

          {/* FIRST + SECOND NAME */}
          <div className="grid grid-cols-2 gap-[24px]">

            <div className="border-b-[1.5px] border-[#102d78] pb-[8px]">
              <input
                type="text"
                placeholder="first name"
                className="
                  w-full
                  bg-transparent
                  text-[14px]
                  font-medium
                  text-[#102d78]
                  outline-none
                  placeholder:text-[#102d78]
                "
              />
            </div>

            <div className="border-b-[1.5px] border-[#102d78] pb-[8px]">
              <input
                type="text"
                placeholder="second name"
                className="
                  w-full
                  bg-transparent
                  text-[14px]
                  font-medium
                  text-[#102d78]
                  outline-none
                  placeholder:text-[#102d78]
                "
              />
            </div>

          </div>


          {/* EMAIL */}
          <div className="mt-[19px] border-b-[1.5px] border-[#102d78] pb-[8px]">
            <input
              type="email"
              placeholder="email"
              className="
                w-full
                bg-transparent
                text-[14px]
                font-medium
                text-[#102d78]
                outline-none
                placeholder:text-[#102d78]
              "
            />
          </div>


          {/* SUBJECT */}
          <div className="mt-[19px] border-b-[1.5px] border-[#102d78] pb-[8px]">
            <input
              type="text"
              placeholder="subject"
              className="
                w-full
                bg-transparent
                text-[14px]
                font-medium
                text-[#102d78]
                outline-none
                placeholder:text-[#102d78]
              "
            />
          </div>


          {/* MESSAGE */}
          <div className="mt-[19px] border-b-[1.5px] border-[#102d78] pb-[8px]">
            <textarea
              rows="1"
              placeholder="massage"
              className="
                w-full
                resize-none
                bg-transparent
                text-[14px]
                font-medium
                text-[#102d78]
                outline-none
                placeholder:text-[#102d78]
              "
            />
          </div>


          {/* SEND BUTTON */}
          <button
            type="button"
            className="
              group
              ml-auto
              mt-[19px]
              flex
              h-[42px]
              w-[45%]
              items-center
              justify-between
              rounded-full
              bg-[#102C80]
              px-[19px]
              text-[14px]
              text-white
              transition-all
              duration-300
              hover:bg-[#193B9C]
            "
          >
            <span>send</span>

            <span className="text-[19px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </form>


        {/* =======================================================
            BOTTOM SECTION
            LEFT TEXT + RIGHT IMAGE

            IMPORTANT:
            - No horizontal gap on right
            - Image touches right edge
            - Image touches bottom edge
            - No bottom padding
            ======================================================= */}
        <div
          className="
            relative
            mt-auto
            h-[350px]
            w-full
            shrink-0
            overflow-hidden
          "
        >

          {/* LEFT TEXT */}
          <div
            className="
              absolute
              left-[20px]
              top-[4px]
              z-20
              w-[52%]
            "
          >
            <h2
              className="
                text-[clamp(34px,10.5vw,52px)]
                font-medium
                leading-[1.03]
                tracking-[-0.045em]
              "
            >
              Let's Create
              <br />
              Something
              <br />
              Beautiful
              <br />
              Together.
            </h2>

            {/* VERTICAL LINE */}
            <div
              className="
                ml-[43%]
                mt-[13px]
                h-[95px]
                w-px
                bg-[#102d78]
              "
            />
          </div>


          {/* =====================================================
              RIGHT IMAGE

              IMPORTANT:
              right: 0
              bottom: 0
              no padding
              no margin
              ===================================================== */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-[320px]
              w-[48%]
              overflow-hidden
            "
          >
            <img
              src={RIGHT_IMAGE}
              alt="Furniture chair"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-left
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;