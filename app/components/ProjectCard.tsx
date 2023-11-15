import { useEffect, useState } from 'react'


interface Project {
    id: string,
    title: string,
    cover: string,
    alt: string,
    contexte: string,
    problematique: string,
    github: string,
    tags: Array<string>
}


export default function ProjectCard() { 
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        fetch('/projectData.json')
            .then(response => response.json())
            .then((projectsRes : Project[]) => {
                setProjects(projectsRes)
            })
    })
    
    return (
        <>
            <ul className='w-full flex gap-8 justify-center items-center ml-48'>
                {projects.map((project, index) => (
                    <div
                    className='mt-28'
                    key={`${project.id}-${index}`}
                    >
                        <img 
                        className='w-[520px] h-[280px] rounded-3xl object-cover shadow-xl'
                        src={project.cover}
                        alt={project.alt}
                        />
                        <p
                        className='text-white text-2xl mt-2'
                        >
                            {project.title}
                        </p>
                        <ul className='flex gap-3'>
                            {project.tags.map((tag:string, tagIndex:number) => (
                                <li
                                key={`${tag}-${tagIndex}`}
                                className='bg-yellow-300 rounded px-2 mt-2 text-gray-700'
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </>
    )
}