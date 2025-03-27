import React from 'react';
import { motion } from 'framer-motion';
import { 
    Code, 
    CheckCircle, 
    ArrowRight, 
    BookOpen 
} from 'lucide-react';

const HowToJoin = () => {
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
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120
            }
        }
    };

    return (
        <motion.section 
            id="how-to-join"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
                    How to Join
                </h2>

                <motion.div 
                    className="max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="bg-gray-800 rounded-2xl p-8 mb-8 border border-green-800"
                        variants={itemVariants}
                    >
                        <div className="flex items-center mb-4">
                            <Code className="text-green-400 mr-4" size={40} />
                            <h3 className="text-2xl font-semibold text-green-400">
                                Coding Quest
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Our annual competition is designed to foster and test technical skills across various domains.
                        </p>
                        <div className="pl-4 border-l-4 border-green-600 mb-4">
                            <ul className="text-gray-200 space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="text-green-400 mr-2" size={20} />
                                    Round 1: MCQ-based Assessment (via TIT-developed app)
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="text-green-400 mr-2" size={20} />
                                    Round 2: Coding Challenge (via Unstop platform)
                                </li>
                            </ul>
                        </div>
                        <p className="text-green-200 italic">
                            Key Stats: 200+ Participants | 60 Finalists | ₹1000 for Category Toppers
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-800 rounded-2xl p-8 mb-8 border border-green-800"
                        variants={itemVariants}
                    >
                        <div className="flex items-center mb-4">
                            <BookOpen className="text-green-400 mr-4" size={40} />
                            <h3 className="text-2xl font-semibold text-green-400">
                                Registration Guide
                            </h3>
                        </div>
                        <ol className="text-gray-200 space-y-4 pl-4">
                            <li className="flex items-center">
                                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                    1
                                </div>
                                Fill out the registration form carefully
                            </li>
                            <li className="flex items-center">
                                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                    2
                                </div>
                                Prepare for Round 1 of the Coding Quest
                            </li>
                            <li className="flex items-center">
                                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                    3
                                </div>
                                Complete both rounds of the assessment
                            </li>
                        </ol>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="text-center"
                    >
                        <a 
                            href="#register"
                            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                        >
                            Register Now
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HowToJoin;