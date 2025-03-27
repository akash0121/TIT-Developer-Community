import React from 'react';
import { motion } from 'framer-motion';

import win1 from "../assets/events/win1.jpg";
import win2 from "../assets/events/win2.jpg";
import win3 from "../assets/events/win3.jpg";
import win4 from "../assets/events/win4.jpg";
import win5 from "../assets/events/win5.jpg";

const PhotoGallery = () => {
    const photos = [
        { 
            src: win1, 
            caption: "Advanced ML Workshop 2024",
            description: "Intensive hands-on machine learning session with industry experts"
        },
        { 
            src: win2, 
            caption: "Hackathon Winners 2024",
            description: "Our top performers showcasing innovative tech solutions"
        },
        { 
            src: win3, 
            caption: "Coding Bootcamp",
            description: "Collaborative coding session focusing on real-world projects"
        },
        { 
            src: win4,  
            caption: "Industry Networking Meet",
            description: "Students connecting with tech industry professionals"
        },
        { 
            src: win5,  
            caption: "Tech Innovation Summit",
            description: "Showcasing cutting-edge technological advancements"
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

    const imageVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            rotate: 2,
            transition: { 
                duration: 0.3,
                type: "spring"
            }
        }
    };

    return (
        <section 
            id="photo-gallery"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
        >
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-16 text-green-400"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Photo Gallery
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {photos.map((photo) => (
                        <div
                            key={photo.src}
                            className="relative group"
                            variants={imageVariants}
                            whileHover="hover"
                        >
                            <div className="overflow-hidden rounded-2xl border-2 border-green-800 group-hover:border-green-600 transition-all duration-300">
                                <img 
                                    src={photo.src} 
                                    alt={photo.caption} 
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" // Changed h-80 to h-96
                                />
                            </div>
                            <motion.p 
                                className="mt-2 text-center text-green-200 text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {photo.caption}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PhotoGallery;