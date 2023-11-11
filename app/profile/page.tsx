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
            <div className='h-2/4 w-full'>

            </div>
        </section>
        </>
    )
}