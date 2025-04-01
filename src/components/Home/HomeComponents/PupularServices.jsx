import { useEffect, useRef } from "react";

const services = [
  { title: "Website Development", bg: "bg-green-700", imgBg: "bg-green-200", img: "https://usp.edu.pk/wp-content/uploads/2024/06/ISP-Masjid-Islamiat.jpg" },
  { title: "Logo Design", bg: "bg-orange-500", imgBg: "bg-orange-200", img: "https://usp.edu.pk/wp-content/uploads/2023/04/15.jpg" },
  { title: "SEO", bg: "bg-green-900", imgBg: "bg-green-400", img: "https://usp.edu.pk/wp-content/uploads/2024/06/Economics.png" },
  { title: "Architecture & \n Interior Design", bg: "bg-purple-800", imgBg: "bg-pink-300", img: "https://usp.edu.pk/wp-content/uploads/2023/09/2.jpg" },
  { title: "Voice Over", bg: "bg-yellow-700", imgBg: "bg-yellow-300", img: "https://usp.edu.pk/wp-content/uploads/2023/10/Library-6.jpg" },
  { title: "Social Media Marketing", bg: "bg-green-600", imgBg: "bg-green-300", img: "https://usp.edu.pk/wp-content/uploads/2024/06/Physics.jpg" }
];

const PopularServices = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const animateSlider = () => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(animateSlider);
    };

    animationFrame = requestAnimationFrame(animateSlider);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Popular Services</h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 whitespace-nowrap overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth", animation: "scroll 20s linear infinite" }}
        >
          {[...services, ...services].map((service, index) => (
            <div key={index} className={`w-56 min-w-[220px] ${service.bg} text-white rounded-2xl p-4`}>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <div className={`${service.imgBg} rounded-xl p-2 mt-3 flex justify-center items-end h-36`}>
                <img src={service.img} alt={service.title} className="rounded-lg h-24 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;