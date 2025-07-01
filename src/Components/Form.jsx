import React from 'react';

export default function Form() {

    return (
        <>
            <div className='flex h-96 w-full flex-col items-center justify-center bg-red-300'>
                <div className='flex h-4/5 w-4/5 flex-col items-center justify-center gap-4 rounded-xl bg-green-300 px-4'>
                    <span className='space-x-2 text-lg font-bold'>USERNAME</span>
                    <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Username' type='text'></input>
                    <span className='space-x-2 text-lg font-bold'>PASSWORD</span>
                    <input className='h-10 w-full rounded-full border-2 border-solid border-cyan-500 px-4' placeholder='Enter Your Password' type='password'></input>
                    <div className='flex h-10 w-full items-center justify-around'>
                        <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit'>Login</button>
                        <button className='h-8 w-fit rounded-sm bg-green-600 px-4 text-lg' type='submit'>SignUp</button>
                    </div>
                </div>
                <div className='my-2 flex h-10 w-4/5 items-center justify-center rounded-full border-2 border-dashed border-black bg-cyan-500 text-lg font-bold'>Fetching...</div>
            </div>
        </>
    )
}