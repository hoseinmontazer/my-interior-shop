import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Address = () => {
  return (
    <section className="w-full xl:w-1/2 xl:pl-36 xl:py-4">
      <article className="flex p-3">
        <div>
          <IoLocationSharp className="size-6" />
        </div>
        <div className="px-6">
          <h2 className="text-2xl font-semibold">Address</h2>
          <address className="text-lg xl:w-1/2 not-italic py-2">
            236 5th SE Avenue, New York NY10000, United States
          </address>
        </div>
      </article>
      <article className="flex p-3">
        <FaPhoneAlt className="size-6" />
        <div className="px-6">
          <h2 className="text-2xl font-semibold">Phone</h2>
          <ul className="text-lg py-2">
            <li>Mobile:+(1) 546-6789</li>
            <li>Mobile:+(1) 456-6789</li>
          </ul>
        </div>
      </article>
      <article className="flex p-3">
        <MdOutlineAccessTimeFilled className="size-6" />
        <div className="px-6">
          <h2 className="text-2xl font-semibold">Working Time</h2>
          <ul className="text-lg py-2">
            <li>Monday-Friday: 9:00 - 22:00</li>
            <li>Saturday-Sunday: 9:00 - 21:00</li>
          </ul>
        </div>
      </article>
    </section>
  );
};
export default Address;
