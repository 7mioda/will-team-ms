import express from 'express';
import { register, logIn, getRefreshToken } from '../controllers/users';

const router = express.Router();

router.post('/register', register);
router.post('/login', logIn);
router.post('/refresh', getRefreshToken);

export default router;
