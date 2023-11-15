import ProjectCard from '../components/ProjectCard'

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function Projects() { 
    return (
        <section className='w-full h-screen'>
            <div className='h-1/4 w-full'>
                <h1 className='text-gray-700 text-5xl m-6 p-3'><strong>Projects</strong></h1>
            </div>
            <div className='relative h-3/4 w-full bg-main overflow-x-hidden'>
                <div className='absolute flex gap-4 text-6xl text-white right-12 top-4'>
                    <IoIosArrowDropleft />
                    <IoIosArrowDropright />
                </div>
                <ProjectCard />
            </div>
        </section>
    )
}