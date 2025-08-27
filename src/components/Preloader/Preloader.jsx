import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShuffleLoader from "./ShuffleLoader";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary overflow-hidden"
          >
            <div className="mb-8">
              <ShuffleLoader />
            </div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl font-bold text-silver"
            >
              Shaped Brand
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${loading ? "invisible" : "visible"} overflow-x-hidden`}>{children}</div>
    </>
  );
};

export default Preloader;