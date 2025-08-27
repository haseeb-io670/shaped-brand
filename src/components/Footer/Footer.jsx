import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Careers', path: '/careers' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Cookie Policy', path: '/cookie-policy' },
      ]
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo, description and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 border-b border-gray-800 pb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative flex items-center">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-600"
                >
                  <path 
                    d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15Z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10Z" 
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">SHAPED</span>
                <span className="text-xs font-medium text-red-600 tracking-widest -mt-1">BRAND</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming digital presence through innovative marketing strategies. 
              We shape brands that leave lasting impressions in the digital landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  aria-label={`Visit our social media ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Marketing Street</p>
              <p className="mb-2">Digital City, DC 10101</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">
                <a href="mailto:info@shapedbrand.com" className="hover:text-red-500 transition-colors duration-300">
                  info@shapedbrand.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-red-500 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news and updates from our team.
            </p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shaped Brand. All rights reserved.
          </p>
          <motion.button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;