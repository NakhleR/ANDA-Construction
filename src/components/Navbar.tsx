import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make the navbar visible when:
      // 1. User is scrolling up
      // 2. User is at the top of the page
      // 3. User has scrolled less than 70px (to avoid hiding too early)
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 70;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-cream py-4 border-b border-text-light/10 z-30 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'font-medium text-anda-blue' : ''}`}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive('/services') ? 'font-medium text-anda-blue' : ''}`}
          >
            Nos Services
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'font-medium text-anda-blue' : ''}`}
          >
            À propos
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive('/projects') ? 'font-medium text-anda-blue' : ''}`}
          >
            Réalisations
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'font-medium text-anda-blue' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2" aria-label="Toggle menu">
            <img src="/logo.png" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-md z-40 border-b border-text-light/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`nav-link py-2 px-4 ${isActive('/') ? 'font-medium text-anda-blue bg-sand rounded' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className={`nav-link py-2 px-4 ${isActive('/services') ? 'font-medium text-anda-blue bg-sand rounded' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos Services
            </Link>
            <Link
              to="/about"
              className={`nav-link py-2 px-4 ${isActive('/about') ? 'font-medium text-anda-blue bg-sand rounded' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/projects"
              className={`nav-link py-2 px-4 ${isActive('/projects') ? 'font-medium text-anda-blue bg-sand rounded' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              to="/contact"
              className={`nav-link py-2 px-4 ${isActive('/contact') ? 'font-medium text-anda-blue bg-sand rounded' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
