import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-center items-center md:p-1 space-y-4 md:space-y-0 text-2xl font-semibold p-2">
      <Link to="/" className="rounded-md px-6 py-2 hover:bg-gray-100">
        Home
      </Link>
      <Link to="/shop" className="rounded-md px-6 py-2 hover:bg-gray-100">
        Shop
      </Link>
      <Link to="/blog" className="rounded-md px-6 py-2 hover:bg-gray-100">
        Blog
      </Link>
      <Link to="/contact" className="rounded-md px-6 py-2 hover:bg-gray-100">
        Contact
      </Link>
    </nav>
  );
};
export default PageLinks;
