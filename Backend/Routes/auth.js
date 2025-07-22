import express from 'express';
import user from '../Models/createUser.js';
import ExpressValidation from '../Verifecation/Expressvalidation.js';
import VerifyPass from '../Verifecation/Verifylogin.js';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../Utils/jsontokens.js'
import bcrypt from 'bcrypt'

const router = express.Router();

// Route: Register New User
router.post('/new', ExpressValidation, async (req, res) => {
    console.log("New user registration endpoint hit");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const newUser = await user.create({
            name,
            email,
            password: hashed
        });
        await newUser.save();
        const data = { newUser: { id: newUser.id } };
        const jwtToken = jwt.sign(data, JWT_KEY, { expiresIn: '1h' });
        res.status(201).json({ success: true, message: "Authentication Page", jwtToken });
        return res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ error: 'Server error while creating user' });
    }
});

// Route: Login
router.post('/login', VerifyPass, async (req, res) => {
    console.log("Login endpoint hit");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const userFound = await user.findOne({ email });
        if (!userFound) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const data = { userFound: { id: userFound.id } };
        const UserToken = jwt.sign(data, JWT_KEY);
        res.json({ UserToken });

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: userFound._id,
                name: userFound.name,
                email: userFound.email
            },

        });

    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ error: 'Server error during login' });
    }
});

export default router;

