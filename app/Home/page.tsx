'use client'

import NavBar from '../components/NavBar';
import Scroll from '../components/Scroll';

import {FaFilePdf} from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <section className="w-full h-full relative">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-1">
                <source src="/ferris_wheel.mp4" type="video/mp4" />
                </video>
                <header className='p-6 flex justify-between'>
                    <div className="relative text-lg decoration-yellow flex items-center justify-between gap-10">
                        <div>
                            <h1><strong>GWON Minyoung</strong></h1>
                            <h2>Front-End <br />Développeur</h2>
                        </div>
                        <a id='pdf-container' className='hoverable' download='GWON Minyoung' href='/CV_FE.pdf'>
                            <div id='pdf-icon' className='text-2xl'>
                                <FaFilePdf />
                            </div>
                        </a>
                    </div>
                    <NavBar/>
                </header>
                <Scroll />
            </section>
        </>
        );
}