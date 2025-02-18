// // import React from 'react';
// // import { ArrowRight, BookOpen, Search, FileCheck, Trophy, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // const FeatureCard = ({ icon: Icon, title, description }) => (
// //   <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
// //     <div className="p-3 rounded-lg bg-blue-600">
// //       <Icon className="w-6 h-6 text-white" />
// //     </div>
// //     <div>
// //       <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
// //       <p className="text-sm text-gray-600 mt-1">{description}</p>
// //     </div>
// //   </div>
// // );

// // const PathSection = ({ badge, title, subtitle, features, ctaText, isReversed = false }) => (

// //   <div className={`w-full py-16 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
// //     <div className="max-w-6xl mx-auto px-4">
// //       <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
// //         {/* Content Column */}
// //         <div className="flex-1 space-y-6">
// //           <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-base">
// //             {badge}
// //           </div>
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// //             {title}
// //           </h1>
// //           <p className="text-xl text-gray-600 leading-relaxed">
// //             {subtitle}
// //           </p>
// //           <button onClick={()=>{navigate('/')}} className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">
// //             <span>{ctaText}</span>
// //             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
// //           </button>
// //         </div>

// //         {/* Features Column */}
// //         <div className="flex-1">
// //           <div className="bg-gray-50 rounded-xl p-6 space-y-4">
// //             {features.map((feature, index) => (
// //               <FeatureCard key={index} {...feature} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );


// // const CareerPaths = () => {

// //   const studentFeatures = [
// //     {
// //       icon: BookOpen,
// //       title: "Build Your Profile",
// //       description: "Showcase your skills and achievements"
// //     },
// //     {
// //       icon: Search,
// //       title: "Find Opportunities",
// //       description: "Access AI-matched jobs and internships"
// //     },
// //     {
// //       icon: FileCheck,
// //       title: "Easy Applications",
// //       description: "One-click apply with real-time tracking"
// //     },
// //     {
// //       icon: Trophy,
// //       title: "Track Progress",
// //       description: "Get personalized recommendations"
// //     }
// //   ];

// //   const recruiterFeatures = [
// //     {
// //       icon: Building2,
// //       title: "Employer Branding",
// //       description: "Create an attractive company presence"
// //     },
// //     {
// //       icon: Briefcase,
// //       title: "Post Positions",
// //       description: "Reach qualified candidates with AI"
// //     },
// //     {
// //       icon: Users,
// //       title: "Access Top Talent",
// //       description: "Connect with pre-vetted candidates"
// //     },
// //     {
// //       icon: UserCheck,
// //       title: "Smart Matching",
// //       description: "Find perfect candidates with AI"
// //     }
// //   ];

// //   return (

// //     <div className="w-full">
// //       {/* <PathSection
// //         badge="For Students"
// //         title="Launch Your Career Journey"
// //         subtitle="Join thousands of students discovering their perfect career path through our platform."
// //         features={studentFeatures}
// //         ctaText="Get Started Now"
// //       /> */}
// //       <PathSection
// //         badge="For Recruiters"
// //         title="Transform Your Hiring"
// //         subtitle="Connect with top talent and build high-performing teams faster than ever."
// //         features={recruiterFeatures}
// //         ctaText="Start Hiring Now"
// //         isReversed={true}
// //       />
// //     </div>
// //   );
// // };

// // export default CareerPaths;
// // import React from 'react';
// // import { ArrowRight, BookOpen, Search, FileCheck, Trophy, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // const FeatureCard = ({ icon: Icon, title, description }) => (
// //   <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
// //     <div className="p-3 rounded-lg bg-blue-600">
// //       <Icon className="w-6 h-6 text-white" />
// //     </div>
// //     <div>
// //       <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
// //       <p className="text-sm text-gray-600 mt-1">{description}</p>
// //     </div>
// //   </div>
// // );

// // const PathSection = ({ badge, title, subtitle, features, ctaText, isReversed = false, ctaPath }) => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className={`w-full py-16 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
// //       <div className="max-w-6xl mx-auto px-4">
// //         <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
// //           {/* Content Column */}
// //           <div className="flex-1 space-y-6">
// //             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-base">
// //               {badge}
// //             </div>
// //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// //               {title}
// //             </h1>
// //             <p className="text-xl text-gray-600 leading-relaxed">
// //               {subtitle}
// //             </p>
// //             <button
// //               onClick={() => navigate(ctaPath)}
// //               className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
// //             >
// //               <span>{ctaText}</span>
// //               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
// //             </button>
// //           </div>

// //           {/* Features Column */}
// //           <div className="flex-1">
// //             <div className="bg-gray-50 rounded-xl p-6 space-y-4">
// //               {features.map((feature, index) => (
// //                 <FeatureCard key={index} {...feature} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const CareerPaths = () => {
// //   const studentFeatures = [
// //     {
// //       icon: BookOpen,
// //       title: "Build Your Profile",
// //       description: "Showcase your skills and achievements"
// //     },
// //     {
// //       icon: Search,
// //       title: "Find Opportunities",
// //       description: "Access AI-matched jobs and internships"
// //     },
// //     {
// //       icon: FileCheck,
// //       title: "Easy Applications",
// //       description: "One-click apply with real-time tracking"
// //     },
// //     {
// //       icon: Trophy,
// //       title: "Track Progress",
// //       description: "Get personalized recommendations"
// //     }
// //   ];

