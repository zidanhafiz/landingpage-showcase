'use client';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [])

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          onClick={handleScroll}
          className="fixed bottom-12 right-10 p-3 bg-blue-violet text-white rounded-full shadow-lg z-10"
        >
          <IoIosArrowUp className="w-7 h-7" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop