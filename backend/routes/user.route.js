import express from 'express';
import { register, login, logout, updateProfile,getStudents, forgotPassword, verifyCode, resetPassword} from '../controllers/user.controller.js';
import isAuth from '../middleware/isauth.js';
import { singleUpload} from '../middleware/multer.js';

const router = express.Router();

router.post('/register',singleUpload, register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/update', isAuth,singleUpload, updateProfile);
router.get("/students", getStudents);
router.post('/forgot-password',forgotPassword);
router.post('/verify-code', verifyCode);
router.post('/reset-password',resetPassword);
export default router;
