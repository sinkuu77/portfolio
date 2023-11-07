'use client'
import Link from 'next/link'

export default function NavBar() { 
    return (
        <nav className='absolute right-10 top-1/3 w-80 h-80 bg-white opacity-80 rounded-xl p-6'>
            <ul className='decoration-green text-2xl font-bold h-full flex flex-col gap-12'>
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