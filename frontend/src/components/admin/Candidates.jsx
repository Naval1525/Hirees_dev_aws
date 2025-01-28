import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CandidatesTable from "./CandidatesTable";

const Candidates = () => {
  const params = useParams();

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <CandidatesTable />
      </div>
    </div>
  );
};

export default Candidates;
