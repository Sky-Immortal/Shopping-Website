import React, { useEffect, useState } from 'react';
import images from '../images';
import Card from './Card';

const NewArrivals = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [hasAnimated, setHasAnimated] = useState(false);

    const cards = [
        {
            title: 'Hoodies & Sweatshirts',
            description: 'Explore Now!',
            image: images.product1,
        },
        {
            title: 'Coats & Parkas',
            description: 'Explore Now!',
            image: images.product2,
        },
        {
            title: 'Tees & T-shirts',
            description: 'Explore Now!',
            image: images.product3,
        },
        {
            title: 'Coats & Parkas',
            description: 'Explore Now!',
            image: images.product2,
        },
        {
            title: 'Tees & T-shirts',
            description: 'Explore Now!',
            image: images.product3,
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.new-arrivals-container');
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && !hasAnimated) {
                cards.forEach((_, index) => {
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
        <div className="new-arrivals-container max-w-5xl mx-auto mt-0 md:mt-8 py-8">
            <h2 className="text-2xl ls-lg font-bold pb-0 md:pb-4 md:mb-4" style={{ WebkitTextStroke: '1px black' }}>NEW <span className='relative'><img src={images.vector} alt="New Icon" className="behind inline-block h-3 ml-2 absolute bottom-0 right-0" />ARRIVALS</span></h2>
            <div className="grid ls-xs card-grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {cards.map((card, index) => (
                    <Card key={index} card={card} isVisible={visibleCards.includes(index)} />
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;