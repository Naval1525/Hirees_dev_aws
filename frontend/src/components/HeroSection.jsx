// // // // // // // import React, { useState } from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { Briefcase, CheckCircle, Search, UploadCloud } from "lucide-react";
// // // // // // // import { Button } from "./ui/button";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { useDispatch } from "react-redux";
// // // // // // // import GridPattern from "./ui/grid-pattern";
// // // // // // // import { setSearchQuery } from "@/redux/jobSlice";

// // // // // // // function HeroSection() {

// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [query, setQuery] = useState("");

// // // // // // //   const handleSearch = (e) => {
// // // // // // //     e?.preventDefault();
// // // // // // //     const trimmedQuery = query.trim();

// // // // // // //     if (trimmedQuery) {
// // // // // // //       dispatch(setSearchQuery(trimmedQuery));
// // // // // // //       navigate("/browse");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleUploadClick = () => {
// // // // // // //     navigate("/profile");
// // // // // // //   };

// // // // // // //   return (

// // // // // // // <div className="relative bg-white overflow-hidden">
// // // // // // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 items-center">
// // // // // // //         <GridPattern
// // // // // // //             className="absolute inset-0 w-full h-full text-gray-500"
// // // // // // //             style={{
// // // // // // //               maskImage:
// // // // // // //                 "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // // //               WebkitMaskImage:
// // // // // // //                 "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // // //               opacity: 0.3, // Adjust the overall opacity
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           {/* Left Section - Now larger */}
// // // // // // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // // // // // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // // // // // //               {/* Badge */}
// // // // // // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // // // // // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // // // // // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // // // // // //                   No. 1 Job Hunt Website
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               {/* Heading */}
// // // // // // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // // // //                 Search, Apply &
// // // // // // //                 <br />
// // // // // // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // // // // // //               </h1>

// // // // // // //               {/* Subtext */}
// // // // // // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // // // // // //                 Discover opportunities that match your skills, passion, and
// // // // // // //                 career goals. Your next professional milestone is just a search
// // // // // // //                 away.
// // // // // // //               </p>

// // // // // // //               {/* Search Container */}
// // // // // // //               <div className="w-full max-w-2xl">
// // // // // // //                 <div className="w-full relative flex shadow-lg rounded-full border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 mb-6">
// // // // // // //                   <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // // // //                     <Briefcase className="w-5 h-5 text-gray-400" />
// // // // // // //                   </div>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     value={query}
// // // // // // //                     onChange={(e) => setQuery(e.target.value)}
// // // // // // //                     placeholder="Find your dream job"
// // // // // // //                     className="w-full pl-12 pr-4 py-4 text-lg outline-none border-none placeholder-gray-400"
// // // // // // //                   />
// // // // // // //                   <Button
// // // // // // //                     onClick={handleSearch}
// // // // // // //                     className="bg-blue-700 hover:bg-blue-800 text-white rounded-r-full px-8 h-auto transition transform hover:scale-105 flex items-center gap-2"
// // // // // // //                   >
// // // // // // //                     <Search className="w-5 h-5" />
// // // // // // //                     Search
// // // // // // //                   </Button>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="-translate-x-24">
// // // // // // //   <motion.div
// // // // // // //     initial={{ opacity: 0, y: 50 }}
// // // // // // //     animate={{ opacity: 1, y: 0 }}
// // // // // // //     transition={{ duration: 0.8, ease: "easeOut" }}
// // // // // // //     className="relative flex flex-col items-center justify-center bg-blue-600 rounded-lg p-4 shadow-lg"
// // // // // // //   >

// // // // // // //     <motion.div
// // // // // // //       className="absolute -top-4 -left-4 w-12 h-12 bg-black rounded-full opacity-30"
// // // // // // //       animate={{
// // // // // // //         scale: [1, 1.2, 1],
// // // // // // //         rotate: [0, 360],
// // // // // // //         opacity: [0.4, 0.6, 0.4],
// // // // // // //       }}
// // // // // // //       transition={{ duration: 5, repeat: Infinity }}
// // // // // // //     />
// // // // // // //     <motion.div
// // // // // // //       className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-900 rounded-full opacity-30"
// // // // // // //       animate={{
// // // // // // //         scale: [1, 1.3, 1],
// // // // // // //         opacity: [0.4, 0.6, 0.4],
// // // // // // //       }}
// // // // // // //       transition={{ duration: 6, repeat: Infinity }}
// // // // // // //     />


