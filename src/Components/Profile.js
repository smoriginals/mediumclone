import React from 'react';
import userp from '../Assets/user.jpg';
import '../App.css';
export default function Profile() {
    return (
        <>
            <div className="card d-flex justify-content-center align-items-center popup-box">

                <div className='user-pic d-flex justify-content-center align-items-center my-5'>
                    <img src={userp} className="profile-pic" title='Profile Picture'/>
                </div>
                <button className="btn btn-primary px-5" title='Upload' type="button"><i className="fa-solid fa-cloud-arrow-up"></i></button>
                <div className="card-body">
                    <p>Update Your Profile Picture</p>
                </div>
            </div>
        </>
    )
}