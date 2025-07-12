import placeHolder from "../assets/placeholder.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FoodCard({ item, onAddToCart }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      ) : (
        <img
          src={placeHolder}
          alt={item.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
      <div className="mt-auto flex justify-between items-center pt-4">
        <span className="text-emerald-600 font-bold">₹{item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="text-sm bg-emerald-500 text-white px-3 py-1 rounded hover:bg-emerald-600"
        >
          {t("add_to_cart")}
        </button>
      </div>
    </motion.div>
  );
}
