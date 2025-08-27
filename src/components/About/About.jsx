import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  // Parallax effect for hero section
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  // Mouse follow effect for the floating elements
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
  
  // Team members data
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      quote: 'We believe in transforming brands through strategic innovation and creative excellence.'
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      quote: 'Design is not just what it looks like, it\'s how it works for your business goals.'
    },
    {
      name: 'David Wilson',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      quote: 'The best marketing doesn\'t feel like marketing; it feels like value.'
    },
  ];
  
  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'Founded in New York',
      description: 'Shaped Brand was established with a vision to transform how businesses connect with their audiences.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Partnered with a Fortune 500 company, setting the foundation for our enterprise solutions.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pivoted to help businesses thrive online during global challenges, doubling our client base.'
    },
    {
      year: '2021',
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore, bringing our expertise to global markets.'
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for our innovative campaigns and client results.'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched our commitment to carbon-neutral operations and sustainable marketing practices.'
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-primary">
      {/* Hero Section with Parallax */}
      <div ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
              filter: 'brightness(0.4)'
            }}
          ></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              We Shape <span className="text-secondary">Brands</span> That <br />
              <span className="text-secondary">Shape</span> The Future
            </h1>
            <p className="text-xl text-silver max-w-3xl mx-auto mb-8">
              A creative collective of strategists, designers, and digital innovators passionate about transforming businesses through powerful brand experiences.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-medium transition-colors duration-300 flex items-center mx-auto"
            >
              Our Journey <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          style={{ 
            x: useTransform(mouseXSpring, (x) => x * -1),
            y: useTransform(mouseYSpring, (y) => y * -1),
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary opacity-10 blur-xl"
        />
        <motion.div 
          style={{ 
            x: useTransform(mouseXSpring, (x) => x * 1.5),
            y: useTransform(mouseYSpring, (y) => y * 1.5),
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent opacity-10 blur-xl"
        />
      </div>
      
      {/* Our Story Section */}
      <div className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-secondary">Story</span>
              </h2>
              <p className="text-silver mb-6 text-lg">
                Shaped Brand was born from a vision to transform how businesses connect with their audiences in the digital age. Founded in 2018, we've evolved from a boutique agency to a full-service digital powerhouse, helping brands across industries establish meaningful connections and drive exceptional growth.
              </p>
              <p className="text-silver mb-8 text-lg">
                Our approach combines strategic thinking, creative excellence, and technical innovation to deliver solutions that not only meet current needs but anticipate future trends. We don't just build brands—we shape experiences that resonate and endure.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-matte-black p-6 rounded-xl border border-dark-grey">
                  <h3 className="text-secondary text-4xl font-bold mb-2">500+</h3>
                  <p className="text-silver">Projects Completed</p>
                </div>
                
                <div className="bg-matte-black p-6 rounded-xl border border-dark-grey">
                  <h3 className="text-secondary text-4xl font-bold mb-2">200+</h3>
                  <p className="text-silver">Happy Clients</p>
                </div>
                
                <div className="bg-matte-black p-6 rounded-xl border border-dark-grey">
                  <h3 className="text-secondary text-4xl font-bold mb-2">15+</h3>
                  <p className="text-silver">Team Members</p>
                </div>
                
                <div className="bg-matte-black p-6 rounded-xl border border-dark-grey">
                  <h3 className="text-secondary text-4xl font-bold mb-2">5+</h3>
                  <p className="text-silver">Years Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Shaped Brand Team" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/111111/FFFFFF?text=Shaped+Brand+Team';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-full opacity-10 blur-xl z-0"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent rounded-full opacity-10 blur-xl z-0"></div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 left-10 bg-matte-black p-4 rounded-xl shadow-xl border border-dark-grey z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary p-2 rounded-md">
                    <FiAward className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Award Winning</h3>
                    <p className="text-light-grey text-sm">Agency of the Year 2023</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="py-24 bg-matte-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Core <span className="text-secondary">Values</span>
            </h2>
            <p className="text-silver max-w-3xl mx-auto text-lg">
              These principles guide everything we do, from how we work with clients to how we develop our team and create our strategies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-primary p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-xl inline-block mb-6">
                <FiUsers className="text-secondary text-3xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="text-silver">
                We believe the best results come from true partnership with our clients and teamwork within our agency.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-primary p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-xl inline-block mb-6">
                <FiTarget className="text-secondary text-3xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Strategic Excellence</h3>
              <p className="text-silver">
                Every decision we make is informed by data, research, and a clear understanding of business objectives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-primary p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-xl inline-block mb-6">
                <FiAward className="text-secondary text-3xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Creative Innovation</h3>
              <p className="text-silver">
                We push boundaries and challenge conventions to deliver fresh, impactful solutions that stand out.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-primary p-8 rounded-2xl border border-dark-grey hover:border-secondary transition-all duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-xl inline-block mb-6">
                <FiTrendingUp className="text-secondary text-3xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Measurable Impact</h3>
              <p className="text-silver">
                We're committed to delivering tangible results that drive real business growth and ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="py-24 bg-primary relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-secondary">Journey</span>
            </h2>
            <p className="text-silver max-w-3xl mx-auto text-lg">
              From our humble beginnings to becoming an industry leader, here's how we've evolved over the years.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-dark-grey"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-primary z-10"></div>
                  
                  {/* Content */}
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}
                  >
                    <div className="bg-matte-black p-6 rounded-xl border border-dark-grey hover:border-secondary transition-all duration-300">
                      <span className="text-secondary font-bold text-xl mb-2 block">{item.year}</span>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-silver">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-24 bg-matte-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-silver max-w-3xl mx-auto text-lg">
              The creative minds and strategic thinkers behind our award-winning work.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-primary rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute -top-10 right-6 bg-secondary p-4 rounded-xl shadow-lg"
                  >
                    <FaQuoteLeft className="text-white text-xl" />
                  </motion.div>
                  
                  <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary mb-4">{member.role}</p>
                  <p className="text-silver italic">"{member.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-silver mb-6 text-lg">
              Want to join our team of creative professionals?
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
            >
              View Careers <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full opacity-5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;