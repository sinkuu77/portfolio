'use client'

import ContactForm from '../components/ContactForm'
import ScrollToTopIcon from '../components/ScrollToTopIcon'


export default function Contact() { 
    return (
        <section id='contact' className='w-full h-screen overflow-hidden'>
            <div className='h-[10%] w-full'>
                <h1 className='text-gray-700 text-5xl m-6 md:text-3xl'><strong>Contact</strong></h1>
            </div>
            <div className='relative h-[90%] w-full bg-main'>
                <ContactForm />
                <ScrollToTopIcon />
            </div>
        </section>
    )
}