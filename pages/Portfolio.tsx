import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "FinTech Dashboard", category: "Web App", image: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "Organic Co.", category: "E-Commerce", image: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "Modern Architecture", category: "Portfolio Site", image: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "HealthPlus", category: "Branding", image: "https://picsum.photos/800/600?random=4" },
  { id: 5, title: "Travel Go", category: "Mobile App", image: "https://picsum.photos/800/600?random=5" },
  { id: 6, title: "Coffee Culture", category: "Marketing", image: "https://picsum.photos/800/600?random=6" },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Selected Work</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            A showcase of our finest projects. We take pride in delivering excellence across various industries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Filter (Visual only for now) */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
           {['All', 'Web Design', 'Branding', 'Development'].map((filter, idx) => (
             <button 
                key={idx}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  idx === 0 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
             >
               {filter}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary-600 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;