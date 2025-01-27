import CheckoutTotal from "./CheckoutTotal";

const Billing = () => {
    return (
        <div className="container bg-white py-10 xl:py-32">
            <div className="flex flex-col xl:flex-row ">
                <div className="w-full xl:w-1/2 p-8">
                    <h1 className="font-bold m-3">Billing details</h1>
                    <div className="flex flex-col xl:flex-row pr-3">
                        <div className="w-full lg:w-1/2">
                            <label className="block text-lg font-semibold py-2 m-3">First Name</label>
                            <input className="border-2 border-stone-400 rounded-xl block text-base py-4 m-3" type="text" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block text-lg font-semibold py-2 m-3">Last Name</label>
                            <input className="border-2 border-stone-400 rounded-xl block text-base py-4 m-3" type="text" />
                        </div>
                    </div>
                    
                    <label className="block text-lg font-semibold py-2 m-3">Company Name (Optional)</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="text" />

                    <label className="block text-lg font-semibold py-2 m-3">Country / Region</label>
                        <select className="border-2 border-stone-400 bg-white rounded-xl w-11/12 text-lg text-muted py-4 px-5 mt-1 m-3">
                            <option value="Iran" className="">Iran</option>
                            <option value="USA" className="">USA</option>
                            <option value="United Kingdom" className="">United Kingdom</option>
                            <option value="Australia" className="">Australia</option>
                        </select>
                        
                    <label className="block text-lg font-semibold py-2 m-3">Street address</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="text" />

                    <label className="block text-lg font-semibold py-2 m-3">Town / City</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="text" />

                    <label className="block text-lg font-semibold py-2 m-3">Province</label>
                    <select className="border-2 border-stone-400 bg-white rounded-xl w-11/12 text-lg text-muted py-4 px-5 mt-1 m-3">
                            <option value="New Jersey" className="">New Jersey</option>
                            <option value="Oregon" className="">Oregon</option>
                            <option value="Montana" className="">Montana</option>
                            <option value="Kansas" className="">Kansas</option>
                        </select>
                        
                    <label className="block text-lg font-semibold py-2 m-3">ZIP code</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="tel" />

                    <label className="block text-lg font-semibold py-2 m-3">Phone</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="text" />

                    <label className="block text-lg font-semibold py-2 m-3">Email address</label>
                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-base py-4 mt-1 m-3" type="email" />

                    <input className="border-2 border-stone-400 rounded-xl w-11/12 block text-lg py-4 4 mt-1x-4 m-3 mt-5 px-4" type="text" placeholder="Additional information" />
                </div>
                <CheckoutTotal />
            </div>
        </div>
    )
};
export default Billing