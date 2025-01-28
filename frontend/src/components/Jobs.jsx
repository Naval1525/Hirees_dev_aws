// // import { useSelector } from "react-redux";
// // import FilterCard from "./FilterCard";
// // import Job from "./Job";
// // import Navbar from "./shared/Navbar";
// // import useGetAllJobs from "@/hooks/useGetAllJobs";

// // function Jobs() {
// //     const { error } = useGetAllJobs();
// //     const { filteredJobs, searchQuery } = useSelector((state) => state.job);

// //     return (
// //         <div>
// //             <Navbar />
// //             <div className="max-w-7xl mx-auto mt-5">
// //                 <div className="flex gap-5">
// //                     <div className="w-1/5">
// //                         <FilterCard />
// //                     </div>
// //                     <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
// //                         {error ? (
// //                             <div className="flex items-center justify-center h-full">
// //                                 <span className="text-red-500">Error: {error.message}</span>
// //                             </div>
// //                         ) : filteredJobs.length === 0 ? (
// //                             <div className="flex items-center justify-center h-full">
// //                                 <span className="text-gray-500 text-lg">
// //                                     {searchQuery ? "No jobs match your search criteria" : "No jobs found"}
// //                                 </span>
// //                             </div>
// //                         ) : (
// //                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                                 {filteredJobs.map((job) => (
// //                                     <div key={job._id}>
// //                                         <Job job={job} />
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Jobs;





// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { JOB_API_END_POINT } from "@/utils/constant";
// // import FilterCard from "./FilterCard";
// // import Job from "./Job";
// // import Navbar from "./shared/Navbar";
// // import { Search } from "lucide-react";

// // class ErrorBoundary extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { hasError: false, error: null };
// //     }

// //     static getDerivedStateFromError(error) {
// //         return { hasError: true, error };
// //     }

// //     render() {
// //         if (this.state.hasError) {
// //             return (
// //                 <div className="flex items-center justify-center min-h-screen bg-gray-50">
// //                     <div className="text-center p-8 bg-white rounded-lg shadow-lg">
// //                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
// //                         <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
// //                         <button
// //                             onClick={() => window.location.reload()}
// //                             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
// //                         >
// //                             Refresh Page
// //                         </button>
// //                     </div>
// //                 </div>
// //             );
// //         }
// //         return this.props.children;
// //     }
// // }

// // function Jobs() {
// //   const [jobs, setJobs] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [locationQuery, setLocationQuery] = useState("");
// //   const [activeFilters, setActiveFilters] = useState({
// //       timeRange: "",
// //       jobType: "",
// //       salary: ""
// //   });
// //     useEffect(() => {
// //         fetchJobs();
// //     },  [searchQuery, locationQuery, activeFilters]);

// //     const fetchJobs = async () => {
// //       try {
// //           setIsLoading(true);
// //           // Build query parameters
// //           const params = new URLSearchParams({
// //               keyword: searchQuery,
// //               location: locationQuery,
// //               timeRange: activeFilters.timeRange,
// //               jobType: activeFilters.jobType,
// //               salary: activeFilters.salary
// //           });

// //           const res = await axios.get(`${JOB_API_END_POINT}/get?${params}`, {
// //               withCredentials: true
// //           });

// //           const jobsData = Array.isArray(res.data) ? res.data : res.data.jobs || [];
// //           setJobs(jobsData);
// //       } catch (err) {
// //           setError(err.message);
// //       } finally {
// //           setIsLoading(false);
// //       }
// //   };


// //     const filterJobs = (filters) => {
// //         setActiveFilters(filters);
// //         let filtered = [...jobs];

// //         if (searchQuery) {
// //             filtered = filtered.filter(job =>
// //                 job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                 job.description?.toLowerCase().includes(searchQuery.toLowerCase())
// //             );
// //         }

// //         if (locationQuery) {
// //             filtered = filtered.filter(job =>
// //                 job.location?.toLowerCase().includes(locationQuery.toLowerCase())
// //             );
// //         }

// //         if (filters.timeRange) {
// //             const now = new Date();
// //             filtered = filtered.filter(job => {
// //                 const jobDate = new Date(job.createdAt);
// //                 const daysDiff = (now - jobDate) / (1000 * 60 * 60 * 24);
// //                 switch (filters.timeRange) {
// //                     case "today": return daysDiff < 1;
// //                     case "yesterday": return daysDiff >= 1 && daysDiff < 2;
// //                     case "last3days": return daysDiff < 3;
// //                     case "last7days": return daysDiff < 7;
// //                     default: return true;
// //                 }
// //             });
// //         }

// //         if (filters.jobType) {
// //             filtered = filtered.filter(job => job.jobType === filters.jobType);
// //         }

