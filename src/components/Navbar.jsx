import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinks } from '../constants';
import { Home, Briefcase, Info, Image, Mail } from 'lucide-react'; // Example icons from lucide-react

const Navbar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };

    // Map navLinks to icons
    const iconMap = {
        accueil: <Home />,
        'nos-services': <Briefcase />,
        'a-propos': <Info />,
        realisations: <Image />,
        contact: <Mail />,
    };

    return (
        <header
            className={`bg-accent fixed top-0 w-full z-10 items-center justify-between p-5 sm:px-10 transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="flex screen-max-width w-full items-center justify-between">
                {/* Logo */}
                <img src="/assets/images/logo.png" width={60} height={60} alt="logo" />

                {/* Desktop Navigation */}
                <div className="hidden sm:flex flex-1 items-center justify-center">
                    {navLinks.map((nav) => (
                        <a
                            href={`#${nav.id}`}
                            className="cursor-pointer px-5 text-md text-gray font-avenir transition-all"
                            key={nav.id}
                        >
                            {nav.title}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="sm:hidden">
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                {/* Swipeable Drawer */}
                <SwipeableDrawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <div
                        className="w-64 p-4 bg-accent h-full"
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <h2 className="text-lg font-bold mb-4">Menu</h2>
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((nav) => (
                                <a
                                    href={`#${nav.id}`}
                                    className="cursor-pointer flex items-center space-x-2 text-md text-gray font-avenir transition-all"
                                    key={nav.id}
                                >
                                    {iconMap[nav.id]} {/* Icon */}
                                    <span>{nav.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </SwipeableDrawer>
            </nav>
        </header>
    );
};

export default Navbar;
