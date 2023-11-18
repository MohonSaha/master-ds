import './Navbar.css'
import logo from '../../assets/logos/serum.png'
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import Button from '../button';
import { IoClose, IoMenu } from "react-icons/io5"
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className=" bg-white">
            <div className='flex items-center font-medium justify-around'>
                <div className='flex items-center justify-between z-50 md:w-auto w-full p-5 md:p-0'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo" className='md:cursor-pointer md:h-16 h-12 mr-4' />
                        <span className='text-4xl font-semibold'>Docseba</span>
                    </div>
                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        {
                            open ? <IoClose /> : <IoMenu />
                        }
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-mono'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className='md:block hidden'>
                    <Button></Button>
                </div>

                {/* Mobile Nav */}
                <ul className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] -z-10"}
        `}>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className='py-5'>
                        <Button></Button>
                    </div>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;