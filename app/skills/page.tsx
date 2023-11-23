import Skill from '../components/Skill'

export default function Skills() { 
    return (
        <section id='skills' className='h-full w-full'>
            <h1 className='text-gray-700 text-5xl m-6 p-3 md:text-3xl'><strong>Skills</strong></h1>
            <Skill />
        </section>
    )
}