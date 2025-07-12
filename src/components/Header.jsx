import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useCartStore from "../store/cartStore";
import { t } from "i18next";

export default function Header({ cartCount = 0 }) {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCartDrawer = useCartStore((s) => s.toggleCartDrawer);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ja" : "en");
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium hover:text-emerald-600 ${
      isActive ? "text-emerald-600 underline" : "text-gray-700"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-600">
          <NavLink to="/">🍱 BentoBox</NavLink>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            {t("home")}
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            {t("menu")}
          </NavLink>
          <NavLink to="/checkout" className={navLinkClass}>
            {t("checkout")}
          </NavLink>

          <button
            onClick={toggleLanguage}
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
          >
            {i18n.language === "en" ? t("japenese") : "EN"}
          </button>

          <div onClick={toggleCartDrawer} className="relative cursor-pointer">
            <span className="material-icons text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? (
            <span className="material-icons">close</span>
          ) : (
            <span className="material-icons">menu</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/menu"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {t("menu")}
          </NavLink>
          <NavLink
            to="/checkout"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {t("checkout")}
          </NavLink>

          <button
            onClick={toggleLanguage}
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100 w-fit"
          >
            {i18n.language === "en" ? "日本語" : "EN"}
          </button>

          <div
            className="relative cursor-pointer w-fit"
            onClick={toggleCartDrawer}
          >
            <span className="material-icons text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
