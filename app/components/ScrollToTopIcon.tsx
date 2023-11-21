import { animateScroll } from 'react-scroll'

import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTopIcon() { 
    const  scrollToTop = () => {
        animateScroll.scrollToTop()
    }
    return (
            <a onClick={scrollToTop} className='absolute text-gray-700 text-5xl right-20 bottom-20 cursor-pointer lg:text-3xl lg:right-10 lg:bottom-10'>
                <FaArrowCircleUp />
            </a>
    )
}