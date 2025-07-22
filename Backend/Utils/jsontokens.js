import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// eslint-disable-next-line no-undef
const JWT_KEY = process.env.JWT_KEY;

export default JWT_KEY // Export for other files to use