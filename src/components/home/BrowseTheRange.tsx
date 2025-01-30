const BrowseTheRange = () => {
  return (
    <section className="text-center p-5 mx-auto">
      <div className="py-5 lg:py-12">
        <h1 className="font-bold text-3xl xl:text-5xl p-2">Browse The Range</h1>
        <p className="text-xl lg:text-2xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mx-5 lg:mx-24">
        <figure>
          <img
            src={
              "https://res.cloudinary.com/dxjjsfami/image/upload/v1737989343/dining_bsgqsu.png"
            }
            alt="dining"
            className="w-full h-[580px] object-center object-cover rounded-xl"
          />
          <figcaption className="py-2 lg:py-8 text-3xl font-bold text-gray-700">
            Dining
          </figcaption>
        </figure>
        <figure>
          <img
            src={
              "https://res.cloudinary.com/dxjjsfami/image/upload/v1737989343/living_hbfcgy.png"
            }
            alt="living"
            className="w-full h-[580px] object-center object-cover rounded-xl"
          />
          <figcaption className="py-2 lg:py-8 text-3xl font-bold text-gray-700">
            Living
          </figcaption>
        </figure>
        <figure>
          <img
            src={
              "https://res.cloudinary.com/dxjjsfami/image/upload/v1737989343/bedroom_mred1o.png"
            }
            alt="bedroom"
            className="w-full h-[580px] object-center object-cover rounded-xl"
          />
          <figcaption className="py-2 lg:py-8 text-3xl font-bold text-gray-700">
            Bedroom
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default BrowseTheRange;
