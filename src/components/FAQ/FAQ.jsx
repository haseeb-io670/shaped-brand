import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-300 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-red-600 transition-colors duration-300">
          {question}
        </h3>
        <span className="ml-4 flex-shrink-0 text-red-600">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 pb-2 text-gray-300">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What services does Shaped Brand offer?",
      answer: "Shaped Brand offers a comprehensive range of digital marketing services including brand strategy, web design and development, social media marketing, content creation, SEO optimization, PPC advertising, email marketing, and analytics reporting."
    },
    {
      question: "How long does it typically take to see results from digital marketing efforts?",
      answer: "Results vary depending on the specific services and your industry. SEO typically takes 3-6 months to show significant results, while paid advertising can generate immediate traffic. Social media marketing usually requires 2-3 months of consistent effort to build momentum. We provide regular reports to track progress and make adjustments as needed."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our strategies are customized to fit your specific business needs, goals, and budget. We believe every business deserves quality digital marketing services regardless of size."
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer: "We measure success through various metrics including website traffic, conversion rates, engagement rates, lead generation, ROI, and other KPIs specific to your business goals. We provide detailed reports and analytics dashboards so you can see exactly how your campaigns are performing."
    },
    {
      question: "What makes Shaped Brand different from other digital marketing agencies?",
      answer: "Shaped Brand stands out through our strategic approach that combines creativity with data-driven decisions. We focus on creating meaningful brand experiences rather than just generating traffic. Our team consists of specialists in various digital marketing disciplines, ensuring expertise across all services we offer."
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our services? Find answers to common questions below, or contact us for more information.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;