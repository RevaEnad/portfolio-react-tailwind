import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Work' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>
            <h1 className='text-3xl font-bold primary-color ml-4'>REVA.E</h1>
            <ul className='hidden md:flex'>
                {navLinks.map((link) => (
                    <li key={link.href} className='p-5'>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div onClick={handleNav} className='block md:hidden z-20'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-20' 
                : 'fixed left-[-100%] z-20'}>
                <h1 className='text-3xl font-bold primary-color m-4'>REVA.E</h1>
                <ul className='p-8 text-2xl'>
                    {navLinks.map((link) => (
                        <li key={link.href} className='p-2'>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
