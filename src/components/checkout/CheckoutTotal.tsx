import { useCart } from "../../hooks/CartContext";
import { useCartTotals } from "../../hooks/useCartTotals";
import Payment from "./Payment";

const CheckoutTotal = () => {
  const { cart } = useCart();
  const { subtotal, shipping, total } = useCartTotals();

  return (
    <section className="w-full xl:w-1/2 xl:px-14 pt-6 xl:pt-16 border-2 xl:border-none text-center">
      {cart.length === 0 ? (
        <h1>Total is 0</h1>
      ) : (
        <dl>
          <div className="flex xl:justify-between justify-center p-3 text-3xl font-semibold">
            <dt className="mx-2">Product</dt>
            <dd className="mx-2">Subtotal</dd>
          </div>

          {cart.map((product) => (
            <div key={product.id} className="flex justify-between p-3">
              <dt className="mx-2 text-lg text-gray-500">
                {product.name} <span className="text-black ml-1">x {product.quantity}</span>
              </dt>
              <dd className="mx-2 text-lg">{(product.price * product.quantity).toLocaleString()} $</dd>
            </div>
          ))}
          <section className="border-2 my-5">
             <div className="flex justify-between p-3">
            <dt className="mx-2 text-lg">Subtotal</dt>
            <dd className="mx-2 text-lg">{subtotal.toLocaleString()} $</dd>
          </div>

          <div className="flex justify-between p-3">
            <dt className="mx-2 text-lg">Shipping</dt>
            <dd className="mx-2 text-lg">{shipping === 0 ? "FREE" : `${shipping} $`}</dd>
          </div>

          <div className="flex justify-between p-3">
            <dt className="mx-2 text-lg">Total</dt>
            <dd className="mx-2 text-3xl font-extrabold text-yellow-700">
              {total.toLocaleString()} $
            </dd>
          </div>
          </section>
         
        </dl>
      )}
      <hr />
      <Payment />
    </section>
  );
};

export default CheckoutTotal;
