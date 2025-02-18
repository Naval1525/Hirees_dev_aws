// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   User,
// //   MapPin,
// //   Mail,
// //   Phone,
// //   FileText,
// //   Building2,
// //   Briefcase,
// // } from "lucide-react";
// // import { USER_API_END_POINT } from "@/utils/constant";

// // const CandidatesCards = () => {
// //   const [students, setStudents] = useState([]);
// //   const [filters, setFilters] = useState({
// //     searchQuery: "",
// //     location: "",
// //     visaStatus: "all",
// //     willingToRelocate: "all",
// //     jobTitle: "",
// //     skills: [],
// //   });

// //   const visaOptions = [
// //     { value: "citizen", label: "Citizen" },
// //     { value: "permanent_resident", label: "Permanent Resident" },
// //     { value: "work_visa", label: "Work Visa" },
// //     { value: "student_visa", label: "Student Visa" },
// //     { value: "other", label: "Other" },
// //   ];

// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       try {
// //         const response = await axios.get(`${USER_API_END_POINT}/students`);
// //         if (response.data.success) {
// //           setStudents(response.data.data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching students:", error);
// //       }
// //     };

// //     fetchStudents();
// //   }, []);

// //   const filteredStudents = students.filter((student) => {
// //     const searchMatch =
// //       student.fullname
// //         .toLowerCase()
// //         .includes(filters.searchQuery.toLowerCase()) ||
// //       student.email.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
// //       student.profile?.skills?.some((skill) =>
// //         skill.toLowerCase().includes(filters.searchQuery.toLowerCase())
// //       ) ||
// //       student.profile?.jobTitle
// //         ?.toLowerCase()
// //         .includes(filters.searchQuery.toLowerCase());

// //     const locationMatch =
// //       !filters.location ||
// //       student.profile?.currentLocation
// //         ?.toLowerCase()
// //         .includes(filters.location.toLowerCase());

// //     const visaMatch =
// //       filters.visaStatus === "all" ||
// //       student.profile?.visaStatus === filters.visaStatus;

// //     const relocateMatch =
// //       filters.willingToRelocate === "all" ||
// //       (filters.willingToRelocate === "yes"
// //         ? student.profile?.willingToRelocate
// //         : !student.profile?.willingToRelocate);

// //     const jobTitleMatch =
// //       !filters.jobTitle ||
// //       student.profile?.jobTitle
// //         ?.toLowerCase()
// //         .includes(filters.jobTitle.toLowerCase());

// //     return (
// //       searchMatch &&
// //       locationMatch &&
// //       visaMatch &&
// //       relocateMatch &&
// //       jobTitleMatch
// //     );
// //   });

// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       {/* Filter Panel */}
// //       <div className="w-80 p-6 bg-white border-r">
// //         <div className="sticky top-6 space-y-6">
// //           <h2 className="text-xl font-semibold">Filters</h2>

// //           <div className="space-y-6">
// //             <div className="space-y-2">
// //               <label className="text-sm font-medium">Search</label>
// //               <Input
// //                 placeholder="Search by name, email, skills..."
// //                 value={filters.searchQuery}
// //                 onChange={(e) =>
// //                   setFilters((prev) => ({
// //                     ...prev,
// //                     searchQuery: e.target.value,
// //                   }))
// //                 }
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <label className="text-sm font-medium">Location</label>
// //               <Input
// //                 placeholder="Filter by location"
// //                 value={filters.location}
// //                 onChange={(e) =>
// //                   setFilters((prev) => ({ ...prev, location: e.target.value }))
// //                 }
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <label className="text-sm font-medium">Visa Status</label>
// //               <Select
// //                 value={filters.visaStatus}
// //                 onValueChange={(value) =>
// //                   setFilters((prev) => ({ ...prev, visaStatus: value }))
// //                 }
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="Select visa status" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Visa Types</SelectItem>
// //                   {visaOptions.map((option) => (
// //                     <SelectItem key={option.value} value={option.value}>
// //                       {option.label}
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>
// //             </div>

// //             <div className="space-y-2">
// //               <label className="text-sm font-medium">Willing to Relocate</label>
// //               <Select
// //                 value={filters.willingToRelocate}
// //                 onValueChange={(value) =>
// //                   setFilters((prev) => ({ ...prev, willingToRelocate: value }))
// //                 }
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="Select preference" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Preferences</SelectItem>
// //                   <SelectItem value="yes">Yes</SelectItem>
// //                   <SelectItem value="no">No</SelectItem>
// //                 </SelectContent>
// //               </Select>
// //             </div>

// //             <div className="space-y-2">
// //               <label className="text-sm font-medium">Job Title</label>
// //               <Input
// //                 placeholder="Filter by job title"
// //                 value={filters.jobTitle}
// //                 onChange={(e) =>
// //                   setFilters((prev) => ({ ...prev, jobTitle: e.target.value }))
// //                 }
// //               />
// //             </div>

// //             <Button
// //               variant="outline"
// //               onClick={() =>
// //                 setFilters({
// //                   searchQuery: "",
// //                   location: "",
// //                   visaStatus: "all",
// //                   willingToRelocate: "all",
// //                   jobTitle: "",
// //                   skills: [],
// //                 })
// //               }
// //               className="w-full"
// //             >
// //               Clear Filters
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Candidates List */}
// //       <div className="flex-1 p-6">
// //         <div className="max-w-4xl mx-auto">
// //           <h1 className="text-2xl font-bold mb-6">
// //             Candidates ({filteredStudents.length})
// //           </h1>

// //           <div className="space-y-6">
// //             {filteredStudents.map((student) => (
// //               <Card
// //                 key={student._id}
// //                 className="hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="p-6">
// //                   <div className="flex items-start gap-6">
// //                     {/* Profile Photo */}
// //                     {student.profile?.profilePhoto ? (
// //                       <img
// //                         src={student.profile.profilePhoto}
// //                         alt={student.fullname}
// //                         className="w-24 h-24 rounded-full object-cover"
// //                       />
// //                     ) : (
// //                       <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
// //                         <User className="w-12 h-12 text-gray-400" />
// //                       </div>
// //                     )}

// //                     {/* Main Content */}
// //                     <div className="flex-1 space-y-4">
// //                       {/* Header */}
// //                       <div>
// //                         <h3 className="text-xl font-semibold">
// //                           {student.fullname}
// //                         </h3>
// //                         <p className="text-gray-600">
// //                           {student.profile?.jobTitle || "No title"}
// //                         </p>
// //                       </div>

// //                       {/* Contact Info */}
// //                       <div className="grid grid-cols-2 gap-4">
// //                         <div className="flex items-center gap-2">
// //                           <Mail className="w-4 h-4 text-gray-400" />
// //                           <span className="text-sm">{student.email}</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <Phone className="w-4 h-4 text-gray-400" />
// //                           <span className="text-sm">{student.phoneNumber}</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <MapPin className="w-4 h-4 text-gray-400" />
// //                           <span className="text-sm">
// //                             {student.profile?.currentLocation || "N/A"}
// //                           </span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <Building2 className="w-4 h-4 text-gray-400" />
// //                           <span className="text-sm">
// //                             Visa:{" "}
// //                             {student.profile?.visaStatus?.replace("_", " ") ||
// //                               "N/A"}
// //                           </span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <Briefcase className="w-4 h-4 text-gray-400" />
// //                           <span className="text-sm">
// //                             Relocate:{" "}
// //                             {student.profile?.willingToRelocate ? "Yes" : "No"}
// //                           </span>
// //                         </div>
// //                       </div>

// //                       {/* Bio */}
// //                       {student.profile?.bio && (
// //                         <p className="text-sm text-gray-600">
// //                           {student.profile.bio}
// //                         </p>
// //                       )}

// //                       {/* Skills */}
// //                       {student.profile?.skills?.length > 0 && (
// //                         <div className="flex flex-wrap gap-2">
// //                           {student.profile.skills.map((skill, index) => (
// //                             <Badge key={index} variant="secondary">
// //                               {skill}
// //                             </Badge>
// //                           ))}
// //                         </div>
// //                       )}

