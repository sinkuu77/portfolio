interface Project {
    id: string,
    title: string,
    cover: string,
    contexte: string,
    problematique: string,
    github: string,
    tags: Array<string>
}


export default async function ProjectCard() { 
    const response = await fetch('/projectData.json')
    const projects : Project[] = await response.json()
    return (
        <>
            <ul>
                {projects.map((project, index) => (
                    <div
                    key={`${project.id}-${index}`}
                    >
                        <img 
                        src={project.cover}
                        alt="la page d'accueil de chaque projet"
                        />
                    </div>
                ))}
            </ul>
        </>
    )
}