import FoodCard from "./Foodcard";
import menu from "../data/menu";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";

export default function PopularMenu() {
  const addToCart = useCartStore((state) => state.addToCart);
  const { t } = useTranslation();

  const topItems = menu.slice(0, 3);
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t("popular_dishes")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topItems.map((item) => (
            <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/menu"
            className="text-emerald-600 font-medium hover:underline"
          >
            {t("see_full_menu")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
