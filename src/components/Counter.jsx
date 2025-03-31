import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const counters = [
    { value: 20000, suffix: "+", label: "FACULTY MEMBERS" },
    { value: 380, suffix: "+", label: "LIBRARY RESOURCES" },
    { value: 28000, label: "CAMPUS AREA (KANAL)" },
    { value: 280, label: "DEGREE PROGRAMS" },
    { value: 105, label: "" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8 text-center">
      {counters.map((counter, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-blue-600">
            <CountUp end={counter.value} duration={2.5} />{counter.suffix || ""}
          </h2>
          <p className="text-gray-700 text-lg font-medium mt-2">{counter.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
