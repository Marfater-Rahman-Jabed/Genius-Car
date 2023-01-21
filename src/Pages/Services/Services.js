import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([]);
    const [isAsnc, setIsAsync] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsnc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [isAsnc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center my-3'>
                <p className='text-orange-600 font-bold'>Services</p>
                <p className="text-4xl font-bold">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <input type="text" ref={searchRef} placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                <button className='btn btn-secondary ' onClick={handleSearch}>Search</button>
                <button className='btn btn-secondary mx-2' onClick={() => setIsAsync(!isAsnc)}>{isAsnc ? 'Desincronous' : 'Ascincronous'}</button>
            </div>
            <div className='grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* <h1>total{service.length}</h1> */}
                {
                    service.map(serv => <ServiceCard
                        key={serv._id}
                        serv={serv}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;