// //         if (filters.salary) {
// //             const [min, max] = filters.salary.split("-").map(Number);
// //             filtered = filtered.filter(job => {
// //                 const salary = parseInt(job.salary);
// //                 if (max) {
// //                     return salary >= min * 1000 && salary <= max * 1000;
// //                 }
// //                 return salary >= min * 1000;
// //             });
// //         }

// //         setFilteredJobs(filtered);
// //     };

// //     const handleSearch = (e) => {
// //         setSearchQuery(e.target.value);
// //         filterJobs(activeFilters);
// //     };

// //     const handleLocationSearch = (e) => {
// //         setLocationQuery(e.target.value);
// //         filterJobs(activeFilters);
// //     };

// //     if (isLoading) {
// //         return (
// //             <div className="flex items-center justify-center min-h-screen">
// //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <ErrorBoundary>
// //             <div className="min-h-screen bg-gray-50">
// //                 <Navbar />
// //                 <div className="max-w-7xl mx-auto px-4 py-8">
// //                     <div className="grid gap-6">
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                             <div className="relative">
// //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Search jobs by title or description"
// //                                     className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                                     value={searchQuery}
// //                                     onChange={handleSearch}
// //                                 />
// //                             </div>
// //                             <div className="relative">
// //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Search by location"
// //                                     className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                                     value={locationQuery}
// //                                     onChange={handleLocationSearch}
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="grid grid-cols-4 gap-6">
// //                             <div className="col-span-1">
// //                                 <FilterCard onFilterChange={filterJobs} />
// //                             </div>
// //                             <div className="col-span-3">
// //                                 {error ? (
// //                                     <div className="bg-red-50 p-4 rounded-lg">
// //                                         <p className="text-red-600">Error: {error}</p>
// //                                     </div>
// //                                 ) : filteredJobs.length === 0 ? (
// //                                     <div className="bg-white p-8 rounded-lg shadow text-center">
// //                                         <p className="text-gray-500 text-lg">
// //                                             No jobs match your search criteria
// //                                         </p>
// //                                     </div>
// //                                 ) : (
// //                                     <div className="space-y-4">
// //                                         {filteredJobs.map((job) => (
// //                                             <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
// //                                                 <Job job={job} />
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </ErrorBoundary>
// //     );
// // }

// // export default Jobs;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { JOB_API_END_POINT } from "@/utils/constant";
// // import FilterCard from "./FilterCard";
// // import Job from "./Job";
// // import Navbar from "./shared/Navbar";
// // import { Search } from "lucide-react";

// // function Jobs() {
// //     const [jobs, setJobs] = useState([]);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [error, setError] = useState(null);
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [locationQuery, setLocationQuery] = useState("");

// //     const fetchJobs = async (filters = {}) => {
// //         setIsLoading(true);
// //         try {
// //             const queryParams = new URLSearchParams();
// //             if (searchQuery) queryParams.append('keyword', searchQuery);
// //             if (locationQuery) queryParams.append('location', locationQuery);
// //             if (filters.timeRange) queryParams.append('timeRange', filters.timeRange);
// //             if (filters.jobType) queryParams.append('jobType', filters.jobType);
// //             if (filters.salary) queryParams.append('salary', filters.salary);

// //             const response = await axios.get(`${JOB_API_END_POINT}/get?${queryParams.toString()}`, {
// //                 withCredentials: true
// //             });

// //             const jobsData = response.data?.jobs || [];
// //             setJobs(jobsData);
// //             setError(null);
// //         } catch (err) {
// //             console.error("Error fetching jobs:", err);
// //             setError(err.message);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     // Initial fetch
// //     useEffect(() => {
// //         fetchJobs();
// //     }, []);

// //     const handleSearchChange = (e) => {
// //         setSearchQuery(e.target.value);
// //     };

// //     const handleLocationChange = (e) => {
// //         setLocationQuery(e.target.value);
// //     };

// //     // Debounced search effect
// //     useEffect(() => {
// //         const timer = setTimeout(() => {
// //             fetchJobs();
// //         }, 500);

// //         return () => clearTimeout(timer);
// //     }, [searchQuery, locationQuery]);

// //     const handleFilterChange = (newFilters) => {
// //         fetchJobs(newFilters);
// //     };

// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             <Navbar />
// //             <div className="max-w-7xl mx-auto px-4 py-8">
// //                 <div className="grid gap-6">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                         <div className="relative">
// //                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                             <input
// //                                 type="text"
// //                                 placeholder="Search jobs by title or description"
// //                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                                 value={searchQuery}
// //                                 onChange={handleSearchChange}
// //                             />
// //                         </div>
// //                         <div className="relative">
// //                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                             <input
// //                                 type="text"
// //                                 placeholder="Search by location"
// //                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                                 value={locationQuery}
// //                                 onChange={handleLocationChange}
// //                             />
// //                         </div>
// //                     </div>

