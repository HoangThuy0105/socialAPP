import express from 'express';
import { authController } from '../controllers/authController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)

// refresh
router.post('/refresh', authController.requestRefreshToken)

// log out 
router.post('/logout', middlewareController.verifyToken, authController.userLogout)

export default router