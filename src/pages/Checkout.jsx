import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { t } = useTranslation();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart); 
  const clearCart = useCartStore((state) => state.clearCart); 
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  const navigate = useNavigate();

  const proceedPayment = () => {
    clearCart();
    toast.success(`Payment successful!`);
    navigate("/menu");
  }

  return (
    <div className="max-w-4xl py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{t("your_cart")}</h2>
      {cart.length === 0 ? (
        <p>{t("your_cart_empty")}</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-3">
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decrement(item.id)} className="px-2 py-1 border rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)} className="px-2 py-1 border rounded">+</button>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">{t("remove")}</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{t("total")}: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600" onClick={proceedPayment}>
            {t("proceed_to_payment")}
          </button>
        </div>
      )}
    </div>
  );
}
