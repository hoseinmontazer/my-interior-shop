import trophy from "../../assets/trophy.svg";
import warranty from "../../assets/warranty.svg";
import delivery from "../../assets/delivery.svg";
import support from "../../assets/support.svg";

const UpperFooter = () => {
  return (
    <section className="py-28 bg-purple-50">
      <ul className="flex flex-col lg:flex-row justify-around items-around lg:items-center">
        <li className="flex flex-row items-center px-4 mb-3">
          <img src={trophy} alt="trophy" className="w-16 h-20 mr-2" />
          <article>
            <h2 className="text-3xl font-bold">High Quality</h2>
            <p className="text-xl text-muted pt-2">
              Crafted from top materials
            </p>
          </article>
        </li>
        <li className="flex flex-row items-center px-4 mb-3">
          <img src={warranty} alt="warranty" className="w-16 h-20 mr-2" />
          <article>
            <h2 className="text-3xl font-bold">Warranty Protection</h2>
            <p className="text-xl text-muted pt-2">Over 2 years</p>
          </article>
        </li>
        <li className="flex flex-row items-center px-4 mb-3">
          <img src={delivery} alt="delivery" className="w-16 h-20 mr-2" />
          <article>
            <h2 className="text-3xl font-bold">Free Shipping</h2>
            <p className="text-xl text-muted pt-2">Order over 150$</p>
          </article>
        </li>
        <li className="flex flex-row items-center px-4 mb-3">
          <img src={support} alt="support" className="w-16 h-20 mr-2" />
          <article className="">
            <h2 className="text-3xl font-bold">24/7 Support</h2>
            <p className="text-xl text-muted pt-2">Dedicated support</p>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default UpperFooter;
