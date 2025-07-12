import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";

export default function CartDrawer() {
  const { t } = useTranslation();
  const cart = useCartStore((s) => s.cart);
  const toggleCartDrawer = useCartStore((s) => s.toggleCartDrawer);
  const cartDrawerOpen = useCartStore((s) => s.cartDrawerOpen);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartDrawerOpen) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-bold">{t("your_cart")}</h3>
        <button onClick={toggleCartDrawer}>
          <span className="material-icons text-gray-500">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">{t("your_cart_empty")}</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-3 border-b text-sm">
              <div>
                <h4>{item.name}</h4>
                <p className="text-gray-500">₹{item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs">{t("remove")}</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span>{t("total")}:</span>
            <span>₹{total}</span>
          </div>
          <Link
            to="/checkout"
            onClick={toggleCartDrawer}
            className="block text-center bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition"
          >
            {t("go_to_checkout")}
          </Link>
        </div>
      )}
    </motion.div>
  );
}
