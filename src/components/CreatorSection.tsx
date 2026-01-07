import { motion } from 'framer-motion';
import { Facebook, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export const CreatorSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 text-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{t.creator.badge}</span>
            </div>

            {/* Avatar placeholder */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 flex items-center justify-center border-2 border-primary/30">
              <span className="text-4xl font-bold gradient-text">WK</span>
            </div>

            {/* Name */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Wojciech Kołecki
            </h3>
            
            {/* Title */}
            <p className="text-primary font-medium mb-4">
              {t.creator.title}
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.creator.description}
            </p>

            {/* Facebook link */}
            <a
              href="https://www.facebook.com/profile.php?id=100000274032327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#1877F2] font-medium transition-colors"
            >
              <Facebook className="w-5 h-5" />
              {t.creator.followFacebook}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
