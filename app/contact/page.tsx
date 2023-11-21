import ContactForm from '../components/ContactForm'
import ScrollToTopIcon from '../components/ScrollToTopIcon'


export default function Contact() { 
    return (
        <section className='w-full h-screen overflow-hidden'>
            <div className='h-1/5 w-full'>
                <h1 className='text-gray-700 text-5xl m-6 md:text-3xl'><strong>Contact</strong></h1>
            </div>
            <div className='relative h-4/5 w-full bg-main'>
                <ContactForm />
                <ScrollToTopIcon />
            </div>
        </section>
    )
}