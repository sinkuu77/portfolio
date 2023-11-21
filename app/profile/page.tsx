import TypeIt from 'typeit-react'

export default function Profile() { 
    return (
        <>
        <section className='w-full'>
            <div className='h-1/6 w-full bg-main'>
                <h1 className='text-gray-700 text-5xl m-0 p-6 pb-0'><strong>Profile</strong></h1>
                <h2 className='typeit'>
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
                    <p className='text-xl'>
                    Bonjour, je m'appelle <strong className='bg-main color-point'>Minyoung</strong>.
                    Je suis passionnée par l'apprentissage des langues.
                    J'ai étudié le français à l'université et j'ai perfectionné mon anglais grâce à des correspondantes.
                    Ensuite, j'ai vécu au Japon pendant un an et demi avec un visa vacances-travail pour approfondir ma connaissance de la langue japonaise.
                    </p>
                    <p className='text-xl'>
                    Ma fascination pour la programmation, qui permet la communication avec les ordinateurs,
                    m'a conduit à poursuivre une carrière en tant qu'intégrateur web. Je suis diplômée du <strong className='bg-main color-point'>RNCP (niveau 5) en intégration web</strong>.
                    </p>
                    <p className='text-xl'>
                    Je suis heureuse de vous accueillir sur mon site de portfolio.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}