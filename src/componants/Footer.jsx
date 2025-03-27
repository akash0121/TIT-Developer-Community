import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Copyright 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      link: "https://www.linkedin.com/in/akash-patel-28441722a", 
      color: "text-blue-500" 
    },
    { 
      icon: Instagram, 
      link: "https://www.instagram.com/akash_.jsx", 
      color: "text-pink-500" 
    },
    { 
      icon: Mail, 
      link: "mailto:akashpatelpatel79872@gmail.com", 
      color: "text-red-500" 
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-6">
            Akash Patel
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:opacity-75 transition-opacity`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center text-gray-300 space-x-2">
            <Copyright size={20} />
            <span className="text-sm">
              2025 Akash Patel | 2* Coder on CodeChef
            </span>
          </div>

          <div className="mt-6 text-gray-500 text-sm">
            Designed with 💚 for the TIT Dev Community
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;