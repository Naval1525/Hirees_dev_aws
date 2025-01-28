import { MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

function ApplicantsTable({ applicants }) {
  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );
      if (res.data.status) {
        toast.success("Status Updated");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recently applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants?.applications?.map((item) => (
            <TableRow key={item?.id}>
              <TableCell>{item?.applicant?.fullName}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phoneNumber}</TableCell>
              <TableCell>
                <a
                  className="text-blue-500 underline"
                  href={item?.applicant?.profile?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item?.applicant?.profile?.resumeOriginalName}
                </a>
              </TableCell>
              <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 cursor-pointer">
                    {shortlistingStatus.map((status, index) => (
                      <div
                        onClick={() =>
                          statusHandler(status, item.applicationId)
                        } // Use item.applicationId here
                        className="mb-2"
                        key={index}
                      >
                        <span>{status}</span>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicantsTable;
