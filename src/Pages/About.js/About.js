import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className=" rounded-lg h-full w-3/4 shadow-2xl" />
                    <img src={parts} alt="" className="absolute border-8 w-1/2 right-16 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-orange-600 font-bold'>About Us</p>
                    <h1 className="text-2xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;