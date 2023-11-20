import { useEffect, useState } from 'react'

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ProjectModal from './ProjectModal';

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

    const [leftArrowOpacity, setLeftArrowOpacity] = useState(0.5)
    const [rightArrowOpacity, setRightArrowOpacity] = useState(1)
    const [translate, setTranslate] = useState('')

    const [showModal, setShowModal] = useState(false)
    
    const handleLeftArrowClick = () => {
        setLeftArrowOpacity(0.5)
        setRightArrowOpacity(1)
        setTranslate('')
    }
    const handleRightArrowClick = () => {
        setRightArrowOpacity(0.5)
        setLeftArrowOpacity(1)
        setTranslate('translate-active')
    }

    useEffect(() => {
        fetch('/projectData.json')
            .then(response => response.json())
            .then((projectsRes : Project[]) => {
                setProjects(projectsRes)
            })
    }, [])
    
    return (
        <>
            <div className='absolute flex gap-4 text-6xl text-white right-12 top-4 cursor-pointer'>
                <div onClick={handleLeftArrowClick} className={leftArrowOpacity === 0.5? 'clicked' : 'non-clicked'}>
                    <IoIosArrowDropleft />
                </div>
                <div onClick={handleRightArrowClick} className={rightArrowOpacity === 0.5? 'clicked' : 'non-clicked'}>
                    <IoIosArrowDropright />
                </div>
            </div>
            <ul className={`w-full flex gap-8 justify-center items-center ml-80 translate-inactive ${translate}`}  >
                {projects.map((project, index) => (
                    <div
                    className='mt-28'
                    key={`${project.id}-${index}`}
                    >
                        <div 
                        className='relative inline-block rounded-3xl project-wrapper w-[520px] h-[280px] overflow-hidden'>
                            <img 
                            className='w-full h-full rounded-3xl object-cover shadow-xl cursor-pointer project-img'
                            src={project.cover}
                            alt={project.alt}
                            onClick={() => {
                                setShowModal(true)
                                setProjectIndex(index)
                            }}
                            />
                        </div>
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