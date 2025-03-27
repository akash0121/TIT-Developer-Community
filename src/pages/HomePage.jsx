import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import { 
  Code, 
  Target, 
  Network, 
  Monitor, 
  Shield, 
  Award 
} from "lucide-react";

import img1 from "../assets/home/1.png";
import img2 from "../assets/home/2.png";
import img3 from "../assets/home/3.png";
import img4 from "../assets/home/4.png";
import img5 from "../assets/home/5.png";
import img6 from "../assets/home/6.png";
import img7 from "../assets/home/7.png";
import img8 from "../assets/home/8.png";
import img9 from "../assets/home/9.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
    arrows: false, // Disable arrows for cleaner mobile view
  };

  const communityStats = [
    { icon: Code, label: "ATS-Friendly Resumes", value: 90, suffix: "%+" },
    { icon: Target, label: "Students in ML", value: 15, suffix: "+" },
    { icon: Network, label: "Future App Developers", value: 20, suffix: "+" },
    { icon: Monitor, label: "Web Developers", value: 15, suffix: "+" },
    { icon: Shield, label: "Cybersecurity Enthusiasts", value: 30, suffix: "+" },
    { icon: Award, label: "Events Organized", value: 10, suffix: "+" }
  ];

  const communityImages = [
    { src: img1, alt: "Tech Workshop", description: "Hands-on Learning" },
    { src: img2, alt: "Coding Session", description: "Collaborative Coding" },
    { src: img3, alt: "Networking Event", description: "Building Connections" },
    { src: img4, alt: "Mentorship Program", description: "Guided Growth" },
    { src: img5, alt: "Hackathon", description: "Innovation Challenge" },
    { src: img6, alt: "Tech Talk", description: "Knowledge Sharing" },
    { src: img7, alt: "Project Showcase", description: "Celebrating Achievements" },
    { src: img8, alt: "Team Building", description: "Community Strength" },
    { src: img9, alt: "Tech Conference", description: "Industry Insights" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-green-400">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              TIT Dev Community
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
          
          {/* Right Content - Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Slider 
              {...sliderSettings} 
              className="rounded-2xl overflow-hidden shadow-2xl w-full"
            >
              {communityImages.map((image, index) => (
                <div key={index} className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 
                                p-2 sm:p-3 md:p-4 text-center">
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white">
          Our Community Impact
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8"
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
                className="bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 text-center 
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

export default Home;