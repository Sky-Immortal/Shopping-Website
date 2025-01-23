import React from 'react';
import './Discounts.css';
import images from '../images';
import Button from '../Reusables/button';

const Discounts = () => {
    return (
        <div className="discounts-outer-container max-w-5xl mx-auto py-8">
            <div className="discounts-inner-container items-center max-w-5xl h-auto flex justify-end bg-cover" style={{ backgroundImage: `url(${images.discount})` }}>
                <div className='right-container w-1/2 pl-16 pr-32'>
                    <div className='text-3xl md:text-5xl font-extrabold mb-4 relative' >
                        <h2
                            className="welcome-text" 
                            style={{ WebkitTextStroke: '1.5px black' }}>
                            <span className="relative payday-span">
                                <span className="white-rectangle"></span>
                                PAYDAY </span>SALE NOW
                        </h2>
                    </div>
                    <p className="text-lg mb-4 text-black">
                        Spend minimal $100 get 30% off voucher code for your next purchase
                    </p>
                    <p className="text-lg font-bold text-black mb-0 date">1 June - 10 June 2021</p>
                    <p className="text-lg mb-4 text-black">*Terms & Conditions apply</p>
                    <Button text="SHOP NOW" className=" text-sm py-4 px-8"/>
                </div>
            </div>
        </div>
    );
};

export default Discounts;