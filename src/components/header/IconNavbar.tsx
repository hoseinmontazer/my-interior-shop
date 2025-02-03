import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { useCart } from "../../hooks/CartContext";

const IconNavbar = () => {
  const { cart } = useCart();
  const cartCount = cart?.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  return (
    <nav className="flex justify-around p-5">
      <Link to="/checkout" className="text-dark px-6">
        <FaRegUser className="size-6" />
      </Link>
      <Link to="/cart" className="text-dark px-6">
        <HiMiniMagnifyingGlass className="size-6" />
      </Link>
      <Link to="/checkout" className="text-dark px-6">
        <IoIosHeartEmpty className="size-6" />
      </Link>
      <Link to="/cart" className="relative text-dark px-6">
        <IoCartOutline className="size-6" />
        {cartCount > 0 && (
    <span className="absolute top-0 right-3 transform -translate-y-1/2 bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default IconNavbar;
