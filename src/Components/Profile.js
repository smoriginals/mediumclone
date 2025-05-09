import React from 'react';
import userp from '../Assets/user.jpg';

import '../App.css';
export default function Profile() {
    return (
        <>
            <div className="card d-flex justify-content-center align-items-center">

                <div className='user-pic d-flex justify-content-center align-items-center my-5'>
                    <img src={userp} className="profile-pic" title='Profile Picture'/>
                </div>
                <button className="btn btn-primary px-5" title='Upload' type="button"><i class="fa-solid fa-cloud-arrow-up"></i></button>
                <div className="card-body">
                    <p className="card-text">This is an example of how profile picture look like on ...whatever.</p>
                </div>
            </div>
        </>
    )
}