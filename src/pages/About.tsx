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
                            Driven and self-taught developer with a background in electronics 
                        </span>
                        <span>
                            and a strong focus on backend tooling, automation, and infrastructure.
                        </span>
                    </p>
                    <p className="mt-12 flex flex-col tracking-wider text-base font-semibold font-inter text-[#e1dada]">
                        <span>
                            I build practical solutions, from custom CLI tools to desktop apps for managing
                        </span>
                        <span>
                            cloud infrastructure combining creativity with solid technical execution.
                        </span>
                        <span className="mt-5">
                            I value clean code, autonomy, and continuous learning, and I'm looking to contribute
                        </span>
                        <span>
                            to a team where I can solve real-world problems and grow as a software engineer.
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