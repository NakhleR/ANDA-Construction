import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop < lastScrollTop) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <header className={`bg-accent fixed top-0 w-full z-10 items-center justify-between p-5 sm:px-10 transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className='flex screen-max-width w-full'>
                <img src='#' width={14} height={18} alt='logo' />
                <div className='flex flex-1 items-center justify-center max-sm:hidden'>
                    {navLinks.map((nav) => (
                        <div className='cursor-pointer px-5 text-md text-gray font-avenir transition-all' key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end'>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;