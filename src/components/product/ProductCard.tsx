import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

interface ProductCardProps {
    image: string;
    name: string;
    description: string;
    price: string;
    sale?: string
}

const ProductCard:React.FC<ProductCardProps> = ({ image, name, description, price, sale }) => {
    return (
        <div className="relative group w-full sm:max-w-sm bg-indigo-50 overflow-hidden">
            <img className="w-full h-[320px] object-cover object-center" src={image} alt={name} />

            <div className="absolute inset-0 bg-neutral-950 bg-opacity-60 translate-x-full group-hover:translate-x-0 flex flex-col justify-center items-center gap-4 transition-transform duration-300 ease-in-out">
                <Link to="/cart">
                    <button className="bg-white text-yellow-700 font-bold text-lg px-12 py-3 transition hover:bg-slate-300">
                        Add to Cart
                    </button>
                </Link>
                <div className="flex gap-1 xl:gap-2">
                    <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
                        <CiShare2 className="mr-1 text-xl" />{"Share"}
                    </button>
                    <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
                        <MdCompareArrows className="mr-1 text-xl" />{"Compare"}
                    </button>
                    <button className="flex items-center justify-center text-white text-base xl:text-lg font-bold hover:text-slate-800 transition">
                        <CiHeart className="mr-1 text-xl" />{"Like"}
                    </button>
                </div>
            </div>

            <div className="p-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h2 className="text-muted text-base">{description}</h2>
                <h1 className="flex items-center">
                    <p className="font-bold text-2xl">{price}</p>
                    {<p className="flex items-center justify-center text-muted text-lg font-normal line-through px-3">
                        {sale}
                    </p>}


                </h1>
            </div>
        </div>
    );
};

export default ProductCard;
