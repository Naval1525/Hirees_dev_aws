import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const navigate = useNavigate();
  const { allAdminJobs } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    if (allAdminJobs && Array.isArray(allAdminJobs)) {
      setFilterJobs(allAdminJobs);
    }
  }, [allAdminJobs]);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allAdminJobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm)
    );
    setFilterJobs(filtered);
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return "N/A";
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleFilter}
        />
      </div>

      <Table>
        <TableCaption>A list of your recently posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="font-semibold">Role</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Salary</TableHead>
            <TableHead className="text-right font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500">
                No Jobs found
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job.jobId} className="hover:bg-gray-50">
                <TableCell>{job?.company?.CompanyName || "N/A"}</TableCell>
                <TableCell>{job?.title || "N/A"}</TableCell>
                <TableCell>{job?.jobType?.join(", ") || "N/A"}</TableCell>
                <TableCell>{formatDate(job?.createdAt)}</TableCell>
                <TableCell>{job?.salary || "N/A"}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <div className="space-y-2">
                        <button
                          onClick={() => navigate(`/admin/jobs/edit/${job.jobId}`)}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => navigate(`/admin/jobs/${job.jobId}/applicants`)}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Applicants</span>
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;