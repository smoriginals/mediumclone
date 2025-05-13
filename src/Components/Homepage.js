import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Homepage() {

    const navigate = useNavigate();
    
    return (
        <>
            <div className='home-bg'>
                <div className="card text-center login-dialogue">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <div className="input-group-text">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder='@Username'/>
                        </div>

                        <div className="input-group">
                            <div className="input-group-text">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input type="password" className="form-control" aria-label="Text input with radio button" placeholder='Password'/>
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button className="btn btn-success mt-4" type="button" onClick={()=>navigate('/')}><b>Login</b></button>
                        </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Don't have an account?<Link to='/signup' className='create'>  Create one</Link>
                    </div>
                </div>
            </div>

        </>
    )
}