// //                     <div className="grid grid-cols-4 gap-6">
// //                         <div className="col-span-1">
// //                             <FilterCard onFilterChange={handleFilterChange} />
// //                         </div>
// //                         <div className="col-span-3">
// //                             {isLoading ? (
// //                                 <div className="flex justify-center items-center h-48">
// //                                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //                                 </div>
// //                             ) : error ? (
// //                                 <div className="bg-red-50 p-4 rounded-lg">
// //                                     <p className="text-red-600">Error: {error}</p>
// //                                 </div>
// //                             ) : jobs.length === 0 ? (
// //                                 <div className="bg-white p-8 rounded-lg shadow text-center">
// //                                     <p className="text-gray-500 text-lg">
// //                                         No jobs match your search criteria
// //                                     </p>
// //                                 </div>
// //                             ) : (
// //                                 <div className="space-y-4">
// //                                     {jobs.map((job) => (
// //                                         <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
// //                                             <Job job={job} />
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Jobs;

// // // FilterCard.js - Updated to prevent form submission
// // function FilterCard({ onFilterChange }) {
// //     const [filters, setFilters] = useState({
// //         timeRange: "",
// //         jobType: "",
// //         salary: "",
// //     });

// //     const handleChange = (filterKey, value) => {
// //         const updatedFilters = {
// //             ...filters,
// //             [filterKey]: filters[filterKey] === value ? "" : value,
// //         };
// //         setFilters(updatedFilters);
// //         onFilterChange(updatedFilters);
// //     };

// //     const handleClearAll = (e) => {
// //         e.preventDefault(); // Prevent form submission
// //         const clearedFilters = { timeRange: "", jobType: "", salary: "" };
// //         setFilters(clearedFilters);
// //         onFilterChange(clearedFilters);
// //     };

// //     return (
// //         <div className="w-full bg-white shadow-md rounded-lg p-6">
// //             <div className="flex justify-between items-center mb-4">
// //                 <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>
// //                 <button
// //                     type="button" // Explicitly set button type
// //                     onClick={handleClearAll}
// //                     className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
// //                 >
// //                     <XCircle className="w-4 h-4" />
// //                     Clear All
// //                 </button>
// //             </div>
// //             {/* Rest of the FilterCard component remains the same */}
// //         </div>
// //     );
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { JOB_API_END_POINT } from "@/utils/constant";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import Navbar from "./shared/Navbar";
// import { Search } from "lucide-react";

// function Jobs() {
//     const [jobs, setJobs] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [locationQuery, setLocationQuery] = useState("");

//     const fetchJobs = async (filters = {}) => {
//         setIsLoading(true);
//         try {
//             const queryParams = new URLSearchParams();
//             if (searchQuery) queryParams.append('keyword', searchQuery);
//             if (locationQuery) queryParams.append('location', locationQuery);
//             if (filters.timeRange) queryParams.append('timeRange', filters.timeRange);
//             if (filters.jobType) queryParams.append('jobType', filters.jobType);
//             if (filters.salary) queryParams.append('salary', filters.salary);

//             const response = await axios.get(`${JOB_API_END_POINT}/get?${queryParams.toString()}`, {
//                 withCredentials: true
//             });

