import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import img1 from "../assets/home/1.png";
import img2 from "../assets/home/2.png";
import img3 from "../assets/home/3.png";
import img4 from "../assets/home/4.png";
import img5 from "../assets/home/5.png";
import img6 from "../assets/home/6.png";
import img7 from "../assets/home/7.png";
import img8 from "../assets/home/8.png";
import img9 from "../assets/home/9.jpg";

const SliderComponent = () => {  // Renamed to follow React component naming conventions
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
    cssEase: "linear",
    arrows: false, // Disable arrows for cleaner mobile view
  };

  // Note: The communityStats array references icons (Code, Target, etc.) that aren't imported
  // I'm leaving it as is, but you'll need to import these icons or remove this array if not used
  const communityStats = [
    { icon: "Code", label: "ATS-Friendly Resumes", value: 90, suffix: "%+" },
    { icon: "Target", label: "Students in ML", value: 15, suffix: "+" },
    { icon: "Network", label: "Future App Developers", value: 20, suffix: "+" },
    { icon: "Monitor", label: "Web Developers", value: 15, suffix: "+" },
    {
      icon: "Shield",
      label: "Cybersecurity Enthusiasts",
      value: 30,
      suffix: "+",
    },
    { icon: "Award", label: "Events Organized", value: 10, suffix: "+" },
  ];

  const communityImages = [
    { src: img1, alt: "Tech Workshop", description: "Hands-on Learning" },
    { src: img2, alt: "Coding Session", description: "Collaborative Coding" },
    { src: img3, alt: "Networking Event", description: "Building Connections" },
    { src: img4, alt: "Mentorship Program", description: "Guided Growth" },
    { src: img5, alt: "Hackathon", description: "Innovation Challenge" },
    { src: img6, alt: "Tech Talk", description: "Knowledge Sharing" },
    {
      src: img7,
      alt: "Project Showcase",
      description: "Celebrating Achievements",
    },
    { src: img8, alt: "Team Building", description: "Community Strength" },
    { src: img9, alt: "Tech Conference", description: "Industry Insights" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      {/* Slider - Now at bottom of hero section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto mt-40"
      >
        <Slider
          {...sliderSettings}
          className="rounded-2xl overflow-hidden shadow-2xl w-full"
        >
          {communityImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 
                           p-2 sm:p-3 md:p-4 text-center"
              >
                <p className="text-white text-sm sm:text-base md:text-lg">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default SliderComponent;