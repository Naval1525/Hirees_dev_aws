// // // import { useSelector } from "react-redux";
// // // import LatestjobCards from "./LatestjobCards";
// // // import Job from "./Job";

// // // function Latestjob() {
// // //   // Accessing allJobs from the Redux store
// // //   const { allJobs } = useSelector((store) => store.job);

// // //   // Ensure allJobs is an array before slicing
// // //   const jobsToDisplay = Array.isArray(allJobs) ? allJobs.slice(0, 6) : [];



// // //   return (
// // //     <div className="bg-gray-100 p-4">
// // //       <div className="max-w-7xl mx-auto my-3 mb-16">
// // //         <h1 className="text-3xl font-bold">
// // //           <span className="text-blue-700">Latest</span> Job Openings
// // //         </h1>
// // //         <div className="grid grid-cols-3 gap-4 my-11">
// // //           {jobsToDisplay.length > 0 ? (
// // //             jobsToDisplay.map((job) => <Job key={job?.jobId} job={job} />)
// // //           ) : (
// // //             <div className="col-span-3 text-center text-gray-500">
// // //               No Jobs Available
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Latestjob;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { JOB_API_END_POINT } from '@/utils/constant';
// // import LatestJobCards from './LatestJobCards';

// // const useJobsData = (searchQuery = '') => {
// //   const [jobs, setJobs] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     try {
// //       const queryParam = searchQuery ? `?keyword=${searchQuery}` : '';
// //       const res = await axios.get(`${JOB_API_END_POINT}/get${queryParam}`, {
// //         withCredentials: true,
// //       });
// //       setJobs(res.data);
// //     } catch (err) {
// //       console.error("Error fetching jobs:", err);
// //       setError(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [searchQuery]);

// //   return { jobs, error, loading, refetch: fetchJobs };
// // };

// // const LatestJob = () => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const { jobs, error, loading, refetch } = useJobsData(searchQuery);

// //   // Get first 6 jobs
// //   const jobsToDisplay = Array.isArray(jobs) ? jobs.slice(0, 6) : [];

// //   if (error) {
// //     return (
// //       <div className="text-red-500 text-center p-4">
// //         Error loading jobs. Please try again later.
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-gray-100 p-4">
// //       <div className="max-w-7xl mx-auto my-3 mb-16">
// //         <div className="flex justify-between items-center">
// //           <h1 className="text-3xl font-bold">
// //             <span className="text-blue-700">Latest</span> Job Openings
// //           </h1>
// //           <button
// //             onClick={refetch}
// //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           >
// //             Refresh Jobs
// //           </button>
// //         </div>

// //         {loading ? (
// //           <div className="text-center py-8">Loading jobs...</div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-11">
// //             {jobsToDisplay.length > 0 ? (
// //               jobsToDisplay.map((job) => (
// //                 <LatestJobCards key={job?.jobId} job={job} />
// //               ))
// //             ) : (
// //               <div className="col-span-full text-center text-gray-500">
// //                 No Jobs Available
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LatestJob;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import LatestJobCards from './LatestJobCards';
// import Job from './Job';
// import Lc from './Lc';

// const useJobsData = () => {
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchJobs = async () => {
//     setLoading(true);
//     try {

//       const res = await axios.get(`${JOB_API_END_POINT}/getlatest`, {
//         withCredentials: true,
//       });
//       setJobs(res.data.jobs);

//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return { jobs, error, loading, refetch: fetchJobs };
// };

// const LatestJob = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const { jobs, error, loading, refetch } = useJobsData(searchQuery);

//   // Get first 6 jobs
//   const jobsToDisplay = Array.isArray(jobs) ? jobs.slice(0, 6) : [];

//   if (error) {
//     return (
//       <div className="text-red-500 text-center p-4">
//         Error loading jobs. Please try again later.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto my-3 mb-16">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">
//             <span className="text-blue-700">Latest</span> Job Openings
//           </h1>
//           <button
//             onClick={refetch}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Refresh Jobs
//           </button>
//         </div>

//         {loading ? (
//           <div className="text-center py-8">Loading jobs...</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-11">
//             {jobsToDisplay.length > 0 ? (
//               jobsToDisplay.map((job) => (
//                 <Lc key={job?.jobId} job={job} />
//               ))
//             ) : (
//               <div className="col-span-full text-center text-gray-500">
//                 No Jobs Available
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestJob;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import Lc from './Lc';

const useJobsData = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${JOB_API_END_POINT}/getlatest`, {
        withCredentials: true,
      });
      setJobs(res.data.jobs);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, error, loading, refetch: fetchJobs };
};

const LatestJob = () => {
  const { jobs, error, loading, refetch } = useJobsData();
  const jobsToDisplay = Array.isArray(jobs) ? jobs.slice(0, 6) : [];

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto my-3 px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center sm:text-left">
            <span className="text-blue-700">Latest</span> Job Openings
          </h1>
          <button
            onClick={refetch}
            className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Jobs
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading jobs...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobsToDisplay.length > 0 ? (
              jobsToDisplay.map((job) => (
                <Lc key={job?.jobId} job={job} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-8">
                No Jobs Available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestJob;