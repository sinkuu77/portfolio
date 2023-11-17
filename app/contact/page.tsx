import ContactForm from '../components/ContactForm'
import ScrollToTopIcon from '../components/ScrollToTopIcon'


export default function Contact() { 
    return (
        <section className='w-full h-screen overflow-hidden'>
            <div className='h-1/4 w-full'>
                <h1 className='text-gray-700 text-5xl m-6 p-3'><strong>Contact</strong></h1>
            </div>
            <div className='relative h-3/4 w-full bg-main'>
                <ContactForm />
                <ScrollToTopIcon />
            </div>
        </section>
    )
}