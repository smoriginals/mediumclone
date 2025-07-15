// The issue is with the route handler signature. Express route handlers must have (req, res) as parameters.
// The current handler is missing these parameters, so Express cannot handle the request properly.

import express from 'express';
const router = express.Router();

router.post('/new', (req, res) => {
    console.log("New user registration endpoint hit");
    res.status(200).send('User registration endpoint hit');
});

export default router;
