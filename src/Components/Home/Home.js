import React, { useEffect } from 'react';
import images from '../images';
import Button from '../Reusables/button';
import './Home.css';

const Home = () => {
    useEffect(() => {
        const outerContainer = document.querySelector('.outer-container');
        const leftContainer = document.querySelector('.left-container');
        const rightContainer = document.querySelector('.right-container');

        outerContainer.classList.add('fade-in');
        leftContainer.classList.add('slide-in-left');
        rightContainer.classList.add('slide-in-right');
    }, []);

    return (
        <div className="outer-container max-w-5xl mx-auto relative z-0 sm:px-6 lg:px-8">
            <div className="inner-container relative z-10 flex flex-col md:flex-row justify-between items-center rounded-3xl">
                <div className="left-container w-full md:w-2/5">

                    <div className="header text-3xl md:text-5xl font-extrabold mb-4 relative leading-tight">
                        <p className='welcome-text ls-lg p-2' style={{ WebkitTextStroke: '2px black' }}>LET'S EXPLORE <span className="relative">UNIQUE
                            <span className="span-element"></span>
                        </span> CLOTHES</p>
                    </div>
                    <div className="subwelcome-text text-black mb-10">
                        <p>Live for Influential and Innovative fashion!</p>
                    </div>
                    <div className="shop-now flex items-center">
                        <div className="image">
                            <img src={images.vector} alt="#" className="w-12 md:w-16 h-auto" />
                        </div>
                        <Button text="Shop Now" className="ml-4" />
                    </div>
                </div>
                <div className="right-container w-full md:w-3/5 flex items-end">
                    <img src={images.home} alt="Home" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Home;