import trophy from "../../assets/trophy.svg";
import warranty from "../../assets/warranty.svg";
import delivery from "../../assets/delivery.svg";
import support from "../../assets/support.svg";

const UpperFooter = () => {
  return (
    <div className="py-28 bg-purple-50 flex flex-col lg:flex-row lg:justify-around lg:items-center">
      <div className="flex flex-row items-center px-4 mb-3">
        <img src={trophy} className="w-16 h-20 mr-2" />
        <div>
          <div className="text-3xl font-bold">High Quality</div>
          <p className="text-xl text-muted pt-2">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex flex-row items-center px-4 mb-3">
        <img src={warranty} className="w-16 h-20 mr-2" />
        <div>
          <div className="text-3xl font-bold">Warranty Protection</div>
          <p className="text-xl text-muted pt-2">Over 2 years</p>
        </div>
      </div>
      <div className="flex flex-row items-center px-4 mb-3">
        <img src={delivery} className="w-16 h-20 mr-2" />
        <div>
          <div className="text-3xl font-bold">Free Shipping</div>
          <p className="text-xl text-muted pt-2">Order over 150$</p>
        </div>
      </div>
      <div className="flex flex-row items-center px-4 mb-3">
        <img src={support} className="w-16 h-20 mr-2" />
        <div className="">
          <div className="text-3xl font-bold">24/7 Support</div>
          <p className="text-xl text-muted pt-2">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};
export default UpperFooter;
