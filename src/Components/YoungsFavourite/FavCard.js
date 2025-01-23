import React from 'react';
import images from '../images';

const FavCard = ({ card, isVisible }) => {
    return (
        <div className={`fav-card w-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden ${isVisible ? 'fade-in' : 'hidden'}`}>
            <img src={card.image} alt={card.title} className="w-full h-auto object-cover" />
            <div className=" p-4 flex items-center justify-between">
                <div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
                </div>
                <img src={images.arrow} alt="Arrow" className="arrow-icon ml-3" />
            </div>
        </div>
    );
};


export default FavCard;