// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../shared/Navbar";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "../ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { COMPANY_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// import JobPreview from "./JobPreview";
// import { Button } from "../ui/button";
// import { ArrowLeft } from "lucide-react";

// function PostJob() {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     title: "",
//     description: "",
//     requirements: "",
//     location: "",
//     jobType: "",
//     experience: "",
//     salary: "",
//     company: "",
//   });

//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const jobTypes = [
//     "Full-Time",
//     "Part-Time",
//     "Contract to Hire",
//     "Internship",
//     "Freelance",
//     "Contract",
//   ];

//   // Fetch companies when component loads
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${COMPANY_API_END_POINT}/get`, {
//           withCredentials: true,
//         });

//         if (response.data.status && response.data.companies.length > 0) {
//           const fetchedCompanies = response.data.companies;
//           console.log(response.data.companies);
//           setCompanies(fetchedCompanies);
//           setSelectedCompany(fetchedCompanies);
//           console.log(fetchedCompanies[0]);
//           setInput((prev) => ({
//             ...prev,
//             company: fetchedCompanies[0].companyId,
//           }));
//         } else {
//           toast.error("No companies found. Please create a company first.");
//         }
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//         toast.error("Failed to fetch companies. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!input.company) {
//       toast.error("Please create a company first");
//       return;
//     }

//     try {
//       const response = await axios.post(`${JOB_API_END_POINT}/postjob`, input, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });

//       if (response.status) {
//         navigate("/admin/jobs");
//         toast.success("Job posted successfully!");
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   // Create a preview job object that matches the Job component's expected structure
//   const previewJob = {
//     ...input,
//     company: selectedCompany,
//     createdAt: new Date().toISOString(),
//   };

//   return (
//     <div className="">
//       <Navbar />
//       <div className="flex justify-center items-center py-10 px-4">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-xl border border-gray-200 transform transition-transform hover:shadow-2xl hover:scale-101"
//         >
//           <Button
//             onClick={() => navigate("/admin/jobs")}
//             className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 rounded-2xl px-4 py-2"
//           >
//             <ArrowLeft />
//             <span>Back</span>
//           </Button>
//           <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
//             Post Job
//           </h2>

//           {loading ? (
//             <p className="text-center text-blue-500">Loading companies...</p>
//           ) : (
//             <>
//               {companies.length === 0 ? (
//                 <div className="text-center text-red-500">
//                   No companies found. Please create a company first.
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
//                     {/* Existing form fields... */}
//                     <div>
//                       {" "}
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Job Title{" "}
//                       </Label>{" "}
//                       <Input
//                         type="text"
//                         name="title"
//                         value={input.title}
//                         onChange={handleChange}
//                         placeholder="Enter job title"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                       />
//                     </div>
//                     <div>
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Location
//                       </Label>
//                       <Input
//                         type="text"
//                         name="location"
//                         value={input.location}
//                         onChange={handleChange}
//                         placeholder="Enter job location"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                       />
//                     </div>

//                     {/* Description with larger text area */}

//                     <div className="sm:col-span-2">
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Job Description
//                       </Label>
//                       <textarea
//                         name="description"
//                         value={input.description}
//                         onChange={handleChange}
//                         placeholder="Enter detailed job description"
//                         rows="6"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 text-base"
//                       />
//                     </div>

//                     {/* Other fields */}
//                     <div className="sm:col-span-2">
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Requirements
//                       </Label>
//                       <textarea
//                         name="requirements"
//                         value={input.requirements}
//                         onChange={handleChange}
//                         placeholder="Enter requirements (comma-separated)"
//                         rows="3"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 text-base"
//                       />
//                     </div>

//                     {/* <div className="">
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Requirements
//                       </Label>
//                       <Input
//                         type="text"
//                         name="requirements"
//                         value={input.requirements}
//                         onChange={handleChange}
//                         placeholder="Enter requirements (comma-separated)"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                       />
//                     </div> */}
//                     <div>
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Job Type
//                       </Label>
//                       <Select
//                         onValueChange={(value) =>
//                           setInput((prev) => ({ ...prev, jobType: value }))
//                         }
//                       >
//                         <SelectTrigger className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150">
//                           <SelectValue placeholder="Select a Job Type" />
//                         </SelectTrigger>
//                         <SelectContent className="bg-white rounded-lg shadow-md">
//                           {jobTypes.map((type) => (
//                             <SelectItem key={type} value={type}>
//                               {type}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Experience
//                       </Label>
//                       <Input
//                         type="text"
//                         name="experience"
//                         value={input.experience}
//                         onChange={handleChange}
//                         placeholder="Enter required experience"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                       />
//                     </div>
//                     <div>
//                       <Label className="block text-sm font-semibold text-blue-600 mb-2">
//                         Salary
//                       </Label>
//                       <Input
//                         type="text"
//                         name="salary"
//                         value={input.salary}
//                         onChange={handleChange}
//                         placeholder="Enter salary "
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                       />
//                     </div>

//                     {/* ... */}

//                     {/* Preview Dialog */}
//                     <div className="sm:col-span-2 flex justify-center gap-4">
//                       <Dialog>
//                         <DialogTrigger className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
//                           Preview
//                         </DialogTrigger>
//                         <DialogContent className="max-w-4xl">
//                           <DialogHeader>
//                             <DialogTitle>Job Post Preview</DialogTitle>
//                           </DialogHeader>
//                           <div className="mt-4">
//                             <JobPreview job={previewJob} />
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                       <button
//                         type="submit"
//                         className="rounded-2xl w-full max-w-xs bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 shadow-lg hover:bg-gradient-to-l hover:scale-110 transition-all transform"
//                       >
//                         Post Job
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PostJob;
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import JobPreview from "./JobPreview";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

function PostJob() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    company: "",
  });

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contract to Hire",
    "Internship",
    "Freelance",
    "Contract",
  ];

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (response.data.status && response.data.companies.length > 0) {
          const fetchedCompanies = response.data.companies;
          setCompanies(fetchedCompanies);
          setSelectedCompany(fetchedCompanies[0]);
          setInput((prev) => ({
            ...prev,
            company: fetchedCompanies[0].companyId,
          }));
        } else {
          toast.error("No companies found. Please create a company first.");
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("Failed to fetch companies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Preserve exact input formatting without any modifications
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.company) {
      toast.error("Please create a company first");
      return;
    }

    // Create payload with preserved formatting
    const payload = {
      ...input,
      // Ensure description and requirements preserve whitespace and line breaks
      description: input.description,
      requirements: input.requirements,
    };

    try {
      const response = await axios.post(`${JOB_API_END_POINT}/postjob`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status) {
        navigate("/admin/jobs");
        toast.success("Job posted successfully!");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const previewJob = {
    ...input,
    company: selectedCompany,
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-xl border border-gray-200 transform transition-transform hover:shadow-2xl hover:scale-101"
        >
          <Button
            onClick={() => navigate("/admin/jobs")}
            className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 rounded-2xl px-4 py-2"
          >
            <ArrowLeft />
            <span>Back</span>
          </Button>
          <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
            Post Job
          </h2>

          {loading ? (
            <p className="text-center text-blue-500">Loading companies...</p>
          ) : (
            <>
              {companies.length === 0 ? (
                <div className="text-center text-red-500">
                  No companies found. Please create a company first.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                    <div>
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Job Title
                      </Label>
                      <Input
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={handleChange}
                        placeholder="Enter job title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Location
                      </Label>
                      <Input
                        type="text"
                        name="location"
                        value={input.location}
                        onChange={handleChange}
                        placeholder="Enter job location"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Job Description
                      </Label>
                      <textarea
                        name="description"
                        value={input.description}
                        onChange={handleChange}
                        placeholder="Enter detailed job description"
                        rows="6"
                        // Add white-space: pre-wrap to preserve formatting
                        style={{ whiteSpace: "pre-wrap" }}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 text-base"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Requirements
                      </Label>
                      <textarea
                        name="requirements"
                        value={input.requirements}
                        onChange={handleChange}
                        placeholder="Enter requirements"
                        rows="3"
                        // Add white-space: pre-wrap to preserve formatting
                        style={{ whiteSpace: "pre-wrap" }}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 text-base"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Job Type
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setInput((prev) => ({ ...prev, jobType: value }))
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                          <SelectValue placeholder="Select a Job Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded-lg shadow-md">
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Experience
                      </Label>
                      <Input
                        type="text"
                        name="experience"
                        value={input.experience}
                        onChange={handleChange}
                        placeholder="Enter required experience"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-semibold text-blue-600 mb-2">
                        Salary
                      </Label>
                      <Input
                        type="text"
                        name="salary"
                        value={input.salary}
                        onChange={handleChange}
                        placeholder="Enter salary"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                      />
                    </div>

                    <div className="sm:col-span-2 flex justify-center gap-4">
                      <Dialog>
                        <DialogTrigger className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                          Preview
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Job Post Preview</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4">
                            <JobPreview job={previewJob} />
                          </div>
                        </DialogContent>
                      </Dialog>
                      <button
                        type="submit"
                        className="rounded-2xl w-full max-w-xs bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 shadow-lg hover:bg-gradient-to-l hover:scale-110 transition-all transform"
                      >
                        Post Job
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default PostJob;