// //                       {/* Resume */}
// //                       {student.profile?.resume && (
// //                         <div className="flex items-center gap-2">
// //                           <FileText className="w-4 h-4 text-blue-600" />
// //                           <a
// //                             href={student.profile.resume}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-sm text-blue-600 hover:underline"
// //                           >
// //                             View Resume: {student.profile.resumeOriginalName}
// //                           </a>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CandidatesCards;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   User,
//   MapPin,
//   Mail,
//   Phone,
//   FileText,
//   Building2,
//   Briefcase,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { USER_API_END_POINT } from "@/utils/constant";

// const CandidateCard = ({ student }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <div className="p-6">
//         <div className="flex items-start gap-6">
//           {/* Profile Photo */}
//           {student.profile?.profilePhoto ? (
//             <img
//               src={student.profile.profilePhoto}
//               alt={student.fullname}
//               className="w-24 h-24 rounded-full object-cover"
//             />
//           ) : (
//             <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
//               <User className="w-12 h-12 text-gray-400" />
//             </div>
//           )}

//           {/* Main Content */}
//           <div className="flex-1">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-xl font-semibold">{student.fullname}</h3>
//                 <p className="text-gray-600">
//                   {student.profile?.jobTitle || "No title"}
//                 </p>
//               </div>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 className="gap-2"
//               >
//                 {isExpanded ? (
//                   <>
//                     <ChevronUp className="w-4 h-4" />
//                     Less Info
//                   </>
//                 ) : (
//                   <>
//                     <ChevronDown className="w-4 h-4" />
//                     More Info
//                   </>
//                 )}
//               </Button>
//             </div>

//             {/* Basic Info - Always visible */}
//             <div className="mt-4 grid grid-cols-2 gap-4">
//               <div className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm">{student.email}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm">
//                   {student.profile?.currentLocation || "N/A"}
//                 </span>
//               </div>
//             </div>

//             {/* Expanded Content */}
//             {isExpanded && (
//               <div className="mt-6 space-y-6 border-t pt-6">
//                 {/* Contact Information */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-4 h-4 text-gray-400" />
//                     <span className="text-sm">{student.phoneNumber}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Building2 className="w-4 h-4 text-gray-400" />
//                     <span className="text-sm">
//                       Visa: {student.profile?.visaStatus?.replace("_", " ") || "N/A"}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Briefcase className="w-4 h-4 text-gray-400" />
//                     <span className="text-sm">
//                       Relocate: {student.profile?.willingToRelocate ? "Yes" : "No"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Bio */}
//                 {student.profile?.bio && (
//                   <div className="space-y-2">
//                     <h3 className="font-semibold">About</h3>
//                     <p className="text-sm text-gray-600">{student.profile.bio}</p>
//                   </div>
//                 )}

//                 {/* Skills */}
//                 {student.profile?.skills?.length > 0 && (
//                   <div className="space-y-2">
//                     <h3 className="font-semibold">Skills</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {student.profile.skills.map((skill, index) => (
//                         <Badge key={index} variant="secondary">
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Resume */}
//                 {student.profile?.resume && (
//                   <div className="flex items-center gap-2">
//                     <FileText className="w-4 h-4 text-blue-600" />
//                     <a
//                       href={student.profile.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm text-blue-600 hover:underline"
//                     >
//                       View Resume: {student.profile.resumeOriginalName}
//                     </a>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// const CandidatesCards = () => {
//   const [students, setStudents] = useState([]);
//   const [filters, setFilters] = useState({
//     searchQuery: "",
//     location: "",
//     visaStatus: "all",
//     willingToRelocate: "all",
//     jobTitle: "",
//     skills: [],
//   });

//   const visaOptions = [
//     { value: "citizen", label: "Citizen" },
//     { value: "permanent_resident", label: "Permanent Resident" },
//     { value: "work_visa", label: "Work Visa" },
//     { value: "student_visa", label: "Student Visa" },
//     { value: "other", label: "Other" },
//   ];

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(`${USER_API_END_POINT}/students`);
//         if (response.data.success) {
//           setStudents(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   // Filter logic remains the same
//   const filteredStudents = students.filter((student) => {
//     const searchMatch =
//       student.fullname
//         .toLowerCase()
//         .includes(filters.searchQuery.toLowerCase()) ||
//       student.email.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
//       student.profile?.skills?.some((skill) =>
//         skill.toLowerCase().includes(filters.searchQuery.toLowerCase())
//       ) ||
//       student.profile?.jobTitle
//         ?.toLowerCase()
//         .includes(filters.searchQuery.toLowerCase());

