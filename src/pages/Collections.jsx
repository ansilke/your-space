import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collectionsData } from "./CollectionDetails";

function Collections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const totalCollections = collectionsData.length;

  const previousCollection = () => {
    setActiveIndex((current) =>
      current === 0 ? totalCollections - 1 : current - 1
    );
  };

  const nextCollection = () => {
    setActiveIndex((current) =>
      current === totalCollections - 1 ? 0 : current + 1
    );
  };

  const openCollectionDetails = (id) => {
    navigate(`/collections/${id}`);
  };

  const description =
    "Explore our curated collection of beautifully crafted furniture, where style meets comfort and every detail is made to inspire. Find your perfect fit or customize it to match your vision.";

  // Desktop: show three cards at a time
  const visibleDesktopCollections = Array.from(
    { length: 3 },
    (_, index) =>
      collectionsData[(activeIndex + index) % totalCollections]
  );

  return (
    <section
      id="collections"
      className="relative min-h-screen w-full bg-white px-6 pb-16 pt-[100px] sm:px-8 lg:flex lg:items-center lg:px-12 lg:pb-10 lg:pt-32 xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* MOBILE HEADING */}
        <h2 className="mb-12 text-[38px] font-bold leading-[1.15] tracking-[-1.5px] text-[#102d78] sm:mb-16 sm:text-[44px] lg:hidden">
          - Designed for
          <br />
          Every Space
        </h2>

        {/* DESKTOP HEADING + DESCRIPTION */}
        <div className="mb-10 hidden grid-cols-1 items-start gap-6 lg:mb-12 lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-1.5px] text-[#102d78] sm:text-[40px] lg:text-[43px]">
            -Designed for Every Space
          </h2>

          <p className="max-w-[800px] text-[16px] font-semibold leading-[1.35] text-[#17377f] sm:text-[17px] lg:text-[18px]">
            {description}
          </p>
        </div>

        {/* MOBILE: SINGLE CARD CAROUSEL */}
        <div className="relative flex w-full items-center justify-center lg:hidden">

          {/* Previous arrow */}
          <button
            type="button"
            onClick={previousCollection}
            aria-label="Previous collection"
            className="absolute left-0 top-1/2 z-20 flex h-12 w-8 -translate-y-1/2 items-center justify-center text-[36px] font-medium leading-none text-[#102d78] transition-transform duration-200 hover:-translate-x-1 sm:left-[2%]"
          >
            ‹
          </button>

          {/* Active card */}
          <button
            type="button"
            onClick={() =>
              openCollectionDetails(collectionsData[activeIndex].id)
            }
            className="group w-[78%] max-w-[560px] rounded-[48px] bg-[#102d78] px-[clamp(22px,5vw,42px)] pb-[clamp(38px,8vw,65px)] pt-[clamp(28px,6vw,50px)] text-left shadow-md transition-all duration-300 hover:shadow-xl sm:w-[72%] sm:rounded-[60px]"
          >
            <div className="aspect-[5/6] w-full overflow-hidden rounded-[30px] bg-white sm:rounded-[38px]">
              <img
                key={collectionsData[activeIndex].cardImage}
                src={collectionsData[activeIndex].cardImage}
                alt={collectionsData[activeIndex].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-[clamp(38px,8vw,65px)] text-center text-[clamp(17px,3.8vw,30px)] font-bold leading-tight text-white">
              {collectionsData[activeIndex].title}
            </h3>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={nextCollection}
            aria-label="Next collection"
            className="absolute right-0 top-1/2 z-20 flex h-12 w-8 -translate-y-1/2 items-center justify-center text-[36px] font-medium leading-none text-[#102d78] transition-transform duration-200 hover:translate-x-1 sm:right-[2%]"
          >
            ›
          </button>
        </div>

        {/* MOBILE DESCRIPTION */}
        <p className="mt-29 text-[17px] text-center font-semibold leading-[1.4] text-[#17377f] sm:mt-20 sm:text-[19px] lg:hidden">
          {description}
        </p>

        {/* DESKTOP: THREE CARD CAROUSEL */}
        <div className="relative hidden lg:block">

          {/* Previous arrow */}
          <button
            type="button"
            onClick={previousCollection}
            aria-label="Previous collections"
            className="absolute -left-10 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-[42px] font-medium leading-none text-[#102d78] transition-transform duration-200 hover:-translate-x-1 xl:-left-14"
          >
            ‹
          </button>

          {/* Three visible cards */}
          <div className="grid grid-cols-3 gap-7">
            {visibleDesktopCollections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openCollectionDetails(item.id)}
                className="group w-full rounded-[62px] bg-[#102d78] p-[34px_38px_28px] text-left shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#102d78]/25 xl:rounded-[68px] xl:p-[36px_40px_28px]"
              >
                <div className="aspect-[5/6] w-full overflow-hidden rounded-[38px] bg-white">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-center text-[18px] font-bold leading-none text-white xl:text-[19px]">
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={nextCollection}
            aria-label="Next collections"
            className="absolute -right-10 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-[42px] font-medium leading-none text-[#102d78] transition-transform duration-200 hover:translate-x-1 xl:-right-14"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collections;