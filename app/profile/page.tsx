import TypeIt from 'typeit-react'

export default function Profile() { 
    return (
        <>
        <section className='h-screen w-full flex flex-col'>
            <div className='h-2/4 w-full bg-main'>
                <h1 className='text-main text-5xl m-6'><strong>Profile</strong></h1>
                <h2 className='typeit'>
                    <TypeIt
                        options={{
                            strings: ["Front-End", "Développeur"],
                            speed: 100,
                            waitUntilVisible: true
                        }}
                    ></TypeIt>
                </h2>
            </div>
            <div className='my-11'>
                <div className='w-3/5 flex flex-col m-auto gap-7 text-justify'>
                    <p className='text-2xl'>
                    Bonjour, je m'appelle <strong className='bg-main color-point'>Minyoung</strong>.
                    Je suis passionnée par l'apprentissage des langues.
                    J'ai étudié le français à l'université et j'ai perfectionné mon anglais grâce à des correspondantes.
                    Ensuite, j'ai vécu au Japon pendant un an et demi avec un visa vacances-travail pour approfondir ma connaissance de la langue japonaise.
                    </p>
                    <p className='text-2xl'>
                    Ma fascination pour la programmation, qui permet la communication avec les ordinateurs,
                    m'a conduit à poursuivre une carrière en tant qu'intégrateur web. Je suis diplômée du <strong className='bg-main color-point'>RNCP (niveau 5) en intégration web</strong>.
                    </p>
                    <p className='text-2xl'>
                    Je suis heureuse de vous accueillir sur mon site de portfolio.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}