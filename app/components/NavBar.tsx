'use client'
import Link from 'next/link'

export default function NavBar() { 
    return (
        <nav className='relative'>
            <ul className='decoration-yellow text-xl font-bold h-full flex gap-12'>
                <li>
                    <Link className='view' href='/profile'>Profile</Link>
                </li>
                <li>
                    <Link className='view' href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link className='view' href='/skills'>Skills</Link>
                </li>
                <li>
                    <Link className='view' href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}