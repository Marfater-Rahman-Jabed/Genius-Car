import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrdersDisplay from './OrdersDisplay';

const Orders = () => {
    const { user, Logout } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://genious-car-server-ten.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Genius-token')}`,
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Logout()
                }

                return res.json()
            })
            .then(data => {
                console.log('inside the data', data);
                // setOrders(data)
            })
    }, [user?.email, Logout])
    const handleDelete = (id) => {
        const agreed = window.confirm('Are you sure delete this items');
        if (agreed) {
            fetch(`https://genious-car-server-ten.vercel.app/orders/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('successfully deleted');
                        const remainning = orders.filter(serv => serv._id !== id);
                        // const newserviceData = [...remainning];
                        setOrders(remainning);
                    }
                    // console.log(data)
                })

        }


    }

    return (
        <div>
            <h1 className='text-3xl'>You ordered {orders.length} items</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Delete <br />Items
                            </th>
                            <th>Item Image & Customer Name</th>
                            <th>Price & <br />  items name</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersDisplay
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            ></OrdersDisplay>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Orders;