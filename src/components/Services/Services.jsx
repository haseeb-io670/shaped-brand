import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiLayout, FiGlobe, FiBarChart2, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link, index }) => {
  const Icon = icon;
  const cardRef = useRef(null);
  
  // Mouse movement effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Update motion values
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="bg-primary p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300 shadow-xl relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-matte-black to-primary opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Glowing orb */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Content with 3D effect */}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="inline-block p-5 bg-secondary/10 rounded-xl mb-6 border border-secondary/20">
          <Icon className="text-secondary text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-silver mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-secondary font-medium hover:text-white transition-colors duration-300 group-hover:underline"
        >
          Learn more
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.1
            }}
            className="ml-2"
          >
            <FiArrowRight />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  // Parallax scrolling effect
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Mouse follow effect for floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert mouse position to normalized values (-0.5 to 0.5)
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
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

  // Process steps with enhanced visuals
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business, competitors, and target audience to identify opportunities.',
      color: 'from-secondary to-secondary-dark'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a tailored plan aligned with your business objectives and market position.',
      color: 'from-secondary to-accent'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We implement the strategy with precision, creativity, and attention to detail.',
      color: 'from-accent to-secondary'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'We continuously measure, analyze, and refine for optimal results and ROI.',
      color: 'from-accent to-accent-dark'
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 pt-20 bg-primary overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        style={{ 
          x: useTransform(mouseXSpring, (x) => x * -1),
          y: useTransform(mouseYSpring, (y) => y * -1),
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary opacity-5 blur-3xl"
      />
      <motion.div 
        style={{ 
          x: useTransform(mouseXSpring, (x) => x * 1.5),
          y: useTransform(mouseYSpring, (y) => y * 1.5),
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent opacity-5 blur-3xl"
      />
      
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='1' stroke='rgb(229 9 20 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20">
              What We Offer
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our <span className="text-secondary">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-silver max-w-2xl mx-auto text-lg"
          >
            We offer a comprehensive range of marketing and branding services to help your business stand out in today's competitive market.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
        
        {/* Process section with enhanced visuals */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-secondary">Process</span>
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-lg">
              We follow a proven methodology to ensure your brand achieves its full potential.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-matte-black p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Step number */}
                <div className="relative">
                  <span className="text-4xl font-bold text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300">{step.number}</span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                  <p className="text-silver">{step.description}</p>
                </div>
                
                {/* Animated line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary/50 to-secondary"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-matte-black p-12 md:p-16 rounded-3xl border border-dark-grey relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary opacity-10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent opacity-10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Brand?</h2>
              <p className="text-silver text-lg mb-0">
                Let's discuss how our services can help you achieve your business goals and elevate your brand presence.
              </p>
            </div>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-medium transition-colors duration-300 flex items-center"
              >
                Get Started <FiArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;