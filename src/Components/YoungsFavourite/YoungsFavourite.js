import React, { useEffect, useState } from 'react';
import FavCard from './FavCard';
import images from '../images';
import './YoungsFavourite.css';

const YoungsFavourite = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [hasAnimated, setHasAnimated] = useState(false);

    const favCards = [
        {
            title: 'Trending On IG',
            description: 'Explore Now!',
            image: images.youngsfav2,
        },
        {
            title: 'All Under $40',
            description: 'Explore Now!',
            image: images.youngsfav1,
        },
        {
            title: 'Trending On IG',
            description: 'Explore Now!',
            image: images.youngsfav2,
        },
        {
            title: 'All Under $40',
            description: 'Explore Now!',
            image: images.youngsfav1,
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.youngs-favourite-container');
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && !hasAnimated) {
                favCards.forEach((_, index) => {
                    setTimeout(() => {
                        setVisibleCards(prev => [...prev, index]);
                    }, index * 500); // Adjust the delay as needed
                });
                setHasAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    return (
        <div className="youngs-favourite-container max-w-5xl mx-auto py-8 px-2">
            <h2 className="text-2xl font-bold pb-0 ls-lg md:pb-4 md:mb-8"
                style={{ WebkitTextStroke: '1px black' }}>
                Young's 
                <span className='relative'>
                    <img src={images.vector} alt="New Icon" className="behind inline-block h-3 ml-2 absolute bottom-0 right-0" /> Favourites
                </span>
            </h2>
            <div className="grid grid-cols-1 ls-xs md:grid-cols-2 gap-2 md:gap-5 ">
                {favCards.map((card, index) => (
                    <FavCard key={index} card={card} isVisible={visibleCards.includes(index)} className="scale-90 md:scale-100" />
                ))}
            </div>
        </div>
    );
};

export default YoungsFavourite;
