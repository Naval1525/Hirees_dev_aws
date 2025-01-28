import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const JobApplicationSteps = () => {
  const steps = [
    {
      title: "Create Profile",
      description: "Instantly build a professional profile that stands out to top employers.",
      icon: "🚀",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Explore Opportunities",
      description: "Access thousands of curated job listings tailored to your expertise.",
      icon: "🔍",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Upload Your Resume",
      description: "Showcase your skills with a polished, industry-ready resume.",
      icon: "📄",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Get Hired",
      description: "Connect directly with hiring managers and land your dream job.",
      icon: "🏆",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="container mx-auto px-4 mb-20 p-6 mt-10  ">
      <h1 className="text-center text-4xl font-bold text-blue-800 mb-12">
        Get Hired in 4 Quick Steps
      </h1>

      <div className="flex justify-center items-stretch space-x-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex-1 max-w-xs group"
          >
            <div className={`
              ${step.color}
              rounded-xl
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              p-6
              text-center
              h-full
              flex
              flex-col
              items-center
              transform
              hover:-translate-y-3
              border-2
              border-transparent

            `}>
              {/* Step Icon */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-6xl mb-4">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="absolute top-4 left-4 text-6xl font-bold opacity-10">
                0{index + 1}
              </div>

              {/* Step Title */}
              <h2 className="text-2xl font-bold mb-3 flex items-center">
                <CheckCircle className="mr-2 text-blue-600" size={24} />
                {step.title}
              </h2>

              {/* Step Description */}
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                {step.description}
              </p>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 hidden group-hover:block">
                  <ArrowRight
                    className="text-blue-700 w-12 h-12 animate-pulse"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplicationSteps;