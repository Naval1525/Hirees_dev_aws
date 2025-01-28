// // // // import React, { useEffect, useState } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { setJobFilters } from "@/redux/jobSlice";

// // // // function FilterCard() {
// // // //     const dispatch = useDispatch();
// // // //     const { jobFilters } = useSelector((store) => store.job);
// // // //     const [selectedValues, setSelectedValues] = useState({
// // // //         Location: jobFilters?.location || "",
// // // //         Industry: jobFilters?.industry || "",
// // // //         Salary: jobFilters?.salary || ""
// // // //     });

// // // //     // Dispatch filters to Redux store whenever they change
// // // //     useEffect(() => {
// // // //         dispatch(setJobFilters({
// // // //             location: selectedValues.Location,
// // // //             industry: selectedValues.Industry,
// // // //             salary: selectedValues.Salary
// // // //         }));
// // // //     }, [selectedValues, dispatch]);

// // // //     const handleChange = (filterType, value) => {
// // // //         // If the same filter is clicked again, deselect it
// // // //         const newValue = selectedValues[filterType] === value ? "" : value;

// // // //         setSelectedValues((prev) => ({
// // // //             ...prev,
// // // //             [filterType]: newValue
// // // //         }));
// // // //     };

// // // //     const filterData = [
// // // //         {
// // // //             filterType: "Location",
// // // //             options: [
// // // //                 { value: "mumbai", label: "Mumbai" },
// // // //                 { value: "bengaluru", label: "Bengaluru" },
// // // //                 { value: "delhi", label: "Delhi" },
// // // //                 { value: "hyderabad", label: "Hyderabad" },
// // // //                 { value: "chennai", label: "Chennai" },
// // // //                 { value: "pune", label: "Pune" },
// // // //                 { value: "kolkata", label: "Kolkata" },
// // // //                 { value: "gurgaon", label: "Gurgaon" },
// // // //                 { value: "noida", label: "Noida" },
// // // //                 { value: "chandigarh", label: "Chandigarh" },
// // // //                 { value: "ahmedabad", label: "Ahmedabad" },
// // // //             ],
// // // //         },
// // // //         {
// // // //             filterType: "Industry",
// // // //             options: [
// // // //                 { value: "software-development", label: "Software Development" },
// // // //                 { value: "information-technology", label: "Information Technology" },
// // // //                 { value: "artificial-intelligence", label: "Artificial Intelligence" },
// // // //                 { value: "machine-learning", label: "Machine Learning" },
// // // //                 { value: "data-science", label: "Data Science" },
// // // //                 { value: "cloud-computing", label: "Cloud Computing" },
// // // //                 { value: "cyber-security", label: "Cyber Security" },
// // // //                 { value: "mobile-development", label: "Mobile Development" },
// // // //                 { value: "devops", label: "DevOps" },
// // // //                 { value: "web-development", label: "Web Development" },
// // // //                 { value: "blockchain", label: "Blockchain" },
// // // //                 { value: "internet-of-things", label: "Internet of Things (IoT)" },
// // // //             ],
// // // //         },
// // // //         {
// // // //             filterType: "Salary",
// // // //             options: [
// // // //                 { value: "under-5l", label: "Under ₹5L" },
// // // //                 { value: "5l-10l", label: "₹5L - ₹10L" },
// // // //                 { value: "10l-15l", label: "₹10L - ₹15L" },
// // // //                 { value: "15l-20l", label: "₹15L - ₹20L" },
// // // //                 { value: "20l-30l", label: "₹20L - ₹30L" },
// // // //                 { value: "30l-40l", label: "₹30L - ₹40L" },
// // // //                 { value: "40l-50l", label: "₹40L - ₹50L" },
// // // //                 { value: "50l+", label: "₹50L+" },
// // // //             ],
// // // //         },
// // // //     ];

// // // //     return (
// // // //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// // // //             <div className="flex justify-between items-center mb-4">
// // // //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// // // //                 {Object.values(selectedValues).some(value => value !== "") && (
// // // //                     <button
// // // //                         onClick={() => setSelectedValues({ Location: "", Industry: "", Salary: "" })}
// // // //                         className="text-sm text-red-500 hover:text-red-700 transition-colors"
// // // //                     >
// // // //                         Clear All
// // // //                     </button>
// // // //                 )}
// // // //             </div>
// // // //             <hr className="border-gray-200 mb-4" />

// // // //             {filterData.map((filterGroup, index) => (
// // // //                 <div key={index} className="mb-6">
// // // //                     <h2 className="font-semibold text-lg text-gray-700 mb-3">
// // // //                         {filterGroup.filterType}
// // // //                     </h2>
// // // //                     <div className="space-y-2">
// // // //                         {filterGroup.options.map((option, idx) => (
// // // //                             <div
// // // //                                 key={idx}
// // // //                                 className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
// // // //                                     selectedValues[filterGroup.filterType] === option.value
// // // //                                         ? "bg-blue-50"
// // // //                                         : "hover:bg-gray-50"
// // // //                                 }`}
// // // //                             >
// // // //                                 <input
// // // //                                     type="radio"
// // // //                                     id={`${filterGroup.filterType}-${option.value}`}
// // // //                                     name={filterGroup.filterType}
// // // //                                     value={option.value}
// // // //                                     checked={selectedValues[filterGroup.filterType] === option.value}
// // // //                                     onChange={() => handleChange(filterGroup.filterType, option.value)}
// // // //                                     className="form-radio text-blue-600 focus:ring-blue-500"
// // // //                                 />
// // // //                                 <label
// // // //                                     htmlFor={`${filterGroup.filterType}-${option.value}`}
// // // //                                     className="cursor-pointer text-gray-700 w-full"
// // // //                                 >
// // // //                                     {option.label}
// // // //                                 </label>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //             ))}
// // // //         </div>
// // // //     );
// // // // }

// // // // export default FilterCard;
// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { setJobFilters } from "@/redux/jobSlice";
// // // import { CalendarDays, Clock, DollarSign } from "lucide-react";

// // // function FilterCard() {
// // //     const dispatch = useDispatch();
// // //     const { jobFilters } = useSelector((store) => store.job);
// // //     const [selectedValues, setSelectedValues] = useState({
// // //         timeRange: jobFilters?.timeRange || "",
// // //         jobType: jobFilters?.jobType || "",
// // //         salary: jobFilters?.salary || ""
// // //     });

// // //     useEffect(() => {
// // //         dispatch(setJobFilters({
// // //             timeRange: selectedValues.timeRange,
// // //             jobType: selectedValues.jobType,
// // //             salary: selectedValues.salary
// // //         }));
// // //     }, [selectedValues, dispatch]);

// // //     const handleChange = (filterType, value) => {
// // //         const newValue = selectedValues[filterType] === value ? "" : value;
// // //         setSelectedValues((prev) => ({
// // //             ...prev,
// // //             [filterType]: newValue
// // //         }));
// // //     };

// // //     const filterData = [
// // //         {
// // //             filterType: "timeRange",
// // //             title: "Time Period",
// // //             icon: <CalendarDays className="w-5 h-5 text-gray-600" />,
// // //             options: [
// // //                 { value: "today", label: "Today" },
// // //                 { value: "yesterday", label: "Yesterday" },
// // //                 { value: "last3days", label: "Last 3 Days" },
// // //                 { value: "last7days", label: "Last 7 Days" },
// // //             ],
// // //         },
// // //         {
// // //             filterType: "jobType",
// // //             title: "Job Type",
// // //             icon: <Clock className="w-5 h-5 text-gray-600" />,
// // //             options: [
// // //                 { value: "Full-Time", label: "Full Time" },
// // //                 { value: "Part-Time", label: "Part Time" },
// // //                 { value: "Internship", label: "Internship" },
// // //                 { value: "Freelance", label: "Freelance" },
// // //                 { value: "Contract", label: "Contract" },
// // //             ],
// // //         },
// // //         {
// // //             filterType: "salary",
// // //             title: "Salary Range",
// // //             icon: <DollarSign className="w-5 h-5 text-gray-600" />,
// // //             options: [
// // //                 { value: "0-5", label: "Under 5K" },
// // //                 { value: "5-10", label: "5K - 10K" },
// // //                 { value: "10-15", label: "10K - 15K" },
// // //                 { value: "15-20", label: "15K - 20K" },
// // //                 { value: "20-25", label: "20K - 25K" },
// // //                 { value: "25-30", label: "25K - 30K" },
// // //                 { value: "30+", label: "30K+" },
// // //             ],
// // //         },
// // //     ];

// // //     return (
// // //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// // //             <div className="flex justify-between items-center mb-4">
// // //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// // //                 {Object.values(selectedValues).some(value => value !== "") && (
// // //                     <button
// // //                         onClick={() => setSelectedValues({
// // //                             timeRange: "",
// // //                             jobType: "",
// // //                             salary: ""
// // //                         })}
// // //                         className="text-sm text-red-500 hover:text-red-700 transition-colors"
// // //                     >
// // //                         Clear All
// // //                     </button>
// // //                 )}
// // //             </div>
// // //             <hr className="border-gray-200 mb-4" />

// // //             {filterData.map((filterGroup, index) => (
// // //                 <div key={index} className="mb-6">
// // //                     <h2 className="font-semibold text-lg text-gray-700 mb-3 flex items-center gap-2">
// // //                         {filterGroup.icon}
// // //                         {filterGroup.title}
// // //                     </h2>
// // //                     <div className="space-y-2">
// // //                         {filterGroup.options.map((option, idx) => (
// // //                             <div
// // //                                 key={idx}
// // //                                 className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
// // //                                     selectedValues[filterGroup.filterType] === option.value
// // //                                         ? "bg-blue-50"
// // //                                         : "hover:bg-gray-50"
// // //                                 }`}
// // //                             >
// // //                                 <input
// // //                                     type="radio"
// // //                                     id={`${filterGroup.filterType}-${option.value}`}
// // //                                     name={filterGroup.filterType}
// // //                                     value={option.value}
// // //                                     checked={selectedValues[filterGroup.filterType] === option.value}
// // //                                     onChange={() => handleChange(filterGroup.filterType, option.value)}
// // //                                     className="form-radio text-blue-600 focus:ring-blue-500"
// // //                                 />
// // //                                 <label
// // //                                     htmlFor={`${filterGroup.filterType}-${option.value}`}
// // //                                     className="cursor-pointer text-gray-700 w-full"
// // //                                 >
// // //                                     {option.label}
// // //                                 </label>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             ))}
// // //         </div>
// // //     );
// // // }

// // // export default FilterCard;
// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";

// // import { CalendarDays, Clock, DollarSign, XCircle } from "lucide-react";
// // import { clearFilters, setJobFilters } from "@/redux/jobSlice";

// // function FilterCard() {
// //     const dispatch = useDispatch();
// //     const { filters = {} } = useSelector(store => store.job) || {};

// //     const handleChange = (filterType, value) => {
// //         // If the same value is selected, clear it
// //         const newValue = filters[filterType] === value ? "" : value;
// //         dispatch(setJobFilters({ filterType, value: newValue }));
// //     };

// //     const handleClearAll = () => {
// //         dispatch(clearFilters());
// //     };

// //     const filterData = [
// //         {
// //             filterType: "timeRange",
// //             title: "Posted Time",
// //             icon: <CalendarDays className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "today", label: "Today" },
// //                 { value: "yesterday", label: "Yesterday" },
// //                 { value: "last3days", label: "Last 3 Days" },
// //                 { value: "last7days", label: "Last 7 Days" },
// //             ],
// //         },
// //         {
// //             filterType: "jobType",
// //             title: "Job Type",
// //             icon: <Clock className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "Full-Time", label: "Full Time" },
// //                 { value: "Part-Time", label: "Part Time" },
// //                 { value: "Internship", label: "Internship" },
// //                 { value: "Freelance", label: "Freelance" },
// //                 { value: "Contract", label: "Contract" },
// //             ],
// //         },
// //         {
// //             filterType: "salary",
// //             title: "Salary Range",
// //             icon: <DollarSign className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "0-5", label: "Under 5K" },
// //                 { value: "5-10", label: "5K - 10K" },
// //                 { value: "10-15", label: "10K - 15K" },
// //                 { value: "15-20", label: "15K - 20K" },
// //                 { value: "20-25", label: "20K - 25K" },
// //                 { value: "25-30", label: "25K - 30K" },
// //                 { value: "30", label: "30K+" },
// //             ],
// //         },
// //     ];

// //     const hasActiveFilters = filters ? Object.values(filters).some(value => value !== "") : false;

// //     return (
// //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// //             <div className="flex justify-between items-center mb-4">
// //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// //                 {hasActiveFilters && (
// //                     <button
// //                         onClick={handleClearAll}
// //                         className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
// //                     >
// //                         <XCircle className="w-4 h-4" />
// //                         Clear All
// //                     </button>
// //                 )}
// //             </div>

