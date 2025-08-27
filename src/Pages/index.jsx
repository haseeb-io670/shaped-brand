import React from 'react';
import { Helmet } from 'react-helmet-async';
import GlassNavbar from '../components/Navbar/GlassNavbar';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';

const SkipLink = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded"
  >
    Skip to main content
  </a>
);

const MainLayout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <title>{title || 'Shaped Brand - Creative Marketing Agency'}</title>
        <meta 
          name="description" 
          content={description || 'Shaped Brand is a creative marketing agency specializing in brand strategy, digital marketing, and web development.'} 
        />
        <meta 
          name="keywords" 
          content={keywords || 'marketing agency, brand strategy, digital marketing, web development'} 
        />
      </Helmet>
      
      <Preloader>
        <SkipLink />
        <GlassNavbar />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
      </Preloader>
    </>
  );
};

export default MainLayout;