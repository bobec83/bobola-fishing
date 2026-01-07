import { Fish } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Fish className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg">
                <span className="text-foreground">Bobola</span>
                <span className="gradient-text"> Fishing</span>
              </span>
              <p className="text-xs text-muted-foreground">{t.footer.tagline}</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} Bobola Fishing. {t.footer.rights}.
          </div>

          {/* Domain */}
          <a
            href="https://bobola-fishing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            bobola-fishing.com
          </a>
        </div>
      </div>
    </footer>
  );
};
