import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ quote, author, position, company, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-8 rounded-lg border border-gray-800 relative"
    >
      <div className="absolute -top-5 left-8 text-red-600 text-4xl">
        <FaQuoteLeft />
      </div>
      <p className="text-gray-300 mb-6 mt-4 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium">{author}</h4>
          <p className="text-gray-400 text-sm">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Shaped Brand transformed our digital presence completely. Their strategic approach to our brand positioning resulted in a 200% increase in engagement and a significant boost in conversions.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote: "Working with Shaped Brand was a game-changer for our startup. Their team understood our vision perfectly and delivered a brand identity that truly resonates with our target audience.",
      author: "Michael Chen",
      position: "CEO",
      company: "Elevate Solutions",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote: "The ROI we've seen since partnering with Shaped Brand has been incredible. Their data-driven approach to our marketing campaigns has yielded results that exceeded our expectations.",
      author: "Emily Rodriguez",
      position: "COO",
      company: "Horizon Retail",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Shaped Brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
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
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's create a marketing strategy that will transform your brand and drive exceptional results.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
        
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-medium text-center text-gray-300 mb-8">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400">Client Logo</div>
            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400">Client Logo</div>
            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400">Client Logo</div>
            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400">Client Logo</div>
            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400">Client Logo</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;