import React from "react";
import Masonry from "react-masonry-css";

interface FurnitureProps {}

const Furniture: React.FC<FurnitureProps> = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532671/furniture1_jec9yg.jpg",
      alt: "furniture1",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532720/furniture2_vjgcnb.jpg",
      alt: "furniture2",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532736/furniture3_dny0ap.jpg",
      alt: "furniture3",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532738/furniture4_qjmtv2.jpg",
      alt: "furniture4",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532752/furniture5_v2wree.jpg",
      alt: "furniture5",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532763/furniture6_syes5g.jpg",
      alt: "furniture6",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532716/furniture7_ullucj.jpg",
      alt: "furniture7",
    },
    {
      src: "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532784/furniture8_sa5bxo.jpg",
      alt: "furniture8",
    },
  ];

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    768: 2,
    500: 1,
  };

  return (
    <section>
      <header className="text-center mb-14 pt-20">
        <p className="text-lg xl:text-2xl font-bold text-muted">
          Share your setup with
        </p>
        <h1 className="text-3xl xl:text-6xl font-bold text-gray-800">
          #CozyHomeFurniture
        </h1>
      </header>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, index) => (
          <figure key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto my-3 object-cover transform scale-100 hover:scale-105 transition ease-in-out"
            />
          </figure>
        ))}
      </Masonry>
    </section>
  );
};

export default Furniture;