// //             <div className="space-y-6">
// //                 {filterData?.map((filterGroup) => (
// //                     <div key={filterGroup?.filterType} className="border-t pt-4 first:border-t-0 first:pt-0">
// //                         <h2 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
// //                             {filterGroup?.icon}
// //                             {filterGroup?.title}
// //                         </h2>
// //                         <div className="space-y-2">
// //                             {filterGroup?.options.map((option) => (
// //                                 <div
// //                                     key={option.value}
// //                                     className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
// //                                         filters[filterGroup?.filterType] === option.value
// //                                             ? "bg-blue-50 text-blue-600"
// //                                             : "hover:bg-gray-50"
// //                                     }`}
// //                                     onClick={() => handleChange(filterGroup?.filterType, option.value)}
// //                                 >
// //                                     <input
// //                                         type="radio"
// //                                         className="form-radio text-blue-600 focus:ring-blue-500"
// //                                         checked={filters[filterGroup.filterType] === option.value}
// //                                         onChange={() => {}} // Handle change through div click
// //                                     />
// //                                     <label className="ml-2 cursor-pointer">
// //                                         {option?.label}
// //                                     </label>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default FilterCard;

// // import React, { useState } from "react";
// // import { CalendarDays, Clock, DollarSign, XCircle } from "lucide-react";

// // function FilterCard({ onFilterChange }) {
// //     const [filters, setFilters] = useState({
// //         timeRange: "",
// //         jobType: "",
// //         salary: ""
// //     });

// //     const handleChange = (filterType, value) => {
// //         const newValue = filters[filterType] === value ? "" : value;
// //         const newFilters = { ...filters, [filterType]: newValue };
// //         setFilters(newFilters);
// //         onFilterChange?.(newFilters);
// //     };

// //     const handleClearAll = () => {
// //         const clearedFilters = {
// //             timeRange: "",
// //             jobType: "",
// //             salary: ""
// //         };
// //         setFilters(clearedFilters);
// //         onFilterChange?.(clearedFilters);
// //     };

// //     const filterData = [
// //         {
// //             filterType: "timeRange",
// //             title: "Posted Time",
// //             icon: <CalendarDays className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "today", label: "Today" },
// //                 { value: "yesterday", label: "Yesterday" },
// //                 { value: "last3days", label: "Last 3 Days" },
// //                 { value: "last7days", label: "Last 7 Days" },
// //             ],
// //         },
// //         {
// //             filterType: "jobType",
// //             title: "Job Type",
// //             icon: <Clock className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "Full-Time", label: "Full Time" },
// //                 { value: "Part-Time", label: "Part Time" },
// //                 { value: "Internship", label: "Internship" },
// //                 { value: "Freelance", label: "Freelance" },
// //                 { value: "Contract", label: "Contract" },
// //             ],
// //         },
// //         {
// //             filterType: "salary",
// //             title: "Salary Range",
// //             icon: <DollarSign className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "0-5", label: "Under 5K" },
// //                 { value: "5-10", label: "5K - 10K" },
// //                 { value: "10-15", label: "10K - 15K" },
// //                 { value: "15-20", label: "15K - 20K" },
// //                 { value: "20-25", label: "20K - 25K" },
// //                 { value: "25-30", label: "25K - 30K" },
// //                 { value: "30", label: "30K+" },
// //             ],
// //         },
// //     ];

// //     const hasActiveFilters = Object.values(filters).some(value => value !== "");

// //     return (
// //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// //             <div className="flex justify-between items-center mb-4">
// //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// //                 {hasActiveFilters && (
// //                     <button
// //                         onClick={handleClearAll}
// //                         className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
// //                     >
// //                         <XCircle className="w-4 h-4" />
// //                         Clear All
// //                     </button>
// //                 )}
// //             </div>

// //             <div className="space-y-6">
// //                 {filterData.map((filterGroup) => (
// //                     <div key={filterGroup.filterType} className="border-t pt-4 first:border-t-0 first:pt-0">
// //                         <h2 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
// //                             {filterGroup.icon}
// //                             {filterGroup.title}
// //                         </h2>
// //                         <div className="space-y-2">
// //                             {filterGroup.options.map((option) => (
// //                                 <div
// //                                     key={option.value}
// //                                     className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
// //                                         filters[filterGroup.filterType] === option.value
// //                                             ? "bg-blue-50 text-blue-600"
// //                                             : "hover:bg-gray-50"
// //                                     }`}
// //                                     onClick={() => handleChange(filterGroup.filterType, option.value)}
// //                                 >
// //                                     <input
// //                                         type="radio"
// //                                         className="form-radio text-blue-600 focus:ring-blue-500"
// //                                         checked={filters[filterGroup.filterType] === option.value}
// //                                         onChange={() => {}}
// //                                     />
// //                                     <label className="ml-2 cursor-pointer">
// //                                         {option.label}
// //                                     </label>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default FilterCard;
// // import React, { useState } from "react";
// // import { CalendarDays, Clock, DollarSign, XCircle } from "lucide-react";

