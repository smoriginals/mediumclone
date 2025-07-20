import express from 'express';
import user from '../Models/createUser.js';

const router = express.Router();

router.post('/new', async (req, res) => {
    console.log("New user registration endpoint hit");

    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Optional: Check if user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Create new user
        const newUser = await user.create({ name, email, password });

        // Success response
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

export default router;
