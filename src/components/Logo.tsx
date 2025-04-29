
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="text-anda-blue">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L6 16V40L24 28L42 40V16L24 4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M24 4V28" stroke="currentColor" strokeWidth="2" />
          <path d="M24 28L6 16" stroke="currentColor" strokeWidth="2" />
          <path d="M24 28L42 16" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="28" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="ml-2 font-serif font-bold text-2xl">ANDA</div>
    </Link>
  );
};

export default Logo;
