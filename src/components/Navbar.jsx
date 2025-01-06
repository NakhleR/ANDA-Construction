import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <header className='bg-[#fefaef] flex w-full items-center justify-between p-5 sm:px-10'>
            <nav className='flex screen-max-width w-full'>
                <img src='#' width={14} height={18} alt='logo' />
                <div className='flex flex-1 items-center justify-center max-sm:hidden'>
                    {navLinks.map((nav) => (
                        <div className='cursor-pointer px-5 text-md text-gray font-poppins transition-all' key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end'>
                </div>
            </nav>
        </header>
    )
}

export default Navbar