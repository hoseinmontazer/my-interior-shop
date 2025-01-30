import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-2">
      <hr className="border-3 border-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 xl:text-lg my-8 mx-16">
        <ul className="mx-5">
          <li className="text-3xl font-extrabold py-4">Cozy Home.</li>
          <li className="text-wrap text-gray-400 pt-4">
            400 University Drive Suite 200 Coral Gables,
          </li>
          <p className="text-wrap text-gray-400">FL 33134</p>
        </ul>
        <ul className="mx-5">
          <li className="text-gray-400 py-4">Links</li>
          <li className="py-4 font-medium hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="py-4 font-medium hover:underline">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="py-4 font-medium hover:underline">
            {" "}
            <Link to="/blog">Blog </Link>
          </li>
          <li className="py-4 font-medium hover:underline">
            {" "}
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <ul className="mx-5">
          <li className="text-gray-400 py-4">Help</li>
          <li className="py-4 font-medium hover:underline">Payment Options</li>
          <li className="py-4 font-medium hover:underline">Returns</li>
          <li className="py-4 font-medium hover:underline">Privacy Policies</li>
        </ul>
        <ul className="mx-5">
          <li className="text-gray-400 py-4">Newsletter</li>
          <li className="py-4 font-medium flex flex-col items-center 2xl:flex-row gap-5">
            <input
              className="border-black border-b w-full px-1 "
              placeholder="Enter Your Email"
            ></input>
            <button className="border-black border-b w-full md:w-1/2">
              SUBSCRIBE
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full my-8 pl-6">
        <hr className="mx-auto border-gray-600 w-11/12" />
        <p className="text-left text-lg font-medium p-3 mt-5 lg:ml-12">
          2023 Cozy Home. All rights revered
        </p>
      </div>
    </footer>
  );
};
export default Footer;
