import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Lang } from '../constants/translations';

const navItems: { path: string; key: 'home' | 'about' | 'services' | 'portfolio' | 'contact' }[] = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/portfolio', key: 'portfolio' },
  { path: '/contact', key: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo — Gloria = Glory to God */}
        <Link to="/" className="flex items-center gap-2 group" title="Gloria — Glory to God">
          <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-500 transition-colors">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Gloria Cloud
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-colors hover:text-primary-600 ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : 'text-slate-600'
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            {(['en', 'ko', 'zh'] as Lang[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  language === lang ? 'text-primary-600 bg-primary-50' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'ko' ? 'KO' : '中文'}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-slate-900 text-white text-base font-medium rounded-full hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            {t.nav.startProject}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-primary-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xl font-medium py-2 border-b border-slate-50 ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : 'text-slate-600'
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="flex gap-2 py-2">
            {(['en', 'ko', 'zh'] as Lang[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`text-sm font-medium px-3 py-1.5 rounded ${
                  language === lang ? 'text-primary-600 bg-primary-50' : 'text-slate-500'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'ko' ? 'KO' : '中文'}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="w-full text-center px-5 py-3 bg-primary-600 text-white text-lg font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            {t.nav.startProject}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;