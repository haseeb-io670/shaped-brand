import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

const WhyUS = () => {
  const reasons = [
    {
      icon: <FaRocket className="text-4xl text-secondary" />,
      title: 'Strategic Approach',
      description: 'We develop data-driven strategies tailored to your specific business goals and target audience.',
    },
    {
      icon: <FaChartLine className="text-4xl text-secondary" />,
      title: 'Measurable Results',
      description: 'Our campaigns deliver tangible outcomes with comprehensive analytics and reporting.',
    },
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: 'Expert Team',
      description: 'Our specialists bring years of industry experience and cutting-edge knowledge to every project.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-secondary" />,
      title: 'Creative Excellence',
      description: 'We blend innovative ideas with proven techniques to create standout brand experiences.',
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-secondary">Us</span></h2>
          <p className="text-light-grey max-w-2xl mx-auto">
            At Shaped Brand, we're committed to delivering exceptional digital marketing solutions that drive real business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-matte-black p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-light-grey">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-matte-black p-8 rounded-lg text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brand?</h3>
          <p className="text-light-grey mb-6">
            Let's discuss how our strategic digital marketing solutions can help you achieve your business goals.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUS;