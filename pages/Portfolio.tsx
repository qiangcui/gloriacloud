import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  titleKey: 'martialArtDemo' | 'nonProfitDemo' | 'shortLinkApp';
  category: string;
  image: string;
  url?: string;
}

const projects: Project[] = [
  { id: 1, titleKey: 'martialArtDemo', category: "Website Design", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800", url: "https://taekwondodemo-gloriacloud.vercel.app/" },
  { id: 2, titleKey: 'nonProfitDemo', category: "Non-Profit", image: "https://nonprofitdemo-gloriacloud.vercel.app/images/hero.png", url: "https://nonprofitdemo-gloriacloud.vercel.app/" },
  { id: 3, titleKey: 'shortLinkApp', category: "Web App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800", url: "https://shortlinkapp-gloriacloud.vercel.app/" },
];

const categoryKeys = ['All', 'Website Design', 'Web App Development', 'Non-Profit'] as const;
const categoryLabelKeys = { 'All': 'all', 'Website Design': 'websiteDesign', 'Web App Development': 'webAppDev', 'Non-Profit': 'nonProfit' } as const;

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { t } = useLanguage();

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.portfolio.title}</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
           {categoryKeys.map((filter) => (
             <button 
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
             >
               {t.portfolio[categoryLabelKeys[filter]]}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={t.portfolio[project.titleKey]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t.portfolio.viewProject}
                    </a>
                  ) : (
                    <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t.portfolio.viewProject}
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary-600 text-xs font-bold uppercase tracking-wider">{t.portfolio[categoryLabelKeys[project.category as keyof typeof categoryLabelKeys]]}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{t.portfolio[project.titleKey]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;