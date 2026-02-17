import { Facebook, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Community invite */}
        <div className="flex flex-col items-center text-center mb-10 pb-10 border-b border-border/30">
          <div className="w-14 h-14 rounded-full bg-[#1877F2]/20 flex items-center justify-center mb-4">
            <Users className="w-7 h-7 text-[#1877F2]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            {t.footer.community}
          </h3>
          <p className="text-muted-foreground mb-4 max-w-md">
            {t.footer.communityDesc}
          </p>
          <a
            href="https://www.facebook.com/jigheadrealfish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-medium transition-colors"
          >
            <Facebook className="w-5 h-5" />
            {t.footer.joinFacebook}
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo_bez_tla.png"
              alt="Bobola Fishing"
              className="h-20 object-contain"
            />
            <p className="text-xs text-muted-foreground">{t.footer.tagline}</p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} Bobola Fishing. {t.footer.rights}.
          </div>

          {/* Social & Domain */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/jigheadrealfish"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-[#1877F2]" />
            </a>
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
      </div>
    </footer>
  );
};
