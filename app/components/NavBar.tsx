'use client'

import { Link } from 'react-scroll'



export default function NavBar() { 
    return (
        <>
        <button
            className='rounded-full w-20 h-20 text-xl fixed right-7 top-10 bg-green-200 text-indigo-950 font-bold z-10 navbar-menu md:w-16 md:h-16 md:text-base'
            >Menu
            </button>
        <nav className='fixed bg-white px-3'>
            <ul className='text-gray-700 text-xl font-bold h-full flex gap-12'>
                <li>
                    <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    >Home</Link>
                </li>
                <li>
                    <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='profile'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    >Profile</Link>
                </li>
                <li>
                <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    >Projects</Link>
                </li>
                <li>
                <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='skills'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    >Skills</Link>
                </li>
                <li>
                <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    >Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}