import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaLanguage, FaVideo, FaRobot, FaMusic, FaBriefcase, FaChartBar } from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode size={24} />, label: "Programming & Tech" },
  { icon: <FaPaintBrush size={24} />, label: "Graphics & Design" },
  { icon: <FaBullhorn size={24} />, label: "Digital Marketing" },
  { icon: <FaLanguage size={24} />, label: "Writing & Translation" },
  { icon: <FaVideo size={24} />, label: "Video & Animation" },
  { icon: <FaRobot size={24} />, label: "AI Services" },
  { icon: <FaMusic size={24} />, label: "Music & Audio" },
  { icon: <FaBriefcase size={24} />, label: "Business" },
  { icon: <FaChartBar size={24} />, label: "Consulting" },
];

const CategoryCard = ({ icon, label }) => {
  return (
    <a href="#" className="flex flex-col w-30 h-30 p-4 border-amber-600 rounded-lg shadow-md hover:shadow-lg hover:bg-cyan-300 transition bg-white cursor-pointer relative">
      <div className="absolute top-4 left-4 text-gray-700">{icon}</div>
      <div className="mt-10 text-left text-gray-700">
        <span className="text-sm font-medium">{label}</span>
      </div>
    </a>
  );
};

const CategoryCards = () => {
  return (
    <div className="flex gap-4 justify-center overflow-x-auto p-4 scrollbar-hide">
      {categories.map((category, index) => (
        <CategoryCard key={index} icon={category.icon} label={category.label} />
      ))}
    </div>
  );
};

export default CategoryCards;
