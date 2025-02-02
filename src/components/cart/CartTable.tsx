import { useCart } from "../../hooks/CartContext";
import SubtotalCard from "./SubtotalCard";


const CartPage = () => {
  const { cart, removeFromCart } = useCart(); 

  return (
    <section className="py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <table className="border-collapse border border-gray-300 w-2/3">
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
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                  {product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.price} $</td>
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
      )}
           <aside>
        <SubtotalCard />
      </aside>
    </section>
  );
};

export default CartPage;


