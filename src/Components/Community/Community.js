import React, {useEffect} from 'react';
import './Community.css';

const Community = () => {
        useEffect(() => {
            const footer = document.querySelector('.community-outer-container');
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
        <div className="community-outer-container f-yellow w-full mx-auto py-8 px-2">
            <div className="community-inner-container flex flex-col justify-between items-center">
                <h2 className="text-2xl ls-lg max-w-2xl md:text-3xl font-bold mb-4 text-white text-center" style={{ WebkitTextStroke: '1px white' }}>
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h2>
                <p className="mb-8 max-w-2xl ls-md text-md text-center text-white">
                    Type your email down below and be young wild generation
                </p>
                <div className="community-content-container flex flex-col md:flex-row justify-center items-center">
                    <form className="text-sm flex community-form p-1 rounded-lg bg-white">
                        <input type="text" placeholder="Add your email here..." className="p-2 rounded-l-lg" />
                        <button type="submit" className="px-6 py-2 font-semibold bg-black text-white rounded-lg">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Community;