// // function FilterCard({ onFilterChange }) {
// //     const [filters, setFilters] = useState({
// //         timeRange: "",
// //         jobType: "",
// //         salary: "",
// //     });

// //     const handleChange = (filterType, value) => {
// //         const newValue = filters[filterType] === value ? "" : value;
// //         const newFilters = { ...filters, [filterType]: newValue };
// //         setFilters(newFilters);
// //         onFilterChange?.(newFilters); // Notify parent about filter changes
// //     };

// //     const handleClearAll = () => {
// //         const clearedFilters = {
// //             timeRange: "",
// //             jobType: "",
// //             salary: "",
// //         };
// //         setFilters(clearedFilters);
// //         onFilterChange?.(clearedFilters); // Notify parent about cleared filters
// //     };

// //     const filterData = [
// //         {
// //             filterType: "timeRange",
// //             title: "Posted Time",
// //             icon: <CalendarDays className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "today", label: "Today" },
// //                 { value: "yesterday", label: "Yesterday" },
// //                 { value: "last3days", label: "Last 3 Days" },
// //                 { value: "last7days", label: "Last 7 Days" },
// //             ],
// //         },
// //         {
// //             filterType: "jobType",
// //             title: "Job Type",
// //             icon: <Clock className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "Full-Time", label: "Full Time" },
// //                 { value: "Part-Time", label: "Part Time" },
// //                 { value: "Internship", label: "Internship" },
// //                 { value: "Freelance", label: "Freelance" },
// //                 { value: "Contract", label: "Contract" },
// //             ],
// //         },
// //         {
// //             filterType: "salary",
// //             title: "Salary Range",
// //             icon: <DollarSign className="w-5 h-5 text-gray-600" />,
// //             options: [
// //                 { value: "0-5", label: "Under 5K" },
// //                 { value: "5-10", label: "5K - 10K" },
// //                 { value: "10-15", label: "10K - 15K" },
// //                 { value: "15-20", label: "15K - 20K" },
// //                 { value: "20-25", label: "20K - 25K" },
// //                 { value: "25-30", label: "25K - 30K" },
// //                 { value: "30", label: "30K+" },
// //             ],
// //         },
// //     ];

// //     const hasActiveFilters = Object.values(filters).some((value) => value !== "");

// //     return (
// //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// //             <div className="flex justify-between items-center mb-4">
// //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// //                 {hasActiveFilters && (
// //                     <button
// //                         onClick={handleClearAll}
// //                         className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
// //                     >
// //                         <XCircle className="w-4 h-4" />
// //                         Clear All
// //                     </button>
// //                 )}
// //             </div>
// //             <div className="space-y-6">
// //                 {filterData.map((filterGroup) => (
// //                     <div key={filterGroup.filterType} className="border-t pt-4 first:border-t-0 first:pt-0">
// //                         <h2 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
// //                             {filterGroup.icon}
// //                             {filterGroup.title}
// //                         </h2>
// //                         <div className="space-y-2">
// //                             {filterGroup.options.map((option) => (
// //                                 <label
// //                                     key={option.value}
// //                                     className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
// //                                         filters[filterGroup.filterType] === option.value
// //                                             ? "bg-blue-50 text-blue-600"
// //                                             : "hover:bg-gray-50"
// //                                     }`}
// //                                 >
// //                                     <input
// //                                         type="radio"
// //                                         className="form-radio text-blue-600 focus:ring-blue-500 hidden"
// //                                         checked={filters[filterGroup.filterType] === option.value}
// //                                         onChange={() => handleChange(filterGroup.filterType, option.value)}
// //                                     />
// //                                     {option.label}
// //                                 </label>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default FilterCard;

// // import React, { useState } from "react";

// // function FilterCard({ onFilterChange }) {
// //     const [filters, setFilters] = useState({
// //         timeRange: "",
// //         jobType: "",
// //         salary: ""
// //     });

// //     const handleFilterChange = (e) => {
// //         const { name, value } = e.target;
// //         const updatedFilters = { ...filters, [name]: value };
// //         setFilters(updatedFilters);
// //         onFilterChange(updatedFilters);
// //     };

