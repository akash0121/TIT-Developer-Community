import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Mentors",
    "Events",
    "Hall of Fame",
    "How to Join?",
    "Photo Gallery",
    "Contact Us",
    "FAQs",
  ];

  // Enhanced animation variants
  const navItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5, 
        type: "spring", 
        stiffness: 120 
      },
    }),
    hover: {
      scale: 1.1,
      color: "#00ff41",
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      height: "auto",
      x: 0,
      transition: { 
        duration: 0.4, 
        type: "spring", 
        stiffness: 80 
      },
    },
  };

  const hamburgerVariants = {
    closed: { 
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      rotate: 180,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 
                 text-green-400 p-3 sm:p-4 md:p-5 z-50 shadow-2xl border-b border-green-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 70 
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand with Hacker-style Glitch Effect */}
        <motion.div
          className="text-2xl sm:text-3xl md:text-3xl font-mono font-bold tracking-wider"
          initial={{ opacity: 0, textShadow: "0 0 10px rgba(0,255,65,0)" }}
          animate={{ 
            opacity: 1, 
            textShadow: ["0 0 10px rgba(0,255,65,0.4)", "0 0 20px rgba(0,255,65,0.7)"] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          TIT Dev Community
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-green-300 hover:text-green-100 transition-colors duration-300 
                        font-mono text-sm lg:text-base"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover="hover"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button with Cyberpunk Style */}
        <motion.button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariants}
        >
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu with Cyberpunk Styling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 bg-gradient-to-r from-black 
                      via-gray-900 to-gray-800 p-3 sm:p-4 border-b border-green-800"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block text-green-300 hover:text-green-100 py-2 sm:py-2.5 
                          font-mono text-sm sm:text-base border-b border-green-800 
                          last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: index * 0.1, 
                    duration: 0.3 
                  } 
                }}
                onClick={() => setIsOpen(false)}
                whileHover={{ 
                  x: 10,
                  color: "#00ff41"
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;