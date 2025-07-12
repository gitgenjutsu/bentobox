import { useState } from "react";
import menuData from "../data/menu";
import FoodCard from "../components/Foodcard";
import toast from "react-hot-toast";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";

const categories = ["All", ...new Set(menuData.map((item) => item.category))];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const addToCart = useCartStore((state) => state.addToCart);

  // Filter by category and search
  const filteredMenu = menuData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("our")} {t("menu")}</h2>
        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder={t("search_for_a_dish")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition capitalize ${
              selectedCategory === cat
                ? "bg-emerald-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMenu.map((item) => (
          <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
