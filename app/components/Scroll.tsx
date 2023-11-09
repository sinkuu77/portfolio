'use client'

export default function Scroll() { 
    return (
        <>
        <div className='absolute bottom-11 right-10 flex flex-col items-center gap-5 justify-center'>
            <div className='relative border-l height decoration-white vertical'>
                <div className='absolute border-l-4 h-1/5 opacity-50 border-white vertical small-bar'>
                </div>
            </div>
            <span className=' text-white vertical'>
                Scroll Down
            </span>
        </div>
        </>
    )
}