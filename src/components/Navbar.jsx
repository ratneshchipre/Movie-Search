import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-full h-[5rem] flex items-center justify-between py-[0.5rem] px-[1rem] sm:py-[0.5rem] sm:px-[2rem] bg-background border-b-[1.5px] border-border fixed z-100'>

            <Link to='/'>
                <div className='flex items-center justify-center'>

                    <h2 className='text-[1.3rem] sm:text-[1.5rem] text-text font-[600]'>Movie Search</h2>

                </div>
            </Link>

            <div>

                <ul className='flex gap-[1rem]'>

                    <li className='text-[1rem] sm:text-[1.05rem] font-[500] cursor-pointer'>
                        <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-text' : 'text-light-text'} ${isActive ? 'border-b-[2.5px]' : ''} pb-[0.1rem] hover:text-text transition`}>
                            Home
                        </NavLink>
                    </li>

                    <li className='text-[1rem] sm:text-[1.05rem] font-[500] cursor-pointer'>
                        <NavLink to='/favorites' className={({ isActive }) => `${isActive ? 'text-text' : 'text-light-text'} ${isActive ? 'border-b-[2.5px]' : ''} pb-[0.1rem] hover:text-text transition`}>
                            Favorites
                        </NavLink>
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default Navbar