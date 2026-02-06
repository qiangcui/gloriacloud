import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 items-start">
          {/* Brand Info */}
          <div className="min-w-0">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex" title="Gloria — Glory to God">
              <Cloud className="w-6 h-6 text-primary-500 shrink-0" />
              <span className="text-2xl font-bold text-white">Gloria Cloud</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">{t.footer.aboutUs}</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">{t.footer.services}</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-400 transition-colors">{t.footer.portfolio}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">{t.footer.contact}</Link></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-pointer">{t.footer.privacyPolicy}</span></li>
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white mb-6">{t.footer.services}</h3>
            <ul className="space-y-3">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">{t.footer.websiteDesign}</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">{t.footer.webAppDev}</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">{t.footer.nonProfitProgram}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white mb-6">{t.footer.getInTouch}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:gloriacloudco@gmail.com" className="hover:text-white transition-colors">gloriacloudco@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+13032572959" className="hover:text-white transition-colors">(303) 257-2959</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;