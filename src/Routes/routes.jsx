import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Pages/index.jsx';
import Home from '../components/Home';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Project from '../components/Project/Project';
import WhyUs from '../components/WhyUs/WhyUS';
import NotFound from '../components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout
      title="Shaped Brand - Transform Your Digital Presence"
      description="Innovative digital marketing agency specializing in brand strategy, social media, content creation, and SEO optimization."
      keywords="digital marketing, brand strategy, social media marketing, content creation, SEO optimization"
    ><Home /></MainLayout>,
  },
  {
    path: '/about',
    element: <MainLayout 
      title="About Shaped Brand - Our Story & Mission"
      description="Learn about Shaped Brand's journey, our mission, values, and the talented team behind our innovative digital marketing solutions."
      keywords="digital marketing agency, about us, marketing team, brand strategy experts"
    ><About /> <WhyUs /></MainLayout>,
  },
  {
    path: '/services',
    element: <MainLayout
      title="Our Services - Brand Strategy & Digital Marketing Solutions"
      description="Explore our comprehensive range of digital marketing services including brand strategy, social media management, content creation, and SEO optimization."
      keywords="digital marketing services, brand strategy, social media management, content creation, SEO optimization"
    ><Services /></MainLayout>,
  },
  {
    path: '/pricing',
    element: <MainLayout
      title="Pricing Plans - Transparent & Flexible Options"
      description="Discover our transparent pricing plans for digital marketing services. Flexible options tailored to businesses of all sizes."
      keywords="digital marketing pricing, brand strategy costs, social media management pricing, marketing services plans"
    ><Pricing /></MainLayout>,
  },
  {
    path: '/contact',
    element: <MainLayout
      title="Contact Us - Get In Touch With Our Team"
      description="Reach out to Shaped Brand for your digital marketing needs. Our team is ready to discuss your brand strategy and provide solutions."
      keywords="contact digital marketing agency, marketing consultation, hire marketers, brand strategy inquiry"
    ><Contact /></MainLayout>,
  },
  {
    path: '/projects',
    element: <MainLayout
      title="Our Projects - Portfolio of Success Stories"
      description="Browse through our portfolio of successful digital marketing campaigns and brand transformations across various industries."
      keywords="marketing portfolio, branding case studies, social media examples, content marketing showcase"
    ><Project /></MainLayout>,
  },

  {
    path: '*',
    element: <MainLayout
      title="404 - Page Not Found | Shaped Brand"
      description="The page you are looking for does not exist. Return to Shaped Brand's homepage."
      keywords="page not found, 404 error, missing page"
    ><NotFound /></MainLayout>,
  }
]);

export default router;