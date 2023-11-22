'use client'
import { useEffect, useState } from 'react'

import ProjectModal from './ProjectModal';
import Image from 'next/image';

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
    const [projectIndex, setProjectIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetch('/projectData.json')
            .then(response => response.json())
            .then((projectsRes : Project[]) => {
                setProjects(projectsRes)
            })
    }, [])
    
    return (
        <>
            <ul className='flex flex-wrap items-center justify-center gap-5 m-auto py-14 px-10'  >
                {projects.map((project, index) => (
                    <div
                    key={`${project.id}-${index}`}
                    >
                        <div 
                        className='relative inline-block project-wrapper w-[600px] h-[280px] overflow-hidden md:w-[350px] md:h-[190px]'>
                            <Image
                            className='w-full h-full object-cover shadow-xl cursor-pointer project-img'
                            src={project.cover}
                            alt={project.alt}
                            onClick={() => {
                                setShowModal(true)
                                setProjectIndex(index)
                            }}
                            />
                            <ul className='absolute bottom-2 left-2 flex gap-3'>
                            {project.tags.map((tag:string, tagIndex:number) => (
                                <li
                                key={`${tag}-${tagIndex}`}
                                className='bg-yellow-300 rounded px-2 mt-2 text-gray-500 md:text-xs'
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        </div>
                        <p
                        className='text-white text-xl mt-2 md:text-base'
                        >
                            {project.title}
                        </p>
                    </div>
                ))}
                <ProjectModal 
                            isVisible={showModal}
                            onClose={() => {
                                setShowModal(false)
                            }}
                            context={showModal? projects[projectIndex].contexte : ''}
                            problem={showModal? projects[projectIndex].problematique : ''}
                            github={showModal? projects[projectIndex].github : ''}
                            />
            </ul>
        </>
    )

}