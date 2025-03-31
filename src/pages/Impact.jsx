import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Code, 
  Target, 
  Network, 
  Monitor, 
  Shield, 
  Award 
} from "lucide-react";

const Impact = () => {
  const communityStats = [
    { icon: Code, label: "ATS-Friendly Resumes", value: 90, suffix: "%+" },
    { icon: Target, label: "Students in ML", value: 15, suffix: "+" },
    { icon: Network, label: "Future App Developers", value: 20, suffix: "+" },
    { icon: Monitor, label: "Web Developers", value: 15, suffix: "+" },
    { icon: Shield, label: "Cybersecurity Enthusiasts", value: 30, suffix: "+" },
    { icon: Award, label: "Events Organized", value: 10, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      {/* Impact Section */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white">
          Our Community Impact
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                staggerChildren: 0.2 
              } 
            }
          }}
        >
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 text-center 
                          border border-green-800 hover:border-green-600 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 } 
                  }
                }}
              >
                <IconComponent 
                  className="mx-auto mb-3 sm:mb-4 text-green-500" 
                  size={36} 
                />
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;