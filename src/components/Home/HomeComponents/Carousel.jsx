import React from "react";

const categories = [
  {
    title: "Website Development",
    imgSrc: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
    link: "/categories/programming-tech/website-development",
  },
  {
    title: "Logo Design",
    imgSrc: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
    link: "/categories/graphics-design/creative-logo-design",
  },
  {
    title: "SEO",
    imgSrc: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
    link: "/categories/online-marketing/seo-services",
  },
  {
    title: "Architecture & Interior Design",
    imgSrc: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
    link: "/categories/graphics-design/architectural-design-services",
  },
];

const Carousel = () => {
  return (
    <div className="w-full overflow-hidden py-5">
      <div className="flex space-x-5 overflow-x-auto">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="min-w-[200px] p-4 bg-white shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={category.imgSrc}
              alt={category.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">{category.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
