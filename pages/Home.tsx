import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Heart, CheckCircle, Smartphone, Server, Cloud } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl filter opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              Award-Winning Digital Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We build beautiful, high-performing websites that captivate your audience and drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl text-center">
                Get Started
              </Link>
              <Link to="/portfolio" className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-lg font-semibold hover:border-slate-400 transition-all text-center">
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <img 
               src="https://picsum.photos/800/800?random=10" 
               alt="Digital Innovation" 
               className="rounded-2xl shadow-2xl relative z-10 object-cover h-[600px] w-full"
             />
             <div className="absolute -bottom-6 -left-6 w-full h-full bg-slate-900/5 rounded-2xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                <div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">500+</h3>
                    <p className="text-slate-500">Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                    <p className="text-slate-500">Client Satisfaction</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">10+</h3>
                    <p className="text-slate-500">Years Experience</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">24/7</h3>
                    <p className="text-slate-500">Support Available</p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600">
              We offer a full suite of digital services designed to take your business to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Website Design", desc: "Custom, responsive designs that reflect your brand identity." },
              { icon: Code, title: "Web App Development", desc: "Custom web apps built for scale and performance, from responsive frontends to secure backends and APIs, using modern technology stacks." },
              { icon: Heart, title: "Non-Profit Website Program", desc: "We provide free websites for qualified non-profit organizations so they can reach more people with a professional online presence." },
            ].map((service, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary-600 font-semibold tracking-wide uppercase">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Recent Work</h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-primary-600 transition-colors">
              View all projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Martial Art Demo Website", category: "Website", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800", url: "https://taekwondodemo-gloriacloud.vercel.app/" },
            ].map((project, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary-400 font-medium mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary-600 font-medium">
              View all projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <Cloud size={400} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-slate-800 p-8 rounded-2xl">
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[1,2,3,4,5].map(i => <div key={i}>★</div>)}
               </div>
               <p className="text-slate-300 text-lg mb-6 italic">"Gloria Cloud transformed our outdated website into a lead-generating machine. Their attention to detail is unmatched."</p>
               <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/100/100?random=50" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                 <div>
                   <h4 className="font-bold">Sarah Johnson</h4>
                   <p className="text-sm text-slate-400">CEO, TechFlow</p>
                 </div>
               </div>
             </div>
             
             <div className="bg-slate-800 p-8 rounded-2xl">
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[1,2,3,4,5].map(i => <div key={i}>★</div>)}
               </div>
               <p className="text-slate-300 text-lg mb-6 italic">"Professional, responsive, and incredibly talented. They understood our vision perfectly and executed it flawlessly."</p>
               <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/100/100?random=51" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                 <div>
                   <h4 className="font-bold">Michael Chen</h4>
                   <p className="text-sm text-slate-400">Director, Chen Realty</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Schedule a free consultation today.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-slate-100 transition-colors shadow-xl">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;