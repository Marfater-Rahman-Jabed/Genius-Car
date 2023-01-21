import React from 'react';
import './Banner.css';

const BannerItems = ({ slide }) => {
    const { id, image, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carusel-Image '>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 text-5xl right-5 text-white font-bold top-1/4 ">
                Affrodable <br />
                Price For Car <br />
                Servicing
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 text-xl w-1/2 right-5 text-white top-1/2 ">

                <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>

            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 text-xl w-1/2 right-5 text-white top-3/4">

                <button className="btn btn-warning mr-5">Descover more</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>

            </div>
        </div>
    );
};

export default BannerItems;