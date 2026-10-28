import React from "react";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#203985] text-white">

      {/* =========================================================
          DESKTOP FOOTER
          ========================================================= */}
      <div className="relative hidden h-[339px] w-full lg:block">

        {/* LARGE BACKGROUND TEXT */}
        <div
          className="
            absolute
            left-[0.7%]
            top-[5%]
            z-0
            select-none
            whitespace-nowrap
            text-[clamp(100px,9.8vw,200px)]
            font-semibold
            leading-none
            tracking-[-0.06em]
            text-[#183477]
          "
        >
          yourspace.
        </div>

        {/* EMAIL + PHONE */}
        <div
          className="
            absolute
            right-[2.5%]
            top-[13%]
            z-10
            flex
            flex-col
            items-end
            text-right
          "
        >
          <a
            href="mailto:yourspace@gmail.com"
            className="
              whitespace-nowrap
              text-[clamp(34px,3.35vw,68px)]
              font-normal
              leading-none
              tracking-[-0.035em]
              text-white
              transition-opacity
              hover:opacity-80
            "
          >
            yourspace@gmail.com
          </a>

          <a
            href="tel:+15551234567"
            className="
              mt-[25px]
              whitespace-nowrap
              text-[clamp(22px,1.65vw,34px)]
              font-medium
              leading-none
              tracking-[-0.02em]
              text-white
              transition-opacity
              hover:opacity-80
            "
          >
            +1 (555) 123-4567
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div
          className="
            absolute
            bottom-[25px]
            left-[25px]
            z-10
            flex
            items-center
            gap-[27px]
          "
        >

          {/* INSTAGRAM */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-[40px] w-[40px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="white"
                strokeWidth="2.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.2"
                stroke="white"
                strokeWidth="2.8"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1.3"
                fill="white"
              />
            </svg>
          </a>

          {/* WHATSAPP */}
          <a
            href="#"
            aria-label="WhatsApp"
            className="flex h-[43px] w-[43px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.768.46 3.43 1.266 4.873L2 22l5.284-1.239A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.14.736.748-3.05-.195-.313A8.17 8.17 0 1 1 12 20.2Zm4.48-6.12c-.245-.123-1.45-.715-1.675-.797-.225-.082-.389-.123-.553.123-.164.245-.635.797-.778.96-.143.164-.286.184-.532.061-.245-.123-1.036-.382-1.973-1.219-.73-.652-1.223-1.456-1.366-1.701-.143-.245-.015-.378.108-.5.11-.109.245-.286.368-.429.123-.143.164-.245.245-.409.082-.164.041-.307-.02-.43-.061-.123-.553-1.333-.757-1.825-.2-.48-.402-.415-.553-.423l-.47-.008c-.164 0-.43.061-.655.307-.225.245-.86.84-.86 2.05 0 1.21.88 2.378 1.003 2.542.123.164 1.73 2.64 4.19 3.702.586.253 1.043.404 1.4.517.588.187 1.123.161 1.546.098.472-.07 1.45-.593 1.655-1.166.204-.573.204-1.064.143-1.166-.061-.102-.225-.164-.47-.287Z" />
            </svg>
          </a>

          {/* YOUTUBE */}
          <a
            href="#"
            aria-label="YouTube"
            className="flex h-[38px] w-[48px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.103C19.56 3.6 12 3.6 12 3.6s-7.56 0-9.408.483A2.97 2.97 0 0 0 .502 6.186 30.7 30.7 0 0 0 .02 12a30.7 30.7 0 0 0 .482 5.814 2.97 2.97 0 0 0 2.09 2.103c1.848.483 9.408.483 9.408.483s7.56 0 9.408-.483a2.97 2.97 0 0 0 2.09-2.103A30.7 30.7 0 0 0 23.98 12a30.7 30.7 0 0 0-.482-5.814ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </a>
        </div>

        {/* LOGO */}
        <div
          className="
            absolute
            bottom-[22px]
            right-[25px]
            z-10
            text-[clamp(20px,3.3vw,38px)]
            font-bold
            leading-none
            tracking-[-0.07em]
            text-white
          "
        >
          ys.
        </div>
      </div>


      {/* =========================================================
          MOBILE FOOTER
          ========================================================= */}
      <div
        className="
          relative
          block
          h-[330px]
          w-full
          overflow-hidden
          lg:hidden
        "
      >

        {/* LARGE BACKGROUND TEXT */}
        <div
          className="
            absolute
            left-[4%]
            top-[7%]
            z-0
            select-none
            whitespace-nowrap
            text-[clamp(62px,16vw,120px)]
            font-semibold
            leading-none
            tracking-[-0.06em]
            text-[#183477]
          "
        >
          yourspace.
        </div>


        {/* EMAIL + PHONE */}
        <div
          className="
            absolute
            right-[6%]
            top-[34%]
            z-10
            flex
            flex-col
            items-end
            text-right
          "
        >
          <a
            href="mailto:yourspace@gmail.com"
            className="
              whitespace-nowrap
              text-[clamp(23px,6.8vw,60px)]
              font-normal
              leading-none
              tracking-[-0.035em]
              text-white
            "
          >
            yourspace@gmail.com
          </a>

          <a
            href="tel:+15551234567"
            className="
              mt-[14px]
              whitespace-nowrap
              text-[clamp(16px,3.8vw,32px)]
              font-medium
              leading-none
              tracking-[-0.02em]
              text-white
            "
          >
            +1 (555) 123-4567
          </a>
        </div>


        {/* =====================================================
            SMALLER MOBILE SOCIAL ICONS
            ===================================================== */}
        <div
          className="
            absolute
            bottom-[22px]
            left-[20px]
            z-10
            flex
            items-center
            gap-[16px]
          "
        >

          {/* INSTAGRAM */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-[29px] w-[29px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="white"
                strokeWidth="2.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.2"
                stroke="white"
                strokeWidth="2.8"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1.3"
                fill="white"
              />
            </svg>
          </a>


          {/* WHATSAPP */}
          <a
            href="#"
            aria-label="WhatsApp"
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.768.46 3.43 1.266 4.873L2 22l5.284-1.239A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.14.736.748-3.05-.195-.313A8.17 8.17 0 1 1 12 20.2Zm4.48-6.12c-.245-.123-1.45-.715-1.675-.797-.225-.082-.389-.123-.553.123-.164.245-.635.797-.778.96-.143.164-.286.184-.532.061-.245-.123-1.036-.382-1.973-1.219-.73-.652-1.223-1.456-1.366-1.701-.143-.245-.015-.378.108-.5.11-.109.245-.286.368-.429.123-.143.164-.245.245-.409.082-.164.041-.307-.02-.43-.061-.123-.553-1.333-.757-1.825-.2-.48-.402-.415-.553-.423l-.47-.008c-.164 0-.43.061-.655.307-.225.245-.86.84-.86 2.05 0 1.21.88 2.378 1.003 2.542.123.164 1.73 2.64 4.19 3.702.586.253 1.043.404 1.4.517.588.187 1.123.161 1.546.098.472-.07 1.45-.593 1.655-1.166.204-.573.204-1.064.143-1.166-.061-.102-.225-.164-.47-.287Z" />
            </svg>
          </a>


          {/* YOUTUBE */}
          <a
            href="#"
            aria-label="YouTube"
            className="flex h-[29px] w-[37px] items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.103C19.56 3.6 12 3.6 12 3.6s-7.56 0-9.408.483A2.97 2.97 0 0 0 .502 6.186 30.7 30.7 0 0 0 .02 12a30.7 30.7 0 0 0 .482 5.814 2.97 2.97 0 0 0 2.09 2.103c1.848.483 9.408.483 9.408.483s7.56 0 9.408-.483a2.97 2.97 0 0 0 2.09-2.103A30.7 30.7 0 0 0 23.98 12a30.7 30.7 0 0 0-.482-5.814ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </a>

        </div>


        {/* MOBILE LOGO */}
        <div
          className="
            absolute
            bottom-[22px]
            right-[20px]
            z-10
            text-[clamp(14px,9vw,25px)]
            font-bold
            leading-none
            tracking-[-0.07em]
            text-white
          "
        >
          ys.
        </div>

      </div>

    </footer>
  );
}

export default Footer;