// //     return (
// //         <div className="p-4 bg-white rounded-lg shadow">
// //             <h3 className="text-lg font-semibold mb-4">Filters</h3>
// //             <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-medium text-gray-700">Job Type</label>
// //                 <select
// //                     name="jobType"
// //                     value={filters.jobType}
// //                     onChange={handleFilterChange}
// //                     className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500"
// //                 >
// //                     <option value="">Any</option>
// //                     <option value="full-time">Full Time</option>
// //                     <option value="part-time">Part Time</option>
// //                     <option value="contract">Contract</option>
// //                 </select>
// //             </div>
// //             <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-medium text-gray-700">Salary Range</label>
// //                 <select
// //                     name="salary"
// //                     value={filters.salary}
// //                     onChange={handleFilterChange}
// //                     className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500"
// //                 >
// //                     <option value="">Any</option>
// //                     <option value="20-50">20k - 50k</option>
// //                     <option value="50-100">50k - 100k</option>
// //                     <option value="100-150">100k - 150k</option>
// //                 </select>
// //             </div>
// //             <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-medium text-gray-700">Posted Within</label>
// //                 <select
// //                     name="timeRange"
// //                     value={filters.timeRange}
// //                     onChange={handleFilterChange}
// //                     className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500"
// //                 >
// //                     <option value="">Any</option>
// //                     <option value="today">Today</option>
// //                     <option value="yesterday">Yesterday</option>
// //                     <option value="last3days">Last 3 Days</option>
// //                     <option value="last7days">Last 7 Days</option>
// //                 </select>
// //             </div>
// //         </div>
// //     );
// // }

// // export default FilterCard;
// import React, { useState } from "react";
// import { CalendarDays, Clock, DollarSign, XCircle } from "lucide-react";

// function FilterCard({ onFilterChange }) {
//     const [filters, setFilters] = useState({
//         timeRange: "",
//         jobType: "",
//         salary: "",
//     });

//     // Filter options
//     const filterData = [
//         {
//             name: "Time Range",
//             options: [
//                 { label: "Today", value: "today", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Yesterday", value: "yesterday", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Last 3 Days", value: "last3days", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Last 7 Days", value: "last7days", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//             ],
//             filterKey: "timeRange",
//         },
//         {
//             name: "Job Type",
//             options: [
//                 { label: "Full Time", value: "Full-Time", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Part Time", value: "part-time", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Internship", value: "internship", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Contract", value: "contract", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//             ],
//             filterKey: "jobType",
//         },
//         {
//             name: "Salary Range",
//             options: [
//                 { label: "Below 20k", value: "0-20", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "20k - 40k", value: "20-40", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "40k - 60k", value: "40-60", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "Above 60k", value: "60", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//             ],
//             filterKey: "salary",
//         },
//     ];

//     // Handle filter changes
//     const handleChange = (filterKey, value) => {
//         const updatedFilters = {
//             ...filters,
//             [filterKey]: filters[filterKey] === value ? "" : value,
//         };
//         setFilters(updatedFilters);
//         onFilterChange(updatedFilters);
//     };

//     // Clear all filters

//     const handleClearAll = (e) => {
//         e.preventDefault(); // Prevent form submission
//         const clearedFilters = { timeRange: "", jobType: "", salary: "" };
//         setFilters(clearedFilters);
//         onFilterChange(clearedFilters);
//     };

//     return (
//         <div className="w-full bg-white shadow-md rounded-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
//                 <button
//                 type="button"
//                     onClick={handleClearAll}
//                     className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
//                 >
//                     <XCircle className="w-4 h-4" />
//                     Clear All
//                 </button>
//             </div>

//             <div className="space-y-6">
//                 {filterData.map((filter) => (
//                     <div key={filter.name}>
//                         <h2 className="text-lg font-semibold text-gray-700 mb-2">{filter.name}</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {filter.options.map((option) => (
//                                 <button
//                                     key={option.value}
//                                     onClick={() => handleChange(filter.filterKey, option.value)}
//                                     className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
//                                         filters[filter.filterKey] === option.value
//                                             ? "bg-blue-100 border-blue-500 text-blue-700"
//                                             : "bg-gray-100 border-gray-300 text-gray-700"
//                                     } hover:bg-blue-50 hover:border-blue-400`}
//                                 >
//                                     {option.icon}
//                                     {option.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default FilterCard;
// import React, { useState, useEffect } from "react";
// import { CalendarDays, Clock, DollarSign, XCircle } from "lucide-react";

// const VALID_JOB_TYPES = ["Full-Time", "Part-Time", "Internship", "Freelance", "Contract"];

// function FilterCard({ onFilterChange }) {
//     const [filters, setFilters] = useState({
//         timeRange: "",
//         jobType: "",
//         salary: "",
//     });

