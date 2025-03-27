import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Monitor, Globe , Clock} from 'lucide-react';
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
      scale: 1.025,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="events" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
          Upcoming Events
        </h2>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => {
            const EventIcon = event.icon;
            return (
              <motion.div 
                key={event.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 rounded-2xl overflow-hidden border border-green-800 hover:border-green-600 transition-all"
                variants={eventVariants}
                whileHover="hover"
              >
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={event.img} 
                    alt={event.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                
                {/* Event Details Section */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <EventIcon className="text-green-500 mr-4" size={40} />
                    <h3 className="text-2xl font-semibold text-green-400">
                      {event.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {event.desc}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="mr-2 text-green-500" size={20} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="mr-2 text-green-500" size={20} />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
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