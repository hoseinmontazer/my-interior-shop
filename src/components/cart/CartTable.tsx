import { TbSquareNumber1 } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import SubtotalCard from "./SubtotalCard";

const CartTable = () => {
  return (
    <div className="container py-16 pt-16 flex xl:justify-around xl:flex-row flex-col">
      <table className="hidden xl:table text-center lg:text-lg">
        <tr className="bg-purple-50">
          <th className="lg:px-3 lg:py-0.5"></th>
          <th className="lg:px-3 lg:py-0.5">Product</th>
          <th className="lg:px-3 lg:py-0.5">Price</th>
          <th className="lg:px-3 lg:py-0.5">Quantity</th>
          <th className="lg:px-3 lg:py-0.5">Subtotal</th>
          <th className="lg:px-3 lg:py-0.5"></th>
        </tr>
        <tr className="text-wrap">
          <th className="lg:px-4 lg:py-3">
            <img
              src={
                "https://res.cloudinary.com/dxjjsfami/image/upload/v1738009009/sofa_gsvogq.jpg"
              }
              alt="product picture"
              className="w-32 h-32 object-cover rounded"
            />
          </th>
          <td className="lg:px-4 lg:py-3 text-muted">Asgaard chair</td>
          <td className="lg:px-4 lg:py-3 text-muted">2500 $</td>
          <td className="lg:px-4 lg:py-3 lg:text-4xl text-center">
            <TbSquareNumber1 />
          </td>
          <td className="lg:px-4 lg:py-3">2500 $</td>
          <td className="lg:px-4 lg:py-3 lg:text-2xl text-center text-yellow-600">
            <FaTrash />
          </td>
        </tr>
      </table>

      <div className="block xl:hidden space-y-4 mb-4 mr-2 w-full">
        <div className="flex items-center border rounded-lg p-4 shadow">
          <img
            src={
              "https://res.cloudinary.com/dxjjsfami/image/upload/v1738009009/sofa_gsvogq.jpg"
            }
            alt="product"
            className="w-24 h-24 object-cover rounded"
          />
          <div className="ml-4 space-y-1">
            <p className="text-lg font-medium">Asgaard chair</p>
            <p className="text-muted">2500 $</p>
            <div className="flex items-center justify-between">
              <div className="text-4xl pb-2">
                <TbSquareNumber1 />
              </div>
              <p className="text-yellow-600 text-3xl">
                <FaTrash />
              </p>
            </div>
            <p className="text-lg font-semibold">Subtotal: 2500 $</p>
          </div>
        </div>
      </div>
      <SubtotalCard />
    </div>
  );
};
export default CartTable;
