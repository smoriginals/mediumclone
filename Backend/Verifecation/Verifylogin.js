import { body } from 'express-validator';

export default [

    //HardCoded
    //body('name')
    //    .notEmpty().withMessage('Name is required')
    //    .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    //body('email')
    //    .isEmail().withMessage('Invalid email format')
    //    .normalizeEmail(),
    //body('password')
    //    .notEmpty().withMessage('Password is required')
    //    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a Strong Password').isLength({ min: 8 })
];