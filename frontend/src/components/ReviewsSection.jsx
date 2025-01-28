// import React from "react";

// const ReviewsSection = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-start  p-8 lg:p-12 rounded-lg shadow-lg gap-8 bg-gray-100 mt-16 h-96 mb-4">
//       {/* Left Side: Heading */}
//       <div className="lg:w-1/3 mt-3">
//         <h2 className="text-black text-4xl font-extrabold leading-tight">
//           What Our Users Say <br />
//           <span className="text-blue-700">About Our Job Portal</span>
//         </h2>
//         <p className="mt-4 text-gray-600 text-lg">
//           🌟 Join the community where people land their dream jobs!
//         </p>
//       </div>

//       {/* Right Side: Review Cards */}
//       <div className="lg:w-2/3 flex flex-col gap-6 ">
//         {/* First Review Card */}
//         <div className="relative bg-white p-6 rounded-lg shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
//           <span className="absolute top-4 right-4 text-3xl">💼</span>
//           <h3 className="text-black text-xl font-bold mb-2">John Doe</h3>
//           <p className="text-gray-600">
//             "This portal is amazing! I got my first job within a week. Highly
//             recommend it to anyone looking to boost their career. 🚀"
//           </p>
//         </div>

//         {/* Second Review Card */}
//         <div className="relative bg-white p-6 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300">
//           <span className="absolute top-4 right-4 text-3xl">🌟</span>
//           <h3 className="text-black text-xl font-bold mb-2">Jane Smith</h3>
//           <p className="text-gray-600">
//             "The platform is user-friendly and provides excellent job
//             suggestions. Found my dream job, and I couldn’t be happier! 💖"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsSection;
import React from "react";
import { Star, Quote, Briefcase, ThumbsUp } from "lucide-react";

const ReviewCard = ({ name, role, review, icon: Icon, rotation = 0 }) => (
  <div
    className={`relative bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className="absolute top-4 right-4 p-2 bg-blue-50 rounded-full">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <Quote className="w-8 h-8 text-blue-200 mb-4" />
    <p className="text-gray-700 text-lg mb-6 italic">{review}</p>
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div>
        <h3 className="text-black font-bold text-xl">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
    <div className="absolute bottom-4 right-4 flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
      ))}
    </div>
  </div>
);

const ReviewsSection = () => {
  const reviews = [
    {
      name: "John Anderson",
      role: "Software Engineer at Google",
      review: "This platform transformed my job search. The AI-powered matching system is incredibly accurate, and I landed my dream role at Google within weeks. The process was smooth and professional throughout.",
      icon: Briefcase,
      rotation: 1
    },
    {
      name: "Sarah Chen",
      role: "Product Manager at Microsoft",
      review: "What sets this portal apart is its focus on quality matches. I received personalized job recommendations that perfectly aligned with my skills and career goals. Absolutely worth it!",
      icon: ThumbsUp,
      rotation: -1
    },
    {
      name: "Michael Rahman",
      role: "Data Scientist at Amazon",
      review: "The advanced filtering and skill matching capabilities are game-changing. Found and secured a position that perfectly matches my expertise. Best career decision I've made!",
      icon: Star,
      rotation: 1
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side: Heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Trusted by
              <span className="block text-blue-600 mt-2">Professionals</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Join thousands of successful professionals who found their dream careers through our platform. Our AI-powered matching system connects top talent with leading companies.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-bold text-2xl">98%</span>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-bold text-2xl">24hr</span>
                <p className="text-sm text-gray-600">Average Response</p>
              </div>
            </div>
          </div>

          {/* Right Side: Review Cards */}
          <div className="lg:w-2/3">
            <div className="grid gap-8">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;