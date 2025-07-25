﻿import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


export default function CreateAccount() {

    const navigate = useNavigate();

    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [account, setAccount] = useState('Pending...');

    function HandleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });

    }

    async function HandleCreateAccount(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });

            const data = await response.json();

            if (!response.ok) {
                setAccount(data.error || 'Failed to create account');
                return;
            }
            setAccount('Account Created Successfully');
        } catch (error) {
            setAccount('Server error', error);
        }
    }
    //Redirect to the login page after account creation
    function HandleLogin() {
        navigate('/');
    }

    return (
        <>


            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.15 }}
            >
                <div className='flex h-96 w-full flex-col items-center justify-center bg-red-300'>
                    <div className='flex h-4/5 w-4/5 flex-col items-center justify-center gap-4 rounded-xl bg-green-300 px-4'>
                        {/*Username Input*/}
                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Username' name='name' value={details.name} onChange={HandleChange} type='text'>
                        </input>
                        {/*User Email Input*/}
                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Email' name='email' value={details.email} onChange={HandleChange} type='text'>
                        </input>
                        {/*User Password Input*/}
                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Password' name='password' value={details.password} onChange={HandleChange} type='password'>
                        </input>

                        <div className='flex h-10 w-full items-center justify-around'>
                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg overflow-hidden' type='submit' onClick={HandleCreateAccount}>
                                Create Account
                            </button>

                            <button className=' h-8 w-fit rounded-sm bg-green-600 px-4 text-lg overflow-hidden' type='submit' onClick={HandleLogin}>
                                Back to Login
                            </button>

                        </div>
                    </div>
                    {/*Message Box Show status wether user login or not*/}
                    <div className='my-2 flex h-10 w-4/5 items-center justify-center rounded-full border-2 border-dashed border-black bg-cyan-500 text-lg font-bold'>{account}
                    </div>

                </div>
            </motion.div>
        </>
    )
}