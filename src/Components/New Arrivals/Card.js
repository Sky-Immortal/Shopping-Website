import React from 'react';
import './NewArrivals.css';
import images from '../images';

const Card = ({ card, isVisible }) => {
    return (
        <div className={`card bg-white rounded-xl shadow-md ${isVisible ? 'pop-up fade-in' : 'hidden'}`}>
            <img src={card.image} alt={card.title} className="w-full h-auto object-cover" />
            <div className="p-4 flex items-center justify-between">
                <div>
                    <h3 className="text-md font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm c-gray">{card.description}</p>
                </div>
                <img src={images.arrow} alt="Arrow" className="arrow-icon ml-3" />
            </div>
        </div>
    );
};

export default Card;
