import { useCart } from "../../hooks/CartContext";
import SubtotalCard from "./SubtotalCard";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="py-8 md:py-16 flex flex-col items-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <>
          <table className="hidden md:table border-collapse border border-gray-300 w-full md:w-2/3">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2 flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    {product.name}
                    <span className="text-gray-500 ml-2"> x {product.quantity}</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.price} $
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden w-full space-y-4">
            {cart.map((product) => (
              <article
                key={product.id}
                className="border border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{product.name}</h2>
                    <p className="text-gray-600">{product.price} $</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  ></button>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
      <aside className="w-full md:w-2/3 mt-8">
        <SubtotalCard />
      </aside>
    </section>
  );
};

export default CartPage;
