import { projects } from '../data/projects'
import stackLogo from '../icons/general/stack.svg'
import webPageLogo from '../icons/general/webpage.svg'

export function ProjectsPage() {

    return (    
        <section id="projects" className="min-h-screen relative">
            <div className="flex flex-col gap-16 px-10 w-full absolute top-[30%] text-white">
                <h2 className="text-[5.2rem] leading-[2rem] tracking-widest font-bold font-poetsen">
                    <span className="text-slate-400">Projects</span>
                </h2>
                <div>
                    <p className="flex flex-col tracking-wide text-lg font-bold font-inter text-[#bcb5b5]">
                        <span>
                            Two Saas deployed and one 
                        </span>
                        <span>
                            Freelance job done so far
                        </span>
                    </p>
                </div>
            </div>
            <div className='absolute right-10 top-44 flex flex-col gap-10 w-full items-end justify-center'>
                {projects.map(project => (
                    <div className='w-[780px] h-[400px] bg-[rgba(36,41,56,0.85)]'>
                        <a 
                            target='_blank'
                            href={project.link}
                            className="w-[160px] h-[40px] bg-[#191D24] absolute right-3 mt-3 rounded-sm flex items-center justify-around"
                        >
                            <img src={webPageLogo} alt="webpage logo" />
                            <p className="tracking-wide font-bold font-inter text-white">
                                landing page
                            </p>                    
                        </a>
                        <div className='p-3'>
                            <h4 className='tracking-wider font-bold font-inter text-xl text-white'>
                                {project.name}
                            </h4>
                            <h5 className='font-semibold text-[#D2C3C3]'>
                                {project.tag}
                            </h5>
                            <p className='mt-2 font-bold text-md text-[#bcabab]'>
                                {project.paragraph1}
                            </p>
                            <p className='font-bold text-md text-[#bcabab]'>
                                {project.paragraph2}
                            </p>
                        </div>
                        <div className='scale-90 h-14 w-max flex gap-5 items-center justify-between rounded-md bg-[#31343e] pe-4'>
                            <div className='h-full w-12 flex items-center justify-center bg-[#242938]'>
                                <span className='w-10 h-10'>
                                    <img src={stackLogo} alt="stack logo" />
                                </span>
                            </div>
                            <div className='flex gap-6 items-center justify-center'>
                                {project.stackIcons.map(icon => (
                                    <span className='w-10 h-10'>
                                        <img src={icon} alt="tech stack icon" />
                                    </span>
                                ))}
                            </div>      
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}