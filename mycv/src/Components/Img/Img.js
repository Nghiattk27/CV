import React, { useEffect, useRef } from 'react';
import './Img.scss';

function Img({ img, radius }) {

    const imgRef = useRef();

    useEffect(() => {
        if (imgRef.current && radius) {
            console.log(radius);
            imgRef.current.style.borderRadius = `${radius}%`;
        }
    }, [])

    return (
        <div className='Img'>
            <img src={img} className='img-fluid' ref={imgRef} />
        </div>
    )
}

export default Img