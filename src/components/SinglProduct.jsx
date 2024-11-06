import React from 'react';
import { Link } from 'react-router-dom';

const SinglProduct = ({product}) => {
    const{product_image,price,product_name,} = product;
    return (
        <div className='flex flex-col gap-3 px-5 py-10 rounded-xl shadow-2xl'>
            <div className='max-w-100% max-h-56'>
                <img src={product_image}></img>
            </div>
            <h3>{product_name}</h3>
            <p>Price: {price}</p>
            <Link to='/details' className="btn btn-outline btn-primary">Details</Link>
        </div>
        
    );
};

export default SinglProduct;