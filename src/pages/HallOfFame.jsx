import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import img1 from "../assets/halloffame/img1.jpg";
import img2 from "../assets/halloffame/img2.jpg";
import img3 from "../assets/halloffame/img3.jpg";
import img4 from "../assets/halloffame/img4.jpg";
import img5 from "../assets/halloffame/img5.png";
import img6 from "../assets/halloffame/img6.jpg";
import img7 from "../assets/halloffame/img7.jpg";
import img8 from "../assets/halloffame/img8.png";
import img9 from "../assets/halloffame/img9.jpg";
import img10 from "../assets/halloffame/img10.jpg";
import img11 from "../assets/halloffame/img11.jpg";
import img12 from "../assets/halloffame/img12.jpg";
import img13 from "../assets/halloffame/img13.jpg";
import img14 from "../assets/halloffame/img14.png";
import img15 from "../assets/halloffame/img15.jpg";
import img16 from "../assets/halloffame/img16.jpg";
import img17 from "../assets/halloffame/img17.jpg";
import img18 from "../assets/halloffame/img18.jpg";
import img19 from "../assets/halloffame/img19.jpg";
import img20 from "../assets/halloffame/img20.png";
import img21 from "../assets/halloffame/img21.jpg";
import img22 from "../assets/halloffame/img22.jpg";
import img23 from "../assets/halloffame/img23.jpg";
import img24 from "../assets/halloffame/img24.jpg";
import img25 from "../assets/halloffame/img25.jpg";
import img26 from "../assets/halloffame/img26.png";

