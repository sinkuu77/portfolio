'use client'
import Link from 'next/link'

export default function NavBar() { 
    return (
        <nav className='absolute left-24 right-24 w-80 h-80 bg-white'>
            <ul>
                <li>
                    <Link href='/profile'>Profile</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/skills'>Skills</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}