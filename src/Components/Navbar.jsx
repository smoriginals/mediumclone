import React from 'react';

export default function Navbar() {


    function HandleC(e) {

        console.log(e+1)
    }

    return (
        <>
            <div className='flex h-16 w-full items-center justify-between bg-black px-4'>
                <div className='flex h-2 w-auto items-center justify-center space-x-1 text-lg font-bold text-white'>SM ORIGINALS</div>
                <div className='opacity-1 mr-4 flex h-4 w-1/4 items-center justify-evenly gap-4 p-4'>
                    <div className='flex h-2 w-2 cursor-pointer items-center justify-center rounded-full px-2'><i className="fa-solid fa-moon text-white"></i></div>                                                          
                    <div className='flex h-2 w-2 cursor-pointer items-center justify-center rounded-full px-2'><i className="fa-solid fa-magnifying-glass text-white"></i></div>                                          
                    <div className='flex h-2 w-2 cursor-pointer items-center justify-center rounded-full px-2'><i className="fa-solid fa-bars text-white" onClick={HandleC }></i></div>
                    
                </div>
            </div>
        </>
    );
}