import React from 'react';
import userp from '../Assets/user.jpg';
import '../App.css';
export default function Profile() {
    return (
        <>
            <div className="card d-flex justify-content-center align-items-center">
                <div className='dp'>
                    <img src={userp} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </>
    )
}