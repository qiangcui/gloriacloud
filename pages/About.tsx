import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Gloria Cloud
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We are a team of passionate designers and developers dedicated to making the web a more beautiful and functional place.
          </p>
        </div>
      </div>

      {/* Founder/Story Section */}
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/800/1000?random=99" 
              alt="Team working" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in 2020, Gloria Cloud began with a simple mission: to bridge the gap between complex technology and intuitive design. We realized that many businesses were struggling to find agencies that could deliver both technical excellence and aesthetic appeal.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Today, we have grown into a full-service digital agency, helping hundreds of clients worldwide transform their digital presence. We believe that a website isn't just code and pixels—it's the heart of your modern business.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-primary-600 rounded-r-lg">
              <p className="text-lg font-medium text-slate-800 italic">
                "We don't just build websites; we build digital legacies for brands that dare to dream big."
              </p>
              <p className="mt-2 text-primary-600 font-bold">— The Founders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our core principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We obsess over every pixel and interaction to ensure perfection." },
              { icon: Users, title: "Collaboration", desc: "We work WITH you, not just for you, ensuring your vision is realized." },
              { icon: Zap, title: "Performance", desc: "Speed matters. We optimize for the fastest loading times." },
              { icon: Heart, title: "Passion", desc: "We truly love what we do, and that energy shows in our work." },
            ].map((value, idx) => (
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