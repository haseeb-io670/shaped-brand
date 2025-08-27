import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiLayout, FiGlobe, FiBarChart2, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link }) => {
  const Icon = icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-300"
    >
      <div className="inline-block p-4 bg-gray-800 rounded-lg mb-6">
        <Icon className="text-red-600 text-3xl" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Link to={link} className="text-red-600 font-medium hover:text-red-500 transition-colors duration-300 flex items-center">
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Brand Strategy',
      description: 'We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.',
      link: '/contact',
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Our data-driven digital marketing campaigns deliver measurable results and maximize your ROI across all channels.',
      link: '/contact',
    },
    {
      icon: FiLayout,
      title: 'Web Design & Development',
      description: 'We create stunning, responsive websites that not only look great but also convert visitors into customers.',
      link: '/contact',
    },
    {
      icon: FiGlobe,
      title: 'Social Media Management',
      description: 'We build and manage your social presence to increase brand awareness and engage with your audience effectively.',
      link: '/contact',
    },
    {
      icon: FiBarChart2,
      title: 'SEO & Content Marketing',
      description: 'Our SEO and content strategies improve your visibility in search results and establish your brand as an industry authority.',
      link: '/contact',
    },
    {
      icon: FiMessageSquare,
      title: 'PR & Communications',
      description: 'We craft compelling narratives and manage your public relations to enhance your brand reputation and credibility.',
      link: '/contact',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of marketing and branding services to help your business stand out in today's competitive market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900 p-10 rounded-lg border border-gray-800 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
            <p className="text-gray-300">
              We follow a proven methodology to ensure your brand achieves its full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h4 className="text-lg font-medium text-white mb-2">Discovery</h4>
              <p className="text-gray-400 text-sm">We analyze your business, competitors, and target audience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h4 className="text-lg font-medium text-white mb-2">Strategy</h4>
              <p className="text-gray-400 text-sm">We develop a tailored plan aligned with your business objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h4 className="text-lg font-medium text-white mb-2">Execution</h4>
              <p className="text-gray-400 text-sm">We implement the strategy with precision and creativity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h4 className="text-lg font-medium text-white mb-2">Optimization</h4>
              <p className="text-gray-400 text-sm">We continuously measure, analyze, and refine for optimal results.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Brand?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business goals and elevate your brand presence.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;