// // // // // // //     <h2 className="text-2xl font-extrabold text-white mb-3 text-center">
// // // // // // //       Upload Resume
// // // // // // //     </h2>
// // // // // // //     <p className="text-sm text-white text-center mb-4 leading-relaxed">
// // // // // // //       Unlock endless career opportunities!
// // // // // // //     </p>

// // // // // // //     <div className="text-center space-y-2 mb-4">
// // // // // // //       <p className="text-xs text-black bg-white p-2 rounded-lg shadow-md">
// // // // // // //         📂 Organize career details
// // // // // // //       </p>
// // // // // // //       <p className="text-xs text-black bg-white p-2 rounded-lg shadow-md">
// // // // // // //         🚀 Get automated suggestions
// // // // // // //       </p>
// // // // // // //       <p className="text-xs text-black bg-white p-2 rounded-lg shadow-md">
// // // // // // //         🔒 Secure information sharing
// // // // // // //       </p>
// // // // // // //     </div>


// // // // // // //     <Button
// // // // // // //       onClick={handleUploadClick}
// // // // // // //       className="bg-black text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-1"
// // // // // // //     >
// // // // // // //       <UploadCloud className="w-4 h-4" />
// // // // // // //       Upload
// // // // // // //     </Button>
// // // // // // //   </motion.div>
// // // // // // // </div>

// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default HeroSection;









// // // // // // // import React from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { Briefcase, CheckCircle, Search, Users_dev, Building, Trophy } from "lucide-react";
// // // // // // // import { Button } from "./ui/button";

// // // // // // // import { useDispatch } from "react-redux";
// // // // // // // import GridPattern from "./ui/grid-pattern";
// // // // // // // import { setSearchQuery } from "@/redux/jobSlice";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // function HeroSection() {
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [query, setQuery] = React.useState("");

// // // // // // //   const handleSearch = (e) => {
// // // // // // //     e?.preventDefault();
// // // // // // //     const trimmedQuery = query.trim();
// // // // // // //     if (trimmedQuery) {
// // // // // // //       dispatch(setSearchQuery(trimmedQuery));
// // // // // // //       navigate("/browse");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
// // // // // // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // // // // // //           <GridPattern
// // // // // // //             className="absolute inset-0 w-full h-full text-blue-200"
// // // // // // //             style={{
// // // // // // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // // //               opacity: 0.4,
// // // // // // //             }}
// // // // // // //           />

// // // // // // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // // // // // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // // // // // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // // // // // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // // // // // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // // // // // //                   No. 1 Job Hunt Website
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // // // //                 Search, Apply &
// // // // // // //                 <br />
// // // // // // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // // // // // //               </h1>

// // // // // // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // // // // // //                 Discover opportunities that match your skills, passion, and
// // // // // // //                 career goals. Your next professional milestone is just a search
// // // // // // //                 away.
// // // // // // //               </p>

// // // // // // //               <div className="w-full max-w-2xl">
// // // // // // //                 <div className="w-full relative flex shadow-lg rounded-full border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 mb-6">
// // // // // // //                   <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // // // //                     <Briefcase className="w-5 h-5 text-gray-400" />
// // // // // // //                   </div>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     value={query}
// // // // // // //                     onChange={(e) => setQuery(e.target.value)}
// // // // // // //                     placeholder="Find your dream job"
// // // // // // //                     className="w-full pl-12 pr-4 py-4 text-lg outline-none border-none placeholder-gray-400"
// // // // // // //                   />
// // // // // // //                   <Button
// // // // // // //                     onClick={handleSearch}
// // // // // // //                     className="bg-blue-700 hover:bg-blue-800 text-white rounded-r-full px-8 h-auto transition transform hover:scale-105 flex items-center gap-2"
// // // // // // //                   >
// // // // // // //                     <Search className="w-5 h-5" />
// // // // // // //                     Search
// // // // // // //                   </Button>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="relative h-full mt-10">
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.8 }}
// // // // // // //               className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden"
// // // // // // //             >
// // // // // // //               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50" />

// // // // // // //               <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Portal Stats</h2>

