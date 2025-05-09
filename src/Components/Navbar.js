import React from 'react';
import '../App.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg n-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SMOS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feed's
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Social</a></li>
                                    <li><a className="dropdown-item" href="#">Entertainment</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">World</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">@Username</a>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-center align-items-center gap-2 flex-nowrap">
                            {/*Handle on click of this btn*/}
                            <button className='btn p-0 border-0 bg-transparent'>
                                <i className="fa-regular fa-circle-user fs-2 cursor-pointer"/>
                            </button>
                            <button className="btn btn-primary mx-2" type="submit">Log out</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}