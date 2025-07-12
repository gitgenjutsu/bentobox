import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-6 text-center text-sm">
      © {new Date().getFullYear()} {t("footer_copyright")}
    </footer>
  );
}