//     const locationMatch =
//       !filters.location ||
//       student.profile?.currentLocation
//         ?.toLowerCase()
//         .includes(filters.location.toLowerCase());

//     const visaMatch =
//       filters.visaStatus === "all" ||
//       student.profile?.visaStatus === filters.visaStatus;

//     const relocateMatch =
//       filters.willingToRelocate === "all" ||
//       (filters.willingToRelocate === "yes"
//         ? student.profile?.willingToRelocate
//         : !student.profile?.willingToRelocate);

//     const jobTitleMatch =
//       !filters.jobTitle ||
//       student.profile?.jobTitle
//         ?.toLowerCase()
//         .includes(filters.jobTitle.toLowerCase());

//     return (
//       searchMatch &&
//       locationMatch &&
//       visaMatch &&
//       relocateMatch &&
//       jobTitleMatch
//     );
//   });

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Filter Panel */}
//       <div className="w-80 p-6 bg-white border-r">
//         <div className="sticky top-6 space-y-6">
//           <h2 className="text-xl font-semibold">Filters</h2>

//           <div className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium">Search</label>
//               <Input
//                 placeholder="Search by name, email, skills..."
//                 value={filters.searchQuery}
//                 onChange={(e) =>
//                   setFilters((prev) => ({
//                     ...prev,
//                     searchQuery: e.target.value,
//                   }))
//                 }
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Location</label>
//               <Input
//                 placeholder="Filter by location"
//                 value={filters.location}
//                 onChange={(e) =>
//                   setFilters((prev) => ({ ...prev, location: e.target.value }))
//                 }
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Visa Status</label>
//               <Select
//                 value={filters.visaStatus}
//                 onValueChange={(value) =>
//                   setFilters((prev) => ({ ...prev, visaStatus: value }))
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select visa status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Visa Types</SelectItem>
//                   {visaOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Willing to Relocate</label>
//               <Select
//                 value={filters.willingToRelocate}
//                 onValueChange={(value) =>
//                   setFilters((prev) => ({ ...prev, willingToRelocate: value }))
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select preference" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Preferences</SelectItem>
//                   <SelectItem value="yes">Yes</SelectItem>
//                   <SelectItem value="no">No</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Job Title</label>
//               <Input
//                 placeholder="Filter by job title"
//                 value={filters.jobTitle}
//                 onChange={(e) =>
//                   setFilters((prev) => ({ ...prev, jobTitle: e.target.value }))
//                 }
//               />
//             </div>

//             <Button
//               variant="outline"
//               onClick={() =>
//                 setFilters({
//                   searchQuery: "",
//                   location: "",
//                   visaStatus: "all",
//                   willingToRelocate: "all",
//                   jobTitle: "",
//                   skills: [],
//                 })
//               }
//               className="w-full"
//             >
//               Clear Filters
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Candidates List */}
//       <div className="flex-1 p-6">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-2xl font-bold mb-6">
//             Candidates ({filteredStudents.length})
//           </h1>

