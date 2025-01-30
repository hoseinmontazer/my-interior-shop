import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Address = () => {
  return (
    <main className="w-full xl:w-1/2 xl:pl-36 xl:py-4">
      <section className="flex p-3">
        <IoLocationSharp className="size-10 mr-4" />
        <div className="p-1">
          <h2 className="text-2xl font-semibold">Address</h2>
          <div className="w-1/2">
            236 5th SE Avenue, New York NY10000, United States
          </div>
        </div>
      </section>
      <section className="flex p-3">
        <FaPhoneAlt className="size-10 mr-4" />
        <div className="p-1">
          <h2 className="text-2xl font-semibold">Phone</h2>
          <ul className="">
            <li>Mobile:+(1) 546-6789</li>
            <li>Mobile:+(1) 456-6789</li>
          </ul>
        </div>
      </section>
      <section className="flex p-3">
        <MdOutlineAccessTimeFilled className="size-10 mr-4" />
        <div className="p-1">
          <h2 className="text-2xl font-semibold">Working Time</h2>
          <div>Monday-Friday: 9:00 - 22:00</div>
          <div>Saturday-Sunday: 9:00 - 21:00</div>
        </div>
      </section>
    </main>
  );
};
export default Address;
