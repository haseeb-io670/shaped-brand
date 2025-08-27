import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Project = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });
  
  // Mouse position for header interactive effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const header = headerRef.current;
      if (header) {
        const rect = header.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        mouseX.set(x - rect.width / 2);
        mouseY.set(y - rect.height / 2);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Parallax effect for header
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Sample project data with enhanced details
  const projects = [
    {
      id: 1,
      title: 'Brand Transformation',
      client: 'TechVision Inc.',
      category: 'Brand Strategy',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+1',
      description: 'Complete brand overhaul including logo redesign, brand guidelines, and digital presence optimization.',
      results: ['250% increase in brand recognition', '35% growth in customer engagement', '40% increase in conversion rate'],
      year: '2023',
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      client: 'Lifestyle Apparel',
      category: 'Social Media',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+2',
      description: 'Integrated social media campaign that increased engagement by 200% and drove a 45% increase in online sales.',
      results: ['200% increase in social engagement', '45% growth in online sales', '320K new followers across platforms'],
      year: '2023',
    },
    {
      id: 3,
      title: 'Website Redesign',
      client: 'Global Finance',
      category: 'Web Development',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+3',
      description: 'Modern, responsive website redesign with improved UX/UI that reduced bounce rate by 35% and increased conversions.',
      results: ['35% reduction in bounce rate', '60% increase in page load speed', '28% improvement in conversion rate'],
      year: '2022',
    },
    {
      id: 4,
      title: 'Content Marketing Strategy',
      client: 'Health & Wellness Co.',
      category: 'Content Marketing',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+4',
      description: 'Comprehensive content strategy that established the client as an industry thought leader and generated 150% more leads.',
      results: ['150% increase in lead generation', '75% growth in organic traffic', '12 featured articles in industry publications'],
      year: '2022',
    },
    {
      id: 5,
      title: 'E-commerce Platform Optimization',
      client: 'Luxury Goods Retailer',
      category: 'E-commerce',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+5',
      description: 'Complete overhaul of e-commerce platform with personalized shopping experiences and streamlined checkout process.',
      results: ['68% increase in average order value', '42% reduction in cart abandonment', '3x improvement in customer retention'],
      year: '2023',
    },
    {
      id: 6,
      title: 'Integrated Marketing Campaign',
      client: 'Sustainable Fashion Brand',
      category: 'Integrated Marketing',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+6',
      description: 'Multi-channel marketing campaign highlighting sustainable practices and ethical manufacturing processes.',
      results: ['185% ROI on campaign spend', '47% increase in brand loyalty metrics', '320K+ social media impressions'],
      year: '2021',
    },
  ];

  // Get all unique categories for filter
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="pt-20 bg-matte-black relative overflow-hidden">
      {/* Hero Header with Parallax and Interactive Elements */}
      <div ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/111/222?text=')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/90 via-matte-black/70 to-matte-black"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -inset-[100px] opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle at center, rgba(229, 9, 20, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              x: mouseXSpring,
              y: mouseYSpring,
            }}
          />
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwVjBoLTMwdjMwek0wIDYwaDMwVjMwaC0zMHYzMHpNMzAgNjBoMzBWMzBoLTMwdjMweiIgZmlsbD0iIzIyMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Floating elements */}
        <motion.div 
          style={{ 
            y: headerY, 
            opacity: headerOpacity,
            scale: headerScale,
          }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          {/* Decorative elements that follow mouse */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="absolute top-[20%] left-[15%] w-16 h-16 rounded-full border border-secondary/20"
              style={{
                x: useTransform(mouseXSpring, [0, 0], [-20, 20]),
                y: useTransform(mouseYSpring, [0, 0], [-20, 20]),
              }}
            />
            <motion.div 
              className="absolute bottom-[30%] right-[20%] w-24 h-24 rounded-full border border-secondary/10"
              style={{
                x: useTransform(mouseXSpring, [0, 0], [30, -30]),
                y: useTransform(mouseYSpring, [0, 0], [30, -30]),
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Small decorative line above title */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px w-24 bg-secondary/70 mx-auto mb-8"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">Our </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-light-grey text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
            >
              Showcasing our most impactful work across industries and disciplines.
            </motion.p>
            
            {/* Small decorative line below description */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-px w-16 bg-secondary/40 mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ height: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 bg-secondary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* Section Title with Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-secondary mb-6"
            />
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-medium text-white mb-4 uppercase tracking-widest"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-center max-w-xl mx-auto mb-6"
            >
              Explore our portfolio of successful digital marketing campaigns and brand transformations
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
            />
          </div>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.02, backgroundColor: filter === category ? '' : 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className={`px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${filter === category 
                ? 'bg-secondary/90 text-white shadow-lg shadow-secondary/20' 
                : 'bg-transparent text-light-grey/80 border-b-2 border-transparent hover:border-secondary/30'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-primary/40 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-white/5 h-full flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-90"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-sm border border-white/20">
                      {project.category}
                    </div>
                    
                    {/* Year badge */}
                    <div className="absolute bottom-4 left-4 bg-secondary/90 text-white text-xs font-medium px-2 py-1 rounded-sm">
                      {project.year}
                    </div>
                    
                    {/* View overlay - appears on hover */}
                    <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium tracking-wider uppercase">View Project</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-secondary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center mb-3">
                        <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        <p className="text-white/70 text-sm">
                          {project.client}
                        </p>
                      </div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-secondary/80 to-secondary/20 mb-4"></div>
                      <p className="text-white/60 text-sm mb-6 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Results section with glass effect */}
                    <div className="mb-6 bg-white/5 backdrop-blur-sm p-4 rounded border border-white/5">
                      <h4 className="text-xs uppercase tracking-wider text-secondary/90 mb-3 font-medium flex items-center">
                        <span className="inline-block w-2 h-2 border border-secondary/50 rounded-sm mr-2"></span>
                        Key Metrics
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-white/70 text-xs flex items-start">
                            <span className="inline-block w-1 h-1 bg-secondary rounded-full mr-2 mt-1.5"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button 
                      whileHover={{ y: -2, backgroundColor: "rgba(229, 9, 20, 0.1)" }}
                      whileTap={{ y: 1 }}
                      className="bg-transparent border border-secondary/70 text-secondary hover:text-white text-xs px-6 py-3 font-medium transition-all duration-300 uppercase tracking-wider flex items-center justify-center group"
                    >
                      <span>Case Study</span>
                      <motion.span 
                        initial={{ width: 0, marginLeft: 0, opacity: 0 }}
                        whileHover={{ width: 16, marginLeft: 8, opacity: 1 }}
                        className="overflow-hidden flex items-center"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 mb-24"
        >
          <motion.button 
            whileHover={{ y: -3 }}
            whileTap={{ y: 1 }}
            className="bg-transparent border border-secondary/50 text-secondary hover:border-secondary px-10 py-4 font-medium transition-all duration-300 uppercase tracking-widest text-sm relative group"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View All Projects</span>
            <span className="absolute inset-0 bg-secondary transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          </motion.button>
        </motion.div>
        
        {/* Stats section with enhanced animations */}
        <div ref={statsRef} className="relative py-28 mt-24 mb-20 overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwVjBoLTMwdjMwek0wIDYwaDMwVjMwaC0zMHYzMHpNMzAgNjBoMzBWMzBoLTMwdjMweiIgZmlsbD0iIzIyMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
          
          {/* Animated light beam */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[500px] bg-gradient-to-b from-secondary/10 via-secondary/5 to-transparent blur-3xl"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, 0],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl font-medium text-white uppercase tracking-widest mb-3">By The Numbers</h3>
              <div className="flex items-center justify-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isStatsInView ? { width: 40 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-secondary"
                />
                <div className="w-2 h-2 mx-2 bg-secondary/30 rounded-full"></div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isStatsInView ? { width: 40 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-secondary"
                />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '150+', label: 'Projects Completed', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                { value: '98%', label: 'Client Satisfaction', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
                { value: '15+', label: 'Industries Served', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { value: '42', label: 'Awards Won', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                  className="text-center backdrop-blur-sm bg-white/5 border border-white/5 p-6 rounded-sm"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
                    className="inline-block mb-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full border border-secondary/20 flex items-center justify-center bg-secondary/5">
                      <svg className="w-8 h-8 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.15) }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isStatsInView ? { width: 40 } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 + (index * 0.15) }}
                    className="h-px bg-secondary/40 mx-auto my-3"
                  />
                  
                  <p className="text-white/60 uppercase tracking-wider text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Client testimonial section with enhanced design */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-medium text-white uppercase tracking-widest mb-3">Client Testimonials</h3>
            <div className="flex items-center justify-center">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-secondary/70"
              />
              <div className="w-2 h-2 mx-2 bg-secondary/30 rounded-full"></div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-secondary/70"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Background elements */}
            <div className="absolute -inset-6 bg-gradient-to-br from-secondary/10 to-transparent blur-xl opacity-50 rounded-lg"></div>
            
            <div className="relative bg-primary/30 backdrop-blur-md border border-white/10 p-12 rounded-sm">
              {/* Quote marks */}
              <svg className="absolute -top-6 -left-6 w-12 h-12 text-secondary/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-secondary/30 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-10 text-center">
                <span className="italic">Shaped Brand transformed our digital presence completely. Their strategic approach and creative execution helped us achieve results beyond our expectations.</span>
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mr-4 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-xl font-serif text-white/80">SJ</div>
                </div>
                <div>
                  <p className="text-white font-medium">Sarah Johnson</p>
                  <p className="text-white/60 text-sm">Marketing Director, TechVision Inc.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-2 h-2 rounded-full bg-secondary"></button>
              <button className="w-2 h-2 rounded-full bg-white/20"></button>
              <button className="w-2 h-2 rounded-full bg-white/20"></button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;