// // // // // // //               <div className="space-y-6">
// // // // // // //                 <motion.div
// // // // // // //                   className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl"
// // // // // // //                   whileHover={{ scale: 1.02 }}
// // // // // // //                 >
// // // // // // //                   <div className="p-3 bg-blue-100 rounded-lg">
// // // // // // //                     <Users_dev className="w-6 h-6 text-blue-600" />
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
// // // // // // //                     <p className="text-gray-600">Active Job Seekers</p>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   className="flex items-center gap-4 bg-green-50 p-4 rounded-xl"
// // // // // // //                   whileHover={{ scale: 1.02 }}
// // // // // // //                 >
// // // // // // //                   <div className="p-3 bg-green-100 rounded-lg">
// // // // // // //                     <Building className="w-6 h-6 text-green-600" />
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
// // // // // // //                     <p className="text-gray-600">Companies Hiring</p>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   className="flex items-center gap-4 bg-purple-50 p-4 rounded-xl"
// // // // // // //                   whileHover={{ scale: 1.02 }}
// // // // // // //                 >
// // // // // // //                   <div className="p-3 bg-purple-100 rounded-lg">
// // // // // // //                     <Trophy className="w-6 h-6 text-purple-600" />
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-2xl font-bold text-gray-900">95%</h3>
// // // // // // //                     <p className="text-gray-600">Success Rate</p>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default HeroSection;













// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { Briefcase, CheckCircle, Search} from "lucide-react";
// // // // // // import { Button } from "./ui/button";

// // // // // // import { useDispatch } from "react-redux";
// // // // // // import GridPattern from "./ui/grid-pattern";
// // // // // // import { setSearchQuery } from "@/redux/jobSlice";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import TestimonialsSection from "./TestimonialsSection";
// // // // // // import { IconCloudDemo } from "./IconCloudDemo";

// // // // // // const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
// // // // // //   <motion.div
// // // // // //     className="absolute"
// // // // // //     style={{ x, y }}
// // // // // //     animate={{
// // // // // //       y: [y, y - 20, y],
// // // // // //       opacity: [0.5, 1, 0.5],
// // // // // //     }}
// // // // // //     transition={{
// // // // // //       duration: 3,
// // // // // //       delay,
// // // // // //       repeat: Infinity,
// // // // // //       ease: "easeInOut",
// // // // // //     }}
// // // // // //   >
// // // // // //     <div className="p-3 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm">
// // // // // //       <Icon className="w-6 h-6 text-blue-600" />
// // // // // //     </div>
// // // // // //   </motion.div>
// // // // // // );

// // // // // // function HeroSection() {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const navigate = useNavigate();
// // // // // //   const [query, setQuery] = React.useState("");

// // // // // //   const handleSearch = (e) => {
// // // // // //     e?.preventDefault();
// // // // // //     const trimmedQuery = query.trim();
// // // // // //     if (trimmedQuery) {
// // // // // //       dispatch(setSearchQuery(trimmedQuery));
// // // // // //       navigate("/browse");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden ">
// // // // // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // // // // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // // // // //           <GridPattern
// // // // // //             className="absolute inset-0 w-full h-full text-blue-200"
// // // // // //             style={{
// // // // // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // // //               opacity: 0.4,
// // // // // //             }}
// // // // // //           />

// // // // // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // // // // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // // // // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // // // // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // // // // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // // // // //                   No. 1 Job Hunt Website
// // // // // //                 </span>
// // // // // //               </div>

// // // // // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // // //                 Search, Apply &
// // // // // //                 <br />
// // // // // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // // // // //               </h1>

// // // // // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // // // // //                 Discover opportunities that match your skills, passion, and
// // // // // //                 career goals. Your next professional milestone is just a search
// // // // // //                 away.
// // // // // //               </p>

// // // // // //               <div className="w-full max-w-2xl">
// // // // // //                 <div className="w-full relative flex shadow-lg rounded-full border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 mb-6">
// // // // // //                   <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // // //                     <Briefcase className="w-5 h-5 text-gray-400" />
// // // // // //                   </div>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     value={query}
// // // // // //                     onChange={(e) => setQuery(e.target.value)}
// // // // // //                     placeholder="Find your dream job"
// // // // // //                     className="w-full pl-12 pr-4 py-4 text-lg outline-none border-none placeholder-gray-400"
// // // // // //                   />
// // // // // //                   <Button
// // // // // //                     onClick={handleSearch}
// // // // // //                     className="bg-blue-700 hover:bg-blue-800 text-white rounded-r-full px-8 h-auto transition transform hover:scale-105 flex items-center gap-2"
// // // // // //                   >
// // // // // //                     <Search className="w-5 h-5" />
// // // // // //                     Search
// // // // // //                   </Button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="relative h-96 bottom-28 ">
// // // // // //             <IconCloudDemo></IconCloudDemo>

// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default HeroSection;
// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// // // // // import { Button } from "./ui/button";
// // // // // import { useDispatch } from "react-redux";
// // // // // import GridPattern from "./ui/grid-pattern";
// // // // // import { setSearchQuery } from "@/redux/jobSlice";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { IconCloudDemo } from "./IconCloudDemo";

// // // // // const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
// // // // //   <motion.div
// // // // //     className="absolute"
// // // // //     style={{ x, y }}
// // // // //     animate={{
// // // // //       y: [y, y - 20, y],
// // // // //       opacity: [0.5, 1, 0.5],
// // // // //     }}
// // // // //     transition={{
// // // // //       duration: 3,
// // // // //       delay,
// // // // //       repeat: Infinity,
// // // // //       ease: "easeInOut",
// // // // //     }}
// // // // //   >
// // // // //     <div className="p-3 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm">
// // // // //       <Icon className="w-6 h-6 text-blue-600" />
// // // // //     </div>
// // // // //   </motion.div>
// // // // // );

// // // // // function HeroSection() {
// // // // //   const dispatch = useDispatch();
// // // // //   const navigate = useNavigate();
// // // // //   const [jobQuery, setJobQuery] = React.useState("");
// // // // //   const [locationQuery, setLocationQuery] = React.useState("");

// // // // //   const handleSearch = (e) => {
// // // // //     e?.preventDefault();
// // // // //     const trimmedJobQuery = jobQuery.trim();
// // // // //     const trimmedLocationQuery = locationQuery.trim();
// // // // //     if (trimmedJobQuery || trimmedLocationQuery) {
// // // // //       dispatch(setSearchQuery({ job: trimmedJobQuery, location: trimmedLocationQuery }));
// // // // //       navigate("/browse");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
// // // // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // // // //           <GridPattern
// // // // //             className="absolute inset-0 w-full h-full text-blue-200"
// // // // //             style={{
// // // // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // // //               opacity: 0.4,
// // // // //             }}
// // // // //           />

// // // // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // // // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // // // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // // // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // // // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // // // //                   No. 1 Job Hunt Website
// // // // //                 </span>
// // // // //               </div>

// // // // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // // //                 Search, Apply &
// // // // //                 <br />
// // // // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // // // //               </h1>

// // // // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // // // //                 Discover opportunities that match your skills, passion, and
// // // // //                 career goals. Your next professional milestone is just a search
// // // // //                 away.
// // // // //               </p>

// // // // //               <div className="w-full max-w-2xl">
// // // // //                 <form onSubmit={handleSearch} className="space-y-3">
// // // // //                   {/* Job Skills Search */}
// // // // //                   <div className="relative flex shadow-lg rounded-full border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
// // // // //                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // //                       <Briefcase className="w-5 h-5 text-gray-400" />
// // // // //                     </div>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       value={jobQuery}
// // // // //                       onChange={(e) => setJobQuery(e.target.value)}
// // // // //                       placeholder="Job title, keywords, or company"
// // // // //                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border-none placeholder-gray-400"
// // // // //                     />
// // // // //                   </div>

// // // // //                   {/* Location Search */}
// // // // //                   <div className="relative flex shadow-lg rounded-full border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
// // // // //                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // //                       <MapPin className="w-5 h-5 text-gray-400" />
// // // // //                     </div>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       value={locationQuery}
// // // // //                       onChange={(e) => setLocationQuery(e.target.value)}
// // // // //                       placeholder="City, state, or remote"
// // // // //                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border-none placeholder-gray-400"
// // // // //                     />
// // // // //                     <Button
// // // // //                       type="submit"
// // // // //                       className="bg-blue-700 hover:bg-blue-800 text-white rounded-r-full px-8 h-auto transition transform hover:scale-105 flex items-center gap-2"
// // // // //                     >
// // // // //                       <Search className="w-5 h-5" />
// // // // //                       Search
// // // // //                     </Button>
// // // // //                   </div>
// // // // //                 </form>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="relative h-96 bottom-28">
// // // // //             <IconCloudDemo />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default HeroSection;
// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// // // // import { Button } from "./ui/button";
// // // // import { useDispatch } from "react-redux";
// // // // import GridPattern from "./ui/grid-pattern";
// // // // import { setSearchQuery } from "@/redux/jobSlice";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { IconCloudDemo } from "./IconCloudDemo";

