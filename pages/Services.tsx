import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const servicesList = [
    {
      icon: Layout,
      title: t.services.customWebDesign,
      description: t.services.customWebDesignDesc,
      features: [t.services.responsiveLayouts, t.services.interactivePrototypes, t.services.designSystems]
    },
    {
      icon: Smartphone,
      title: t.services.webAppDevelopment,
      description: t.services.webAppDevelopmentDesc,
      features: [t.services.reactNative, t.services.crossPlatform, t.services.apiIntegration]
    },
    {
      icon: Heart,
      title: t.services.nonProfitProgram,
      description: t.services.nonProfitProgramDesc,
      features: [t.services.noCost, t.services.professionalDesign, t.services.ongoingSupport]
    }
  ];
  return (
    <div className="min-h-screen bg-white">
       {/* Hero */}
       <div className="bg-primary-900 text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.services.title}</h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
       </div>

       {/* Service Grid */}
       <div className="container mx-auto px-6 md:px-12 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-primary-600 font-semibold hover:text-primary-800 transition-colors inline-flex items-center gap-2">
                   {t.services.getQuote} <span className="text-xl">→</span>
                </Link>
              </motion.div>
            ))}
         </div>
       </div>

       {/* Process Section */}
       <div className="bg-slate-50 py-24">
         <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">{t.services.howWeWork}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[t.services.discovery, t.services.strategy, t.services.development, t.services.launch].map((step, i) => (
                 <div key={i} className="relative text-center">
                    <div className="w-20 h-20 bg-white border-2 border-primary-200 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-6 relative z-10">
                      {i + 1}
                    </div>
                    {i !== 3 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200 -z-0"></div>
                    )}
                    <h3 className="text-lg font-bold text-slate-900">{step as string}</h3>
                 </div>
               ))}
            </div>
         </div>
       </div>
    </div>
  );
};

export default Services;