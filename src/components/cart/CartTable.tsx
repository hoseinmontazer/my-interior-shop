import { TbSquareNumber1 } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import SubtotalCard from "./SubtotalCard";

const CartTable = () => {
  return (
    <main className="py-16 pt-16 p-5 flex xl:flex-row xl:justify-around flex-col justify-center mx-auto">
      <table className="hidden md:table text-center mb-5">
        <thead className="bg-purple-50 text-2xl">
          <tr>
            <th className="lg:px-10 py-4"></th>
            <th className="lg:px-10 py-4">Product</th>
            <th className="lg:px-10 py-4">Price</th>
            <th className="lg:px-10 py-4">Quantity</th>
            <th className="lg:px-10 py-4">Subtotal</th>
            <th className="lg:px-10 py-4"></th>
          </tr>
        </thead>
        <tbody className="text-xl text-wrap">
          <tr>
            <td className="lg:px-10">
              <img
                src={
                  "https://res.cloudinary.com/dxjjsfami/image/upload/v1738009009/sofa_gsvogq.jpg"
                }
                alt="product picture"
                className="w-32 h-32 object-cover rounded"
              />
            </td>
            <td className="lg:px-10 text-gray-400">Asgaard chair</td>
            <td className="lg:px-10 text-gray-400">2500 $</td>
            <td className="lg:px-24">
              <p>
              <TbSquareNumber1 className="size-8" />
                </p>
            </td>
            <td className="lg:px-10">2500 $</td>
            <td className="lg:px-10 text-center text-yellow-600">
              <button>
                <FaTrash className="size-6 hover:text-yellow-800" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="block md:hidden space-y-4 mb-4 mr-2 w-full">
        <article className="flex items-center border rounded-lg p-4 shadow">
          <img
            src={
              "https://res.cloudinary.com/dxjjsfami/image/upload/v1738009009/sofa_gsvogq.jpg"
            }
            alt="product"
            className="w-24 h-24 object-cover rounded"
          />
          <div className="ml-4 space-y-1">
            <h2 className="text-xl font-medium">Asgaard chair</h2>
            <p className="text-gray-600 p-1">2500 $</p>
            <div className="flex items-center justify-between p-1">
              <p>
                <TbSquareNumber1 className="size-8" />
              </p>
              <button className="text-yellow-600">
                <FaTrash className="size-6 hover:text-yellow-800" />
              </button>
            </div>
            <p className="text-xl font-semibold">Subtotal: 2500 $</p>
          </div>
        </article>
      </section>
      <aside>
        <SubtotalCard />
      </aside>
    </main>
  );
};
export default CartTable;
