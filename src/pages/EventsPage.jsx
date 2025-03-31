import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Monitor, Globe, Clock } from 'lucide-react';
import img1 from "../assets/events/web.png";
import img2 from "../assets/events/And.png";
import img3 from "../assets/events/ml.png";

const Events = () => {
  const events = [
    { 
      name: "Web Development Hackathon", 
      desc: "Build responsive websites in 24 hours with cutting-edge technologies.",
      img: img1,
      icon: Globe,
      date: "March 31, 2025",
      duration: "24-Hour Challenge"
    },
    { 
      name: "Android Development Workshop", 
      desc: "Learn app development basics from industry experts.",
      img: img2,
      icon: Monitor,
      date: "Feb 26, 2025",
      duration: "Full Day Workshop"
    },
    { 
      name: "Machine Learning Bootcamp", 
      desc: "Dive deep into ML algorithms and practical applications.",
      img: img3,
      icon: Code,
      date: "September 20-22, 2024",
      duration: "3-Day Intensive Program"
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

  const eventVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="events" 
      className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-400">
          Upcoming Events
        </h2>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => {
            const EventIcon = event.icon;
            return (
              <motion.div 
                key={event.name}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-800 rounded-xl overflow-hidden border border-green-800 hover:border-green-600 transition-all shadow-lg"
                variants={eventVariants}
                whileHover="hover"
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:col-span-1">
                  <img 
                    src={event.img} 
                    alt={event.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                
                {/* Event Details Section */}
                <div className="p-4 md:p-6 flex flex-col justify-center md:col-span-2">
                  <div className="flex items-center mb-3">
                    <EventIcon className="text-green-500 mr-3" size={32} />
                    <h3 className="text-xl font-semibold text-green-400">
                      {event.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {event.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="mr-2 text-green-500" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="mr-2 text-green-500" size={16} />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-4 bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors text-sm self-start"
                  >
                    Register Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;