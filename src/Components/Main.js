import React from 'react';
import background from '../Assets/hom.gif';
import rog from '../Assets/rog.gif';
import nanami from '../Assets/nan.jpg';
import plusicon from '../Assets/addico.jpg';
export default function Main() {
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='container'>

                    <div className="card mt-5 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><b>Card Title</b></h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        <img src={background} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mt-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><b>Card Title</b></h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        <img src={rog} className="card-img-bottom" alt="..." />
                    </div>
                </div>

                <div className='container col-md-4 mt-5'>
                    <div className="col">
                        <div className="card h-100">
                            <img src={nanami} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>

                            </div>
                            
                        </div>
                        <img src={plusicon} className="card-img-top usico my-5" title='Add Post' />
                    </div>
                </div>


            </div>
        </>
    )
}