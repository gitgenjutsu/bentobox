import { useTranslation } from "react-i18next";

export default function FeatureGrid() {
  const { t } = useTranslation();

  const features = [
    { icon: "local_shipping", label: t("features.fast") },
    { icon: "restaurant", label: t("features.authentic") },
    { icon: "eco", label: t("features.fresh") },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
        {features.map((f, i) => (
          <div key={i}>
            <span className="material-icons text-4xl text-emerald-500 mb-2">
              {f.icon}
            </span>
            <h3 className="text-lg font-semibold">{f.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
