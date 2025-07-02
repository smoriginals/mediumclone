import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Form() {

    const [login, setLogin] = useState('Fetching...');
    const navigate = useNavigate();

    function HandleLogin(e) {
        e.preventDefault();
        console.log("Login button clicked:");
        setLogin('Login Successful');
    }
    function HandleSignUp(e) {
        e.preventDefault();
        console.log("Signup button clicked:");
        setLogin('User Created');
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
                        <span className='space-x-2 text-lg font-bold'>USERNAME</span>
                        <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Username' type='text'></input>
                        <span className='space-x-2 text-lg font-bold'>PASSWORD</span>
                        <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Password' type='password'></input>
                        <div className='flex h-10 w-full items-center justify-around'>
                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit' onClick={HandleLogin}>Login</button>

                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit' onClick={HandleSignUp}>SignUp</button>
                        </div>
                    </div>
                    <div className='my-2 flex h-10 w-4/5 items-center justify-center rounded-full border-2 border-dashed border-black bg-cyan-500 text-lg font-bold'>{login}
                    </div>
                </div>
            </motion.div>
        </>
    )
}