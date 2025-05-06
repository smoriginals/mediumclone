import React from 'react';
import '../App.css';
import background from '../Assets/home.jpg'
export default function Homepage() {
    return (
        <>
            <div className='mybg'>
                <img src={background} alt='bg'/>
            </div>
        </>
    )
}