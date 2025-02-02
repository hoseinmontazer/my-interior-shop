import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../../hooks/CartContext";

interface ProductCardProps {
  id: string
  image: string;
  name: string;
  description: string;
  price: string;
  sale?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  description,
  price,
  sale,
}) => {
  const { addToCart } = useCart(); 
  return (
    <article className="relative group bg-indigo-50 overflow-hidden">
      <img
        className="w-full h-[350px] object-cover object-center"
        src={image}
        alt={name}
      />
      <figcaption className="absolute inset-0 bg-neutral-950 bg-opacity-60 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center">
          <button className="bg-white text-yellow-700 font-bold text-lg px-12 py-3 transition hover:bg-slate-300"
           onClick={() => addToCart({ id, name, price, image })}>
            Add to Cart
          </button>
        <menu className="flex gap-3 p-3">
          <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
            <CiShare2 className="size-5" />
            {"Share"}
          </button>
          <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
            <MdCompareArrows className="size-5" />
            {"Compare"}
          </button>
          <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
            <CiHeart className="size-5" />
            {"Like"}
          </button>
        </menu>
      </figcaption>

      <section className="p-4">
        <h1 className="font-bold text-2xl p-1">{name}</h1>
        <h2 className="text-gray-500 text-lg p-1">{description}</h2>
        <h1 className="flex items-center p-1">
          <p className="font-bold text-2xl p-1">{price}</p>
          {
            <p className="flex items-center justify-center text-gray-500 text-2xl line-through px-3">
              {sale}
            </p>
          }
        </h1>
      </section>
    </article>
  );
};

export default ProductCard;
