import React, { useState } from 'react';
import { Eye, MoreVertical, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SavedJobsView = ({ savedJobs: initialJobs }) => {
  const [savedJobs, setSavedJobs] = useState(initialJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const handleRemoveJob = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.savedJobId !== jobId));
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = savedJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="bg-white shadow-md rounded-3xl p-8">
      <div className="bg-white shadow-sm rounded-lg border">
        <Table>
          <TableCaption>
            {savedJobs.length} saved jobs
          </TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[200px]">Company</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden md:table-cell">Experience</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentJobs.map((job) => (
              <TableRow key={job.savedJobId} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <img
                      src={job.jobDetails.company.logo}
                      alt={`${job.jobDetails.company.CompanyName} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{job.jobDetails.company.CompanyName}</span>
                  </div>
                </TableCell>
                <TableCell>{job.jobDetails.title}</TableCell>
                <TableCell className="hidden md:table-cell">{job.jobDetails.location}</TableCell>
                <TableCell className="hidden md:table-cell">{job.jobDetails.experience} years</TableCell>
                <TableCell>${job.jobDetails.salary}k</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-medium">Job Details</h4>
                          <p className="text-sm text-gray-500">
                            {job.jobDetails.description}
                          </p>
                          <div className="mt-2">
                            <h5 className="text-sm font-medium">Requirements:</h5>
                            <ul className="list-disc pl-4 text-sm text-gray-500">
                              {job.jobDetails.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-sm text-gray-500">
                            Type: {job.jobDetails.jobType.join(", ")}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveJob(job.savedJobId)}
                      className="text-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {currentJobs.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                  No saved jobs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, savedJobs.length)} of {savedJobs.length} jobs
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => prev - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={indexOfLastJob >= savedJobs.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobsView;