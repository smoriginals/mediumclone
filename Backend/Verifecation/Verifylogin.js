import { body } from 'express-validator';

export default [

    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a Strong Password').isLength({ min: 8 })
];