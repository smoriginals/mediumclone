import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function CreateAccount() {

    const navigate = useNavigate();

    const [account, setAccount] = useState('Pending...');
    function HandleCreateAccount() {
        setAccount('Account Created Successfully');
    }
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

                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Email' type='text'>
                        </input>

                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Username' type='text'>
                        </input>

                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Password' type='password'>
                        </input>
                        <input className='h-10 w-full rounded-lg border-2 border-solid border-cyan-500 px-4' placeholder='ReEnter Your Password' type='password'>
                        </input>


                        <div className='flex h-10 w-full items-center justify-around'>
                            <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg overflow-hidden' type='submit' onClick={HandleCreateAccount}>
                                Create Account
                            </button>
                            {/*Enable this button when account is created*/}
                            <button className=' h-8 w-fit rounded-sm bg-green-600 px-4 text-lg overflow-hidden' type='submit' onClick={HandleLogin}>
                                Back to Login
                            </button>
                            {/*Enable this button when account is created*/}
                        </div>
                    </div>
                    <div className='my-2 flex h-10 w-4/5 items-center justify-center rounded-full border-2 border-dashed border-black bg-cyan-500 text-lg font-bold'>{account}
                    </div>

                </div>
            </motion.div>
        </>
    )
}