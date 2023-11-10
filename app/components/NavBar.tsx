'use client'

import { Link } from 'react-scroll'



export default function NavBar() { 
    return (
        <nav className='fixed right-7 bg-white opacity-70 px-3 rounded-md'>
            <ul className='text-main text-xl font-bold h-full flex gap-12'>
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
    )
}