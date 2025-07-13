import express from 'express';
import { createUser } from '../Controllers/newUserController.js';
const router = express.Router();


router.post('/newuser', createUser);
