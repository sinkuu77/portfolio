
export default function ProjectModal({ isVisible, onClose, context, problem, github } : { isVisible: boolean, onClose: Function, context: string, problem: string, github: string }) { 
    if (!isVisible) return null

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        const closeTarget = event.target as HTMLElement
        if(closeTarget.id  === "wrapper") {
            onClose()
        }
    }
    return (
        <div 
        className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center'
        id='wrapper'
        onClick={handleClose}
        >
            <div className='w-[800px] flex flex-col lg:w-[700px] md:w-[300px] md:z-1'>
                <button 
                className='text-white text-2xl place-self-end md:place-self-start'
                onClick={() => onClose()}
                >
                    X
                </button>
                <div className='bg-white p-10 rounded-md text-xl text-justify md:text-xs md:p-0'>
                    <p className='m-10'><strong>Contexte :</strong> {context}</p>
                    <p className='m-10'><strong>Problématique :</strong> {problem}</p>
                    <p className='m-10'>
                    <strong>Github :</strong>
                    <a className='text-blue-800 md:text-xs'
                    href={github} target='_blank'> {github}</a>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}