'use client'

import { Link } from 'react-scroll'



export default function NavBar() { 
    return (
        <nav className='relative'>
            <ul className='decoration-yellow text-xl font-bold h-full flex gap-12'>
                <li>
                    <Link 
                    activeClass='active'
                    className='view hover:cursor-pointer' 
                    to='profile'
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={1000}
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