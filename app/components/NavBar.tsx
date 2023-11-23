'use client'

import { useState } from 'react'
import { Link } from 'react-scroll'



export default function NavBar() { 
    const [showNavBar, setShowNavBar] = useState(false)

    return (
        <>
        <button
            className='rounded-full w-20 h-20 text-xl fixed right-7 top-10 bg-green-200 text-indigo-950 font-bold z-30 navbar-menu md:w-16 md:h-16 md:text-base'
            onClick={() => {
                setShowNavBar((current) => !current)
            }}
            >{showNavBar? 'Close' : 'Menu'}
        </button>
        <nav
            className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 ${
            showNavBar ? 'translate-y-0 z-20' :  '-translate-y-full z-20'
            } transition-translate-y ease-in-out duration-500`}
        >
        <ul className='text-gray-200 text-xl font-bold h-full flex gap-12 md:flex-col md:p-5'>
            <li>
                <Link 
                activeClass='active'
                className='view hover:cursor-pointer' 
                to='home'
                href='#home'
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
                href='#profile'
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
                href='#projects'
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
                href='#skills'
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
                href='#contact'
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