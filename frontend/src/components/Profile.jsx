import {
  Contact,
  Mail,
  Pen,
  MapPin,
  Globe,
  Briefcase,
  CalendarDaysIcon,
} from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import store from "../redux/store";
import UseGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import JobsSection from './JobsSection';
import ProfileCompletionTracker from "./ProfileCompletionTracker";

function Profile() {
  UseGetAppliedJobs();
  const { user } = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);

  const renderStudentDetails = () => {
    if (user?.role !== "student") return null;

    return (
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-lg font-semibold text-black mb-4">
          Student Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-700 shrink-0" />
            <span className="text-black">
              Current Location:{" "}
              {user?.profile?.currentLocation || "Not specified"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Globe className="text-blue-700 shrink-0" />
            <span className="text-black">
              Willing to Relocate:{" "}
              {user?.profile?.willingToRelocate ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <CalendarDaysIcon className="text-blue-700 shrink-0" />
            <span className="text-black">
              Visa Status: {user?.profile?.visaStatus || "Not specified"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Briefcase className="text-blue-700 shrink-0" />
            <span className="text-black">
              Job Title: {user?.profile?.jobTitle || "Not specified"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Briefcase className="text-blue-700 shrink-0" />
            <span className="text-black">
              Job Domain: {user?.profile?.jobDomain || "Not specified"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSkills = () => (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h2 className="text-lg font-semibold text-black mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {user?.profile?.skills?.length > 0 ? (
          user?.profile?.skills?.map((item, index) => (
            <Badge
              key={index}
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors rounded-full px-3 py-1"
            >
              {item}
            </Badge>
          ))
        ) : (
          <span className="text-gray-500">No skills added</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Profile Card */}
          <div className="bg-white shadow-lg rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-full">
                <Avatar className="h-28 w-28 border-4 border-white">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile Picture"
                  />
                  <AvatarFallback className="bg-blue-200 text-blue-700 font-bold">
                    {user?.fullname?.charAt(0) || "NB"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-black">
                    {user?.fullname}
                  </h1>
                  <Button
                    onClick={() => setOpen(true)}
                    variant="outline"
                    className="hidden md:flex text-sm"
                  >
                    <Pen className="text-gray-600 hover:text-blue-600 " />
                  </Button>
                </div>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {user?.profile?.bio || "No bio available"}
                </p>
              </div>
            </div>
            {/* Contact Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 border-t pt-6 border-gray-200">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-700 shrink-0" />
                <span className="text-black truncate">{user?.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <Contact className="text-blue-700 shrink-0" />
                <span className="text-black">{user?.phoneNumber}</span>
              </div>
            </div>
            {/* Student Details Section */}
            {renderStudentDetails()}
            {/* Skills Section */}
            {renderSkills()}
            {/* Resume Section */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <Label className="text-md font-bold text-black">Resume</Label>
              {user?.profile?.resume ? (
                <a
                  href={user?.profile?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-700 hover:text-blue-800 hover:underline transition-colors"
                >
                  {user?.profile?.resumeOriginalName || "View Resume"}
                </a>
              ) : (
                <span className="text-gray-500">No resume uploaded</span>
              )}
            </div>
          </div>
          <ProfileCompletionTracker user={user} />


          {/* Applied Jobs Section */}
          <div className="bg-white shadow-md rounded-3xl p-8">
            <h1 className="text-xl font-bold text-black mb-6">Jobs Section</h1>
            {/* <AppliedJobTable /> */}
            <JobsSection />
          </div>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Profile;
