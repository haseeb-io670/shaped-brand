import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Brand Transformation',
      client: 'TechVision Inc.',
      category: 'Brand Strategy',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+1',
      description: 'Complete brand overhaul including logo redesign, brand guidelines, and digital presence optimization.',
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      client: 'Lifestyle Apparel',
      category: 'Social Media',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+2',
      description: 'Integrated social media campaign that increased engagement by 200% and drove a 45% increase in online sales.',
    },
    {
      id: 3,
      title: 'Website Redesign',
      client: 'Global Finance',
      category: 'Web Development',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+3',
      description: 'Modern, responsive website redesign with improved UX/UI that reduced bounce rate by 35% and increased conversions.',
    },
    {
      id: 4,
      title: 'Content Marketing Strategy',
      client: 'Health & Wellness Co.',
      category: 'Content Marketing',
      image: 'https://placehold.co/600x400/111/E50914?text=Project+4',
      description: 'Comprehensive content strategy that established the client as an industry thought leader and generated 150% more leads.',
    },
  ];

  return (
    <section className="py-20 bg-matte-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-secondary">Projects</span></h2>
          <p className="text-light-grey max-w-2xl mx-auto">
            Explore our portfolio of successful digital marketing campaigns and brand transformations that have helped our clients achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-primary rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary font-medium mb-4">Client: {project.client}</p>
                <p className="text-light-grey mb-6">{project.description}</p>
                <button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-md font-medium transition-colors duration-300">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;