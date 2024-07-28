import { Stacks } from "../components/Stacks"

export function AboutPage() {
    
    return (
        <section id="about" className="min-h-screen relative">
            <div className="flex flex-col gap-16 px-10 w-full absolute top-[30%] text-white">
                <h2 className="text-[5.2rem] leading-[2rem] tracking-widest font-bold font-poetsen">
                    <span className="text-slate-400">About </span>
                    <span>me</span>
                </h2>
                <div>
                    <p className="flex flex-col tracking-wide text-lg font-bold font-inter text-[#bcb5b5]">
                        <span>
                            Previously a physics student at the UBA, who became
                        </span>
                        <span>
                            fond of software development during the pandemic.
                        </span>
                    </p>
                    <p className="mt-7 flex flex-col tracking-wider text-base font-bold font-inika text-[#e1dada]">
                        <span>
                            Decided to follow that path, initially working on
                            <span className="text-[#B5A7A7]"> FRONTEND</span>
                        </span>
                        <span>
                            projects, then on
                            <span className="text-[#B5A7A7]"> BACKEND </span> 
                            projects and currently  working on 
                        </span>
                        <span>
                            strengthening my
                            <span className="text-[#B5A7A7]"> DEVOPS </span>  
                            knowledge.
                        </span>
                    </p>
                    <p className="mt-9 flex flex-col tracking-wider text-base font-bold font-kanit text-[#e1dada]">
                        <span>
                            Therefore, I stand out as a fullstack developer 
                        </span>
                        <span>
                            looking to be part of a team
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute right-16 bottom-24">
                <Stacks/>
            </div>
        </section>
    )
}