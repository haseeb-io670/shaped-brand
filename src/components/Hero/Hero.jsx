import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineArrowUpward } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const DarkGridHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};

const Content = () => {
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <GlowingChip>Premium Digital Solutions 🚀</GlowingChip>
      </motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 text-center text-3xl font-bold leading-tight text-silver sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        Transform Your Brand's Digital Presence
      </motion.h1>
      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-9 max-w-2xl text-center text-base leading-relaxed text-light-grey sm:text-lg md:text-lg md:leading-relaxed"
      >
        We craft stunning digital experiences that elevate your brand, engage your audience, 
        and drive measurable results. From web design to digital marketing, we've got you covered.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <MagnetButton />
      </motion.div>
    </div>
  );
};

const GlowingChip = ({ children }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-dark-grey bg-matte-black/20 px-3 py-1.5 text-xs text-silver md:mb-0">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-light-grey/0 via-silver to-light-grey/0" />
    </span>
  );
};

 

const MagnetButton = () => { 
  const ref = useRef(null); 

  const x = useMotionValue(0); 
  const y = useMotionValue(0); 

  const xSpring = useSpring(x, { 
    mass: 3, 
    stiffness: 400, 
    damping: 50, 
  }); 
  const ySpring = useSpring(y, { 
    mass: 3, 
    stiffness: 400, 
    damping: 50, 
  }); 

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`; 

  const handleMouseMove = (e) => { 
    if (!ref.current) return; 

    const { height, width, left, top } = ref.current.getBoundingClientRect(); 

    x.set(e.clientX - (left + width / 2)); 
    y.set(e.clientY - (top + height / 2)); 
  }; 

  const handleMouseLeave = () => { 
    x.set(0); 
    y.set(0); 
  }; 

  return ( 
    <motion.button 
      ref={ref} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      style={{ transform }} 
      transition={{ type: "spring", stiffness: 200, damping: 20 }} 
      className="group relative grid h-[60px] w-[180px] place-content-center rounded-full border-2 border-silver transition-colors duration-700 ease-out" 
    > 
      <MdOutlineArrowUpward className="pointer-events-none relative z-10 rotate-45 text-3xl text-silver transition-all duration-700 ease-out group-hover:rotate-90" /> 

      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-secondary transition-transform duration-700 ease-out group-hover:scale-100" /> 

      <motion.svg 
        initial={{ rotate: 0 }} 
        animate={{ rotate: 360 }} 
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "linear", 
        }} 
        style={{ 
          top: "50%", 
          left: "50%", 
          x: "-50%", 
          y: "-50%", 
        }} 
        width="180" 
        height="60" 
        className="pointer-events-none absolute z-10" 
      > 
        <path 
          id="circlePath" 
          d="M90,30 m-90,0 a90,30 0 1,0 180,0 a90,30 0 1,0 -180,0" 
          fill="none" 
        /> 
        <text> 
          <textPath 
            href="#circlePath" 
            fill="silver" 
            className="fill-silver text-xs font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" 
          > 
            Explore Our Services • Explore Our Services 
          </textPath> 
        </text> 
      </motion.svg> 
    </motion.button> 
  ); 
};

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-secondary to-secondary-dark px-4 py-2 text-white ring-2 ring-secondary/50 ring-offset-2 ring-offset-primary transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-secondary/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const GhostButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-silver transition-all hover:scale-[1.02] hover:bg-dark-grey hover:text-white active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-accent/0 to-accent"
    />
  );
};

const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(229 9 20 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/0 to-primary" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

export default DarkGridHero;