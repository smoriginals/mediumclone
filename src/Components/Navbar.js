import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../Components/Profile';

import '../App.css';

export default function Navbar() {

    const navigate = useNavigate();
    const [visibility, setvisibility] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg n-bg">
                <div className="container-fluid">
                    <div className="navbar-brand">SMOS</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ee">Explore</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to='/feed' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feed's
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/s'>Social</Link></li>
                                    <li><Link className="dropdown-item" to='/e'>Entertainment</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to='/w'>World</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">@Username</Link>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-center align-items-center gap-2 flex-nowrap">
                            {/*Handle on click of this btn*/}
                            <button className='btn p-0 border-0 bg-transparent' title='Profile' type='button'>
                                <i className="fa-regular fa-circle-user fs-2 cursor-pointer" onClick={() => setvisibility(!visibility)} />
                            </button>
                            {visibility && <Profile />}
                            <button className="btn btn-primary mx-2" type="button" onClick={() => navigate('/Homepage')}>Log out</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}