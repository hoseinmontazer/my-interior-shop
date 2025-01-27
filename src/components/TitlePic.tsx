const TitlePic = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end font-notoSans text-left">
      <img
        className="h-[62rem] w-screen object-cover"
        alt="Title Background"
        src={
          "https://res.cloudinary.com/dxjjsfami/image/upload/v1737532368/bg03_eeypzd.jpg"
        }
      />
      <section className="absolute bg-rose-950 rounded-lg lg:w-[48rem] p-5 sm:p-8 sm:mr-32 md:p-10 lg:p-16">
        <p className="text-2xl py-5">New Arrival</p>
        <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl text-amber-500 font-bold mb-6">
          Discover Our New Collection
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus nec ullamcorper mattis.
        </p>
        <button className="bg-amber-500 lg:text-xl font-bold lg:py-7 py-5 lg:w-2/5 w-full">
          BUY NOW
        </button>
      </section>
    </div>
  );
};

export default TitlePic;
