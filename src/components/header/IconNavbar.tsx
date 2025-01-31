import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

const IconNavbar = () => {
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
      <Link to="/cart" className="text-dark px-6">
        <IoCartOutline className="size-6" />
      </Link>
    </nav>
  );
};

export default IconNavbar;
