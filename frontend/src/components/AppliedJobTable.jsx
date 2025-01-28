import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  APPLICATION_API_END_POINT
} from "@/utils/constant";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const StatusBadge = ({ children, status }) => {
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <span
      className={`
        px-2.5 py-0.5
        rounded-full
        text-xs
        font-medium
        border
        ${getStatusStyle(status)}
      `}
    >
      {children}
    </span>
  );
};

function AppliedJobTable() {
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/get`,
          { withCredentials: true }
        );

        if (res.data.status) {
          const jobs = res.data.applications.map((application) => ({
            id: application?.id,
            date: new Date(application?.createdAt)?.toLocaleDateString() || "N/A",
            role: application?.job?.title || "Not Specified",
            company: application?.job?.company?.CompanyName || "Unknown",
            status: application?.status || "Pending",
            location: application?.job?.location || "Remote",
            companyLogo: application?.job?.company?.logo || "/default-company-logo.png",
            salary: application?.job?.salary || "Not Disclosed",
            jobType: Array.isArray(application?.job?.jobType) ? application?.job?.jobType : [],
            experience: application?.job?.experience || "Not Mentioned"
          }));


          setAllAppliedJobs(jobs);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching applied jobs:", err);
        setError(err);
        setIsLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = allAppliedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading jobs: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-lg border">
      <Table>
        <TableCaption className="py-2">
          {allAppliedJobs.length} job applications
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[200px]">Job</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="hidden md:table-cell">Date Applied</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <TableRow key={job.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center space-x-6">
                    <img
                      src={job.companyLogo}
                      alt={`${job.company} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{job.role}</div>
                      <div className="text-sm text-gray-500">
                        {job.location} {job.salary ? `• ${job.salary}` : ''}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {job.date}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {job.jobType?.join(", ") || "Not specified"}
                </TableCell>
                <TableCell className="text-right">
                  <StatusBadge status={job.status}>
                    {job.status}
                  </StatusBadge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6" className="text-center py-4">
                No applied jobs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
        <div className="text-sm text-gray-500">
          Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, allAppliedJobs.length)}
          {" "}of {allAppliedJobs.length} applications
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastJob >= allAppliedJobs.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobTable;