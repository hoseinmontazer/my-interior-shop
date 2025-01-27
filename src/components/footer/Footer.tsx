const Footer = () => {
  return (
    <div className="bg-white py-2">
      <hr className="border-3 border-gray-400" />
      <div className="pt-2">
        <div className="flex justify-center mx-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-lg text-left list-none">
            <ul className="pr-5">
              <li className="text-2xl font-extrabold py-4">Cozy Home.</li>
              <li className="text-wrap text-gray-400 pt-4">
                400 University Drive Suite 200 Coral Gables,
              </li>
              <p className="text-wrap text-gray-400">FL 33134</p>
            </ul>
            <ul className="pr-3">
              <li className="text-gray-400 py-4">Links</li>
              <li className="py-4 font-medium hover:underline">Home</li>
              <li className="py-4 font-medium hover:underline">Shop</li>
              <li className="py-4 font-medium hover:underline">Blog</li>
              <li className="py-4 font-medium hover:underline">Contact</li>
            </ul>
            <ul className="pr-3">
              <li className="text-gray-400 py-4">Help</li>
              <li className="py-4 font-medium hover:underline">
                Payment Options
              </li>
              <li className="py-4 font-medium hover:underline">Returns</li>
              <li className="py-4 font-medium hover:underline">
                Privacy Policies
              </li>
            </ul>
            <ul className="pr-3">
              <li className="text-gray-400 py-4">Newsletter</li>
              <li className="py-4 text-base font-medium flex flex-col md:flex-row gap-3 md:gap-5">
                <input
                  className="border-black border-b w-full md:w-auto"
                  placeholder="Enter Your Email Address"
                ></input>
                <button className="border-black border-b w-full md:w-auto">
                  SUBSCRIBE
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pl-6">
        <hr className="mx-auto border-gray-600 w-11/12" />
        <p className="text-left text-lg font-medium p-3 lg:ml-12">
          2023 Cozy Home. All rights revered
        </p>
      </div>
    </div>
  );
};
export default Footer;
