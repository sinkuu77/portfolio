import ProjectCard from '../components/ProjectCard'



export default function Projects() { 
    return (
        <section id='projects' className='h-full w-full'>
            <div className='h-1/5 w-full'>
                <h1 className='text-gray-700 text-5xl m-6 p-3 md:text-3xl'><strong>Projects</strong></h1>
            </div>
            <div className='h-4/5 w-full bg-main pb-[200px]'>
                <ProjectCard 
                />
            </div>
        </section>
    )
}