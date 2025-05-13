import React from 'react';

import '../App.css';
import Card from './Card';
export default function Main() {

    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='container'>
                    <Card/>
                    <div className="d-grid gap-2 col-6 mx-auto my-4">
                        <button className="btn btn-primary" type="button"><i className="fa-solid fa-feather-pointed spacing">  CREATE</i></button>
                       
                    </div>
                </div>
                
            </div>

        </>
    )
}