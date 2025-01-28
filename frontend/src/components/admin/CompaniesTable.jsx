// import { useState, useEffect } from "react";
// import useGetAllCompany from "@/hooks/useGetAllCompanies";
// import { useSelector } from "react-redux";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { useNavigate } from "react-router-dom";

// function CompaniesTable() {
//   useGetAllCompany();
//   const navigate = useNavigate();
//   const { allCompanies: companies } = useSelector((store) => store.company);
//   const [filterCompany, setFilterCompany] = useState([]);
//   console.log(companies)

//   // Use useEffect instead of useState for initialization
//   useEffect(() => {
//     setFilterCompany(companies);
//   }, [companies]);

//   const handleFilter = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     const filtered = companies.filter((company) =>
//       company.CompanyName.toLowerCase().includes(searchTerm)
//     );
//     setFilterCompany(filtered);
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search companies..."
//           className="border rounded px-3 py-2 w-full"
//           onChange={handleFilter}
//         />
//       </div>

//       <Table>
//         <TableCaption>A list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterCompany.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center">
//                 No Companies found
//               </TableCell>
//             </TableRow>
//           ) : (
//             filterCompany.map((company) => (
//               <TableRow key={company.companyId}>
//                 <TableCell>
//                   <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
//                     <AvatarImage
//                       src={company.logo}
//                       alt={`${company.CompanyName} logo`}
//                     />
//                   </Avatar>
//                 </TableCell>
//                 <TableCell>{company.CompanyName}</TableCell>
//                 <TableCell>
//                   {company.createdAt?.split("T")[0] || "N/A"}
//                 </TableCell>
//                 <TableCell className="text-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32 flex bg-black text-white rounded-2xl px-8">
//                       <div
//                         onClick={() =>
//                           navigate(`/admin/companies/${company.companyId}`)
//                         }
//                         className="flex items-center gap-2 w-fit cursor-pointer"
//                       >
//                         <Edit2 className="w-4" />
//                         <span>Edit</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// export default CompaniesTable;
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Globe, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useGetAllCompany from "@/hooks/useGetAllCompanies";
import store from "@/redux/store";
import { useSelector } from "react-redux";

const CompanyDashboard = () => {
  useGetAllCompany();
  const navigate = useNavigate();
  const { allCompanies: companies } = useSelector((store) => store.company);
  const company = companies[0]; // Since we're only dealing with one company

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="bg-white shadow-lg">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="h-20 w-20 rounded-lg border bg-white p-1">
                <img
                  src={company.logo}
                  alt="Company Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-700">
                  {company.CompanyName}
                </h1>
                <p className="text-sm text-gray-500">
                  Registered on {formatDate(company.createdAt)}
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate(`/admin/companies/${company.companyId}`)}
              className="bg-blue-700 hover:bg-blue-800"
            >
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Details
            </Button>
          </div>
        </CardHeader>

        <CardContent className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Building2 className="h-5 w-5" />
                  <h2 className="font-semibold">Company Details</h2>
                </div>
                <p className="text-gray-600">
                  {company.description !== "nothing"
                    ? company.description
                    : "No description provided"}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <MapPin className="h-5 w-5" />
                  <h2 className="font-semibold">Location</h2>
                </div>
                <p className="text-gray-600">
                  {company.location !== "nothing"
                    ? company.location
                    : "Location not specified"}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Globe className="h-5 w-5" />
                  <h2 className="font-semibold">Website</h2>
                </div>
                <p className="text-gray-600">
                  {company.website !== "nothing" ? (
                    <a
                      href={
                        company.website.startsWith("http")
                          ? company.website
                          : `https://${company.website}`
                      } // Ensure the URL has the correct protocol
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {company.website}
                    </a>
                  ) : (
                    "Website not provided"
                  )}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <h2 className="font-semibold">Contact</h2>
                </div>
                <p className="text-gray-600">{company.userId}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDashboard;
