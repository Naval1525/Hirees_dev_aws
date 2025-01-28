import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "../ui/carousel";



const RecruiterSlideshow = () => {
  const slides = [
    {
      title: "Streamlined Hiring Process",
      description: "Save time and resources with AI-driven candidate matching.",
      image: "/images/streamlined.jpg",
    },
    {
      title: "Diverse Talent Pool",
      description: "Access candidates from various industries and expertise levels.",
      image: "/images/talent_pool.jpg",
    },
    {
      title: "Real-time Insights",
      description: "Monitor application progress and analytics in real-time.",
      image: "/images/insights.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <motion.h1
        className="text-4xl font-extrabold text-black mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Our Platform?
      </motion.h1>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div key={index} className="text-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{slide.title}</h2>
            <p className="text-gray-700 mt-2">{slide.description}</p>
          </div>
        ))}
      </Carousel>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Key Benefits for Recruiters:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold">Customizable Filters:</span> Narrow down candidates using specific criteria.
          </li>
          <li>
            <span className="font-bold">Collaboration Tools:</span> Share candidate profiles with your team seamlessly.
          </li>
          <li>
            <span className="font-bold">Scalable Solutions:</span> Suitable for small startups and large enterprises alike.
          </li>
          <li>
            <span className="font-bold">Enhanced Candidate Experience:</span> Build your employer brand with smooth processes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecruiterSlideshow;
