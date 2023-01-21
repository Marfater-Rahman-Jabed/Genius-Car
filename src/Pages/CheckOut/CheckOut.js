import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const Name = `${form.FirstName.value} ${form.LastName.value}`;
        const PhoneNumber = form.PhoneNumber.value;
        const message = form.message.value;
        const email = user?.email || 'Unregistered'

        const totalItems = {
            service: _id,
            serviceName: title,
            price,
            email,
            PhoneNumber,
            message,
            Customer: Name,


        }

        fetch('https://genious-car-server-ten.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalItems)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    alert('successfully inserted');
                    form.reset();
                }

            })
            .catch(error => console.error(error))


    };


    return (
        <div>
            <h1 className='text-3xl'>You ordered placed a {title}</h1>
            <h2 className='text-orange-600 font-bold'>Price:${price}</h2>

            <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 my-3">
                    <input name='FirstName' type="text" placeholder="First Name" className="input input-bordered input-secondary w-full " required />
                    <input name='LastName' type="text" placeholder="Last Name" className="input input-bordered input-secondary w-full " required />
                    <input name='PhoneNumber' type="text" placeholder="Phone Number" className="input input-bordered input-secondary w-full " required />
                    <input name='Email' type="text" placeholder="Email"
                        defaultValue={user?.email} readOnly className="input input-bordered input-secondary w-full " />


                </div>
                <textarea name='message' className="textarea textarea-secondary h-24 w-full" placeholder="Write here your Message about our page " required></textarea>
                <input className='btn my-1' type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default CheckOut;