//     // Filter options
//     const filterData = [
//         {
//             name: "Time Range",
//             options: [
//                 { label: "Today", value: "today", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Yesterday", value: "yesterday", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Last 3 Days", value: "last3days", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//                 { label: "Last 7 Days", value: "last7days", icon: <Clock className="w-4 h-4 text-blue-600" /> },
//             ],
//             filterKey: "timeRange",
//         },
//         {
//             name: "Job Type",
//             options: [
//                 { label: "Full Time", value: "Full-Time", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Part Time", value: "Part-Time", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Internship", value: "Internship", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Freelance", value: "Freelance", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//                 { label: "Contract", value: "Contract", icon: <CalendarDays className="w-4 h-4 text-green-600" /> },
//             ],
//             filterKey: "jobType",
//         },
//         {
//             name: "Salary Range",
//             options: [
//                 { label: "Below 20k", value: "0-20", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "20k - 40k", value: "20-40", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "40k - 60k", value: "40-60", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//                 { label: "Above 60k", value: "60", icon: <DollarSign className="w-4 h-4 text-yellow-600" /> },
//             ],
//             filterKey: "salary",
//         },
//     ];

//     // Handle filter changes with validation for job type
//     const handleChange = (filterKey, value) => {
//         if (filterKey === "jobType" && !VALID_JOB_TYPES.includes(value)) {
//             console.warn(`Invalid job type selected: ${value}`);
//             return; // Do not update state if invalid value is selected
//         }

//         const updatedFilters = {
//             ...filters,
//             [filterKey]: filters[filterKey] === value ? "" : value,
//         };
//         setFilters(updatedFilters);
//         onFilterChange(updatedFilters);
//     };

//     // Clear all filters
//     const handleClearAll = (e) => {
//         e.preventDefault(); // Prevent form submission
//         const clearedFilters = { timeRange: "", jobType: "", salary: "" };
//         setFilters(clearedFilters);
//         onFilterChange(clearedFilters);
//     };

//     // Check if any filter is applied
//     const isAnyFilterApplied = Object.values(filters).some((value) => value !== "");

//     return (
//         <div className="w-full bg-white shadow-md rounded-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
//                 {isAnyFilterApplied && (
//                     <button
//                         type="button"
//                         onClick={handleClearAll}
//                         className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
//                     >
//                         <XCircle className="w-4 h-4" />
//                         Clear All
//                     </button>
//                 )}
//             </div>

//             <div className="space-y-6">
//                 {filterData.map((filter) => (
//                     <div key={filter.name}>
//                         <h2 className="text-lg font-semibold text-gray-700 mb-2">{filter.name}</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {filter.options.map((option) => (
//                                 <button
//                                     key={option.value}
//                                     onClick={() => handleChange(filter.filterKey, option.value)}
//                                     className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
//                                         filters[filter.filterKey] === option.value
//                                             ? "bg-blue-100 border-blue-500 text-blue-700"
//                                             : "bg-gray-100 border-gray-300 text-gray-700"
//                                     } hover:bg-blue-50 hover:border-blue-400`}
//                                 >
//                                     {option.icon}
//                                     {option.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default FilterCard;
// import React, { useState } from "react";
// import { CalendarDays, Clock, XCircle } from "lucide-react";

// const VALID_JOB_TYPES = [
//   "Full-Time",
//   "Part-Time",
//   "Internship",
//   "Freelance",
//   "Contract",
//   "Contact to Hire",
// ];

// function FilterCard({ onFilterChange }) {
//   const [filters, setFilters] = useState({
//     timeRange: "",
//     jobType: "",
//   });

//   const filterData = [
//     {
//       name: "Time Range",
//       options: [
//         {
//           label: "Today",
//           value: "today",
//           icon: <Clock className="w-4 h-4 text-blue-600" />,
//         },

//         {
//           label: "Last 3 Days",
//           value: "last3days",
//           icon: <Clock className="w-4 h-4 text-blue-600" />,
//         },
//         {
//           label: "Last 7 Days",
//           value: "last7days",
//           icon: <Clock className="w-4 h-4 text-blue-600" />,
//         },
//       ],
//       filterKey: "timeRange",
//     },
//     {
//       name: "Job Type",
//       options: [
//         {
//           label: "Full Time",
//           value: "Full-Time",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },
//         {
//           label: "Contract",
//           value: "Contract",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },
//         {
//           label: "Contract to Hire",
//           value: "Contract",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },

//       ,
//         {
//           label: "Part Time",
//           value: "Part-Time",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },
//         {
//           label: "Internship",
//           value: "Internship",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },
//         {
//           label: "Freelance",
//           value: "Freelance",
//           icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
//         },

