import express from 'express';                                            // Import Express framework
import user from '../Models/createUser.js';                               // Import user model
import ExpressValidation from '../Verifecation/Expressvalidation.js';     // Import registration validation middleware
import VerifyPass from '../Verifecation/Verifylogin.js';                  // Import login validation middleware
import { validationResult } from 'express-validator';                     // Import validation result handler
import bcrypt from 'bcrypt'                                               // Import bcrypt for password hashing

const router = express.Router();

// Route: Register New User
router.post('/new', ExpressValidation, async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation errors exist, return 400 with error details
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { name, email, password } = req.body;

    try {
        // Check if user already exists by email
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            // If user exists, return 409 conflict
            return res.status(409).json({ error: 'User already exists' });
        }
        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        // Create new user in database
        const newUser = await user.create({
            name,
            email,
            password: hashed
        });

        // Return success response with user details
        return res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password // Note: Consider not returning password in production
            }
        });

    } catch (err) {
        // Log error and return server error response
        console.error("Error creating user:", err);
        return res.status(500).json({ error: 'Server error while creating user' });
    }
});

// Route: Login
router.post('/login', VerifyPass, async (req, res) => {
    console.log("Login endpoint hit");

    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation errors exist, return 400 with error details
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Find user by email
        const userFound = await user.findOne({ email });
        if (!userFound) {
            // If user not found, return 404
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            // If password does not match, return 401 unauthorized
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Return success response with user details
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: userFound._id,
                name: userFound.name,
                email: userFound.email,
                password: userFound.password // Note: Consider not returning password in production
            }
        });

    } catch (err) {
        // Log error and return server error response
        console.error("Error during login:", err);
        return res.status(500).json({ error: 'Server error during login' });
    }
});

export default router;
