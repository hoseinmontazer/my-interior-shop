import Payment from "./Payment";

const CheckoutTotal = () => {
  return (
    <section className="w-full xl:w-1/2 xl:px-14 pt-6 xl:pt-16 border-2 xl:border-none text-center ">
      <dl>
        <div className="flex xl:justify-between justify-center p-3 text-4xl font-semibold">
          <dt className="mx-2">Product</dt>
          <dd className="mx-2">Subtotal</dd>
        </div>
        <div className="flex justify-between p-3">
          <dt className="mx-2 text-xl text-gray-500">
            Asgaard chair<span className="text-black ml-1">x 1</span>
          </dt>
          <dd className="mx-2 text-xl">2500 $</dd>
        </div>
        <div className="flex justify-between p-3">
          <dt className="mx-2 text-xl">Subtotal</dt>
          <dd className="mx-2 text-xl">2500 $</dd>
        </div>
        <div className="flex justify-between p-3">
          <dt className="mx-2 text-lg">Total</dt>
          <dd className="mx-2 text-3xl font-extrabold text-yellow-700">
            2500 $
          </dd>
        </div>
      </dl>
      <hr />
      <Payment />
    </section>
  );
};
export default CheckoutTotal;
