import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import bgVideo2 from "../assets/vid2.mp4";

const Home = () => {

  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(0.8) contrast(1.1)" }}
        >
          {/* <source src={bgVideo1} type="video/mp4" /> */}
          <source src={bgVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"></div>
      </div>

      {/* Content Container - now with z-10 to appear above video */}
      <div className="relative z-10 min-h-screen text-green-400 mt-40">
        {/* Hero Section - Now centered and with slider at bottom */}
        <div className="container mx-auto px-4 pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 flex flex-col items-center">
          {/* Top Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              TIT Developer Community
            </h1>
            
            <TypeAnimation
              sequence={[
                'Empowering Junior Developers',
                1000,
                'Building Tech Careers',
                1000,
                'Connecting Passionate Learners',
                1000
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl sm:text-2xl md:text-3xl text-green-400"
              repeat={Infinity}
            />
            
            <p className="text-gray-300 text-base sm:text-lg md:text-lg">
              Join a vibrant community of tech enthusiasts, where seniors guide juniors, 
              and innovation knows no bounds. Transform your potential into expertise.
            </p>
            
            <motion.a
              href="#how-to-join"
              className="inline-block bg-green-600 text-white px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 
                        rounded-full hover:bg-green-700 transition-all duration-300 
                        transform hover:scale-105 focus:outline-none focus:ring-2 
                        focus:ring-green-500 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;