const HallOfFame = () => {
  const students = [
    {
      name: "Aditi Gupta",
      id: "0192CS221010",
      domain: "Cyber, Android",
      link: "https://drive.google.com/open?id=18T2P1gHSPyNbDnxQ4IWiSzmTpdAOBPwR",
      image: img1,
    },
    {
      name: "Akash Kumar",
      id: "0191CS231029",
      domain: "Cyber",
      link: "https://drive.google.com/open?id=1Bbd9C8OBbkFw7ssImIXQ9BLjK8772vK-",
      image: img2,
    },
    {
      name: "Aman Mishra",
      id: "0191CS231034",
      domain: "ML",
      link: "https://drive.google.com/open?id=1XL_pov4dcJn_EecNYpfz5O8j6q6H021y",
      image: img3,
    },
    {
      name: "Ananya Gupta",
      id: "0191AL221019",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1Ejuh-3DqlYpE5Le6tds3_8Uf1KbpjlZO",
      image: img4,
    },
    {
      name: "Anikesh Sharma",
      id: "0191CS231044",
      domain: "ML",
      link: "https://drive.google.com/open?id=1exmiwTLR5bjx1OtT2dqJGTqIwXCRFPDp",
      image: img5,
    },
    {
      name: "Aryan Sharma",
      id: "0192CS221051",
      domain: "Cyber, Android",
      link: "https://drive.google.com/open?id=11T4jEhcl70M8ipEQ7Xp1rIlpIB6jU3bS",
      image: img6,
    },
    {
      name: "Deepika Deshmukh",
      id: "0192AL221028",
      domain: "ML, Web Dev",
      link: "https://drive.google.com/open?id=1m2yXUUxes_bP-fDdb2Gj2bphh17xVs8d",
      image: img7,
    },
    {
      name: "Dipu Kumar",
      id: "0191CS231111",
      domain: "Cyber, Android",
      link: "https://drive.google.com/open?id=1EMEPnsuuAH3oE3uJjsLaL7yAp140FgAC",
      image: img8,
    },
    {
      name: "Harshit Anandd",
      id: "0191CS221090",
      domain: "Web Dev, Cyber, Android",
      link: "https://drive.google.com/open?id=1MiyVIqPrd7ZuoKfhJ2e5wuGA5137nuPH",
      image: img9,
    },
    {
      name: "Mohd Meraaz",
      id: "0191AL221090",
      domain: "Cyber, Android",
      link: "https://drive.google.com/open?id=1wCejm_eJFM4rjCehyJFUb0kAIkpKvMFN",
      image: img10,
    },
    {
      name: "Naman Kumar",
      id: "0191CS221137",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1pQYVZumYeYayNehPSL_FT_gfhO694g5W",
      image: img11,
    },
    {
      name: "Neetesh Chaurasia",
      id: "0111IA231075",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1Bwv_MUBFjTBnxJ15Uz0RSE8ARmfkV9LA",
      image: img12,
    },
    {
      name: "Nikhil Kumar Gupta",
      id: "0191CS231171",
      domain: "ML, Cyber",
      link: "https://drive.google.com/open?id=1Ytzzw7rlSMHz_RHJLGs-BLHpgA0LBxAN",
      image: img13,
    },
    {
      name: "Om Prakash Mehta",
      id: "0191CS231177",
      domain: "Cyber",
      link: "https://drive.google.com/open?id=1xwDCDSWLhuPOOXX4xVCVhAGmzU98t1jc",
      image: img14,
    },
    {
      name: "Prakhar Shrivastava",
      id: "0191CS231189",
      domain: "ML, Web Dev, Cyber",
      link: "https://drive.google.com/open?id=1Cjw_rsuueiwphdC8aU86E9uLGOFFc84L",
      image: img15,
    },
    {
      name: "Prince Kumar",
      id: "0191CS231198",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1NNQEk7iuO06LJ3CGX2DR1pwbve7oakZg",
      image: img16,
    },
    {
      name: "Rishabh Raj",
      id: "0111IT231100",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1WMeov5pkaAVTdkdqbGFik-6dNqjLVqqA",
      image: img17,
    },
    {
      name: "Rohit Tiwari",
      id: "0111CD231111",
      domain: "ML, Web Dev",
      link: "https://drive.google.com/open?id=1lVpxzA81zHyyLNJN7bix2ccVgGiYJ6MQ",
      image: img18,
    },
    {
      name: "Sarthak Kumar",
      id: "0191CS231234",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=10-wLS-7ozu18ucgjtWeC-DBJYDwyvH5F",
      image: img19,
    },
    {
      name: "Sejal Tiwari",
      id: "1091CS231241",
      domain: "ML, Web Dev, Cyber, Android",
      link: "https://drive.google.com/open?id=1T3QdnFkrV-9s52sL5WwWJUxkahiykMxW",
      image: img20,
    },
    {
      name: "Shaloni Mishra",
      id: "0191AL221160",
      domain: "ML, Web Dev",
      link: "https://drive.google.com/open?id=1g-lr65QRDKsa3CjkhPH9-Ig_HMKzTdwv",
      image: img21,
    },
    {
      name: "Shashank Kumar",
      id: "0111AL231244",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1n0Z11JygEW81t1W1lGH0bKcB3margDhT",
      image: img22,
    },
    {
      name: "Sheetal Kawadkar",
      id: "0191AL221162",
      domain: "Web Dev",
      link: "https://drive.google.com/open?id=1IYerZOy-GgPWdfTFptmNYJDUJDxjj8g7",
      image: img23,
    },
    {
      name: "Shivam Kumar Tiwari",
      id: "0111CD231132",
      domain: "ML, Web Dev, Cyber",
      link: "https://drive.google.com/open?id=1Zc_jHqo5z7MB1Ye5YiIh3OrZhNaOj921",
      image: img24,
    },
    {
      name: "Siddharth Kumar",
      id: "0192CS231193",
      domain: "Android",
      link: "https://drive.google.com/open?id=1OuCYOYkp8ubic6aX6EcM_wYBWkLWuS0T",
      image: img25,
    },
    {
      name: "Yashraj Chouhan",
      id: "0191AL221204",
      domain: "Cyber",
      link: "https://drive.google.com/open?id=1h8MqYNd1rpoYVxc9y4K_SgBsNE4ezX0p",
      image: img26,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // Group students into sets of 4
  const groupedStudents = [];
  for (let i = 0; i < students.length; i += 4) {
    groupedStudents.push(students.slice(i, i + 4));
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % groupedStudents.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prev) => (prev - 1 + groupedStudents.length) % groupedStudents.length
    );
  };

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-8 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hall of Fame
        </motion.h2>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 z-10 p-2 md:p-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            ◀
          </button>

          {/* Students Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl"
            >
              {groupedStudents[currentPage].map((student) => (
                <motion.div
                  key={student.id}
                  className="bg-gray-800 rounded-2xl p-4 sm:p-6 text-center border border-green-800 hover:border-green-600 transition-all duration-300 transform hover:-translate-y-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-600"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-2">
                    {student.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">
                    ID: {student.id}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                    {student.domain}
                  </p>
                  <a
                    href={student.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white text-sm sm:text-base rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    <ExternalLink className="mr-2" size={14} sm={16} />
                    View Profile
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 z-10 p-2 md:p-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            ▶
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 md:mt-20 space-x-2">
          {groupedStudents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentPage ? "bg-green-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
