import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
export default function Form() {

    const navigate = useNavigate();
    const [account, setAccount] = useState('Status...');

    const [details, setDetails] = useState({
        email: '',
        password: ''
    });
    function HandleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }
    async function HandleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });

            const data = await response.json();

            if (!response.ok) {
                setAccount(data.error || 'Failed to Login account');
                return;
            }
            setAccount('Login Successfully');
        } catch (error) {
            setAccount('Server error', error);
        }
    }
    function HandleSignUp(e) {
        e.preventDefault();
        navigate('/createaccount');
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
            >
                <div className='flex h-96 w-full flex-col items-center justify-center bg-red-300'>

                    <div className='flex h-4/5 w-4/5 flex-col items-center justify-center gap-4 rounded-xl bg-green-300 px-4'>
                        <span className='space-x-2 text-lg font-bold'>EMAIL</span>

                        <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Email' name='email' value={details.email} onChange={HandleChange} type='text'>
                        </input>

                        <span className='space-x-2 text-lg font-bold'>PASSWORD</span>

                        <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Password' name='password' value={details.password} onChange={HandleChange} type='password'>
                        </input>

                        <div className='flex h-10 w-full items-center justify-around'>
                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit' onClick={HandleLogin}>Login
                            </button>

                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit' onClick={HandleSignUp}>SignUp
                            </button>
                        </div>

                    </div>

                    {/*Message Box*/}
                    <div className='my-2 flex h-10 w-4/5 items-center justify-center rounded-full border-2 border-dashed border-black bg-cyan-500 text-lg font-bold'>{account}
                    </div>
                </div>
            </motion.div>
        </>
    )
}