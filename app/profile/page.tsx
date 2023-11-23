'use client'

import TypeIt from 'typeit-react'

export default function Profile() { 
    return (
        <>
        <section id='profile' className='h-full w-full'>
            <div className='h-1/6 w-full bg-main'>
                <h1 className='text-gray-700 text-5xl m-0 p-6 pb-0 md:text-3xl'><strong>Profile</strong></h1>
                <h2 className='typeit md:text-5xl'>
                    <TypeIt
                        options={{
                            strings: ["Front-End", "Développeur"],
                            speed: 100,
                            waitUntilVisible: true
                        }}
                    />
                </h2>
            </div>
            <div className='relative h-1/6 w-full'>
                <div className="custom-shape-divider-top-1699730016">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className='my-18 pt-44'>
                <div className='h-4/6 w-3/5 flex flex-col m-auto gap-7 text-justify text-gray-700'>
                    <p className='text-xl md:text-base'>
                    Bonjour, je m&apos;appelle <strong className='bg-gray-700 color-point'>Minyoung</strong>.
                    Je suis passionnée par l&apos;apprentissage des langues.
                    J&apos;ai étudié le français à l&apos;université et j&apos;ai perfectionné mon anglais grâce à des correspondantes.
                    Ensuite, j&apos;ai vécu au Japon pendant un an et demi avec un visa vacances-travail pour approfondir ma connaissance de la langue japonaise.
                    </p>
                    <p className='text-xl md:text-base'>
                    Ma fascination pour la programmation, qui permet la communication avec les ordinateurs,
                    m&apos;a conduit à poursuivre une carrière en tant qu&apos;intégrateur web. Je suis diplômée du <strong className='bg-gray-700 color-point'>RNCP (niveau 5) en intégration web</strong>.
                    </p>
                    <p className='text-xl md:text-base'>
                    Je suis heureuse de vous accueillir sur mon site de portfolio.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}