import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serv }) => {
    const { _id, image, title, price } = serv;
    return (
        <div className="card card-compact w-50 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Booking Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;