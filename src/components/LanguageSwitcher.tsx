import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import { motion } from 'framer-motion';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            language === lang.code
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {language === lang.code && (
            <motion.div
              layoutId="language-bg"
              className="absolute inset-0 bg-primary rounded-full"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <span>{lang.flag}</span>
            <span className="hidden sm:inline">{lang.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
};
