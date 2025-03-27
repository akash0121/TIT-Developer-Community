import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Users, 
  Award, 
  Rocket 
} from 'lucide-react';

import img from "../assets/events/img.jpg"

const About = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  const communityFeatures = [
    {
      icon: Code,
      title: "Hands-on Learning with Real-World Projects",
      description: "Transform theoretical knowledge into practical skills through industry-relevant projects."
    },
    {
      icon: Users,
      title: "Personalized Mentorship",
      description: "Get guidance from seniors who've successfully navigated the tech industry."
    },
    {
      icon: Award,
      title: "Build Your Technical Portfolio",
      description: "Create impressive projects that stand out during placement interviews."
    },
    {
      icon: Rocket,
      title: "Exclusive Workshops & Hackathons",
      description: "Participate in cutting-edge tech events and networking opportunities."
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-green-400">
              About TIT Developer Community
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              TIT Developer Community is a student-led initiative bridging the gap between juniors and seniors through free mentorship. Our mission is to empower students with real-world knowledge, industry insights, and hands-on learning experience.
            </p>

            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg border border-green-800 hover:border-green-600 transition-all"
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <feature.icon className="text-green-500" size={40} />
                  <div>
                    <h3 className="text-xl font-semibold text-green-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={img}
              alt="TIT Developer Community" 
              className="w-full rounded-2xl shadow-2xl border-4 border-green-800 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-green-900 opacity-20 rounded-2xl hover:opacity-0 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;