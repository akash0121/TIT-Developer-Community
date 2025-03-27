import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

import img1 from "../assets/mentors/img1.jpg"
import img2 from "../assets/mentors/img2.jpg"
import img3 from "../assets/mentors/img3.jpg"

const Mentors = () => {
  const mentors = [
    { 
      name: "Ankit Kumar",
      src: img1,
      linkedin: "https://linkedin.com/in/ankitkumar",
      expertise: "Machine Learning",
      description: "Senior ML Engineer with 5+ years of experience in AI/ML solutions."
    },
    { 
      name: "Anand Soni", 
      src: img2,
      linkedin: "https://linkedin.com/in/anandsoni",
      expertise: "Web Development",
      description: "Full-stack Developer specializing in React and Node.js technologies."
    },
    { 
      name: "Ankit Patel", 
      src: img3,
      linkedin: "https://linkedin.com/in/ankitpatel",
      expertise: "Cybersecurity",
      description: "Cybersecurity Specialist with expertise in network security and ethical hacking."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="mentors" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
          Meet Our Mentors
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mentors.map((mentor) => (
            <div 
              key={mentor.name}
              className="bg-gray-800 rounded-2xl p-6 text-center border border-green-800 hover:border-green-600 transition-all"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative inline-block mb-6">
                <img 
                  src={mentor.src} 
                  alt={mentor.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-green-600 shadow-lg" 
                />
                <div className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full p-2">
                  <Linkedin size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                {mentor.name}
              </h3>
              
              <p className="text-green-200 mb-4">
                {mentor.expertise}
              </p>
              
              <p className="text-gray-300 mb-4">
                {mentor.description}
              </p>
              
              <a 
                href={mentor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                View LinkedIn
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mentors;