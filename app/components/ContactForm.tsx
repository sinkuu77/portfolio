
export default function ContactForm() { 
    return (
        <div className='flex flex-col justify-center items-center p-12'>
            <form>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px]'>
                    <label className='text-2xl'>Nom</label>
                    <input type='text' name='nom' className='rounded h-[40px] p-2'/>
                </div>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px]'>
                    <label className='text-2xl'>E-mail</label>
                    <input type='email' name='email' className='rounded h-[40px] p-2' />
                </div>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px]'>
                    <label className='text-2xl'>Message</label>
                    <textarea name='message' rows={10} cols={30} className='rounded p-2'></textarea>
                </div>
                <div className='flex items-center justify-center m-10'>
                    <button className='text-2xl px-10 py-1.5 rounded-full email-btn'>
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    )
}