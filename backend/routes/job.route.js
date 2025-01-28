import express from "express";
import {
  postJob,
  getAllJobs,
  getAdminJobs,
  getJobById,
  updateJob,
  getCompanyJobs,


} from "../controllers/job.controller.js";

import isAuth from "../middleware/isauth.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();
// Create router




router.post("/postJob", isAuth,singleUpload, postJob);
router.get("/get",  getAllJobs);
router.get("/getadminjobs", isAuth, getAdminJobs);
router.get("/get/:id", isAuth, getJobById);
router.put('/:jobId', updateJob);
router.get('/getCompanyJobs/:id', getCompanyJobs);



export default router;

