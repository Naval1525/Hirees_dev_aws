// Create router\
import express from "express";
import isAuth from "../middleware/isauth.js";
import { savedJobsController } from "../controllers/savedJobs.controller.js";
const router = express.Router();

// Define routes
router.post('/save', isAuth, savedJobsController.saveJob);
router.get('/saved', isAuth, savedJobsController.getSavedJobs);
router.delete('/:savedJobId', isAuth, savedJobsController.removeSavedJob);
router.get('/check/:jobId', isAuth, savedJobsController.checkSavedStatus);

export default router;