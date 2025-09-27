import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Link, useLocation } from 'react-router-dom';

const GlassNavbar = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <NavigationBar />
    </section>
  );
};

const NavigationBar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto"
      }}
      className="glass-nav font-navbar fixed left-0 right-0 top-0 z-50 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-red-600 from-40% to-red-400 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <Link 
    to="/" 
    className="pointer-events-none relative left-0 top-[50%] z-10 flex flex-col items-center md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]"
  >
    <img 
      src="/logos/logo.png" 
      alt="Brand Logo"
      style={{ width: "120px" }}
      className="h-auto object-contain"
    />
  </Link>
);

const Links = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <div className="hidden items-center gap-2 md:flex">
      {navLinks.map((link) => (
        <GlassLink key={link.name} text={link.name} path={link.path} />
      ))}
    </div>
  );
};

const GlassLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
};

const TextLink = ({ text, path }) => {
  return (
    <Link to={path} className="text-white/90 transition-colors hover:text-white">
      {text}
    </Link>
  );
};

const Buttons = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center gap-4">
    <Link
      to="/contact"
      className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-red-600 from-40% to-red-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95"
    >
      Get Started
    </Link>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
    >
      <FiMenu />
    </button>
  </div>
);



const MobileMenu = ({ menuOpen }) => {
  const [ref, { height }] = useMeasure();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex flex-col items-start gap-4 px-4 pb-4">
        {navLinks.map((link) => (
          <TextLink key={link.name} text={link.name} path={link.path} />
        ))}
      </div>
    </motion.div>
  );
};

export default GlassNavbar;