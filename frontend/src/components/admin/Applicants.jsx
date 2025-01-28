import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch applicants
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          {
            withCredentials: true,
          }
        );
        console.log(res.data)
        if (res.data.status) {
          setApplicants(res.data);
        }
      } catch (err) {
        console.error("Error fetching applicants:", err);
      }
    };

    fetchAllApplicants();
  }, [params.id]);

  console.log(applicants)

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-x-8">
      <Button
            onClick={() => navigate("/admin/jobs")}
            className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 rounded-2xl px-4 py-2 mt-4"
          >
            <ArrowLeft />
            <span>Back</span>
          </Button>

        <h1 className="font-bold text-xl my-5">


          Applicants {applicants?.applications?.length || 0}
        </h1>
        </div>
        <ApplicantsTable applicants={applicants} />
      </div>
    </div>
  );
}

export default Applicants;
