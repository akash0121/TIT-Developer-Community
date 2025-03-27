import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQs = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
        { 
            q: "How do I join the TIT Dev Community?", 
            a: "Participate in our annual Coding Quest or attend our Hackathons. These events are open to 1st to 4th-year students and provide multiple pathways to join our community.",
            category: "Joining"
        },
        { 
            q: "What are the eligibility criteria?", 
            a: "Students from 1st to 4th year across engineering disciplines are welcome. No prior advanced coding experience is required, just passion and willingness to learn.",
            category: "Eligibility"
        },
        { 
            q: "What technologies do you focus on?", 
            a: "We cover a wide range of technologies including Machine Learning, Web Development, Android Development, Cybersecurity, and emerging tech domains.",
            category: "Technologies"
        },
        { 
            q: "Are there any costs involved?", 
            a: "Most of our community events and initial workshops are free. Some advanced workshops or specialized training might have a nominal fee.",
            category: "Costs"
        },
        { 
            q: "How often do you conduct events?", 
            a: "We host weekly technical sessions, monthly hackathons, and quarterly intensive workshops. Our community is always active with online and offline engagement.",
            category: "Events"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.section 
            id="faqs"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
                    Frequently Asked Questions
                </h2>

                <motion.div
                    className="max-w-2xl mx-auto space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800 rounded-2xl border border-green-800 overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpen(open === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center">
                                    <HelpCircle className="mr-4 text-green-400" size={24} />
                                    <span className="text-lg font-semibold text-green-200">
                                        {faq.q}
                                    </span>
                                </div>
                                <ChevronDown 
                                    className={`text-green-400 transition-transform duration-300 ${
                                        open === index ? 'rotate-180' : ''
                                    }`} 
                                    size={24} 
                                />
                            </button>

                            <AnimatePresence>
                                {open === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ 
                                            opacity: 1, 
                                            height: 'auto',
                                            transition: { duration: 0.3 }
                                        }}
                                        exit={{ 
                                            opacity: 0, 
                                            height: 0,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="px-6 pb-6 text-gray-300"
                                    >
                                        <div className="pt-4 border-t border-green-800">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FAQs;