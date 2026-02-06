import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const values = [
    { icon: Target, title: t.about.precision, desc: t.about.precisionDesc },
    { icon: Users, title: t.about.collaboration, desc: t.about.collaborationDesc },
    { icon: Zap, title: t.about.performance, desc: t.about.performanceDesc },
    { icon: Heart, title: t.about.passion, desc: t.about.passionDesc },
  ];
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t.about.title}
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto mb-4" style={{ color: '#cbd5e1' }}>
            {t.about.intro1}
          </p>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
            {t.about.intro2}
          </p>
        </div>
      </div>

      {/* Founder/Story Section */}
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
              alt="Digital agency at work" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.about.ourStory}</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {t.about.story1}
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.story2}
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-primary-600 rounded-r-lg">
              <p className="text-lg font-medium text-slate-800 italic">
                {t.about.quote}
              </p>
              <p className="mt-2 text-primary-600 font-bold">{t.about.founders}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.ourValues}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t.about.valuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;