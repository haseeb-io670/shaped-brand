import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, isPopular, cta }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-gray-900 rounded-lg overflow-hidden ${isPopular ? 'border-2 border-red-600 transform scale-105 z-10' : 'border border-gray-800'}`}
    >
      {isPopular && (
        <div className="bg-red-600 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/month</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              ) : (
                <FiX className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/contact" 
          className={`block text-center py-3 px-6 rounded-md transition-colors duration-300 ${isPopular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
        >
          {cta || 'Get Started'}
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      title: 'Basic',
      price: isAnnual ? '499' : '599',
      features: [
        { text: 'Brand Strategy Consultation', included: true },
        { text: 'Social Media Management (2 platforms)', included: true },
        { text: 'Monthly Content Calendar', included: true },
        { text: 'Basic SEO Optimization', included: true },
        { text: 'Monthly Performance Report', included: true },
        { text: 'Email Marketing Campaigns', included: false },
        { text: 'PPC Advertising Management', included: false },
        { text: 'Dedicated Account Manager', included: false },
      ],
      isPopular: false,
      cta: 'Start Basic Plan',
    },
    {
      title: 'Professional',
      price: isAnnual ? '999' : '1199',
      features: [
        { text: 'Brand Strategy Consultation', included: true },
        { text: 'Social Media Management (4 platforms)', included: true },
        { text: 'Weekly Content Calendar', included: true },
        { text: 'Advanced SEO Optimization', included: true },
        { text: 'Weekly Performance Report', included: true },
        { text: 'Email Marketing Campaigns', included: true },
        { text: 'PPC Advertising Management', included: true },
        { text: 'Dedicated Account Manager', included: false },
      ],
      isPopular: true,
      cta: 'Start Pro Plan',
    },
    {
      title: 'Enterprise',
      price: isAnnual ? '1999' : '2399',
      features: [
        { text: 'Brand Strategy Consultation', included: true },
        { text: 'Social Media Management (All platforms)', included: true },
        { text: 'Daily Content Calendar', included: true },
        { text: 'Premium SEO Optimization', included: true },
        { text: 'Real-time Performance Dashboard', included: true },
        { text: 'Email Marketing Campaigns', included: true },
        { text: 'PPC Advertising Management', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ],
      isPopular: false,
      cta: 'Start Enterprise Plan',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transparent Pricing Plans</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core brand strategy services.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual Billing</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-700 rounded-full p-1 transition duration-300 focus:outline-none"
            >
              <div 
                className={`absolute w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${isAnnual ? 'translate-x-0' : 'translate-x-7'}`}
              ></div>
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly Billing</span>
            <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              cta={plan.cta}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We offer tailored marketing solutions designed specifically for your business requirements and goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact for Custom Quote
          </Link>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">Can I switch plans later?</h4>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">Is there a contract or commitment?</h4>
              <p className="text-gray-400">Our services are month-to-month with no long-term contracts required. Annual plans are billed yearly but can be canceled anytime with prorated refunds.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers for business accounts.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;