import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="py-20 bg-primary min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-light-grey max-w-lg mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 inline-block"
          >
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;