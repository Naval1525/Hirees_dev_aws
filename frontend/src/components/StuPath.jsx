// // // // import React, { useState } from 'react';
// // // // import { BookOpen, Building2, UserCheck, FileCheck, Briefcase, Search, Users, Trophy, ArrowRight } from 'lucide-react';

// // // // const GradientCard = ({ children }) => (
// // // //   <div className="relative group">
// // // //     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
// // // //     <div className="relative bg-white rounded-2xl p-8">
// // // //       {children}
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const AnimatedStep = ({ icon: Icon, title, description, index }) => {
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   return (
// // // //     <div
// // // //       className="relative p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //     >
// // // //       <div className="flex items-start gap-4">
// // // //         <div className={`
// // // //           relative flex items-center justify-center w-12 h-12 rounded-xl
// // // //           bg-gradient-to-br from-blue-500 to-blue-700
// // // //           transition-all duration-500 ${isHovered ? 'scale-110' : ''}
// // // //         `}>
// // // //           <Icon className="w-6 h-6 text-white" />
// // // //           <div className="absolute inset-0 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-20"></div>
// // // //         </div>
// // // //         <div className="flex-1">
// // // //           <div className="flex items-center gap-2">
// // // //             <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
// // // //             <div className="h-px flex-1 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
// // // //           </div>
// // // //           <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>
// // // //           <p className="text-gray-600 mt-1 leading-relaxed">{description}</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const PathSection = ({ title, subtitle, steps, isReversed, ctaText }) => {
// // // //   return (
// // // //     <div className={`w-full py-20 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
// // // //       <div className={`max-w-7xl mx-auto px-4 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
// // // //         <div className="flex-1 space-y-8">
// // // //           <div className="space-y-4">
// // // //             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
// // // //               {isReversed ? 'For Recruiters' : 'For Students'}
// // // //             </div>
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// // // //               {title}
// // // //             </h2>
// // // //             <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
// // // //               {subtitle}
// // // //             </p>
// // // //           </div>

// // // //           <div className="space-y-4">
// // // //             {steps.map((step, index) => (
// // // //               <AnimatedStep key={index} {...step} index={index} />
// // // //             ))}
// // // //           </div>

// // // //           <button className="group relative inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 overflow-hidden">
// // // //             <span className="relative">{ctaText}</span>
// // // //             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //           </button>
// // // //         </div>

// // // //         <div className="flex-1">
// // // //           <GradientCard>
// // // //             <div className="space-y-6">
// // // //               {steps.map((step, index) => (
// // // //                 <div
// // // //                   key={index}
// // // //                   className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
// // // //                 >
// // // //                   <div className="p-3 rounded-lg bg-white shadow-sm">
// // // //                     <step.icon className="w-6 h-6 text-blue-700" />
// // // //                   </div>
// // // //                   <div>
// // // //                     <h4 className="font-medium text-gray-900">{step.title}</h4>
// // // //                     <p className="text-sm text-gray-600 mt-1">{step.description}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </GradientCard>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const StuPath = () => {
// // // //   const studentSteps = [
// // // //     {
// // // //       icon: BookOpen,
// // // //       title: "Create Your Professional Profile",
// // // //       description: "Build a standout profile that showcases your unique skills and achievements to potential employers."
// // // //     },
// // // //     {
// // // //       icon: Search,
// // // //       title: "Explore Curated Opportunities",
// // // //       description: "Access AI-matched job listings and internships tailored specifically to your career goals."
// // // //     },
// // // //     {
// // // //       icon: FileCheck,
// // // //       title: "Smart Application Process",
// // // //       description: "Apply seamlessly with our one-click system and track your applications in real-time."
// // // //     },
// // // //     {
// // // //       icon: Trophy,
// // // //       title: "Career Growth Analytics",
// // // //       description: "Monitor your progress and receive personalized recommendations for skill development."
// // // //     }
// // // //   ];

// // // //   const recruiterSteps = [
// // // //     {
// // // //       icon: Building2,
// // // //       title: "Build Your Employer Brand",
// // // //       description: "Create an compelling company presence that attracts and engages top industry talent."
// // // //     },
// // // //     {
// // // //       icon: Briefcase,
// // // //       title: "Strategic Talent Acquisition",
// // // //       description: "Post positions and leverage our AI to reach the most qualified candidates."
// // // //     },
// // // //     {
// // // //       icon: Users,
// // // //       title: "Access Elite Talent Pool",
// // // //       description: "Connect with pre-vetted candidates who match your specific requirements."
// // // //     },
// // // //     {
// // // //       icon: UserCheck,
// // // //       title: "Advanced Matching System",
// // // //       description: "Utilize our AI-powered matching to identify perfect candidates for your roles."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="w-full">
// // // //       <PathSection
// // // //         title="Accelerate Your Career Growth"
// // // //         subtitle="Join thousands of students who have launched successful careers through our platform."
// // // //         steps={studentSteps}
// // // //         ctaText="Launch Your Career"
// // // //         isReversed={false}
// // // //       />
// // // //       {/* <PathSection
// // // //         title="Transform Your Hiring Process"
// // // //         subtitle="Connect with top talent and build high-performing teams faster than ever."
// // // //         steps={recruiterSteps}
// // // //         ctaText="Start Hiring Now"
// // // //         isReversed={true}
// // // //       /> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StuPath;
// // // // import React, { useState } from 'react';
// // // // import { BookOpen, Building2, UserCheck, FileCheck, Briefcase, Search, Users, Trophy, ArrowRight } from 'lucide-react';

// // // // const GradientCard = ({ children }) => (
// // // //   <div className="relative group">
// // // //     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
// // // //     <div className="relative bg-white rounded-lg p-4">{children}</div>
// // // //   </div>
// // // // );

// // // // const AnimatedStep = ({ icon: Icon, title, description, index }) => {
// // // //   const [isHovered, setIsHovered] = useState(false);
// // // //   return (
// // // //     <div className="relative p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}>
// // // //       <div className="flex items-start gap-3">
// // // //         <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
// // // //           <Icon className="w-5 h-5 text-white" />
// // // //           <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-20"></div>
// // // //         </div>
// // // //         <div className="flex-1">
// // // //           <div className="flex items-center gap-2">
// // // //             <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
// // // //             <div className="h-px flex-1 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
// // // //           </div>
// // // //           <h3 className="text-base font-semibold text-gray-900 mt-1">{title}</h3>
// // // //           <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{description}</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const PathSection = ({ title, subtitle, steps, isReversed, ctaText }) => (
// // // //   <div className={`w-full py-12 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
// // // //     <div className={`max-w-6xl mx-auto px-4 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-24 items-center`}>
// // // //       <div className="flex-1 space-y-6">
// // // //         <div className="space-y-3">
// // // //           <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
// // // //             {isReversed ? 'For Recruiters' : 'For Students'}
// // // //           </div>
// // // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
// // // //           <p className="text-lg text-gray-600 max-w-xl leading-relaxed">{subtitle}</p>
// // // //         </div>
// // // //         <div className="space-y-3">
// // // //           {steps.map((step, index) => (
// // // //             <AnimatedStep key={index} {...step} index={index} />
// // // //           ))}
// // // //         </div>
// // // //         <button className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
// // // //           <span>{ctaText}</span>
// // // //           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
// // // //         </button>
// // // //       </div>
// // // //       <div className="flex-1">
// // // //         <GradientCard>
// // // //           <div className="space-y-4">
// // // //             {steps.map((step, index) => (
// // // //               <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
// // // //                 <div className="p-2 rounded-lg bg-white shadow-sm">
// // // //                   <step.icon className="w-5 h-5 text-blue-700" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h4 className="font-medium text-gray-900 text-sm">{step.title}</h4>
// // // //                   <p className="text-xs text-gray-600 mt-0.5">{step.description}</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </GradientCard>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const StuPath = () => {
// // // //   const studentSteps = [
// // // //     {
// // // //       icon: BookOpen,
// // // //       title: "Create Your Professional Profile",
// // // //       description: "Build a standout profile that showcases your unique skills and achievements."
// // // //     },
// // // //     {
// // // //       icon: Search,
// // // //       title: "Explore Curated Opportunities",
// // // //       description: "Access AI-matched job listings and internships tailored to your goals."
// // // //     },
// // // //     {
// // // //       icon: FileCheck,
// // // //       title: "Smart Application Process",
// // // //       description: "Apply seamlessly with our one-click system and track applications in real-time."
// // // //     },
// // // //     {
// // // //       icon: Trophy,
// // // //       title: "Career Growth Analytics",
// // // //       description: "Monitor progress and receive personalized recommendations for development."
// // // //     }
// // // //   ];

// // // //   const recruiterSteps = [
// // // //     {
// // // //       icon: Building2,
// // // //       title: "Build Your Employer Brand",
// // // //       description: "Create an compelling company presence that attracts top industry talent."
// // // //     },
// // // //     {
// // // //       icon: Briefcase,
// // // //       title: "Strategic Talent Acquisition",
// // // //       description: "Post positions and leverage our AI to reach qualified candidates."
// // // //     },
// // // //     {
// // // //       icon: Users,
// // // //       title: "Access Elite Talent Pool",
// // // //       description: "Connect with pre-vetted candidates matching your requirements."
// // // //     },
// // // //     {
// // // //       icon: UserCheck,
// // // //       title: "Advanced Matching System",
// // // //       description: "Utilize AI-powered matching to identify perfect candidates for roles."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="w-full">
// // // //       <PathSection
// // // //         title="Accelerate Your Career Growth"
// // // //         subtitle="Join thousands of students who have launched successful careers through our platform."
// // // //         steps={studentSteps}
// // // //         ctaText="Launch Your Career"
// // // //         isReversed={false}
// // // //       />
// // // //       {/* <PathSection
// // // //         title="Transform Your Hiring Process"
// // // //         subtitle="Connect with top talent and build high-performing teams faster than ever."
// // // //         steps={recruiterSteps}
// // // //         ctaText="Start Hiring Now"
// // // //         isReversed={true}
// // // //       /> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StuPath;
// // // import React, { useState } from 'react';
// // // import { BookOpen, Building2, UserCheck, FileCheck, Briefcase, Search, Users, Trophy, ArrowRight } from 'lucide-react';

// // // const GradientCard = ({ children }) => (
// // //   <div className="relative group">
// // //     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
// // //     <div className="relative bg-white rounded-lg p-4">{children}</div>
// // //   </div>
// // // );

// // // const AnimatedStep = ({ icon: Icon, title, description, index }) => {
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   return (
// // //     <div className="relative p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}>
// // //       <div className="flex items-start gap-3">
// // //         <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
// // //           <Icon className="w-5 h-5 text-white" />
// // //         </div>
// // //         <div className="flex-1">
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
// // //             <div className="h-px flex-1 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
// // //           </div>
// // //           <h3 className="text-base font-semibold text-gray-900 mt-1">{title}</h3>
// // //           <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{description}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const PathSection = ({ title, subtitle, steps, ctaText }) => (
// // //   <div className="w-full py-8 bg-white">
// // //     <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
// // //       <div className="flex-1 space-y-6">
// // //         <div className="space-y-3">
// // //           <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
// // //             For Students
// // //           </div>
// // //           <h2 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h2>
// // //           <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
// // //         </div>
// // //         <div className="space-y-3">
// // //           {steps.map((step, index) => (
// // //             <AnimatedStep key={index} {...step} index={index} />
// // //           ))}
// // //         </div>
// // //         <button className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
// // //           <span>{ctaText}</span>
// // //           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
// // //         </button>
// // //       </div>
// // //       <div className="flex-1">
// // //         <GradientCard>
// // //           <div className="space-y-4">
// // //             {steps.map((step, index) => (
// // //               <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
// // //                 <div className="p-2 rounded-lg bg-white shadow-sm">
// // //                   <step.icon className="w-5 h-5 text-blue-700" />
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-medium text-gray-900">{step.title}</h4>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </GradientCard>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // const StuPath = () => {
// // //   const studentSteps = [
// // //     {
// // //       icon: BookOpen,
// // //       title: "Create Profile",
// // //       description: "Showcase your skills and achievements."
// // //     },
// // //     {
// // //       icon: Search,
// // //       title: "Explore Opportunities",
// // //       description: "Find AI-matched jobs and internships."
// // //     },
// // //     {
// // //       icon: FileCheck,
// // //       title: "Quick Apply",
// // //       description: "One-click applications with real-time tracking."
// // //     },
// // //     {
// // //       icon: Trophy,
// // //       title: "Track Progress",
// // //       description: "Get personalized career recommendations."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="w-full">
// // //       <PathSection
// // //         title="Launch Your Career"
// // //         subtitle="Join thousands of successful students on our platform."
// // //         steps={studentSteps}
// // //         ctaText="Get Started"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default StuPath;
// // import React from 'react';
// // import { ArrowRight, BookOpen, Search, FileCheck, Trophy } from 'lucide-react';

// // const GradientCard = ({ children }) => (
// //   <div className="relative group">
// //     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
// //     <div className="relative bg-white rounded-xl p-6 shadow-lg">{children}</div>
// //   </div>
// // );

// // const FeatureCard = ({ icon: Icon, title }) => (
// //   <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
// //     <div className="p-3 rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
// //       <Icon className="w-6 h-6 text-white" />
// //     </div>
// //     <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
// //   </div>
// // );

// // const StuPath = () => {
// //   const features = [
// //     {
// //       icon: BookOpen,
// //       title: "Build Your Profile"
// //     },
// //     {
// //       icon: Search,
// //       title: "Discover Opportunities"
// //     },
// //     {
// //       icon: FileCheck,
// //       title: "Quick Applications"
// //     },
// //     {
// //       icon: Trophy,
// //       title: "Track Your Success"
// //     }
// //   ];

// //   return (
// //     <div className="w-full py-16 bg-white">
// //       <div className="max-w-6xl mx-auto px-4">
// //         <div className="flex flex-col md:flex-row gap-16 items-center">
// //           {/* Left Column - Headings */}
// //           <div className="flex-1 space-y-6">
// //             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-base">
// //               For Students
// //             </div>
// //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// //               Launch Your Career Journey
// //             </h1>
// //             <p className="text-xl text-gray-600 leading-relaxed">
// //               Join thousands of students discovering their perfect career path through our platform.
// //             </p>
// //             <button className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">
// //               <span>Get Started Now</span>
// //               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
// //             </button>
// //           </div>

// //           {/* Right Column - Feature Cards */}
// //           <div className="flex-1">
// //             <GradientCard>
// //               <div className="space-y-4">
// //                 {features.map((feature, index) => (
// //                   <FeatureCard key={index} {...feature} />
// //                 ))}
// //               </div>
// //             </GradientCard>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StuPath;
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

// // const PathSection = ({ badge, title, subtitle, features, ctaText, isReversed = false }) => {
// //   const navigate = useNavigate();

// //   return(
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
// //           <button onClick={()=>{navigate('/signup/candidate')}} className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">
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
// // )};

// // const StuPath = () => {
// //   const navigate = useNavigate();
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
// //       <PathSection
// //         badge="For Students"
// //         title="Launch Your Career Journey"
// //         subtitle="Join thousands of students discovering their perfect career path through our platform."
// //         features={studentFeatures}
// //         ctaText="Get Started Now"
// //       />
// //       {/* <PathSection
// //         badge="For Recruiters"
// //         title="Transform Your Hiring"
// //         subtitle="Connect with top talent and build high-performing teams faster than ever."
// //         features={recruiterFeatures}
// //         ctaText="Start Hiring Now"
// //         isReversed={true}
// //       /> */}
// //     </div>
// //   );
// // };

// // export default StuPath;
// import React from 'react';
// import { ArrowRight, BookOpen, Search, FileCheck, Trophy, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import store from '@/redux/store';

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
//     <div className="p-3 rounded-lg bg-blue-600">
//       <Icon className="w-6 h-6 text-white" />
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//     </div>
//   </div>
// );

// const PathSection = ({ badge, title, subtitle, features, ctaText, isReversed = false }) => {
//   const navigate = useNavigate();
//   const { user } = useSelector(store => store.auth);

//   const handleNavigation = () => {
//     if (user) {
//       navigate('/');
//     } else {
//       navigate('/signup/candidate');
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
//               <span>{user ? 'Go to Dashboard' : ctaText}</span>
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
// };

// const StuPath = () => {
//   const studentFeatures = [
//     {
//       icon: BookOpen,
//       title: "Build Your Profile",
//       description: "Showcase your skills and achievements"
//     },
//     {
//       icon: Search,
//       title: "Find Opportunities",
//       description: "Access AI-matched jobs and internships"
//     },
//     {
//       icon: FileCheck,
//       title: "Easy Applications",
//       description: "One-click apply with real-time tracking"
//     },
//     {
//       icon: Trophy,
//       title: "Track Progress",
//       description: "Get personalized recommendations"
//     }
//   ];

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
//         badge="For Students"
//         title="Launch Your Career Journey"
//         subtitle="Join thousands of students discovering their perfect career path through our platform."
//         features={studentFeatures}
//         ctaText="Get Started Now"
//       />
//       {/* <PathSection
//         badge="For Recruiters"
//         title="Transform Your Hiring"
//         subtitle="Connect with top talent and build high-performing teams faster than ever."
//         features={recruiterFeatures}
//         ctaText="Start Hiring Now"
//         isReversed={true}
//       /> */}
//     </div>
//   );
// };

// export default StuPath;
import React from 'react';
import { ArrowRight, BookOpen, Search, FileCheck, Trophy, Building2, Briefcase, Users, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white shadow-sm">
    <div className="p-2 sm:p-3 rounded-lg bg-blue-600 flex-shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const PathSection = ({ badge, title, subtitle, features, ctaText, isReversed = false }) => {
  const navigate = useNavigate();
  const { user } = useSelector(store => store.auth);

  const handleNavigation = () => {
    if (user) {
      navigate('/');
    } else {
      navigate('/signup/candidate');
    }
  };

  return (
    <div className={`w-full py-8 sm:py-12 lg:py-16 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              <span>{user ? 'Go to Dashboard' : ctaText}</span>
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
};

const StuPath = () => {
  const studentFeatures = [
    {
      icon: BookOpen,
      title: "Build Your Profile",
      description: "Showcase your skills and achievements"
    },
    {
      icon: Search,
      title: "Find Opportunities",
      description: "Access AI-matched jobs and internships"
    },
    {
      icon: FileCheck,
      title: "Easy Applications",
      description: "One-click apply with real-time tracking"
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Get personalized recommendations"
    }
  ];

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
        badge="For Students"
        title="Launch Your Career Journey"
        subtitle="Join thousands of students discovering their perfect career path through our platform."
        features={studentFeatures}
        ctaText="Get Started Now"
      />
    </div>
  );
};

export default StuPath;