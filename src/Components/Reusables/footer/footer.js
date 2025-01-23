import React, { useEffect } from 'react';
import images from '../../images';
import './footer.css';

const Footer = () => {
    useEffect(() => {
        const footer = document.querySelector('.footer-outer-container');
        const handleScroll = () => {
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight) {
                footer.classList.add('fade-in');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className="footer-outer-container bg-black footer-text py-8 relative">
            <div className="max-w-5xl mx-auto my-10 grid grid-cols-6 gap-10 footer-inner-container">
                <div className="fashion-col col-span-3 items-left">
                    <div className='footer-1 w-72'>
                        <h2 className=" logo-text font-family text-sm font-extrabold text-white tracking-wider mb-4" style={{ WebkitTextStroke: '0.5px white' }}>
                            FASHION
                        </h2>
                        <p className='my-4 text-xs'>Complete your style with awesome clothes from us.</p>
                        <ul className="flex space-x-4 my-4 icons">
                            <li className="p-2 rounded-lg"><a href="#"><img src={images.fb} alt="Facebook" className="h-6 px-1" /></a></li>
                            <li className="p-2 rounded-lg"><a href="#"><img src={images.ig} alt="Instagram" className="w-6 h-6" /></a></li>
                            <li className="p-2 rounded-lg"><a href="#"><img src={images.x} alt="X" className="w-6 h-6" /></a></li>
                            <li className="p-2 rounded-lg"><a href="#"><img src={images.in} alt="Linked in" className="w-6 h-6" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <h2 className="py-2 footer-h2 text-xs text-lg ">Company</h2>
                    <ul>
                        <li className="py-2 text-xs"><a href="/" className="hover:underline">Home</a></li>
                        <li className="py-2 text-xs"><a href="/new-arrivals" className="hover:underline">New Arrivals</a></li>
                        <li className="py-2 text-xs"><a href="/favourites" className="hover:underline">Favourites</a></li>
                        <li className="py-2 text-xs"><a href="/discounts" className="hover:underline">Discounts</a></li>
                    </ul>
                </div>
                <div className="contact-legal-container col-span-2">
                    <div className="contact-col">
                        <h2 className="py-2 footer-h2 text-xs text-lg ">Contact</h2>
                        <p className="py-2 text-xs">123 Fashion Street</p>
                        <p className="py-2 text-xs">City, Country</p>
                        <p className="py-2 text-xs">Email: info@fashion.com</p>
                    </div>
                    <div className="legal-col">
                        <h2 className="py-2 footer-h2 text-xs text-lg ">Legal</h2>
                        <p className="py-2 text-xs">Terms & Conditions</p>
                        <p className="py-2 text-xs">Privacy Policy</p>
                    </div>
                </div>
                <div className="col-span-6 mt-4 icons-mobile">
                    <ul className="flex space-x-4 justify-center">
                        <li className="p-2 rounded-lg"><a href="#"><img src={images.fb} alt="Facebook" className="h-4" /></a></li>
                        <li className="p-2 rounded-lg"><a href="#"><img src={images.ig} alt="Instagram" className="w-4 h-4" /></a></li>
                        <li className="p-2 rounded-lg"><a href="#"><img src={images.x} alt="X" className="w-4 h-4" /></a></li>
                        <li className="p-2 rounded-lg"><a href="#"><img src={images.in} alt="Linked in" className="w-4 h-4" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
