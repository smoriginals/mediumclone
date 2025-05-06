import React from 'react';
import '../App.css';
import background from '../Assets/home.jpg'
export default function Homepage() {
    return (
        <>
            <div className='sbg'>
                <div className="card text-center">
                    <div className="card-header">
                        Login To SMORIGNALS
                    </div>
                    <div className='asdf'>
                        <div className="input-group flex-nowrap m-2 ">
                            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap m-2 ">
                            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                        2 days ago
                    </div>
                </div>
            </div>

        </>
    )
}