import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

// All collection products and their details
export const collectionsData = [
  {
    id: "ember-luxe-sofa",
    title: "Ember Luxe Sofa",
    cardImage:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790612310/image_149_rnvaks.png",
    images: [
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672561/image_126_trtfkz.png",
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672568/image_127_zxccvs.png",
    ],
    description:
      "Add a bold touch of warmth to your living space with the Ember Luxe Sofa, featuring rich burnt-orange terracotta upholstery that beautifully complements its contemporary silhouette. Designed with plush, generously cushioned seating, softly rounded edges, and elegant matching piping details, it combines exceptional comfort with modern sophistication. Its vibrant earthy tone and refined finish make it a stunning statement piece for any stylish interior.",
  },
  {
    id: "terra-rouge-sofa",
    title: "Terra Rouge Sofa",
    cardImage:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790612348/image_150_mrrh0b.png",
    images: [
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672589/image_124_azzfb4.png",
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672623/image_125_rpucnk.png",
    ],
    description:
      "Bring contemporary character to your living space with the Terra Rouge Lounge Sofa, featuring a bold crimson-red frame paired with beautifully textured warm terracotta-brown upholstery. Its generously cushioned seat and oversized back cushions create an inviting balance of comfort and modern elegance. The clean structural lines, vibrant red finish, and rich woven-texture fabric make it a distinctive statement piece for any stylish interior.",
  },
  {
    id: "olive-arc-chair",
    title: "Olive Arc Chair",
    cardImage:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790612368/image_151_hdfzzg.png",
    images: [
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672637/image_119_cvn7au.png",
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672664/image_102_tpk7cn.png",
    ],
    description:
      "Add a touch of contemporary elegance to your space with the Olive Arc Chair, featuring a sleek olive-green metal frame paired with warm caramel-brown cushioned seating and a matching backrest. Its distinctive curved armrests and minimalist tubular structure create a perfect blend of modern design and everyday comfort. The rich earthy tones and sculptural silhouette make it an eye-catching addition to dining areas, workspaces, or stylish living corners.",
  },
  {
    id: "noir-frame-chair",
    title: "Noir Frame Chair",
    cardImage:
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790667239/image_166_jzyk2b.png",
    images: [
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672673/image_162_mrqnr3.png",
      "https://res.cloudinary.com/daadrhhk9/image/upload/v1790672682/image_164_1_sgthsa.png",
    ],
    description:
      "Featuring a sleek matte-black frame and a distinctive geometric silhouette, the Noir Frame Chair brings modern sophistication to any interior. Its gently curved seat, structured backrest, and minimalist open-frame design create a stylish balance of comfort and contemporary elegance.",
  },
];

function CollectionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = collectionsData.find((item) => item.id === id);

  const BackArrow = () => (
    <button
      type="button"
      onClick={() => navigate("/collections")}
      aria-label="Back to collections"
      title="Back to collections"
      className="flex h-7 w-[124px] items-center justify-start text-[#102d78] transition-transform duration-200 hover:-translate-x-1"
    >
      <svg
        width="124"
        height="28"
        viewBox="0 0 124 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <path
          d="M3 14H120"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        <path
          d="M13 4L3 14L13 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </button>
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-[#102d78]">
        <Header />

        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <button
            type="button"
            onClick={() => navigate("/collections")}
            aria-label="Go back"
            className="mt-6 text-4xl leading-none transition-transform hover:-translate-x-1"
          >
            ←
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full h-[100vh] overflow-x-hidden bg-white text-[#102d78]">
      <Header />

      {/* MOBILE LAYOUT */}
      <section className="relative flex h-[calc(100svh-76px)] min-h-[956px] w-full flex-col overflow-hidden pt-[78px] sm:px-7 lg:hidden">

        {/* TOP: Heading left + secondary image right */}
        <div className="grid h-[28%] min-h-[175px] grid-cols-[1fr_0.78fr] items-start px-5 gap-3">
          <h1 className="mt-2 min-w-0 text-[clamp(37px,19.5vw,64px)] font-bold leading-[0.98] tracking-[-0.055em]">
            {product.title}
          </h1>

          <div className="h-full max-h-[245px] w-full overflow-hidden bg-[#f3f3f3]">
            <img
              src={product.images[1]}
              alt={`${product.title} - additional view`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* MIDDLE: Arrow + centered paragraph */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center pb-3 pt-2">
          <div className="mb-2 w-full px-5">
            <BackArrow />
          </div>

          <p className="mx-auto w-full max-w-[340px] text-left text-[12px] font-medium leading-[1.35] sm:max-w-[420px] sm:text-[14px]">
            {product.description}
          </p>
        </div>

        {/* BOTTOM: Main image left + vertical line right */}
        <div className="relative h-[44%] min-h-[220px] w-full shrink-0">
          <div className="absolute bottom-0 left-0 h-full w-[72%] overflow-hidden bg-[#f3f3f3]">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-[8%] left-[88%] h-[78%] w-px bg-[#102d78]" />
        </div>
      </section>

      {/* DESKTOP LAYOUT */}
      <section className="hidden w-full lg:grid lg:min-h-screen lg:grid-cols-[40%_60%]">

        {/* LEFT: Main product image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f3f3f3]">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT: Product information */}
        <div className="relative min-h-screen w-full px-5">

          {/* Product title */}
          <h1 className="absolute left-[3.5%] right-[3%] top-[17.5%] whitespace-nowrap text-[clamp(44px,6vw,112px)] font-bold leading-[1.05] tracking-[-0.045em]">
            {product.title}
          </h1>

          {/* Vertical divider */}
          <div className="absolute left-[34%] top-[41.5%] h-[175px] w-px bg-[#102d78]" />

          {/* Description and secondary image */}
          <div className="absolute bottom-[5.3%] left-[2%] right-[2%] grid grid-cols-[minmax(0,1.45fr)_minmax(250px,0.9fr)] items-end gap-[3%]">
            <div className="min-w-0">
              <div className="mb-2">
                <BackArrow />
              </div>

              <p className="max-w-full text-[clamp(16px,1.08vw,22px)] font-medium leading-[1.25]">
                {product.description}
              </p>
            </div>

            <div className="h-[52vh] max-h-[575px] w-full overflow-hidden bg-[#f3f3f3]">
              <img
                src={product.images[1]}
                alt={`${product.title} - additional view`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CollectionDetails;