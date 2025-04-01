import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";

const sections = [
  {
    title: "Introduction",
    icon: <FaBook className="text-blue-500 text-3xl" />, 
    content:
      "The department of Electrical Engineering aims at providing a solid foundation in mathematics, physical sciences, and computer programming followed by an intensive coverage of principles of electrical engineering both in classrooms and laboratories...",
  },
  {
    title: "Vision",
    icon: <FaEye className="text-green-500 text-3xl" />, 
    content:
      "To become a leading University of learning by creation and dissemination of knowledge for sustainable socio-economic development and technological advancement of the country and the world, at large.",
  },
  {
    title: "Mission",
    icon: <FaBullseye className="text-red-500 text-3xl" />, 
    content:
      "Department of Electrical Engineering focuses to prepare technically strong graduates who can contribute effectively towards the nation, society, and industry by using research, innovation, and interpersonal skills while respecting the ethical values.",
  },
  {
    title: "Philosophy",
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />, 
    content:
      "We at the Best University in Multan believe that through concerted and strenuous strives, our students shall be able to step forth into the real and highly competitive world with the ability to make a mature judgment based on a clear understanding of concepts and moral values...",
  },
];

const ElectricalEngineering = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Department of Electrical Engineering</h1>
      <div className="grid gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 border border-gray-300 shadow-lg rounded-2xl bg-white flex items-center space-x-4"
          >
            {section.icon}
            <div>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElectricalEngineering;