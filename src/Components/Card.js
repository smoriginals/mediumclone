import React from 'react';
import background from '../Assets/hom.gif';
export default function Card() {
    return (
        <>
            <div className="card mt-5 m-2">
                <div className="card-body">
                    <h5 className="card-title"><b>Card Title</b></h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
                <img src={background} className="card-img-top" title='Thumbnail' />
            </div>
        </>
    )
}