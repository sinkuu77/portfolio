import ContactForm from '../components/ContactForm'

import { MdOutlineArrowCircleUp } from "react-icons/md";

export default function Contact() { 
    return (
        <section className='w-full h-screen'>
            <div className='h-1/4 w-full'>
                <h1 className='text-gray-700 text-5xl m-6 p-3'><strong>Contact</strong></h1>
            </div>
            <div className='h-3/4 w-full bg-main'>
                <ContactForm />
                <div>
                    <MdOutlineArrowCircleUp />
                </div>
            </div>
        </section>
    )
}