// // // // const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
// // // //   <motion.div
// // // //     className="absolute"
// // // //     style={{ x, y }}
// // // //     animate={{
// // // //       y: [y, y - 20, y],
// // // //       opacity: [0.5, 1, 0.5],
// // // //     }}
// // // //     transition={{
// // // //       duration: 3,
// // // //       delay,
// // // //       repeat: Infinity,
// // // //       ease: "easeInOut",
// // // //     }}
// // // //   >
// // // //     <div className="p-3 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm">
// // // //       <Icon className="w-6 h-6 text-blue-600" />
// // // //     </div>
// // // //   </motion.div>
// // // // );

// // // // function HeroSection() {
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();
// // // //   const [jobQuery, setJobQuery] = React.useState("");
// // // //   const [locationQuery, setLocationQuery] = React.useState("");

// // // //   const handleSearch = (e) => {
// // // //     e?.preventDefault();
// // // //     const trimmedJobQuery = jobQuery.trim();
// // // //     const trimmedLocationQuery = locationQuery.trim();
// // // //     if (trimmedJobQuery || trimmedLocationQuery) {
// // // //       dispatch(setSearchQuery({ job: trimmedJobQuery, location: trimmedLocationQuery }));
// // // //       navigate("/browse");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
// // // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // // //           <GridPattern
// // // //             className="absolute inset-0 w-full h-full text-blue-200"
// // // //             style={{
// // // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // // //               opacity: 0.4,
// // // //             }}
// // // //           />

// // // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // // //                   No. 1 Job Hunt Website
// // // //                 </span>
// // // //               </div>

// // // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // // //                 Search, Apply &
// // // //                 <br />
// // // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // // //               </h1>

// // // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // // //                 Discover opportunities that match your skills, passion, and
// // // //                 career goals. Your next professional milestone is just a search
// // // //                 away.
// // // //               </p>

// // // //               <div className="w-full max-w-2xl">
// // // //                 <form onSubmit={handleSearch}>
// // // //                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
// // // //                     {/* Job Skills Search */}
// // // //                     <div className="relative flex-1 group">
// // // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // //                         <Briefcase className="w-5 h-5 text-gray-400" />
// // // //                       </div>
// // // //                       <input
// // // //                         type="text"
// // // //                         value={jobQuery}
// // // //                         onChange={(e) => setJobQuery(e.target.value)}
// // // //                         placeholder="Job title or skills"
// // // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
// // // //                       />
// // // //                     </div>

// // // //                     {/* Location Search */}
// // // //                     <div className="relative flex-1 group">
// // // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // //                         <MapPin className="w-5 h-5 text-gray-400" />
// // // //                       </div>
// // // //                       <input
// // // //                         type="text"
// // // //                         value={locationQuery}
// // // //                         onChange={(e) => setLocationQuery(e.target.value)}
// // // //                         placeholder="Location"
// // // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
// // // //                       />
// // // //                     </div>

// // // //                     {/* Search Button */}
// // // //                     <Button
// // // //                       type="submit"
// // // //                       className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
// // // //                     >
// // // //                       <Search className="w-5 h-5" />
// // // //                       Search
// // // //                     </Button>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="relative h-96 bottom-28">
// // // //             <IconCloudDemo />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default HeroSection;
// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// // // import { Button } from "./ui/button";
// // // import { useNavigate } from "react-router-dom";
// // // import GridPattern from "./ui/grid-pattern";
// // // import { IconCloudDemo } from "./IconCloudDemo";

// // // const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
// // //   <motion.div
// // //     className="absolute"
// // //     style={{ x, y }}
// // //     animate={{
// // //       y: [y, y - 20, y],
// // //       opacity: [0.5, 1, 0.5],
// // //     }}
// // //     transition={{
// // //       duration: 3,
// // //       delay,
// // //       repeat: Infinity,
// // //       ease: "easeInOut",
// // //     }}
// // //   >
// // //     <div className="p-3 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm">
// // //       <Icon className="w-6 h-6 text-blue-600" />
// // //     </div>
// // //   </motion.div>
// // // );

// // // function HeroSection() {
// // //   const navigate = useNavigate();
// // //   const [jobQuery, setJobQuery] = useState("");
// // //   const [locationQuery, setLocationQuery] = useState("");

// // //   const handleSearch = (e) => {
// // //     e?.preventDefault();
// // //     const trimmedJobQuery = jobQuery.trim();
// // //     const trimmedLocationQuery = locationQuery.trim();

// // //     // Construct query parameters
// // //     const params = new URLSearchParams();
// // //     if (trimmedJobQuery) params.append('keyword', trimmedJobQuery);
// // //     if (trimmedLocationQuery) params.append('location', trimmedLocationQuery);