// //   const recruiterFeatures = [
// //     {
// //       icon: Building2,
// //       title: "Employer Branding",
// //       description: "Create an attractive company presence"
// //     },
// //     {
// //       icon: Briefcase,
// //       title: "Post Positions",
// //       description: "Reach qualified candidates with AI"
// //     },
// //     {
// //       icon: Users,
// //       title: "Access Top Talent",
// //       description: "Connect with pre-vetted candidates"
// //     },
// //     {
// //       icon: UserCheck,
// //       title: "Smart Matching",
// //       description: "Find perfect candidates with AI"
// //     }
// //   ];

// //   return (
// //     <div className="w-full">
// //       {/* For Students */}
// //       {/* <PathSection
// //         badge="For Students"
// //         title="Launch Your Career Journey"
// //         subtitle="Join thousands of students discovering their perfect career path through our platform."
// //         features={studentFeatures}
// //         ctaText="Get Started Now"
// //         ctaPath="/signup/student"
// //       /> */}

// //       {/* For Recruiters */}
// //       <PathSection
// //         badge="For Recruiters"
// //         title="Transform Your Hiring"
// //         subtitle="Connect with top talent and build high-performing teams faster than ever."
// //         features={recruiterFeatures}
// //         ctaText="Start Hiring Now"
// //         ctaPath="/signup/recruiter"
// //         isReversed={true}
// //       />
// //     </div>
// //   );
// // };

// // export default CareerPaths;
// import React, { memo } from 'react';
// import { ArrowRight, BookOpen, Search, FileCheck, Trophy, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';


// const FeatureCard = memo(({ icon: Icon, title, description }) => (
//   <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
//     <div className="p-3 rounded-lg bg-blue-600">
//       <Icon className="w-6 h-6 text-white" />
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//     </div>
//   </div>
// ));

// const PathSection = memo(({ badge, title, subtitle, features, ctaText, isReversed = false, ctaPath }) => {
//   const navigate = useNavigate();
//   const { user } = useSelector(store => store.auth);

//   const handleNavigation = () => {
//     if (user) {
//       toast.error('Please logout from student role first');
//     } else {
//       navigate(ctaPath);
//     }
//   };

//   return (
//     <div className={`w-full py-16 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
//       <div className="max-w-6xl mx-auto px-4">
//         <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
//           {/* Content Column */}
//           <div className="flex-1 space-y-6">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-base">
//               {badge}
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               {title}
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               {subtitle}
//             </p>
//             <button
//               onClick={handleNavigation}
//               className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
//             >
//               <span>{ctaText}</span>
//               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>

//           {/* Features Column */}
//           <div className="flex-1">
//             <div className="bg-gray-50 rounded-xl p-6 space-y-4">
//               {features.map((feature, index) => (
//                 <FeatureCard key={index} {...feature} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// const CareerPaths = memo(() => {
//   const recruiterFeatures = [
//     {
//       icon: Building2,
//       title: "Employer Branding",
//       description: "Create an attractive company presence"
//     },
//     {
//       icon: Briefcase,
//       title: "Post Positions",
//       description: "Reach qualified candidates with AI"
//     },
//     {
//       icon: Users,
//       title: "Access Top Talent",
//       description: "Connect with pre-vetted candidates"
//     },
//     {
//       icon: UserCheck,
//       title: "Smart Matching",
//       description: "Find perfect candidates with AI"
//     }
//   ];

//   return (
//     <div className="w-full">
//       <PathSection
//         badge="For Recruiters"
//         title="Transform Your Hiring"
//         subtitle="Connect with top talent and build high-performing teams faster than ever."
//         features={recruiterFeatures}
//         ctaText="Start Hiring Now"
//         ctaPath="/signup/recruiter"
//         isReversed={true}
//       />
//     </div>
//   );
// });

// export default CareerPaths;


import React, { memo } from 'react';
import { ArrowRight, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const FeatureCard = memo(({ icon: Icon, title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
    <div className="p-3 rounded-lg bg-blue-600 shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
));

const PathSection = memo(({ badge, title, subtitle, features, ctaText, isReversed = false, ctaPath }) => {
  const navigate = useNavigate();
  const { user } = useSelector(store => store.auth);

  const handleNavigation = () => {
    if (user) {
      toast.error('Please logout from student role first');
    } else {
      navigate(ctaPath);
    }
  };

  return (
    <div className={`w-full py-8 sm:py-12 lg:py-16 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
          {/* Content Column */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm sm:text-base">
              {badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            <button
              onClick={handleNavigation}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Features Column */}
          <div className="flex-1 w-full">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const CareerPaths = memo(() => {
  const recruiterFeatures = [
    {
      icon: Building2,
      title: "Employer Branding",
      description: "Create an attractive company presence"
    },
    {
      icon: Briefcase,
      title: "Post Positions",
      description: "Reach qualified candidates with AI"
    },
    {
      icon: Users,
      title: "Access Top Talent",
      description: "Connect with pre-vetted candidates"
    },
    {
      icon: UserCheck,
      title: "Smart Matching",
      description: "Find perfect candidates with AI"
    }
  ];

  return (
    <div className="w-full">
      <PathSection
        badge="For Recruiters"
        title="Transform Your Hiring"
        subtitle="Connect with top talent and build high-performing teams faster than ever."
        features={recruiterFeatures}
        ctaText="Start Hiring Now"
        ctaPath="/signup/recruiter"
        isReversed={true}
      />
    </div>
  );
});

export default CareerPaths;