import { useEffect, useState } from 'react'


interface Project {
    id: string,
    title: string,
    cover: string,
    contexte: string,
    problematique: string,
    github: string,
    tags: Array<string>
}


export default function ProjectCard() { 
    const [projects, setProjects] = useState<any[]>([])

    useEffect(() => {
        fetch('/projectData.json')
            .then(response => response.json())
            .then((projectsRes : Project[]) => {
                setProjects(projectsRes)
            })
    })
    
    return (
        <>
            <ul>
                {projects.map((project, index) => (
                    <div
                    key={`${project.id}-${index}`}
                    >
                        <img 
                        src={project.cover}
                        alt={project.alt}
                        />
                    </div>
                ))}
            </ul>
        </>
    )
}