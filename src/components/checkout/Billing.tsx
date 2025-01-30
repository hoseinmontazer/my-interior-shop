import CheckoutTotal from "./CheckoutTotal";

const Billing = () => {
  return (
    <section className="py-10 xl:py-32 flex flex-col xl:flex-row">
      <form className="w-full xl:w-1/2 flex flex-col ml-16">
        <h1 className="font-bold m-3 pb-5 text-3xl">Billing details</h1>
        <section className="flex flex-col xl:flex-row">
          <div className="w-full lg:w-1/2">
            <label className="font-semibold py-2 m-3">First Name</label>
            <input
              className="block border border-stone-400 rounded-xl py-5 m-3"
              type="text"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold py-2 m-3">Last Name</label>
            <input
              className="block border border-stone-400 rounded-xl py-5 m-3"
              type="text"
            />
          </div>
        </section>
        <label className="font-semibold py-2 m-3">
          Company Name (Optional)
        </label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="text"
        />
        <label className="font-semibold py-2 m-3">
          Country / Region
        </label>
        <select className="border-2 bordertone-400 bg-white rounded-xl w-9/12 text-muted py-5 px-5 mt-1 m-3">
          <option value="Iran">Iran</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
        </select>
        <label className="font-semibold py-2 m-3">Street address</label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="text"
        />
        <label className="font-semibold py-2 m-3">Town / City</label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="text"
        />
        <label className="font-semibold py-2 m-3">Province</label>
        <select className="border-2 bordertone-400 bg-white rounded-xl w-9/12 text-muted py-5 px-5 mt-1 m-3">
          <option value="New Jersey">New Jersey</option>
          <option value="Oregon">Oregon</option>
          <option value="Montana">Montana</option>
          <option value="Kansas">Kansas</option>
        </select>
        <label className="font-semibold py-2 m-3">ZIP code</label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="number"
        />
        <label className="font-semibold py-2 m-3">Phone</label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="tel"
        />
        <label className="font-semibold py-2 m-3">Email address</label>
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 mt-1 m-3"
          type="email"
        />
        <input
          className="border border-stone-400 rounded-xl w-9/12 py-5 4 mt-1x-4 m-3 mt-5 px-4"
          type="text"
          placeholder="Additional information"
        />
      </form>
      <CheckoutTotal />
    </section>
  );
};
export default Billing;
