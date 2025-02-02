import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

const SubtotalCard = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((total, product)=> total + product.price , 0)
  const shipping = subtotal > 150 ? 0 : 20;
  const total = subtotal + shipping;


  return (
    <section className="pb-16 px-5 xl:px-16 bg-purple-50 text-center mb-10">
      <header>
        <h1 className="p-5 pt-8 text-3xl font-bold">Cart Totals</h1>
      </header>
      {cart.length === 0 ? (
        <h1>Total is 0</h1>
      ) : (
        <section>
          {" "}
          <dl className="text-lg">
            <div className="flex justify-between p-3">
              <dt className="font-semibold">Subtotal</dt>
              <dd className="text-muted">{subtotal.toLocaleString()} $</dd>
            </div>
            <div className="flex justify-between p-3">
              <dt className="font-semibold">Shepping</dt>
              <dd className="text-muted">{shipping === 0 ? "FREE" : `${shipping} $`}</dd>
            </div>
            <div className="flex justify-between p-3 mb-3">
              <dt className="font-semibold">Total</dt>
              <dd className="text-yellow-700 text-2xl">
                {total.toLocaleString()} $
              </dd>
            </div>
          </dl>
          <Link to="/checkout">
            <button className="border-2 border-black hover:bg-slate-200 rounded-2xl px-10 py-3 mb-8 m-3 text-lg xl:text-xl">
              Check Out
            </button>
          </Link>
        </section>
      )}
    </section>
  );
};
export default SubtotalCard;