// // //     // Navigate with search parameters
// // //     navigate({
// // //       pathname: '/browse',
// // //       search: params.toString()
// // //     });
// // //   };

// // //   return (
// // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
// // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // //           <GridPattern
// // //             className="absolute inset-0 w-full h-full text-blue-200"
// // //             style={{
// // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // //               opacity: 0.4,
// // //             }}
// // //           />

// // //           <div className="container mx-auto px-16 py-16 lg:py-20 relative z-10">
// // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
// // //               <div className="flex items-center justify-center lg:justify-start mb-6">
// // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // //                   No. 1 Job Hunt Website
// // //                 </span>
// // //               </div>

// // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // //                 Search, Apply &
// // //                 <br />
// // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // //               </h1>

// // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // //                 Discover opportunities that match your skills, passion, and
// // //                 career goals. Your next professional milestone is just a search
// // //                 away.
// // //               </p>

// // //               <div className="w-full max-w-2xl">
// // //                 <form onSubmit={handleSearch}>
// // //                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
// // //                     {/* Job Skills Search */}
// // //                     <div className="relative flex-1 group">
// // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // //                         <Briefcase className="w-5 h-5 text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         type="text"
// // //                         value={jobQuery}
// // //                         onChange={(e) => setJobQuery(e.target.value)}
// // //                         placeholder="Job title or skills"
// // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
// // //                       />
// // //                     </div>

// // //                     {/* Location Search */}
// // //                     <div className="relative flex-1 group">
// // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // //                         <MapPin className="w-5 h-5 text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         type="text"
// // //                         value={locationQuery}
// // //                         onChange={(e) => setLocationQuery(e.target.value)}
// // //                         placeholder="Location"
// // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
// // //                       />
// // //                     </div>

// // //                     {/* Search Button */}
// // //                     <Button
// // //                       type="submit"
// // //                       className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
// // //                     >
// // //                       <Search className="w-5 h-5" />
// // //                       Search
// // //                     </Button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="relative h-96 bottom-28">
// // //             <IconCloudDemo />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HeroSection;








// // // import React, { useState, memo } from "react";
// // // import { motion } from "framer-motion";
// // // import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// // // import { Button } from "./ui/button";
// // // import { useNavigate } from "react-router-dom";
// // // import GridPattern from "./ui/grid-pattern";
// // // import IconCloudDemo from "./IconCloudDemo";


// // // // Memoize the IconCloudDemo component
// // // const MemoizedIconCloud = memo(IconCloudDemo);

// // // function HeroSection() {
// // //   const navigate = useNavigate();
// // //   const [jobQuery, setJobQuery] = useState("");
// // //   const [locationQuery, setLocationQuery] = useState("");

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     const trimmedJobQuery = jobQuery.trim();
// // //     const trimmedLocationQuery = locationQuery.trim();

// // //     const params = new URLSearchParams();
// // //     if (trimmedJobQuery) params.append('keyword', trimmedJobQuery);
// // //     if (trimmedLocationQuery) params.append('location', trimmedLocationQuery);

// // //     navigate({
// // //       pathname: '/browse',
// // //       search: params.toString()
// // //     });
// // //   };

// // //   return (
// // //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden ">
// // //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// // //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// // //           <GridPattern
// // //             className="absolute inset-0 w-full h-full text-blue-200"
// // //             style={{
// // //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// // //               opacity: 0.4,
// // //             }}
// // //           />

// // //           <div className="container mx-auto px-16 py-16 lg:py-12 relative z-10">
// // //             <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left ">
// // //               <div className="flex items-center justify-center lg:justify-start mb-6 ">
// // //                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// // //                   <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// // //                   No. 1 Job Hunt Website
// // //                 </span>
// // //               </div>

// // //               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// // //                 Search, Apply &
// // //                 <br />
// // //                 Get Your <span className="text-blue-700">Dream Job</span>
// // //               </h1>

// // //               <p className="text-xl text-gray-600 max-w-2xl mb-8">
// // //                 Discover opportunities that match your skills, passion, and
// // //                 career goals. Your next professional milestone is just a search
// // //                 away.
// // //               </p>

// // //               <div className="w-full max-w-2xl">
// // //                 <form onSubmit={handleSearch}>
// // //                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
// // //                     <div className="relative flex-1 group">
// // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // //                         <Briefcase className="w-5 h-5 text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         type="text"
// // //                         value={jobQuery}
// // //                         onChange={(e) => setJobQuery(e.target.value)}
// // //                         placeholder="Job title or skills"
// // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
// // //                       />
// // //                     </div>

