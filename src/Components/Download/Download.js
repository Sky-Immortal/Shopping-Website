import React from 'react';
import './Download.css';
import images from '../images';

const Download = () => {
    return (
        <div className="download-outer-container max-w-5xl mx-auto py-8 px-2">
            <div className="download-inner-container flex flex-col md:flex-row justify-between items-center">
                <div className="left-container w-full md:w-1/2">
                
                    <h2 className="text-2xl ls-lg md:text-2xl font-bold mb-4 w-full md:w-3/5" style={{ WebkitTextStroke: '1px black' }}>
                        DOWNLOAD APP & GET THE VOUCHER!
                    </h2>
                    <p className="mb-8 text-sm ls-xs d-gray w-full md:w-3/5">
                    Get 30% off for first transaction using
                    Rondovision mobile app for now.
                    </p>
                    <div className="flex space-x-4 md:justify-start justify-center">
                        <img src={images.appstore} alt="App Store" className="w-32 h-auto hover:shadow-lg transition duration-300" />
                        <img src={images.googleplay} alt="Play Store" className="w-32 h-auto hover:shadow-lg transition duration-300" />
                    </div>
                </div>
                <div className="right-container w-full md:w-1/2 relative flex justify-center">
                    <img src={images.mobilegroup} alt="Phone Behind" className="phone-behind transform" />
                    <img src={images.mobileapp} alt="Phone Front" className="relative h-auto transform w-[65%]" />
                </div>
            </div>
        </div>
    );
};

export default Download;
