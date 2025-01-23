import React from 'react';
import images from '../../images';
import './brands.css';

const Brands = () => {
    const brandImages = [
        { src: images.amazon, alt: 'Amazon' },
        { src: images.HM, alt: 'HM' },
        { src: images.lacoste, alt: 'Lacoste' },
        { src: images.levis, alt: 'Levis' },
        { src: images.obey, alt: 'Obey' },
        { src: images.shopify, alt: 'Shopify' },
    ];

    return (
        <div className="cn-outer-container max-w-5xl mx-auto py-8 overflow-hidden">
            <div className="cn-inner-container flex justify-between items-center animate-scroll">
                {brandImages.concat(brandImages).map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="brand-image w-24 h-auto mx-4" />
                ))}
            </div>
        </div>
    );
};

export default Brands;