// // //                     <div className="relative flex-1 group">
// // //                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // //                         <MapPin className="w-5 h-5 text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         type="text"
// // //                         value={locationQuery}
// // //                         onChange={(e) => setLocationQuery(e.target.value)}
// // //                         placeholder="Location"
// // //                         className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
// // //                       />
// // //                     </div>

// // //                     <Button
// // //                       type="submit"
// // //                       className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
// // //                     >
// // //                       <Search className="w-5 h-5" />
// // //                       Search
// // //                     </Button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="relative h-96 bottom-28">
// // //             <MemoizedIconCloud />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HeroSection;
// // import React, { useState, memo } from "react";
// // import { motion } from "framer-motion";
// // import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// // import { Button } from "./ui/button";
// // import { useNavigate } from "react-router-dom";
// // import GridPattern from "./ui/grid-pattern";
// // import IconCloudDemo from "./IconCloudDemo";
// // const MemoizedIconCloud = memo(IconCloudDemo);

// // // Memoize the Hero Section content for performance optimization
// // const MemoizedHeroText = memo(() => {
// //   return (
// //     <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left ">
// //       <div className="flex items-center justify-center lg:justify-start mb-6 ">
// //         <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
// //           <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
// //           No. 1 Job Hunt Website
// //         </span>
// //       </div>

// //       <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
// //         Search, Apply &
// //         <br />
// //         Get Your <span className="text-blue-700">Dream Job</span>
// //       </h1>

// //       <p className="text-xl text-gray-600 max-w-2xl mb-8">
// //         Discover opportunities that match your skills, passion, and career goals. Your next professional milestone is just a search away.
// //       </p>
// //     </div>
// //   );
// // });

// // function HeroSection() {
// //   const navigate = useNavigate();
// //   const [jobQuery, setJobQuery] = useState("");
// //   const [locationQuery, setLocationQuery] = useState("");

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     const trimmedJobQuery = jobQuery.trim();
// //     const trimmedLocationQuery = locationQuery.trim();

// //     const params = new URLSearchParams();
// //     if (trimmedJobQuery) params.append('keyword', trimmedJobQuery);
// //     if (trimmedLocationQuery) params.append('location', trimmedLocationQuery);

// //     navigate({
// //       pathname: '/browse',
// //       search: params.toString()
// //     });
// //   };

// //   return (
// //     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
// //       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
// //           <GridPattern
// //             className="absolute inset-0 w-full h-full text-blue-200"
// //             style={{
// //               maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// //               WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
// //               opacity: 0.4,
// //             }}
// //           />

// //           <div className="container mx-auto px-16 py-16 lg:py-12 relative z-10">
// //             {/* Memoized Hero Text Component */}
// //             <MemoizedHeroText />

// //             <div className="w-full max-w-2xl">
// //               <form onSubmit={handleSearch}>
// //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
// //                   <div className="relative flex-1 group">
// //                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
// //                       <Briefcase className="w-5 h-5 text-gray-400" />
// //                     </div>
// //                     <input
// //                       type="text"
// //                       value={jobQuery}
// //                       onChange={(e) => setJobQuery(e.target.value)}
// //                       placeholder="Job title or skills"
// //                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
// //                     />
// //                   </div>

// //                   <div className="relative flex-1 group">
// //                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
// //                       <MapPin className="w-5 h-5 text-gray-400" />
// //                     </div>
// //                     <input
// //                       type="text"
// //                       value={locationQuery}
// //                       onChange={(e) => setLocationQuery(e.target.value)}
// //                       placeholder="Location"
// //                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
// //                     />
// //                   </div>

// //                   <Button
// //                     type="submit"
// //                     className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
// //                   >
// //                     <Search className="w-5 h-5" />
// //                     Search
// //                   </Button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>

// //           <div className="relative h-96 bottom-28">
// //             <MemoizedIconCloud />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HeroSection;
// import React, { useState, memo, Suspense, lazy } from "react";
// import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
// import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";
// import GridPattern from "./ui/grid-pattern";

// // Lazy load the IconCloudDemo component if it's large
// const MemoizedIconCloud = lazy(() => import("./IconCloudDemo"));

// // Memoize static Hero text content
// const MemoizedHeroText = memo(() => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
//       <div className="flex items-center justify-center lg:justify-start mb-6">
//         <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
//           <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
//           No. 1 Job Hunt Website
//         </span>
//       </div>

