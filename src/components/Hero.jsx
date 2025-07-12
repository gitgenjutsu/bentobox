import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-emerald-50 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          {t("hero_title")}
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          {t("hero_subtitle")}
        </p>
        <Link
          to="/menu"
          className="inline-block bg-emerald-500 text-white px-6 py-3 rounded text-lg font-medium hover:bg-emerald-600 transition"
        >
          {t("view_menu")}
        </Link>
      </div>
    </section>
  );
}
