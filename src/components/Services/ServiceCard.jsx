import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, link, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring physics for smoother animation
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Transform mouse position into rotation
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (0 to 1)
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    // Update motion values
    x.set(xValue);
    y.set(yValue);
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-matte-black p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glowing orb */}
      <motion.div 
        className="absolute w-32 h-32 rounded-full bg-secondary/20 blur-3xl"
        style={{
          x: useTransform(xSpring, [-0.5, 0.5], ["-50%", "150%"]),
          y: useTransform(ySpring, [-0.5, 0.5], ["-50%", "150%"]),
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1 : 0.5,
          transformStyle: "preserve-3d",
          translateZ: "10px",
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card content */}
      <div className="relative" style={{ transform: "translateZ(30px)" }}>
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-silver mb-6">{description}</p>
        
        <Link to={link} className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300 group-hover:underline">
          Learn more <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;