//       <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
//         Search, Apply & Get Your <span className="text-blue-700">Dream Job</span>
//       </h1>

//       <p className="text-xl text-gray-600 max-w-2xl mb-8">
//         Discover opportunities that match your skills, passion, and career goals.
//         Your next professional milestone is just a search away.
//       </p>
//     </div>
//   );
// });

// function HeroSection() {
//   const navigate = useNavigate();
//   const [jobQuery, setJobQuery] = useState("");
//   const [locationQuery, setLocationQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const trimmedJobQuery = jobQuery.trim();
//     const trimmedLocationQuery = locationQuery.trim();

//     const params = new URLSearchParams();
//     if (trimmedJobQuery) params.append("keyword", trimmedJobQuery);
//     if (trimmedLocationQuery) params.append("location", trimmedLocationQuery);

//     navigate({
//       pathname: "/browse",
//       search: params.toString(),
//     });
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
//       <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
//           <GridPattern
//             className="absolute inset-0 w-full h-full text-blue-200"
//             style={{
//               maskImage:
//                 "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
//               WebkitMaskImage:
//                 "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
//               opacity: 0.4,
//             }}
//           />

//           <div className="container mx-auto px-16 py-16 lg:py-12 relative z-10">
//             {/* Memoized Hero Text */}
//             <MemoizedHeroText />

//             <div className="w-full max-w-2xl">
//               <form onSubmit={handleSearch}>
//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
//                   <div className="relative flex-1 group">
//                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
//                       <Briefcase className="w-5 h-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value={jobQuery}
//                       onChange={(e) => setJobQuery(e.target.value)}
//                       placeholder="Job title or skills"
//                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//                     />
//                   </div>

//                   <div className="relative flex-1 group">
//                     <div className="absolute left-4 top-1/2 -translate-y-1/2">
//                       <MapPin className="w-5 h-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value={locationQuery}
//                       onChange={(e) => setLocationQuery(e.target.value)}
//                       placeholder="Location"
//                       className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
//                   >
//                     <Search className="w-5 h-5" />
//                     Search
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div className="relative h-96 bottom-28">
//             {/* Lazy load IconCloud */}
//             <Suspense fallback={<div>Loading...</div>}>
//               <MemoizedIconCloud />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
import React, { useState, memo, Suspense, lazy } from "react";
import { Briefcase, CheckCircle, Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import GridPattern from "./ui/grid-pattern";

// Lazy load the IconCloudDemo component if it's large
const MemoizedIconCloud = lazy(() => import("./IconCloudDemo"));

// Memoize static Hero text content
const MemoizedHeroText = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
      <div className="flex items-center justify-center lg:justify-start mb-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm transform transition hover:scale-105 hover:shadow-md">
          <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
          No. 1 Job Hunt Website
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
        Search, Apply & Get Your <span className="text-blue-700">Dream Job</span>
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Discover opportunities that match your skills, passion, and career goals.
        Your next professional milestone is just a search away.
      </p>
    </div>
  );
});

// Memoize GridPattern
const MemoizedGridPattern = memo(GridPattern);

function HeroSection() {
  const navigate = useNavigate();
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedJobQuery = jobQuery.trim();
    const trimmedLocationQuery = locationQuery.trim();

    const params = new URLSearchParams();
    if (trimmedJobQuery) params.append("keyword", trimmedJobQuery);
    if (trimmedLocationQuery) params.append("location", trimmedLocationQuery);

    navigate({
      pathname: "/browse",
      search: params.toString(),
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
          <MemoizedGridPattern
            className="absolute inset-0 w-full h-full text-blue-200"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
              opacity: 0.4,
            }}
          />

          <div className="container mx-auto px-16 py-16 lg:py-12 relative z-10">
            {/* Memoized Hero Text */}
            <MemoizedHeroText />

            <div className="w-full max-w-2xl">
              <form onSubmit={handleSearch}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <div className="relative flex-1 group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={jobQuery}
                      onChange={(e) => setJobQuery(e.target.value)}
                      placeholder="Job title or skills"
                      className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-l-full sm:border-r-0 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>

                  <div className="relative flex-1 group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                      placeholder="Location"
                      className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 sm:rounded-none rounded-r-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full sm:rounded-l-none px-8 py-4 h-auto transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative h-96 bottom-28">
            {/* Lazy load IconCloud */}
            <Suspense fallback={<div>Loading...</div>}>
              <MemoizedIconCloud />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
