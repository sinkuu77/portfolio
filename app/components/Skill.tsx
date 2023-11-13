import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoReact, BiLogoRedux, BiLogoJavascript, BiLogoTypescript, BiLogoNodejs, BiLogoSass, BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'



export default function Skill() { 
    return (
        <section className='flex justify-center pl-[75px]'>
            <div className="flex">
                <div className="flex flex-col v-boxes">
                <div className="box">
                    <span className="tooltip">NextJs</span>
                    <div className="box-face">
                    <div className="box-text"><TbBrandNextjs /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">React</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoReact /></div>
                    </div>
                    <div className="box-back">
                    </div>        
                </div>
                <div className="box">
                    <span className="tooltip">Redux</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoRedux /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">JavaScript</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoJavascript /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                </div>
                <div className="flex flex-col v-boxes mt-[75px]">
                <div className="box">
                    <span className="tooltip">TypeScript</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoTypescript /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">NodeJs</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoNodejs /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">Sass</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoSass /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                </div>
                <div className="flex flex-col v-boxes mt-[150px]">
                <div className="box">
                    <span className="tooltip">Tailwind</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoTailwindCss /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">CSS</span>
                    <div className="box-face">
                    <div className="box-text"><BiLogoCss3 /></div>
                    </div>
                    <div className="box-back">
                    </div>
                </div>
                </div>
                <div className="flex flex-col v-boxes mt-[225px]">
                <div className="box link">
                    <div className="box-face">
                    <div className="box-text"><AiFillGithub /></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}