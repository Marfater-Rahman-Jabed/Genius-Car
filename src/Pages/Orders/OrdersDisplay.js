import React, { useEffect, useState } from 'react';

const OrdersDisplay = ({ order, handleDelete }) => {

    const { _id, service, serviceName, price, Customer, PhoneNumber, message } = order;
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch(`https://genious-car-server-ten.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])


    return (
        < tr >
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={serviceData.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Customer.toUpperCase()}</div>
                        {/* <div className="text-sm opacity-50">{price}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {price}
                <br />
                <span className="badge badge-ghost badge-sm">{serviceName}</span>
            </td>
            <td>{PhoneNumber}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr >

    );
};

export default OrdersDisplay;