//             const jobsData = response.data?.jobs || [];
//             setJobs(jobsData);
//             setError(null);
//         } catch (err) {
//             console.error("Error fetching jobs:", err);
//             setError(err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Initial fetch
//     useEffect(() => {
//         fetchJobs();
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleLocationChange = (e) => {
//         setLocationQuery(e.target.value);
//     };

//     // Debounced search effect
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             fetchJobs();
//         }, 500);

//         return () => clearTimeout(timer);
//     }, [searchQuery, locationQuery]);

//     const handleFilterChange = (newFilters) => {
//         fetchJobs(newFilters);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Navbar />
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <div className="grid gap-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search jobs by title or description"
//                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                             />
//                         </div>
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search by location"
//                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={locationQuery}
//                                 onChange={handleLocationChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-4 gap-6">
//                         <div className="col-span-1">
//                             <FilterCard onFilterChange={handleFilterChange} />
//                         </div>
//                         <div className="col-span-3">
//                             {isLoading ? (
//                                 <div className="flex justify-center items-center h-48">
//                                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//                                 </div>
//                             ) : error ? (
//                                 <div className="bg-red-50 p-4 rounded-lg">
//                                     <p className="text-red-600">Error: {error}</p>
//                                 </div>
//                             ) : jobs.length === 0 ? (
//                                 <div className="bg-white p-8 rounded-lg shadow text-center">
//                                     <p className="text-gray-500 text-lg">
//                                         No jobs match your search criteria
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {jobs.map((job) => (
//                                         <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
//                                             <Job job={job} />
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Jobs;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { JOB_API_END_POINT } from "@/utils/constant";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import Navbar from "./shared/Navbar";
// import { Search } from "lucide-react";

// function Jobs() {
//     const [jobs, setJobs] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [locationQuery, setLocationQuery] = useState("");
//     const [filters, setFilters] = useState({});

//     const fetchJobs = async () => {
//         setIsLoading(true);
//         try {
//             const queryParams = new URLSearchParams();
//             if (searchQuery) queryParams.append('keyword', searchQuery);
//             if (locationQuery) queryParams.append('location', locationQuery);
//             if (filters.timeRange) queryParams.append('timeRange', filters.timeRange);
//             if (filters.jobType) queryParams.append('jobType', filters.jobType);
//             if (filters.salary) queryParams.append('salary', filters.salary);

//             const response = await axios.get(`${JOB_API_END_POINT}/get?${queryParams.toString()}`, {
//                 withCredentials: true
//             });

//             const jobsData = response.data?.jobs || [];
//             setJobs(jobsData);
//             setError(null);
//         } catch (err) {
//             console.error("Error fetching jobs:", err);
//             setError(err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Initial fetch
//     useEffect(() => {
//         fetchJobs();
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleLocationChange = (e) => {
//         setLocationQuery(e.target.value);
//     };

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//         fetchJobs();
//     };

//     const handleSearchClick = () => {
//         fetchJobs();
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Navbar />
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <div className="grid gap-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search jobs by title or description"
//                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                             />
//                         </div>
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search by location"
//                                 className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={locationQuery}
//                                 onChange={handleLocationChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="flex justify-end">
//                         <button
//                             onClick={handleSearchClick}
//                             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                             Search Jobs
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-4 gap-6">
//                         <div className="col-span-1">
//                             <FilterCard onFilterChange={handleFilterChange} />
//                         </div>
//                         <div className="col-span-3">
//                             {isLoading ? (
//                                 <div className="flex justify-center items-center h-48">
//                                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//                                 </div>
//                             ) : error ? (
//                                 <div className="bg-red-50 p-4 rounded-lg">
//                                     <p className="text-red-600">Error: {error}</p>
//                                 </div>
//                             ) : jobs.length === 0 ? (
//                                 <div className="bg-white p-8 rounded-lg shadow text-center">
//                                     <p className="text-gray-500 text-lg">
//                                         No jobs match your search criteria
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {jobs.map((job) => (
//                                         <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
//                                             <Job job={job} />
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Jobs;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";
import { Search, MapPin } from "lucide-react";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [filters, setFilters] = useState({});

    const fetchJobs = async () => {
        setIsLoading(true);
        try {
            const queryParams = new URLSearchParams();
            if (searchQuery) queryParams.append('keyword', searchQuery);
            if (locationQuery) queryParams.append('location', locationQuery);
            if (filters.timeRange) queryParams.append('timeRange', filters.timeRange);
            if (filters.jobType) queryParams.append('jobType', filters.jobType);

            const response = await axios.get(`${JOB_API_END_POINT}/get?${queryParams.toString()}`, {
                withCredentials: true
            });

            const jobsData = response.data?.jobs || [];
            setJobs(jobsData);
            setError(null);
        } catch (err) {
            console.error("Error fetching jobs:", err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleLocationChange = (e) => setLocationQuery(e.target.value);
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        fetchJobs();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="space-y-6">
                    {/* Search Section */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex gap-3 items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search jobs by title or description"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div className="relative flex-1">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by location"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={locationQuery}
                                    onChange={handleLocationChange}
                                />
                            </div>
                            <button
                                onClick={fetchJobs}
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap font-medium"
                            >
                                Search Jobs
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-4 gap-6">
                        {/* Filters */}
                        <div className="col-span-1">
                            <FilterCard onFilterChange={handleFilterChange} />
                        </div>

                        {/* Jobs List */}
                        <div className="col-span-3">
                            {isLoading ? (
                                <div className="flex justify-center items-center h-48">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                </div>
                            ) : error ? (
                                <div className="bg-white p-4 rounded-lg border border-red-100">
                                    <p className="text-red-600">Error: {error}</p>
                                </div>
                            ) : jobs.length === 0 ? (
                                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                                    <p className="text-gray-600 text-lg">
                                        No jobs match your search criteria
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {jobs.map((job) => (
                                        <div key={job._id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <Job job={job} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;