//           <div className="space-y-6">
//             {filteredStudents.map((student) => (
//               <CandidateCard key={student._id} student={student} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CandidatesCards;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  MapPin,
  Mail,
  Phone,
  FileText,
  Building2,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Filter,
  X
} from "lucide-react";
import { USER_API_END_POINT } from "@/utils/constant";
const CandidateCard = ({ student }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          {/* Profile Photo */}
          <div className="flex justify-center sm:block">
            {student.profile?.profilePhoto ? (
              <img
                src={student.profile.profilePhoto}
                alt={student.fullname}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold">{student.fullname}</h3>
                <p className="text-gray-600">
                  {student.profile?.jobTitle || "No title"}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="gap-2"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Less Info
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    More Info
                  </>
                )}
              </Button>
            </div>

            {/* Basic Info - Always visible */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm break-all">{student.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">
                  {student.profile?.currentLocation || "N/A"}
                </span>
              </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="mt-6 space-y-6 border-t pt-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{student.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">
                      Visa: {student.profile?.visaStatus?.replace("_", " ") || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">
                      Relocate: {student.profile?.willingToRelocate ? "Yes" : "No"}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                {student.profile?.bio && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-center sm:text-left">About</h3>
                    <p className="text-sm text-gray-600">{student.profile.bio}</p>
                  </div>
                )}

                {/* Skills */}
                {student.profile?.skills?.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-center sm:text-left">Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {student.profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resume */}
                {student.profile?.resume && (
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <a
                      href={student.profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline break-all"
                    >
                      View Resume: {student.profile.resumeOriginalName}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

// ... CandidateCard component remains the same as your previous version ...

const FilterPanel = ({ filters, setFilters, visaOptions }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Search</label>
        <Input
          placeholder="Search by name, email, skills..."
          value={filters.searchQuery}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              searchQuery: e.target.value,
            }))
          }
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <Input
          placeholder="Filter by location"
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Visa Status</label>
        <Select
          value={filters.visaStatus}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, visaStatus: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select visa status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Visa Types</SelectItem>
            {visaOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Willing to Relocate</label>
        <Select
          value={filters.willingToRelocate}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, willingToRelocate: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Preferences</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Job Title</label>
        <Input
          placeholder="Filter by job title"
          value={filters.jobTitle}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, jobTitle: e.target.value }))
          }
        />
      </div>

      <Button
        variant="outline"
        onClick={() =>
          setFilters({
            searchQuery: "",
            location: "",
            visaStatus: "all",
            willingToRelocate: "all",
            jobTitle: "",
            skills: [],
          })
        }
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  );
};

const CandidatesCards = () => {
  const [students, setStudents] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    searchQuery: "",
    location: "",
    visaStatus: "all",
    willingToRelocate: "all",
    jobTitle: "",
    skills: [],
  });

  const visaOptions = [
    { value: "citizen", label: "Citizen" },
    { value: "permanent_resident", label: "Permanent Resident" },
    { value: "work_visa", label: "Work Visa" },
    { value: "student_visa", label: "Student Visa" },
    { value: "other", label: "Other" },
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${USER_API_END_POINT}/students`);
        if (response.data.success) {
          setStudents(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const searchMatch =
      student.fullname
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      student.profile?.skills?.some((skill) =>
        skill.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) ||
      student.profile?.jobTitle
        ?.toLowerCase()
        .includes(filters.searchQuery.toLowerCase());

    const locationMatch =
      !filters.location ||
      student.profile?.currentLocation
        ?.toLowerCase()
        .includes(filters.location.toLowerCase());

    const visaMatch =
      filters.visaStatus === "all" ||
      student.profile?.visaStatus === filters.visaStatus;

    const relocateMatch =
      filters.willingToRelocate === "all" ||
      (filters.willingToRelocate === "yes"
        ? student.profile?.willingToRelocate
        : !student.profile?.willingToRelocate);

    const jobTitleMatch =
      !filters.jobTitle ||
      student.profile?.jobTitle
        ?.toLowerCase()
        .includes(filters.jobTitle.toLowerCase());

    return (
      searchMatch &&
      locationMatch &&
      visaMatch &&
      relocateMatch &&
      jobTitleMatch
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden sticky top-0 z-20 bg-white border-b p-4">
        <Button
          variant="outline"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full gap-2"
        >
          {showMobileFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      {/* Mobile Filters - Shown as drawer on small screens */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-10 bg-white p-4 mt-16 overflow-y-auto">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            visaOptions={visaOptions}
          />
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar - Hidden on small screens */}
        <div className="hidden lg:block w-80 p-6 bg-white border-r h-screen sticky top-0 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Filters</h2>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            visaOptions={visaOptions}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl lg:text-2xl font-bold mb-6">
              Candidates ({filteredStudents.length})
            </h1>

            <div className="space-y-6">
              {filteredStudents.map((student) => (
                <CandidateCard key={student._id} student={student} />
              ))}
              {filteredStudents.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No candidates found matching your filters
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesCards;