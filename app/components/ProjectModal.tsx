
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
            <div className='w-[800px] flex flex-col'>
                <button 
                className='text-white text-2xl place-self-end'
                onClick={() => onClose()}
                >
                    X
                </button>
                <div className='bg-white p-10 rounded-md text-xl text-justify'>
                    <p className='m-10'>Contexte : {context}</p>
                    <p className='m-10'>Problématique : {problem}</p>
                    <p className='m-10'>
                    Github : <a
                    className='text-blue-800'
                    href={github} target='_blank'>{github}</a>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}