//       ],
//       filterKey: "jobType",
//     },
//   ];

//   const handleChange = (filterKey, value) => {
//     if (filterKey === "jobType" && !VALID_JOB_TYPES.includes(value)) {
//       console.warn(`Invalid job type selected: ${value}`);
//       return;
//     }

//     const updatedFilters = {
//       ...filters,
//       [filterKey]: value === filters[filterKey] ? "" : value,
//     };

//     setFilters(updatedFilters);
//     onFilterChange(updatedFilters);
//   };

//   const handleClearAll = (e) => {
//     e.preventDefault();
//     const clearedFilters = { timeRange: "", jobType: "" };
//     setFilters(clearedFilters);
//     onFilterChange(clearedFilters);
//   };

//   const isAnyFilterApplied = Object.values(filters).some(
//     (value) => value !== ""
//   );

//   return (
//     <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
//         <h1 className="text-lg font-semibold text-gray-900">Filters</h1>
//         {isAnyFilterApplied && (
//           <button
//             onClick={handleClearAll}
//             className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
//           >
//             <XCircle className="w-4 h-4" />
//             Clear filters
//           </button>
//         )}
//       </div>

//       <div className="space-y-6">
//         {filterData.map((filter) => (
//           <div key={filter.name}>
//             <h2 className="text-sm font-medium text-gray-700 mb-3">
//               {filter.name}
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {filter.options.map((option) => {
//                 const isSelected = filters[filter.filterKey] === option.value;
//                 return (
//                   <button
//                     key={option.value}
//                     onClick={() => handleChange(filter.filterKey, option.value)}
//                     className={`
//                                             flex items-center gap-2 px-3 py-2 rounded-md text-sm
//                                             transition-all duration-200 border
//                                             ${
//                                               isSelected
//                                                 ? "bg-blue-50 border-blue-200 text-blue-700 font-medium"
//                                                 : "bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50/50"
//                                             }
//                                         `}
//                   >
//                     {option.icon}
//                     {option.label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FilterCard;
import React, { useState } from "react";
import { CalendarDays, Clock, XCircle } from "lucide-react";

const VALID_JOB_TYPES = [
  "Full-Time",
  "Part-Time",
  "Internship",
  "Freelance",
  "Contract",
  "Contact to Hire",
];

function FilterCard({ onFilterChange }) {
  const [filters, setFilters] = useState({
    timeRange: "",
    jobType: "",
  });

  const filterData = [
    {
      name: "Time Range",
      options: [
        {
          label: "Today",
          value: "today",
          icon: <Clock className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Last 3 Days",
          value: "last3days",
          icon: <Clock className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Last 7 Days",
          value: "last7days",
          icon: <Clock className="w-4 h-4 text-blue-600" />,
        },
      ],
      filterKey: "timeRange",
    },
    {
      name: "Job Type",
      options: [
        {
          label: "Full Time",
          value: "Full-Time",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Contract",
          value: "Contract",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Contract to Hire",
          value: "Contract",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Part Time",
          value: "Part-Time",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Internship",
          value: "Internship",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
        {
          label: "Freelance",
          value: "Freelance",
          icon: <CalendarDays className="w-4 h-4 text-blue-600" />,
        },
      ],
      filterKey: "jobType",
    },
  ];

  const handleChange = (filterKey, value) => {
    if (filterKey === "jobType" && !VALID_JOB_TYPES.includes(value)) {
      console.warn(`Invalid job type selected: ${value}`);
      return;
    }

    const updatedFilters = {
      ...filters,
      [filterKey]: value === filters[filterKey] ? "" : value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    const clearedFilters = { timeRange: "", jobType: "" };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const isAnyFilterApplied = Object.values(filters).some(
    (value) => value !== ""
  );

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <h1 className="text-lg font-semibold text-gray-900">Filters</h1>
        {isAnyFilterApplied && (
          <button
            onClick={handleClearAll}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
          >
            <XCircle className="w-4 h-4" />
            Clear filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filterData.map((filter) => (
          <div key={filter.name}>
            <h2 className="text-sm font-medium text-gray-700 mb-3">
              {filter.name}
            </h2>
            <div className="flex flex-col space-y-2">
              {filter.options.map((option) => {
                const isSelected = filters[filter.filterKey] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleChange(filter.filterKey, option.value)}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-md text-sm
                      transition-all duration-200 border w-full justify-start
                      ${
                        isSelected
                          ? "bg-blue-50 border-blue-200 text-blue-700 font-medium"
                          : "bg-white border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50/50"
                      }
                    `}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCard;