import React from 'react';

export default function CreateAccount() {
    return (
        <>
            <div className='flex hidden h-96 w-full flex-col items-center justify-center bg-red-300'>
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
                        <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit'>Create Account</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}