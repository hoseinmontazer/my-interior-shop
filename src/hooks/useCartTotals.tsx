import { useCart } from "./CartContext";

export const useCartTotals = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((total, product) => (total + product.price) || 0 * product.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 20;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
};




