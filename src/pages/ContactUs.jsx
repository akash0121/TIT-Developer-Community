import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Send, 
    Mail, 
    Instagram, 
    Linkedin, 
    Twitter 
} from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic
        console.log('Form submitted', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120
            }
        }
    };

    return (
        <motion.section 
            id="contact-us"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
                    Contact Us
                </h2>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800 rounded-2xl p-8 border border-green-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-green-400 mb-2 block">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name" 
                                    className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg border border-green-800 focus:border-green-600 focus:outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-green-400 mb-2 block">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email" 
                                    className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg border border-green-800 focus:border-green-600 focus:outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-green-400 mb-2 block">Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your message" 
                                    className="w-full p-3 bg-gray-700 text-gray-200 rounded-lg border border-green-800 focus:border-green-600 focus:outline-none transition h-32 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                            >
                                <Send className="mr-2" size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800 rounded-2xl p-8 border border-green-800 flex flex-col justify-center items-center text-center"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl text-green-400 mb-4">Connect With Us</h3>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-center text-gray-300">
                                    <Mail className="mr-2 text-green-400" size={24} />
                                    contact@titdevcommunity.com
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl text-green-400 mb-4">Follow Us</h4>
                            <div className="flex justify-center space-x-6">
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-600 transition"
                                >
                                    <Instagram size={32} />
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-600 transition"
                                >
                                    <Linkedin size={32} />
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-600 transition"
                                >
                                    <Twitter size={32} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactUs;