import { useState } from "react";

const ImageGallery = () => {
    const panels = [
        { image: "https://images.unsplash.com/photo-1742077414023-45a81fd63736?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { image: "https://images.unsplash.com/photo-1741800459656-4116dcb230ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { image: "https://images.unsplash.com/photo-1741851373559-6879db14fd8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { image: "https://images.unsplash.com/photo-1742943679519-bb9eb364b152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D" },
        { image: "https://images.unsplash.com/photo-1742943679521-f4736500a471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { image: "https://images.unsplash.com/photo-1742909281023-b62e557c1b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D" },
    ];

    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = (index) => {
        setExpandedIndex(index);
    };

    return (
        <main className="w-screen h-screen overflow-hidden">
            <div
                className="h-full w-full overflow-hidden flex justify-center items-center relative"
                style={{
                    backgroundImage: `url(${panels[expandedIndex].image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="w-full max-w-[1280px] h-[80vh] flex flex-col sm:flex-row items-center justify-center gap-2 z-10 p-4">
                    {panels.map((panel, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden 
                            ${expandedIndex === index ? "sm:w-[50%] w-full h-[200px] sm:h-full" : "sm:w-[10%] w-full h-[100px] sm:h-full"}`}
                        >
                            <img src={panel.image} alt="Gallery Image" className="w-full h-full object-cover object-top" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ImageGallery;