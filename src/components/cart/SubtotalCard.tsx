import { Link } from "react-router-dom";

const SubtotalCard = () => {
  return (
    <section className="pb-16 px-5 xl:px-24 bg-purple-50 text-center mb-10">
      <header>
        <h1 className="p-5 pt-8 text-5xl font-bold">Cart Totals</h1>
      </header>
      <dl className="text-xl">
        <div className="flex justify-between p-3">
          <dt className="font-semibold">Subtotal</dt>
          <dd className="text-muted">2500 $</dd>
        </div>
        <div className="flex justify-between p-3 mb-3">
          <dt className="font-semibold">Total</dt>
          <dd className="text-yellow-700 text-2xl">2500 $</dd>
        </div>
      </dl>

      <Link to="/checkout">
        <button className="border-2 border-black hover:bg-slate-200 rounded-2xl px-12 py-3 mb-8 m-3 text-lg xl:text-2xl">
          Check Out
        </button>
      </Link>
    </section>
  );
};
export default SubtotalCard;
