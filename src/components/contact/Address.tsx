import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Address = () => {
    return (
            <div className="w-full xl:w-1/2 xl:pl-36 xl:py-4">
                <div className="flex p-3">
                    <div>
                        <IoLocationSharp className="text-2xl mr-4" />
                    </div>
                    <div className="p-1">
                        <div className="text-2xl font-semibold">Address</div>
                        <div className="w-1/2">
                            236 5th SE Avenue, New York NY10000, United States
                        </div>
                    </div>
                </div>

                <div className="flex p-3">
                    <div>
                        <FaPhoneAlt className="text-2xl mr-4" />
                    </div>
                    <div className="p-1">
                        <div className="text-2xl font-semibold">Phone</div>
                        <div className="">
                            <div>
                                Mobile:+(1) 546-6789
                            </div>
                            <div>
                                Mobile:+(1) 456-6789
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex p-3">
                    <div>
                        <MdOutlineAccessTimeFilled className="text-2xl mr-4" />
                    </div>
                    <div className="p-1">
                        <div className="text-2xl font-semibold">Working Time</div>
                        <div>
                            Monday-Friday: 9:00 - 22:00
                        </div>
                        <div>
                            Saturday-Sunday: 9:00 - 21:00
                        </div>
                    </div>
                </div>

            </div>
    )
};
export default Address